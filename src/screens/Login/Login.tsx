import {Image, Pressable, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './Login.styles';
import {CustomButton, CustomModal, InputField} from '../../SharedComponents';
import {useNavigation, StackActions} from '@react-navigation/native';
import {checkValidation} from './LoginUtiles';
import TouchID from 'react-native-touch-id';
import {FrostContext} from '../../store/frost-context';

export default function Login() {
  const {setISAuth} = useContext(FrostContext);
  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };
  const handleBiometric = () => {
    TouchID.authenticate('Authentication')
      .then((success: any) => {
        console.log(success);
        setISAuth(true);
        // Success code
      })
      .catch((error: any) => {
        // Failure code
        console.log(error);
      });
  };

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const navigation = useNavigation();
  function onChangehandler(key: string, value: string) {
    setLoginData({...loginData, [key]: value});
  }

  function loginHandler(e: any) {
    if (checkValidation(loginData, setModalContent, setShowModal)) {
      console.log('verified');
    }

    console.log('loggedf', e);
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <InputField
        labelText="Email"
        onChange={onChangehandler}
        value={loginData.email}
        name="email"
      />
      <InputField
        labelText="Password"
        onChange={onChangehandler}
        value={loginData.password}
        name="password"
        password
      />

      <CustomButton
        style={{marginTop: 40}}
        buttonTitle="Login"
        onPress={loginHandler}
        buttonStyle={'primary-outline'}
      />
      <View style={styles.imageContainer}>
        <Pressable onPress={() => handleBiometric()}>
          <Image
            source={require('../../Utiles/images/fingerprint.png')}
            style={styles.image}
          />
        </Pressable>
      </View>
      <View style={styles.screenLinkContainer}>
        <Text
          style={styles.screenLink}
          onPress={() => navigation.dispatch(StackActions.replace('Signup'))}>
          Create New User
        </Text>
      </View>

      <CustomModal
        content={modalContent}
        shown={showModal}
        cancelButtonFunction={() => setShowModal(false)}
      />
    </View>
  );
}

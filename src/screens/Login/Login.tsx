import {Image, Pressable, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './Login.styles';
import {CustomButton, CustomModal, InputField} from '../../SharedComponents';
import {useNavigation, StackActions} from '@react-navigation/native';
import {getCreds, loginHandler} from './LoginUtiles';
import TouchID from 'react-native-touch-id';
import {FrostContext} from '../../store/frost-context';

export default function Login() {
  const {setISAuth} = useContext(FrostContext);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [isLogging, setIsLogging] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const navigation = useNavigation();
  const handleBiometric = () => {
    TouchID.authenticate('Authentication')
      .then((success: any) => {
        getCreds(
          setLoginData,
          setModalContent,
          setShowModal,
          setISAuth,
          setIsLogging,
        );

        console.log(success);
      })
      .catch((error: any) => {
        // Failure code
        console.log(error);
      });
  };
  function onChangehandler(key: string, value: string) {
    setLoginData({...loginData, [key]: value});
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
        loading={isLogging}
        style={{marginTop: 40}}
        buttonTitle="Login"
        onPress={() =>
          loginHandler(
            loginData,
            setModalContent,
            setShowModal,
            setISAuth,
            setIsLogging,
          )
        }
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

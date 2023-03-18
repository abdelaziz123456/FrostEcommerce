import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Login.styles';
import {CustomButton, CustomModal, InputField} from '../../SharedComponents';
import {useNavigation, StackActions} from '@react-navigation/native';
import {checkValidation} from './LoginUtiles';

export default function Login() {
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
    checkValidation(loginData, setModalContent, setShowModal);
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

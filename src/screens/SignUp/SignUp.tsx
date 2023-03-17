import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './SignUp.styles';
import {CustomButton, CustomModal, InputField} from '../../SharedComponents';
import {useNavigation, StackActions} from '@react-navigation/native';
import {checkValidation} from './SignUpUtils';

export default function SignUp() {
  const [signUpData, setsignUpData] = useState({
    email: '',
    password: '',
    confirmEmail: '',
    confirmPassword: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('Are You Sure?');
  const navigation = useNavigation();
  function onChangehandler(key: string, value: string) {
    setsignUpData({...signUpData, [key]: value});
  }

  function signUpHandler() {
    console.log(checkValidation(signUpData));
  }

  // function confirmModalHandler() {
  //   console.log('confirmed');
  // }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <InputField
        labelText="Email"
        onChange={onChangehandler}
        value={signUpData.email}
        name="email"
      />
      <InputField
        labelText="Confirm Email"
        onChange={onChangehandler}
        value={signUpData.confirmEmail}
        name="confirmEmail"
      />
      <InputField
        labelText="Password"
        onChange={onChangehandler}
        value={signUpData.password}
        name="password"
        password
      />
      <InputField
        labelText="Confirm Password"
        onChange={onChangehandler}
        value={signUpData.confirmPassword}
        name="confirmPassword"
        password
      />

      <CustomButton
        style={{marginTop: 40}}
        buttonTitle="Sign Up"
        onPress={signUpHandler}
        buttonStyle={'primary-outline'}
      />
      <View style={styles.screenLinkContainer}>
        <Text
          style={styles.screenLink}
          onPress={() => navigation.dispatch(StackActions.replace('login'))}>
          Log in instead
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

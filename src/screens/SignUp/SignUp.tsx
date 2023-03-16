import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './SignUp.styles';
import {CustomButton, InputField} from '../../SharedComponents';
import {useNavigation, StackActions} from '@react-navigation/native';

export default function SignUp() {
  const [signUpData, setsignUpData] = useState({
    email: '',
    password: '',
    confirmEmail: '',
    confirmPassword: '',
  });

  const navigation = useNavigation();
  function onChangehandler(key: string, value: string) {
    setsignUpData({...signUpData, [key]: value});
    console.log({signUpData});
  }

  function signUpHandler(e: any) {
    console.log('signed up ', e);
  }
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
        value={signUpData.email}
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
        value={signUpData.password}
        name="confirmPassword"
        password
      />

      <CustomButton
        style={{marginTop: 40}}
        buttonTitle="Sign Up"
        onPress={signUpHandler}
        buttonStyle={'primary'}
      />
      <View style={styles.screenLinkContainer}>
        <Text
          style={styles.screenLink}
          onPress={() => navigation.dispatch(StackActions.replace('login'))}>
          Log in instead
        </Text>
      </View>
    </View>
  );
}

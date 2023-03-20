import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

let loginUrl =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
let signUpUrl =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
let key = 'AIzaSyAtBA6-yaLsjMjhb101vO-WC6yyOvtecSQ';

export const signUp = async (email, password) => {
  const response = await axios.post(`${signUpUrl}${key}`, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  return response;
};

export const logIn = async (email, password) => {
  const response = await axios.post(`${loginUrl}${key}`, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  await AsyncStorage.setItem('token', response?.data?.idToken);
  return response;
};

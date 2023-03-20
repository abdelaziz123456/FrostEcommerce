import {logIn} from '../../Utiles/https';

import * as Keychain from 'react-native-keychain';
export function checkValidation(
  loginData: {
    email: string;
    password: String;
  },
  setModalContent: Function,
  setShowModal: Function,
) {
  if (!loginData.email || !loginData.password) {
    setModalContent('you should enter full data');
    setShowModal(true);
    return false;
  }

  if (!loginData.email.includes('@')) {
    setModalContent("Email isn't correct");
    setShowModal(true);
    return false;
  }
  if (loginData.password?.length < 8) {
    setModalContent('Password should be more than 8 chars');
    setShowModal(true);
    return false;
  }

  return true;
}

export async function storeCreds(email: any, password: any) {
  try {
    const Email = email;
    const Password = password;
    await Keychain.setGenericPassword(Email, Password);
  } catch (err) {
    console.log(err);
  }
}

export async function clearCreds() {
  try {
    await Keychain.resetGenericPassword();
  } catch (err) {
    console.log(err);
  }
}

export async function getCreds(
  setLoginData: Function,
  setModalMessage: Function,
  setShowModal: Function,
  setIsAuth: Function,
  setIsLogging: Function,
) {
  try {
    let creds: any | {username: string; password: string} =
      await Keychain.getGenericPassword();
    if (creds?.username && creds?.password) {
      setLoginData({password: creds?.password, email: creds?.username});

      loginHandler(
        {password: creds?.password, email: creds?.username},
        setModalMessage,
        setShowModal,
        setIsAuth,
        setIsLogging,
      );
    } else {
      setModalMessage(
        'there is no saved data , please Login first using  email and password',
      );
      setShowModal(true);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function loginHandler(
  enteredData: {
    email: string;
    password: String;
  },
  setModalMessage: Function,
  setShowModal: Function,
  setIsAuth: Function,
  setIsLogging: Function,
) {
  const isValide = checkValidation(enteredData, setModalMessage, setShowModal);
  if (isValide) {
    setIsLogging(true);
    try {
      const response = await logIn(enteredData.email, enteredData.password);

      if (response.status === 200) {
        setIsAuth(true);
        clearCreds();
        storeCreds(enteredData.email, enteredData.password);
        //  setToken(response.data.idToken);
      }
    } catch (err: any) {
      if (
        err?.response?.data?.error?.message === 'EMAIL_NOT_FOUND' ||
        err?.response?.data?.error?.message === 'INVALID_EMAIL'
      ) {
        setModalMessage("email doesn't exists");
      } else if (err?.response?.data?.error?.message === 'INVALID_PASSWORD') {
        setModalMessage('password is incorrect , please try again');
      } else {
        setModalMessage('something went wrong');
      }

      setShowModal(true);

      setIsAuth(false);
    }
    setIsLogging(false);
  }
}

export function checkValidation(
  signUpData: {
    email: string;
    password: String;
    confirmPassword: String;
    confirmEmail: String;
  },
  setModalContent: Function,
  setShowModal: Function,
) {
  if (
    !signUpData.confirmEmail ||
    !signUpData.confirmPassword ||
    !signUpData.email ||
    !signUpData.password
  ) {
    setModalContent('you should enter full data');
    setShowModal(true);
    return false;
  }

  if (!signUpData.email.includes('@')) {
    setModalContent("Email isn't correct");
    setShowModal(true);
    return false;
  }
  if (signUpData.password?.length < 8) {
    setModalContent('Password should be more than 8 chars');
    setShowModal(true);
    return false;
  }
  if (signUpData.email !== signUpData.confirmEmail) {
    setModalContent('Emails are not identical');
    setShowModal(true);
    return false;
  }
  if (signUpData.password !== signUpData.confirmPassword) {
    setModalContent('Passwords are not identical');
    setShowModal(true);
    return false;
  }

  return true;
}

export async function signUpHandler(
  signUpData: {
    email: string;
    password: String;
    confirmPassword: String;
    confirmEmail: String;
  },
  setModalContent: Function,
  setShowModal: Function,
  signUp: Function,
  setIsLoading: Function,
  setIsSigned: Function,
) {
  if (checkValidation(signUpData, setModalContent, setShowModal)) {
    console.log('start');
    setIsLoading(true);
    try {
      const response = await signUp(
        signUpData.email,
        Number(signUpData.password),
      );

      if (response.status === 200) {
        setIsSigned(true);
      }
    } catch (err: any) {
      if (err?.response?.data?.error?.message === 'INVALID_EMAIL') {
        setModalContent('Invalid Email');
        setShowModal(true);
      } else if (err?.response?.data?.error?.message === 'EMAIL_EXISTS') {
        setModalContent(
          'the email already exists , please try another or log in instead ',
        );
        setShowModal(true);
      } else {
        setModalContent(err?.response?.data?.error?.message);
        setShowModal(true);
      }

      console.log(err?.response?.data?.error?.message);
    }
    setIsLoading(false);
  }
}

export function checkValidation(signUpData, setModalContent, setShowModal) {
  for (let value in signUpData) {
    if (!signUpData[value]) {
      setModalContent('you should enter full data');
      setShowModal(true);
      return false;
    }
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

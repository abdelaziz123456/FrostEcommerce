export function checkValidation(signUpData) {
  for (let value in signUpData) {
    if (!signUpData[value]) {
      return 'you should enter full data';
    }
  }

  if (!signUpData.email.includes('@')) {
    return "Email isn't correct";
  }
  if (signUpData.password?.length < 8) {
    return 'Password should be more than 8 chars';
  }
  if (signUpData.email !== signUpData.confirmEmail) {
    return 'Emails are not identical';
  }
  if (signUpData.password !== signUpData.confirmPassword) {
    return 'Passwords are not identical';
  }
}

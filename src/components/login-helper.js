export function isPasswordValid(password) {
  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  const passwordLength = password.length;
  if (
    uppercaseRegExp.test(password) &&
    lowercaseRegExp.test(password) &&
    digitsRegExp.test(password) &&
    specialCharRegExp.test(password) &&
    passwordLength >= 8
  ) {
    return true;
  } else return false;
}
export function isUsernameValid(username) {
  return username.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

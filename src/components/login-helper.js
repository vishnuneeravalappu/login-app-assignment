const users = require("../users.json");

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
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

export function getfieldAlerts(username, password, confirmPassword) {
  const usernameAlert = username
    ? isUsernameValid(username)
      ? null
      : "Invalid username"
    : "username field can't be empty";
  const passwordAlert = password
    ? isPasswordValid(password)
      ? null
      : "Invalid password"
    : "password field can't be empty";
  const passwordConfirmAlert = password
    ? confirmPassword
      ? password === confirmPassword
        ? null
        : "Error: passwords doesn't match"
      : "This field can't be empty"
    : null;
  let route;
  if (
    isUsernameValid(username) &&
    isPasswordValid(password) &&
    password === confirmPassword
  ) {
    users.push({ username: username, password: password });
    console.log(users);
  }
  return { usernameAlert, passwordAlert, passwordConfirmAlert, route };
}

export function getLoginfieldAlerts(username, password) {
  let usernameAlert = username
    ? isUsernameValid(username)
      ? null
      : "Invalid username"
    : "username field can't be empty";
  let passwordAlert = password
    ? isPasswordValid(password)
      ? null
      : "Invalid password"
    : "password field can't be empty";
  let route;
  if (isUsernameValid(username) && isPasswordValid(password)) {
    users.filter((user) => {
      if (user.userName === username) {
        usernameAlert = null;
        if (user.password === password) {
          passwordAlert = null;
          return (route = "/home");
        } else passwordAlert = "Incorrect password";
      }
    });
  }
  return { usernameAlert, passwordAlert, route };
}

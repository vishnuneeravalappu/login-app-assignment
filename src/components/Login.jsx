import React from "react";
import { FormInput } from "./FormInput";
import { isUsernameValid, isPasswordValid } from "./login-helper.js";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  let username, password;
  const [usernameAlert, setuserNameAlert] = React.useState(null);
  const [passwordAlert, setPasswordAlert] = React.useState(null);

  // const onuserNameblur = () => {
  //   username = document.getElementById("userName").value;
  //   if (username && !isUsernameValid(username))
  //     setuserNameAlert("Username is invalid");
  //   else setuserNameAlert(null);
  // };

  // const onPasswordFieldBlur = () => {
  //   password = document.getElementById("password").value;
  //   if (password && !isPasswordValid(password)) {
  //     setPasswordAlert("Password is invalid");
  //   } else {
  //     setPasswordAlert(null);
  //   }
  // };

  const onSubmitLogin = () => {
    username = document.getElementById("userName").value;
    password = document.getElementById("password").value;
    if (!username) setuserNameAlert("Username can't be empty");
    if (!password) setPasswordAlert("Password can't be empty");
    else if (isUsernameValid(username) && isPasswordValid(password))
      return navigate("/home");
    else {
      setuserNameAlert("Username is invalid");
      setPasswordAlert("Password is invalid");
    }
  };
  return (
    <>
      <h3 className="headingLogin">Please Login to continue</h3>
      <FormInput
        label={"Username"}
        type={"email"}
        id={"userName"}
        alert={usernameAlert}
        // onBlur={onuserNameblur}
      />
      <FormInput
        label={"Password"}
        type={"password"}
        id={"password"}
        alert={passwordAlert}
        // onBlur={onPasswordFieldBlur}
      />
      <a className="forgotPasswordLink" href="/Reset password">
        Forgot password?
      </a>
      <button className="formButton" onClick={onSubmitLogin}>
        continue
      </button>
      <div className="signUp">
        <p>Don't have an accout?</p>
        <a href="/signup">SignUp</a>
      </div>
    </>
  );
}
export const LoginSuccess = () => {
  return <p className="LoggedInText">Logged-in successfully</p>;
};

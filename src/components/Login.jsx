import React from "react";
import { FormInput } from "./FormInput";
import { getLoginfieldAlerts } from "./login-helper.js";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  let username, password;
  const [usernameAlert, setuserNameAlert] = React.useState(null);
  const [passwordAlert, setPasswordAlert] = React.useState(null);

  const onSubmitLogin = () => {
    username = document.getElementById("userName").value;
    password = document.getElementById("password").value;
    const results = getLoginfieldAlerts(username, password);
    if (results.route) {
      return navigate(results.route);
    } else {
      setuserNameAlert(results.usernameAlert);
      setPasswordAlert(results.passwordAlert);
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
      />
      <FormInput
        label={"Password"}
        type={"password"}
        id={"password"}
        alert={passwordAlert}
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

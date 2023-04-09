import React from "react";
import { FormInput } from "./FormInput";
import { getfieldAlerts } from "./login-helper.js";
import { useNavigate } from "react-router-dom";

export function PasswordReset() {
  const navigate = useNavigate();
  let username, password, confirmPassword;
  const [usernameAlert, setuserNameAlert] = React.useState(null);
  const [passwordAlert, setPasswordAlert] = React.useState(null);
  const [passwordConfirmAlert, setPasswordConfirmAlert] = React.useState(null);

  const onSubmitReset = () => {
    username = document.getElementById("userName").value;
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirmPassword").value;
    username = document.getElementById("userName").value;
    password = document.getElementById("password").value;
    const results = getfieldAlerts(username, password, confirmPassword);
    if (results.route) {
      return navigate(results.route);
    } else {
      setuserNameAlert(results.usernameAlert);
      setPasswordAlert(results.passwordAlert);
      setPasswordConfirmAlert(results.passwordConfirmAlert);
    }
  };
  return (
    <>
      <h3 className="headingLogin">Reset Password</h3>
      <FormInput
        label={"Username"}
        type={"email"}
        id={"userName"}
        alert={usernameAlert}
      />
      <FormInput
        label={"New Password"}
        type={"password"}
        id={"password"}
        alert={passwordAlert}
      />
      <FormInput
        label={"Confirm Password"}
        type={"Password"}
        id={"confirmPassword"}
        aler={passwordConfirmAlert}
      />
      <button className="formButton" onClick={onSubmitReset}>
        Submit
      </button>
      <div className="signUp">
        <p>Don't have an accout?</p>
        <a href="/signup">Signup</a>
      </div>
    </>
  );
}

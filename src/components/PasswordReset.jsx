import React from "react";
import { FormInput } from "./FormInput";

export function PasswordReset() {
  const [userNameAlert, setuserNameAlert] = React.useState(null);
  const onblur = () => {
    const userName = document.getElementById("userName").value;
    if (!userName) setuserNameAlert(null);
    else if (!userName.includes("@")) {
      setuserNameAlert("Username is invalid");
    } else {
      setuserNameAlert(null);
    }
  };
  return (
    <>
      <h3 className="headingLogin">Reset Password</h3>
      <FormInput
        label={"Username"}
        type={"email"}
        id={"userName"}
        alert={userNameAlert}
        onBlur={onblur}
      />
      <FormInput label={"New Password"} type={"password"} id={"password"} />
      <FormInput
        label={"Confirm Password"}
        type={"Password"}
        id={"confirmPassword"}
      />
      <button className="formButton">Submit</button>
      <div className="signUp">
        <p>Don't have an accout?</p>
        <a href="/signup">Signup</a>
      </div>
    </>
  );
}

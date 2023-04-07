import React from "react";
import { FormInput } from "./FormInput";

export function SignUp() {
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
      <h3 className="headingLogin">Sign up here</h3>
      <FormInput
        label={"Username"}
        type={"email"}
        id={"userName"}
        alert={userNameAlert}
        onBlur={onblur}
      />
      <FormInput label={"Password"} type={"password"} id={"password"} />
      <FormInput
        label={"Confirm Password"}
        type={"Password"}
        id={"confirmPassword"}
      />
      <button className="formButton">continue</button>
      <div className="signUp">
        <p>Already have an accout?</p>
        <a href="/">Login</a>
      </div>
    </>
  );
}

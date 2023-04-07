import * as React from "react";
import "./App.css";
import { Login, LoginSuccess } from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/Signup";
import { PasswordReset } from "./components/PasswordReset";

function App() {
  return (
    <div className="App">
      <div className="loginForm">
        <img
          src={require("./images/logo.png")}
          alt="Paperflite"
          width={"100px"}
        />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<LoginSuccess />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/Reset password" element={<PasswordReset />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

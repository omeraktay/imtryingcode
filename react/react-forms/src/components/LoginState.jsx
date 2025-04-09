import { useState } from "react";
import Input from "./Input";
import useInput from "../hooks/useInputs";

export default function Login() {
  const {value: emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, isEdited: isEmailEditted} = useInput("");
  const {value: passwordValue, handleInputChange: handlePasswordChange, handleInputBlur: handlePasswordBlur, isEdited: isPasswordEditted} = useInput("");
  const emailIsInvalid = isEmailEditted && !emailValue.includes("@");
  const passwordIsInvalid = isPasswordEditted && passwordValue.length <= 5;

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your email and password!</p>
      </div>
      <Input type="email" name="email" labelText="Email" id="email" error={emailIsInvalid && "Enter valid email"} value={emailValue} onChange={handleEmailChange} onBlur={handleEmailBlur}/>
      <Input type="password" name="password" labelText="Password" id="password" error={passwordIsInvalid && "Password must be at least 6 character"} value={passwordValue} onChange={handlePasswordChange} onBlur={handlePasswordBlur}/>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}

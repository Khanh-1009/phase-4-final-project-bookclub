import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errorsList, setErrorsList] = useState([])

  function handleSubmit(e){

  }

  return (
    <div className="signup-form">
      <form>
        <label>Username</label>
        <input
          type="text"
          id="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <label>Password Confirmation</label>
        <input
          type="password"
          id="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br/>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
import React, { useContext, useState } from "react";
import { UserContext } from "../user";

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState([])
  const {login} = useContext(UserContext)

  function handleSubmit(e){
    e.preventDefault()
    fetch('/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then((res) => {
      console.log(res)
      if (res.ok){
        console.log("success")
        res.json().then((user) => login(user))
      } else {
        res.json().then((err) => setError(err.errors))
      }
    })
  }

  return (
    <div className="signup-login-form">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <label>Username</label>
        <br/>
        <input 
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label>Password</label>
        <br/>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button>Log In</button>

          <ul style={{color: "red"}}>
            {error.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        
      </form>
    </div>
  );
}

export default Login;
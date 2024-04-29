import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
      setLoggedIn(true);
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          {message && <p>{message}</p>}
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Welcome, user!</p>
        </div>
      )}
    </div>
  );
};

export default Login;

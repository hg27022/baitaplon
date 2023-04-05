import React, { useState, useEffect } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import {
  checkUserLogin
} from "./UserService";

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    username: username, password: password
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkUserLogin(user);
    console.log(user);
    // const token = await getUser({
    //   username,
    //   password,
    // });
    // setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };

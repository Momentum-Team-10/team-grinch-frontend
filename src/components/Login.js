import { useState } from 'react';
import { requestLogin } from '../ajax';
import {Link, Navigate} from 'react-router-dom'
import axios from 'axios'

const Login = ({ isLoggedIn, setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://questbox-app.herokuapp.com/auth/token/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.auth_token) {
          setAuth(email, res.data.auth_token)
        }
      })
      .catch(error) => setErrors(error))
    }

      } setSomeState(data))
    // here is my FAKE REQUEST PLACEHOLDER
    requestLogin(email, password)
      .then((data) => {
        // if we have a response and it includes the auth_token key
        if (data && data.auth_token) {
          // update the parent's state to include auth token
          setAuth(email, data.auth_token);
        }
      })
      .catch((error) => setErrors(error.message));
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* conditionally show error message */}
      {errors && <div>{errors}</div>}
      <div className="login-form">
        <div className="login">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Log In</button>
        </div>
      </div>
    </form>
  );
};

export default Login;

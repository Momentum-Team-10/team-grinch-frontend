import { useState } from 'react'
import requestLogin from './requestLogin'


const Login = ({ isLoggedIn, setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault()
    // axios.post(someUrl).then(data=> setSomeState(data))
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
      <div>
        <label htmlFor="email">
        Email
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">
        Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div>
        <button type="submit">Log In</button>
      </div>

    </form>
  )
}

export default Login

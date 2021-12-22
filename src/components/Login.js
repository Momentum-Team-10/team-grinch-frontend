import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

export const Login = ({ isLoggedIn, setAuth }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
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
      .catch((error) => setErrors(error))
    }

  const handleChange = (inputType, event) => {
      if (inputType === 'email') {
        setEmail(event.target.value)
      }
      if (inputType === 'password') {
        setPassword(event.target.value)
      }
    }

    if (isLoggedIn) {
      return <Navigate to="/" />
    }
  
    return (
      <div>{errors && ( </div>
        <div> {errors.message}</div>
    )}
    <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            placeholder="email@domain.com"
            value={email}
            onChange={(event) => handleChange('email', event)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => handleChange('password', event)}
          />
          <button type="submit">
          Log In
          </button>
    </form>
  )
}

export default Login;

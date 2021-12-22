import Login from './components/Login';
import { useState } from 'react';
import './App.css';
import { QuestionList } from './components/QuestionList';


export default function App() {
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  
  function setAuth(email, token) {
    setEmail(email)
    setToken(token)
  }

  const isLoggedIn = email && token

  if (!isLoggedIn) {
    return <Login setAuth={setAuth} isLoggedIn={isLoggedIn} />
  }
  return <QuestionList />
}
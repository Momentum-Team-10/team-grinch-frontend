import Login from './components/Login'
import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import { QuestionList } from './components/QuestionList'
// import NavBar from '.components/NavBar';

let questUrl = 'https://questbox-app.herokuapp.com/api/questions'

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

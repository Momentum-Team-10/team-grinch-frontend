import Login from './components/Login';
import { useState } from 'react';
import questbox from'./questbox.png';
import './App.css';
import { QuestionList } from './components/QuestionList';
import { QuestionForm } from './components/QuestionForm';
// import NavBar from '.components/NavBar';

export default function App() {
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  
  function setAuth(email, token) {
    setEmail(email)
    setToken(token)
  }

  const isLoggedIn = email && token

  
  return (
  <>
    <img className="logo" src={questbox} alt="Questbox" />
    {isLoggedIn ? (
        <>
        {/* once a user has logged in  */}
        <QuestionForm />
        <QuestionList />

        </>
      ) : (
        <Login setAuth={setAuth} isLoggedIn={isLoggedIn} />
      )}

    </>
  )
}




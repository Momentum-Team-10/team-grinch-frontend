import { isElementOfType } from 'react-dom/cjs/react-dom-test-utils.production.min'
import InputField  from './components/Forms';
import Login from './components/Loginforms';
import useLocalStorageState from 'use-local-storage-state';
import questbox from'./questbox.png';
import './App.css';



export default function App() {
  const [email, setEmail] = useLocalStorageState('myAppEmail', '')
  const [token, setToken] = useLocalStorageState('myAppToken', '')
  
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
          <h1> You are now logged in! </h1>
          <button type="button" onClick={() => setAuth(null, null)}>
            Log Out
          </button>
        </>
      ) : (
        <Login setAuth={setAuth} isLoggedIn={isLoggedIn} />
      )}

    </>
  )
}




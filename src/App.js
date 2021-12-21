import Login from './components/Login';
import { useState, useEffect} from 'react';
import axios from 'axios'
import questbox from'./questbox.png';
import './App.css';
import { QuestionCard } from './components/QuestionCard';
// import NavBar from '.components/NavBar';

let questUrl = "https://questbox-app.herokuapp.com/api/questions"

export default function App() {
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  let [QuestionList, setQuestionList] = useState(null)
  
  useEffect(() => {
    axios
    .get(questUrl)
    .then((response ) => {
        setQuestionList(response.data)
    })
}, []
)
  
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
          <QuestionCard pk={QuestionList.pk} title={QuestionList.title} body={QuestionList.body} author={QuestionList.author} tags={QuestionList.tags} favorited_by={QuestionList.favorited_by}>
          </QuestionCard>  
        </>
      ) : (
        <Login setAuth={setAuth} isLoggedIn={isLoggedIn} />
      )}

    </>
  )
}




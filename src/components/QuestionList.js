import { useState, useEffect } from 'react'
import { QuestionCard } from './QuestionCard'
import axios from 'axios'
import questbox from '../questbox.png'

let questUrl = 'https://questbox-app.herokuapp.com/api/questions'




export const QuestionList = () => {
    const [questionList, setQuestionList] = useState(null)


    useEffect( () => {
        axios.get(questUrl).then((response)=> {
            setQuestionList(response.data)
        })
    }, [])
        
    return (
        <>
            <img className="logo" src={questbox} alt="Questbox" />
            {questionList &&
                questionList.map((question) => {
                    return (
                        <QuestionCard
                            pk={question.pk}
                            title={question.title}
                            body={question.body}
                            author={question.author}
                            tags={question.tags}
                            favorited_by={question.favorited_by}
                        />
                    )
                })}
            </>
    )
}

import { useState, useEffect } from "react";
import moment from 'moment';
import { QuestionCard } from "./QuestionCard";
import axios from "axios";

export const QuestionList = () => {
    const [questions, setQuestions] = useState(null)


    useEffect( () => {
        axios
        .get(`https://questbox-app.herokuapp.com/api/questions`)
        .then((response) => {
            console.log (response.data)
        setQuestions(response.data)
        })
        }, []
        ) 
        return (
            <>
            <QuestionCard title={questions.title} author={questions.author} body={questions.body} />

            </>
        )
    }

    
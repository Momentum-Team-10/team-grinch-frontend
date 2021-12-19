import { useState } from "react";
import moment from 'moment';
import { QuestionCard } from "./QuestionCard";

const questions = [
    {
        title: 'Detangling 4C Hair',
        author: 'CarolsDaughter',
        description: 'Please help! I went swimming in the ocean and now I cannot detangle my hair.',
        tags: ['4C', 'Detagle', 'Nappy', 'Edges'],
        created_at: '2021-12-19T15:01:39-05:00',
        favorited_by: ['CarolsDaughter', 'Poppincurls88','SoulGlo'],
    },
    {
        title: 'Detangling 4C Hair',
        author: 'CarolsDaughter',
        description: 'Please help! I went swimming in the ocean and now I cannot detangle my hair.',
        tags: ['4C', 'Detagle', 'Nappy', 'Edges'],
        created_at: '2021-12-19T15:01:39-05:00',
        favorited_by: ['CarolsDaughter', 'Poppincurls88','SoulGlo'],
    },
    {
        title: 'Detangling 4C Hair',
        author: 'CarolsDaughter',
        description: 'Please help! I went swimming in the ocean and now I cannot detangle my hair.',
        tags: ['4C', 'Detagle', 'Nappy', 'Edges'],
        created_at: '2021-12-19T15:01:39-05:00',
        favorited_by: ['CarolsDaughter', 'Poppincurls88','SoulGlo'],
    },
    {
        title: 'Detangling 4C Hair',
        author: 'CarolsDaughter',
        description: 'Please help! I went swimming in the ocean and now I cannot detangle my hair.',
        tags: ['4C', 'Detagle', 'Nappy', 'Edges'],
        created_at: '2021-12-19T15:01:39-05:00',
        favorited_by: ['CarolsDaughter', 'Poppincurls88','SoulGlo'],
    },

]
export const QuestionList = () => {
    // const [questions, setQuestions] = useState([])
    return (
        questions.map(question => {
            return < QuestionCard question={question} />
        })
    )
}
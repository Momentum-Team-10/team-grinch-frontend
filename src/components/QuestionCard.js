import React from 'react'
import moment from 'moment';

export const QuestionCard = ({ question }) => {
    return (
        <div>
            <h3>{question.title}</h3>
            <p>author: {question.author}</p>
            <p>{question.description}</p>
            <p>tags: {question.tags.map(tag => <p>{tag}</p>)}</p>
            <p>published: {moment(question.created_at).format('DD/MM/YYYY')}</p>
            <p>{question.favorited_by.length} likes </p>
        </div>
    )

}

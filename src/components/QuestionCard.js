import React from 'react'



export const QuestionCard = (props) => {
    let { title, body, author, tags, favorited_by } = props
    return (
        <div>
            <h3>{title}</h3>
            <p>author: {author}</p>
            <p>{body}</p>
            <p>tags: {tags}</p>
            <p>{favorited_by} </p>
        </div>
    )
    }

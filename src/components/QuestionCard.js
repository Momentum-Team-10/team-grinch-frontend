import React from 'react'
import moment from 'moment';

export const QuestionCard = (props) => {
    let { title, author, body } = props
    return (
        <div>
            <h3>{title}</h3>
            <p>author: {author}</p>
            <p>{body}</p>
            {/* <p>tags: {tags.map(tag => <p>{tag}</p>)}</p>
            <p>published: {moment(created_at).format('DD/MM/YYYY')}</p>
            <p>{favorited_by.length} likes </p> */}
        </div>
    )

}

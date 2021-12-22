import {useState} from 'react'
import axios from 'axios'

export const QuestionForm = ({token, setSubmitted }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://questbox-app.herokuapp.com/api/questions',
            {
                title: title,
                body: body,
                tags: tags
    
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `token ${token}`
                }
            }
            ).then(res => {
            setSubmitted(true)
            setTitle('')
            setBody('')
            setTags('')
            return res
        })
    }

    const handleChange = (inputType, event) => {
        if (inputType === 'title') {
            setTitle(event.target.value)
        }
        if (inputType === 'body') {
            setBody(event.target.value)
        }
        if (inputType === 'tags') {
            setTags(event.target.value)
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
            type='text'
            placeholder='Add Title'
            value={title}
            onChange={(e) => handleChange('title',e)}
            />
            <label>Description:</label>
            <input
            type='text'
            placeholer='Add a detailed description'
            value={body}
            onChange={(e) => handleChange('body',e)}
            />
            <label>Tags:</label>
            <input
            type='text'
            placeholer='Add Tags'
            value={tags}
            onChange={(e) => handleChange('tags',e)}
            />
            <button>Submit</button>

        </form>
    )
}
import {useState} from 'react'
import axios from 'axios'

export const QuestionForm = ({token, setSubmitted }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://questbox-app.herokuapp.com/api/questions'),
            {
                title: title,
                body: body,
                tags: tags,
    
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
            placeholder='Question Header'
            value={title}
            onChange={(e) => handleChange('title',e)}
            />
        </form>
    )

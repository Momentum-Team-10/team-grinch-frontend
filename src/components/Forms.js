import { useState } from 'react'

// Usually we want to put the user input into our component's state
// This is an example of a _controlled_ component
export const InputField = () => {
    const [text, setText] = useState('')
    const handleChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <input type="text" value={text} onChange={handleChange} />
            <div>
                <p>{text}</p>
            </div>
        </>
    )
}


import fillerQuesitons from './FillerQuestions.js';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';



export let questionView = ({token}) => {
    let {questionId} = useParams()
    let [questionObj, setQuestionObj] = useState(null)

useEffect(() => {
    axios
        .get(InsertBackendConnectHere${questionId}, {
            headers: {
                Authorization: `token ${token}`,
            },
        })
        .then((res) => {
            setQuestionObj(res.data)
        })
}), [token]

return (
<>
{questionObj ? (
    <div>
        <h3>
            {questionObj.title}
        </h3>
        <h5>
            {questionObj.author}
        </h5>
        <p>
            {questionObj.quesiton}
        </p>
        <form>
            <label>
                Answer:
                <input type="textarea" name="answer" />
            </label>
            <input type="submit" value="submit" />
        </form>
    </div>
) : (
    <div>
        <h1>Question Not Found</h1>
    </div>
)}
</>
)
}

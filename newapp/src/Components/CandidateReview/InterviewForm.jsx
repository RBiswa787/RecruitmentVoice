import React, {useState} from 'react'
import Decision from './Decision'
import { InterviewFormStyles } from './InterviewFormStyles'

function InterviewForm (){
    const [inputField , setInputField] = useState({
        To:'',
        Subject:'',
        Date:'',
        Time:'',
        Platform:'',
    })

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    const submitButton = () =>{
        alert('Sent')
    }
    return (
        <div>
            <InterviewFormStyles>
                <div className="form">
                <label>Name: </label>
                <input 
                id="smalltext"
                type="text" 
                name="To" 
                onChange={inputsHandler}  
                value={inputField.To}/>
                <br />
                <br />

                <label>Subject: </label>
                <input 
                id="smalltext"
                type="text" 
                name="subject" 
                onChange={inputsHandler}  
                value={inputField.Subject}/>
                <br />
                <br />

                <label>Date: </label>
                <input
                id="smalltext"
                name="Date" 
                onChange={inputsHandler}  
                value={inputField.Date}/>
                <br />
                <br />

                <label>Time: </label>
                <input
                id="smalltext"
                name="Time" 
                onChange={inputsHandler}  
                value={inputField.Time}/>
                <br />
                <br />

                <label>Platform: </label>
                <input
                id="smalltext"
                name="Platform" 
                onChange={inputsHandler}  
                value={inputField.Platform}/>
                <br />
                <br />

                <button onClick={submitButton}>Send</button>  
                <br />
                <br />
                </div>
            </InterviewFormStyles>
            <Decision />
        </div>
    )
}

export default InterviewForm

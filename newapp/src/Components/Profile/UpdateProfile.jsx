import React, {useState} from 'react'
import { UpdateProfileStyles } from './UpdateProfileStyles'

function UpdateProfile (){
    const [inputField , setInputField] = useState({
        Name:'',
        Organization:'',
        Email:'',
        Contact:'',
        Description:''
    })

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    const submitButton = () =>{
        alert(inputField.Email)
    }

     
    return (
        <div>
            <UpdateProfileStyles>
                <h3>Edit</h3>
                <hr width="530px"/>
                <br />

                <label>Name: </label>
                <input 
                id="smalltext"
                type="text" 
                name="Name" 
                onChange={inputsHandler}  
                value={inputField.Name}/>
                <br />

                <label>Organization: </label>
                <input 
                id="smalltext"
                type="text" 
                name="Organization" 
                onChange={inputsHandler}  
                value={inputField.Organization}/>
                <br />

                <label>Contact: </label>
                <input 
                id="smalltext"
                type="message" 
                name="Contact" 
                onChange={inputsHandler}  
                value={inputField.Contact}/>
                <br />

                <label>Description: </label>
                <textarea
                class="Desc"
                name="Description" 
                onChange={inputsHandler}  
                value={inputField.Description}/>

                <br />

                <button onClick={submitButton}>Update</button>  

            </UpdateProfileStyles>
        </div>
    )
}

export default UpdateProfile

import React, {useState} from 'react';
import { SignUpStyling } from './SignUpStyling'
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../context/FirebaseContext';
import { useContext } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const {firebase} = useContext(FirebaseContext)

  const [email,setEmail] = useState("something@email.com");
  const [password,setPassword] = useState("");
 const history = useHistory();
  const newUser = () => history.push('/choice');
const onSubmit = () => {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>alert('signed up!'))
    .then(history.push('/choice'))
    .catch(() => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then(()=>alert('signed in!'))
      .catch(()=> alert('invalid password'));
    });
  }


    return (
        <div>
            <SignUpStyling >
            <h2>Sign In/Sign Up </h2>
          <label>Email</label>
          <input 
            type = "email"
            value = {email}
            onChange ={(event)=>setEmail(event.target.value)} 
          />

            <br/>
            <label>Password</label>
            <input 
            type = "password"
            value = {password}
            onChange ={(event)=>setPassword(event.target.value)} 
            />

            <br/>

            <button type = "submit" onClick = {onSubmit}>Submit</button>  
            <br/>
            </SignUpStyling>
        </div>
    )
}

export default SignUp


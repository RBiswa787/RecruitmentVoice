import React from 'react'
import {RBStyling} from './rbStyling';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection,add } from '@firebase/firestore';
import {getAuth} from 'firebase/auth';

const RecruitButton = () => {
    const history = useHistory();
    const onSubmit = () => history.push('/recr_prof');
    const auth = getAuth();
    //let userCollectionRef 
    //= collection(db,'GlobalUsers');
    //let unsubscribe;
    /*const createThing = document.getElementById("createThing");
    auth.onAuthStateChanged(user => {
        if(user){
            userCollectionRef = collection(db,'globalUsers')
            createThing.onClick = () => {
                userCollectionRef.add({
                    uid : user.uid,
                    recruiter : true
                }
                )
            }
        }
    })*/

    return (
        <div>
            <RBStyling>
            <button id = "createThing" onClick = {onSubmit}>Recruiter</button>
            </RBStyling>
        </div>
    )
}

export default RecruitButton

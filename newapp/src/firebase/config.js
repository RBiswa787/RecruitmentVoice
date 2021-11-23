import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALB2ZlFnxZ5Dxr-athIbRmeuw7SarWMXQ",
  authDomain: "recruit-project-fc5cc.firebaseapp.com",
  databaseURL: "https://recruit-project-fc5cc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "recruit-project-fc5cc",
  storageBucket: "recruit-project-fc5cc.appspot.com",
  messagingSenderId: "729993580467",
  appId: "1:729993580467:web:d7f3962c5c910f0a6cc5c6"
  };

const firebase = Firebase.initializeApp(firebaseConfig);
export const db = getFirestore(firebase);

export {firebase};

  
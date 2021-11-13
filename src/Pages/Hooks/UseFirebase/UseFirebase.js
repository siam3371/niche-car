import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../Firebase/Firebase.init';
initializeAuthentication();
const UseFirebase = () => {
     /* */
    const [isloading, setIsLoading] = useState(true)
    // const [authError, setAuthError] = useState('');
     const auth = getAuth(); 

    const [user, setUser] = useState({})
    const [ setUsersLogin] = useState({})
 //  register 
    const registerUser = (email, password) => {
        setIsLoading(true) 
       return  createUserWithEmailAndPassword(auth, email, password) 
    } 
// login

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)  
}

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user)
            if(user){
                setUser(user)
            }
            else{ setUser({})
            }
        })
        setIsLoading(false) 
        return () => unsubscribe()
    },[])
    const logout = () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        }
        ) 
    }
 
  
    return { registerUser,user, logout, setUser, setIsLoading, isloading, loginUser, setUsersLogin,    } 
};

export default UseFirebase;
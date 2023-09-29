import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGooglePopup = () =>{
        setLoading(true)
        return signInWithPopup (auth, googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }
 
    // observe auth state change
    useEffect( ()=>{
     const unSubscribe = onAuthStateChanged(auth, createUser =>{
            console.log('current value', createUser)
            setUser(createUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    } ,[])

    const userInfo = {user, createUser, signInUser,logOut, loading, signInWithGooglePopup}
  
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}
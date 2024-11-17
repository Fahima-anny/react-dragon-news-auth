import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext() ;

const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true) ;

    // create new user 
    const createUser = (email, pass) => {
        setLoading(true) ;
        return createUserWithEmailAndPassword(auth, email, pass) ;
    }

// sign out current user 
const logout = () => {
    setLoading(true) ;
    return signOut(auth) ;
}

// log in an user 
const login = (email, pass) => {
           setLoading(true) ;
    return signInWithEmailAndPassword(auth, email, pass) ;
}

// update an user info 
const updateUser = ( updateInfo) => {
    return updateProfile(auth.currentUser , updateInfo) ;
}

    // console.log(loading, user)

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser) ;
        setLoading(false)
    })
    return () => {
        unSubscribe()
    }
}, [])

// console.log(loading, user)

const authInfo = {
user,
setUser, 
createUser,
logout,
login,
loading,
updateUser
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
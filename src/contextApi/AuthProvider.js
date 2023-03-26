import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
export const authContext = createContext('')
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {user, createUser, logOut}

    const userInfo = {
        name: 'Showaib bin Nasir',
        image: 'pp.png'
    }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;
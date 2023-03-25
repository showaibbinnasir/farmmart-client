import React, { createContext } from 'react';
export const authContext = createContext('')
const AuthProvider = ({children}) => {
    const userInfo = {
        name: 'Showaib bin Nasir'
    }
    return (
        <div>
            <authContext.Provider value={userInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;
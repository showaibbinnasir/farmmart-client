import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin ,setIsAdmin] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/all_users?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data[0].role === 'Admin'){
                setIsAdmin(true)
            }
        })
    },[email])
    return [isAdmin]
};

export default useAdmin;
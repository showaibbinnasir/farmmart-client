import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin ,setIsAdmin] = useState(false)
    useEffect(()=>{
        fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/all_users?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data[0]?.role === 'Admin'){
                setIsAdmin(true)
            }
        })
    },[email])
    return [isAdmin]
};

export default useAdmin;
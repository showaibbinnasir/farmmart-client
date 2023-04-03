import React, { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller ,setIsSeller] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/all_users?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data[0].role === 'Seller'){
                setIsSeller(true)
            }
        })
    },[email])
    return [isSeller]
};

export default useSeller;
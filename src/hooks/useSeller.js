import React, { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller ,setIsSeller] = useState(false)
    useEffect(()=>{
        fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/all_users?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data[0]?.role === 'Seller'){
                setIsSeller(true)
            }
        })
    },[email])
    return [isSeller]
};

export default useSeller;
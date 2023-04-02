import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contextApi/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const Profile = () => {
    const [userData, setUserData] = useState([])
    const { user } = useContext(authContext)
    useEffect(() => {
        fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/all_users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserData(data[0]))
    }, [user])
    const [isAdmin] = useAdmin(user?.email)
    console.log(isAdmin); 
    return (
        <div className='py-2'>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center pt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg'> Profile </h1>
            </div>
            <div className='flex justify-center mt-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
                    <div className='flex lg:block justify-center lg:justify-start'>
                        <img className='w-36 rounded-full' src={userData?.userImage} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center font-semibold text-3xl'>{userData?.userName}</h1>
                        <h1 className='text-center'>{userData?.userEmail}</h1>
                        <h1 className='text-center'>{userData?.phone}</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-3'>
                <div className='text-xl text-center'>
                    <h1>User ID: {userData?._id}</h1>
                    <h1>Role: {userData?.role}</h1>
                    {
                        userData?.status ?
                        <h1 className='text-green-500'>Verified</h1> :
                        <h1 className='text-red-500'>Not verified</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;
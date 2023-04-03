import React from 'react';
import { toast } from 'react-hot-toast';

const UserLists = ({ user, refetch }) => {
    const handleVerifyBtn = id => {
        const verification = true;
        const verify = { verification };
        fetch(`http://localhost:5000/all_users/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(verify)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`verified ${user.userName} successfuly`)
                refetch()
            })
    }
    return (
        <div>
            <div className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white flex flex-col lg:flex-row justify-start p-3 items-center gap-5 rounded-lg hover:shadow-xl'>
                <div>
                    <img className='w-24 rounded-full' src={user.userImage} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl'>{user.userName}</h1>
                    <h1 className='text-xl'>{user.userEmail}</h1>
                    <h1>{user.phone}</h1>
                </div>
                <div>
                    <h1 className='text-xl'>{user.gender}</h1>
                    <h1>{user.role}</h1>
                </div>
                <div>
                    {
                        user.role === 'Admin' ? '' :
                            user.status ?
                                <button className='bg-green-500 px-2 py-1 rounded-lg'>Verified</button> :
                                <button onClick={()=> handleVerifyBtn(user._id)} className='bg-orange-500 px-2 py-1 rounded-lg'>Verify</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserLists;
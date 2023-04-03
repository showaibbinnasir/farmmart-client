import React from 'react';
import { useQuery } from 'react-query';
import { useLoaderData } from 'react-router-dom';
import UserLists from './UserLists';

const ManageUsers = () => {
    // http://localhost:5000/all_users
    const { data: userData = [], refetch, isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/all_users`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Users</h1>
            </div>
            <h1 className=' text-center text-2xl text-[#3F55A5] font-semibold mt-5'>Total user : {userData.length}</h1>
            <div className='h-[80vh]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-5'>
                    {
                        userData.map((user, i) => <UserLists key={i} user={user} refetch={refetch}></UserLists>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;
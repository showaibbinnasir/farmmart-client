import React from 'react';
import { useQuery } from 'react-query';
import NeedLists from './NeedLists';

const ManageNeeds = () => {
    const { data: needData = [], refetch, isLoading } = useQuery({
        queryKey: ['needData'],
        queryFn: async () => {
            const res = await fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/all_needs`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Needs</h1>
            </div>
            <h1 className=' text-center text-2xl text-[#3F55A5] font-semibold mt-5'>Total Needs : {needData.length}</h1>
            <div className='h-[80vh]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-5'>
                    {
                        needData.map((need, i) => <NeedLists key={i} need={need} refetch={refetch}></NeedLists>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageNeeds;
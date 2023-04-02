import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contextApi/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';
import SellAnimalsLists from './SellAnimalsLists';

const SellProducts = () => {
    const { user } = useContext(authContext)
    const { data: sellNeeds = [], refetch, isLoading } = useQuery({
        queryKey: ['sellNeeds'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/all_needs?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    

    const navigate = useNavigate()
    const navigation = (id) => {
        navigate(`/needsDetails/${id}`)
    }
    

    const handleDelete = id => {
        fetch(`http://localhost:5000/all_needs/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('deleted successfully')
                refetch()
            })
    }
    
    // useEffect(() => {
    //     fetch(`http://localhost:5000/all_animals?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setSellAnimals(data))
    // }, [user])
    return (
        <div>
            <div>
                <div>
                    <div data-aos="fade-right" className='flex justify-center lg:justify-center pt-10'>
                        <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg'> Needs </h1>
                    </div>
                    <div className='grid justify-center mt-5'>
                        {
                            sellNeeds.map(x => <div className='flex items-center gap-1'>
                                <img className='w-36 rounded-full' src={x.images[0].thumbnail} alt="" />
                                <div>
                                    <h1 className='font-semibold text-xl'>{x.title}</h1>
                                    <button onClick={() => navigation(x._id)} className='btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white border-none'>See details</button>
                                    <button onClick={() => handleDelete(x._id)} className='bg-red-500 p-1 ml-2 text-white rounded-md'>Delete</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <div data-aos="fade-right" className='flex justify-center lg:justify-center pt-10'>
                    <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg'> Animals </h1>
                </div>
                <SellAnimalsLists></SellAnimalsLists>
            </div>
        </div>
    );
};

export default SellProducts;
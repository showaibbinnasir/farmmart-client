import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { authContext } from '../../contextApi/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const SellAnimalsLists = () => {
    const navigate = useNavigate()
    const {user} = useContext(authContext)
    
    const { data: sellAnimals = [], refetch, isLoading } = useQuery({
        queryKey: ['sellAnimals'],
        queryFn: async () => {
            const res = await fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/all_animalstwo?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    const navigationTwo = (id) => {
        navigate(`/product/${id}`)
    }

    const handleDeleteTwo = id => {
        fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/all_animals/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('deleted successfully')
                refetch()
            })
    }
    return (
        <div>
            <div className='grid justify-center gap-2 mt-5'>
                {
                    sellAnimals.map(x => <div className='flex items-center gap-1'>
                        <img className='w-36 rounded-full' src={x.images[0].thumbnail} alt="" />
                        <div>
                            <h1 className='font-semibold text-xl'>{x.title}</h1>
                            <button onClick={() => navigationTwo(x._id)} className='btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white border-none'>See details</button>
                            <button onClick={() => handleDeleteTwo(x._id)} className='bg-red-500 p-1 ml-2 text-white rounded-md'>Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SellAnimalsLists;
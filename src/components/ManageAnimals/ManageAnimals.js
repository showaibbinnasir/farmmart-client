import React from 'react';
import { useQuery } from 'react-query';
import AnimalLists from './AnimalLists';

const ManageAnimals = () => {
    const { data: animalData = [], refetch, isLoading } = useQuery({
        queryKey: ['animalData'],
        queryFn: async () => {
            const res = await fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/all_animals`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Needs</h1>
            </div>
            <h1 className=' text-center text-2xl text-[#3F55A5] font-semibold mt-5'>Total Animals : {animalData.length}</h1>
            <div className='h-[80vh]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-5'>
                    {
                        animalData.map((animal, i) => <AnimalLists key={i} animal={animal} refetch={refetch}></AnimalLists>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageAnimals;
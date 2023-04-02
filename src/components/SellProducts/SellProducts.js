import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contextApi/AuthProvider';

const SellProducts = () => {
    const [sellNeeds, setSellNeeds] = useState([])
    const [sellAnimals, setSellAnimals] = useState([])
    const { user } = useContext(authContext)
    useEffect(() => {
        fetch(`http://localhost:5000/all_needs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setSellNeeds(data))
    }, [user])
    return (
        <div>
            <div>
                <div>
                    <h1>Animals</h1>
                    {
                        sellNeeds.map(x => <div className='flex items-center gap-1'>
                            <img className='w-24 rounded-full' src={x.images[0].thumbnail} alt="" />
                            <div>
                                <h1 className='font-semibold'>{x.title}</h1>
                                <button className='bg-blue-500 p-1 text-white rounded-md'>See details</button>
                                <button className='bg-red-500 p-1 ml-2 text-white rounded-md'>Delete</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default SellProducts;
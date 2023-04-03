import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AnimalLists = ({ animal, refetch }) => {
    const navigation = useNavigate()
    const navigate = (id) => {
        navigation(`/product/${id}`)
    }
    const handleVerifyBtn = id => {
        const verification = true;
        const verify = { verification };
        fetch(`http://localhost:5000/all_animals/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(verify)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`verified ${animal.title} Successfully`)
                refetch()
            })
    }
    return (
        <div>
            <div className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white flex flex-col lg:flex-row justify-start p-3 items-center gap-5 rounded-lg hover:shadow-xl'>
                <div>
                    <img className='w-24 rounded-full' src={animal.images[0].thumbnail} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl'>{animal.title}</h1>
                    <h1 className='text-xl'>{animal.sellerEmail}</h1>
                    <h1>{animal.phone}</h1>
                </div>
                <div>
                    <h1 className=''>{animal.uploadDate}</h1>
                    <h1>{animal.price} Taka</h1>
                </div>
                <div>
                    {

                        animal.status ?
                            <button className='bg-green-500 px-2 py-1 rounded-lg'>Verified</button> :
                            <button onClick={() => handleVerifyBtn(animal._id)} className='bg-orange-500 px-2 py-1 rounded-lg'>Verify</button>
                    }
                    <button onClick={() => navigate(animal._id)} className='block btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white border-none mt-1'>See details</button>
                </div>
            </div>
        </div>
    );
};

export default AnimalLists;
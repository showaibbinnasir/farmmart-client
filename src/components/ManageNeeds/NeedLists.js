import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const NeedLists = ({ need, refetch }) => {
    const navigation = useNavigate()
    const navigate = (id) => {
        navigation(`/needsdetails/${id}`)
    }
    const handleVerifyBtn = id => {
        const verification = true;
        const verify = { verification };
        fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/all_needs/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(verify)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`verified ${need.title} Successfully`)
                refetch()
            })
    }
    return (
        <div>
            <div className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white flex flex-col lg:flex-row justify-start p-3 items-center gap-5 rounded-lg hover:shadow-xl'>
                <div>
                    <img className='w-24 rounded-full' src={need.images[0].thumbnail} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl'>{need.title}</h1>
                    <h1 className='text-xl'>{need.seller_Email}</h1>
                    <h1>{need.phone}</h1>
                </div>
                <div>
                    <h1 className=''>{need.uploadDate}</h1>
                    <h1>{need.price} Taka</h1>
                </div>
                <div>
                    {

                        need.status ?
                            <button className='bg-green-500 px-2 py-1 rounded-lg'>Verified</button> :
                            <button onClick={()=> handleVerifyBtn(need._id)} className='bg-orange-500 px-2 py-1 rounded-lg'>Verify</button>
                    }
                    <button onClick={() => navigate(need._id)} className='block btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white border-none mt-1'>See details</button>
                </div>
            </div>
        </div>
    );
};

export default NeedLists;
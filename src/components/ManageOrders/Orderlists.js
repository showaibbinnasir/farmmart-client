import React from 'react';
import { toast } from 'react-hot-toast';

const Orderlists = ({ order, refetch }) => {
    const handleVerifyBtn = id => {
        const verification = true;
        const verify = { verification };
        fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/orders/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(verify)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`confirmed order for ${order.buyerName} Successfully`)
                refetch()
            })
    }
    const handleSellBtn = id => {
        const verification = true;
        const verify = { verification };
        fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/orders/updatesellinfo/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(verify)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`confirmed order for ${order.buyerName} Successfully`)
                refetch()
            })
    }
    return (
        <div>
            <div className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white flex flex-col lg:flex-row justify-start p-3 items-center gap-5 rounded-lg hover:shadow-xl'>
                <div>
                    <img className='w-24 rounded-full' src={order.buyerImage} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl'>{order.buyerName}</h1>
                    <h1 className='text-xl'>{order.buyerEmail}</h1>
                    <h1>{order.buyerPhone}</h1>
                </div>
                <div>
                    <h1 className=''>{order.orderDate}</h1>
                </div>
                <div>
                    <h1>Orders : </h1>
                    <div className='grid grid-cols-1 gap-3'>
                        {
                            order.orders.map(x => <div className='flex items-center gap-2'>
                                <div>
                                    <img className='w-16 h-16 rounded-full' src={x.images[0].thumbnail} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-xl'>{x.title}</h1>
                                    <h1>{x.sellerName}</h1>
                                    <h1>{x.phone}</h1>
                                    <h1>{x.sellerLocation}</h1>
                                </div>

                            </div>)
                        }
                    </div>
                    <div>
                        <div>
                            {

                                order.status ?
                                    <button className='bg-green-500 px-2 py-1 rounded-lg'>Confirmed</button> :
                                    <button onClick={() => handleVerifyBtn(order._id)} className='bg-orange-500 px-2 py-1 rounded-lg'>Action</button>
                            }
                            {
                                order.sellInfo ?
                                    <button disabled onClick={() => alert('clicked')} className='block btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white border-none mt-1'>Order sold</button> :
                                    <button onClick={() => handleSellBtn(order._id)} className='block btn bg-red-600 text-white border-none mt-1'>Order sold</button>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Orderlists;
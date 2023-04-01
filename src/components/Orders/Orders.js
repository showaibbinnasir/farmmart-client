import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contextApi/AuthProvider';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useContext(authContext)
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
    return (
        <div>
            <h1 className='text-3xl text-center pt-2 text-[#A3519F]'>My orders</h1>
            <div className='h-[90vh] mt-5'>
                <div className="overflow-x-auto mx-5">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>_id</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Orders</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                orders.map((order, i) => <tr>
                                    <th>{order?._id}</th>
                                    <td>{order?.buyerName}</td>
                                    <td>{order?.orderDate}</td>
                                    <td><div>
                                        {
                                            order?.orders.map(x => <div className='flex items-center gap-1'>
                                                <img className='w-10' src={x.images[0].thumbnail} alt="" />
                                                <div>
                                                    <h1 className='font-semibold'>{x.title}</h1>
                                                    <button className='bg-blue-500 p-1 text-white rounded-md'>See details</button>
                                                </div>
                                            </div>)
                                        }
                                    </div></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Orders;
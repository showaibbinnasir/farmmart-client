import React, { useContext, useEffect, useState } from 'react';
import Lists from '../Lists/Lists';
import { authContext } from '../../contextApi/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckOut = ({ items }) => {
    const [userData, setUserData] = useState({})
    const [location, setLocation] = useState('')
    const navigation = useNavigate();
    const navigate = () => {
        navigation('/home')
    }
    const locationData = (data) => {
        setLocation(data)
    }
    const orderId = Math.random() * 10000000000000000
    const { user } = useContext(authContext)
    const uri = `https://farmmart-backend-showaibbinnasir.vercel.app/all_users?email=${user?.email}`
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [uri])
    let total = 0;
    for (let i = 0; i <= items?.length; i++) {
        if (items[i]?.price === undefined) {
            break;
        }
        total += items[i]?.price;
    }

    const orders = () => {
        const buyerName = userData[0]?.userName;
        const buyerEmail = userData[0]?.userEmail;
        const buyerPhone = userData[0]?.phone;
        const gender = userData[0]?.gender;
        const order_id = orderId;
        const buyerImage = userData[0]?.userImage;
        const buyerlocation = location;
        const orders = items;
        const status = false;
        const sellInfo = false;
        const orderDate = new Date()
        const orderDetails = { buyerName, buyerEmail, buyerPhone, gender, order_id, buyerImage, sellInfo, status, buyerlocation, orderDate, orders }
        fetch('https://farmmart-backend-showaibbinnasir.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order Confirmed Successfully')
                console.log(data)
                localStorage.removeItem('cart')
                navigate()
            })
    }

    return (
        <div className='bg-white pt-5'>
            <h1 className='text-3xl text-center text-[#A3519F]'>{items.length} {
                items.length === 1 ? 'item' : 'items'
            } on your cart</h1>
            <div className='grid justify-center gap-5 mt-5 border border-[#A3519F] p-10 m-5 rounded-lg'>
                {
                    items.map((list, i) => <Lists key={i} list={list}></Lists>)
                }
            </div>
            <h1 className='text-xl text-center mt-5'>Total : {total} Taka Only</h1>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Buyer's Details</h1>
            </div>
            <div className='text-center text-xl mt-3'>
                <h1>Name: {userData[0]?.userName}</h1>
                <h1>Email: {userData[0]?.userEmail}</h1>
                <h1>Phone: {userData[0]?.phone}</h1>
                <h1>Gender: {userData[0]?.gender}</h1>
                <h1>Order ID: {orderId} </h1>
                <div className='flex justify-center mt-1'>
                    <img className='w-24 rounded-full' src={userData[0]?.userImage} alt="" />
                </div>
                <div className='flex justify-center'>
                    <form className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input onChange={(e) => locationData(e.target['value'])} type="text" placeholder="Location" name='location' className="input input-bordered w-44" required />
                    </form>
                </div>
            </div>
            <div className='flex justify-center mt-3 pb-3'>
                <button onClick={orders} className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-4 py-2 rounded-lg'>Confirm Orders</button>
            </div>
        </div>
    );
};

export default CheckOut;
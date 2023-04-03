import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Footer from '../Homepage/Footer';
import Posts from '../Homepage/Posts';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import "./style.css"
import { toast } from 'react-hot-toast';
import NeedPost from '../NeedPost/NeedPost';
import useAdmin from '../../hooks/useAdmin';
import { authContext } from '../../contextApi/AuthProvider';
import useSeller from '../../hooks/useSeller';

const NeedsPosts = () => {
    const [products, setProducts] = useState([])
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const data = useLoaderData()
    console.log(data[0].images);
    useEffect(() => {
        fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/three_needs?animal=${data[0].animal}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [data])
    const getFromLocal = localStorage.getItem('cart')
    const parsedGetFromLocal = JSON.parse(getFromLocal);
    let cart = []
    if (parsedGetFromLocal) {
        cart = [...parsedGetFromLocal]
    }
    const { user } = useContext(authContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const addToCart = () => {
        const newcart = [...cart, data[0]]
        cart = newcart;
        const stringifyobject = JSON.stringify(cart)
        localStorage.setItem('cart', stringifyobject)

        window.location.reload()
        toast.success('added to cart')
    }
    return (
        <div className='bg-white'>
            <div className="btm-nav bg-black z-50 shadow-lg">
                {
                    isAdmin ? <button onClick={addToCart} disabled className='bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1'>Watching as admin</button>
                        : isSeller ? <button onClick={addToCart} disabled className='bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1'>Watching as seller</button> : 
                        data[0].status ? 
                        <button onClick={addToCart} className='bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1'>Add to cart</button> :
                        <button disabled onClick={addToCart} className='bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1'>Unverified product</button>
                }
            </div>
            <div className='pt-10 px-10 bg-white'>
                <h1 className='text-3xl text-[#3F55A5]'>{data[0].title}</h1>
                <h1 className='text-xl'>Category : {data[0].animal}</h1>
                <div className='flex justify-center mt-5'>
                    <div>
                        <div className='w-96 mb-5'>
                            <ImageGallery items={data[0].images} />
                        </div>
                        <div className='flex items-center justify-evenly'>
                            <h1 className='text-xl'><span className='text-[#3F55A5]'>Price:</span> {data[0].price} /= Taka</h1>
                            {
                                data[0].status ? 
                                <button onClick={addToCart} className='bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1 rounded-md'>Add to cart</button> :
                                <button disabled onClick={addToCart} className='bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1 rounded-md'>Unverified</button>
                            }
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-10'>
                    <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Details</h1>
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white mt-5 p-3 text-start lg:text-center md:text-center'>
                <h1 className='text-xl'>Title: {data[0].title}</h1>
                <h1 className='text-xl'>Type: {data[0].type}</h1>
                <h1 className='text-xl'>Animal: {data[0].animal}</h1>
                <h1 className='text-xl'>Seller Name: {data[0].sellerName}</h1>
                <h1 className='text-xl'>Seller Email: {data[0].seller_Email}</h1>
                <div className='flex gap-5 justify-start md:justify-center lg:justify-center items-center'>
                    <h1 className='text-xl'>Seller Phone: {data[0].phone}</h1>
                    <button className='bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1 rounded-md'>Call Now</button>
                </div>
                <h1 className='text-xl'>Brand: {data[0].company}</h1>
                <h1 className='text-xl'>Upload date: {data[0].uploadDate}</h1>
                <h1 className='text-xl'>Description: {data[0].description}</h1>
                {
                    data[0]?.status ?
                        <h1 className=' text-xl'>Stock: <span className=' text-yellow-500'>Available</span></h1> :
                        <h1 className='text-xl'>Stock: <span className=' text-red-500'>Unavailable</span></h1>
                }

            </div>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-5'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Similar Products</h1>
            </div>
            <div className='flex justify-center mt-5'>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        products.map((post, i) => <NeedPost key={i} posts={post}></NeedPost>)
                    }
                </div>
            </div>

            <Footer></Footer>


        </div>
    );
};

export default NeedsPosts;
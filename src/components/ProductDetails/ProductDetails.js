import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import "./style.css"
import Posts from '../Homepage/Posts';
import Footer from '../Homepage/Footer';
import { authContext } from '../../contextApi/AuthProvider';
import NeedPost from '../NeedPost/NeedPost';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';

const ProductDetails = () => {
    const navigation = useNavigate()
    const [products, setProducts] = useState([])
    const [needs, setNeeds] = useState([])
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

const {user} = useContext(authContext)
const [isAdmin] = useAdmin(user?.email)
const [isSeller] = useSeller(user?.email)

const data = useLoaderData()
useEffect(() => {
    fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/three_${data[0].animal}`)
        .then(res => res.json())
        .then(data => setProducts(data))
}, [data])

useEffect(() => {
    fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/three_needs?animal=${data[0].animal}`)
        .then(res => res.json())
        .then(data => setNeeds(data))
}, [data])

const navigate = id => {
    navigation(`/checkout/${id}`)
}


return (
    <div className='bg-white'>
        <div className="btm-nav bg-black z-50 shadow-lg">
            {
                isAdmin ? 
                <button disabled className='bg-gradient-to-r to-[#3F55A5] from-[#A3519F] text-white px-3 py-1'>Watching as admin</button> : 
                isSeller ? 
                <button disabled className='bg-gradient-to-r to-[#3F55A5] from-[#A3519F] text-white px-3 py-1'>Watching as seller</button> : 
                data[0].status ? 
                <button onClick={()=> navigate(data[0]._id)} className='bg-gradient-to-r to-[#3F55A5] from-[#A3519F] text-white px-3 py-1'>Buy Now</button> : 
                <button disabled className='bg-gradient-to-r to-[#3F55A5] from-[#A3519F] text-white px-3 py-1'>Unverified product</button>
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
                            <button onClick={()=> navigate(data[0]._id)} className='bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1 rounded-md'>Buy Now</button> : 
                            <button disabled className='bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1 rounded-md'>Unverified</button>
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
            <h1 className='text-xl'>Color: {data[0].color}</h1>
            <h1 className='text-xl'>Animal: {data[0].animal}</h1>
            <h1 className='text-xl'>Seller Name: {data[0].sellerName}</h1>
            <h1 className='text-xl'>Seller Email: {data[0].sellerEmail}</h1>
            <div className='flex gap-5 justify-start md:justify-center lg:justify-center items-center'>
                <h1 className='text-xl'>Seller Phone: {data[0].phone}</h1>
                <button className='bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1 rounded-md'>Call Now</button>
            </div>
            <h1 className='text-xl'>Color: {data[0].color}</h1>
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
                    products.map((post, i) => <Posts key={i} posts={post}></Posts>)
                }
            </div>
        </div>
        <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-5'>
            <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Essential needs</h1>
        </div>
        <div className='flex justify-center mt-5'>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    needs.map((post, i) => <NeedPost key={i} posts={post}></NeedPost>)
                }
            </div>
        </div>
        <Footer></Footer>


    </div>
);
};

export default ProductDetails;
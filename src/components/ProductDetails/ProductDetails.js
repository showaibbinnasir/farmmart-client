import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import "./style.css"
import Posts from '../Homepage/Posts';

const ProductDetails = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    const data = useLoaderData()
    console.log(data[0].images);
    return (
        <div className='bg-white'>
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
                            <button className='bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1 rounded-md'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-10'>
                    <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Details</h1>
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white mt-5 p-3'>
                <h1 className='text-xl'>Title: {data[0].title}</h1>
                <h1 className='text-xl'>Color: {data[0].color}</h1>
                <h1 className='text-xl'>Animal: {data[0].animal}</h1>
                <h1 className='text-xl'>Seller Name: {data[0].sellerName}</h1>
                <h1 className='text-xl'>Seller Email: {data[0].sellerEmail}</h1>
                <div className='flex gap-5 items-center'>
                    <h1 className='text-xl'>Seller Phone: {data[0].phone}</h1>
                    <button className='bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1 rounded-md'>Call Now</button>
                </div>
                <h1 className='text-xl'>Color: {data[0].color}</h1>
                <h1 className='text-xl'>Upload date: {data[0].uploadDate}</h1>
                <h1 className='text-xl'>Description: {data[0].description}</h1>
                {
                    data[0]?.status ? 
                    <h1 className=' text-xl'>Stock: <span className=' text-red-500'>Unavailable</span></h1> : 
                    <h1 className='text-xl'>Stock: <span className=' text-yellow-500'>Available</span></h1>
                }
            </div>
        </div>
    );
};

export default ProductDetails;
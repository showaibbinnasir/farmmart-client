import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

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
    console.log(data);
    return (
        <div className='mt-10 mx-10'>
            <h1 className='text-3xl text-[#3F55A5]'>{data[0].title}</h1>
            <h1 className='text-xl'>Category : {data[0].animal}</h1>
            <div className='flex justify-center mt-5'>
                <div className='w-96'>
                    <ImageGallery items={images} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
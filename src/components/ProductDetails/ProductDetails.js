import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className='mt-10 mx-10'>
            <h1 className='text-3xl text-[#3F55A5]'>{data[0].title}</h1>
            <h1 className='text-xl'>Category : {data[0].animal}</h1>
        </div>
    );
};

export default ProductDetails;
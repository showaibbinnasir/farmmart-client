import React from 'react';
import { useNavigate } from 'react-router-dom';

const Posts = ({ posts }) => {
    const navigation = useNavigate();
    const navigate = (id) => {
        navigation(`/product/${id}`)
    }
    return (
        <div data-aos="zoom-out-up" data-aos-duration="1000" className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white p-5 rounded-xl w-36 lg:w-96'>
            {/* <h1>{posts.images[0]}</h1> */}
            <img className=' w-36 lg:w-96 rounded-xl' src={posts.images[0].original} alt="" />
            <h1 className='text-md lg:text-2xl text-center mt-3'>{posts.title}</h1>
            <h1 className='text-center text-sm lg:text-xl mb-3'>Price: {posts.price} /= Taka</h1>
            <div className='flex justify-center scale-75 lg:scale-100'>
                <button onClick={()=> navigate(posts._id)} className='btn btn-primary'>Buy now</button>
            </div>
        </div>
    );
};

export default Posts;
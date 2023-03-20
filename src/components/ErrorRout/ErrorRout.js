import React from 'react';
import { Link } from 'react-router-dom';

const ErrorRout = () => {
    return (
        <div className='flex h-[100vh] w-[100vw] items-center justify-center'>
            <div className='m-5'>
                <h1 className='mb-5'>OPSSSS!!! Wrong route.</h1>
                <div className='flex justify-center'>
                    <Link className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-5 py-2 rounded-xl' to='/home'>Go To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorRout;
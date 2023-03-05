import React from 'react';

const IntroOne = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center'>
            <div className='flex justify-center lg:justify-end'>
                <img className='w-[100%] lg:w-[60%]' src="asset1.png" alt="" />
            </div>
            <div className='w-[100%] lg:w-[60%]'>
                <div className='flex justify-center lg:justify-start gap-3'>
                    <h1 className='text-xl font-semibold lg:text-3xl'>Welcome to our</h1>
                    <img className='w-24 lg:w-36' src="logo.png" alt="" />
                </div>
                <div>
                    <h1 className='text-md lg:text-xl text-justify'>Here you can find your favourite
                        animals and their needs to grow
                        your business.</h1>
                        <br />
                    <button className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-5 py-2 rounded-tl-xl rounded-br-xl shadow-lg' >About</button>
                </div>
            </div>
        </div>
    );
};

export default IntroOne;
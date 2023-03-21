import React from 'react';

const IntroTwo = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-10 justify-center items-center mt-10'>

            <div className='flex justify-end'>
                <div className='w-[100%] lg:w-[60%]'>
                    <div className='flex justify-center lg:justify-end gap-3'>
                        <h1 className='text-xl font-semibold lg:text-3xl'>Welcome to our</h1>
                        <img className='w-24 lg:w-36' src="logo.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-md lg:text-xl text-end'>Here you can find your favourite
                            animals and their needs to grow
                            your business.</h1>
                        <br />
                        <div className='flex justify-center lg:justify-end'>
                            <button className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-5 py-2 rounded-tl-xl rounded-br-xl shadow-lg' >About</button>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="1500" className='flex justify-center lg:justify-start'>
                <img className='w-[95%] lg:w-[60%]' src="asset2.png" alt="" />
            </div>
        </div>
    );
};

export default IntroTwo;
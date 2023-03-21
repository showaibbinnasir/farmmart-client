import React from 'react';

const AssociatedPartner = () => {
    return (
        <div>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg'> Associated Partners </h1>

            </div>
            <div className='flex justify-center mt-5'>
                <div className='grid grid-cols-4 justify-evenly gap-5'>
                    <img data-aos="zoom-out-up" data-aos-duration="1000" className='w-36 rounded-full transition-all hover:shadow-xl hover:shadow-[#3F55A5]  hover:scale-105' src="/logoW.jpg" alt="" />
                    <img data-aos="zoom-out-up" data-aos-duration="1000" className='w-36 rounded-full transition-all hover:shadow-xl hover:shadow-[#3F55A5] hover:scale-105' src="/logoY.png" alt="" />
                    <img data-aos="zoom-out-up" data-aos-duration="1000" className='w-36 rounded-full transition-all hover:shadow-[#3F55A5] hover:shadow-xl hover:scale-105' src="/logoD.jpg" alt="" />
                    <img data-aos="zoom-out-up" data-aos-duration="1000" className='w-36 rounded-full transition-all hover:shadow-[#3F55A5] hover:shadow-xl hover:scale-105' src="/bgc.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AssociatedPartner;
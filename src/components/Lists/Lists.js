import React from 'react';

const Lists = ({ list }) => {
    return (
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-3 items-center gap-5 border border-blue-600 p-3 rounded-lg'>
                <img className='w-28' src={list.images[0].thumbnail} alt="" />
                <div>
                    <h1 className='text-2xl'>{list.title}</h1>
                    <h1>seller name: {list.sellerName}</h1>
                </div>
                <h1 className='text-xl text-[#A3519F]'>Price: {list.price}</h1>
            </div>
        </div>
    );
};

export default Lists;
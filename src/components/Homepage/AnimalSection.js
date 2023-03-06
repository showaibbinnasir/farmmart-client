import React, { useEffect, useState } from 'react';
import Posts from './Posts';

const AnimalSection = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('posts.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    
    return (
        <div>
            <div className='flex justify-center lg:justify-center mt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Animals</h1>
            </div>
            <div>
                <div className='grid grid-cols-2 items-center mt-10'>
                    <h1 className='text-4xl text-end font-semibold text-[#3F55A5]' >Cow</h1>
                    <div className='flex justify-center lg:justify-end'>
                        <button className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-3 py-1 rounded-tl-xl rounded-br-xl shadow-lg' >see all</button>
                    </div>
                </div>
            </div>
            <div>
                {
                    posts.map((post, i) => <Posts key={i} posts={post}></Posts>)
                }
            </div>
        </div>
    );
};

export default AnimalSection;
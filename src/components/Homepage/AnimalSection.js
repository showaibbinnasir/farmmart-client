import React, { useEffect, useState } from 'react';
import Posts from './Posts';

const AnimalSection = () => {
    const [cowData, setCowData] = useState([]);
    const [goatData, setGoatData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/three_cow')
            .then(res => res.json())
            .then(data => setCowData(data))
    }, [])

    useEffect(()=>{
        fetch('http://localhost:5000/three_goat')
            .then(res => res.json())
            .then(data => setGoatData(data))
    }, [])


    return (
        <div>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Animals</h1>
            </div>
            <div>
                <div className='grid grid-cols-2 items-center mt-10 mb-10' >
                    <h1 className='text-4xl text-end font-semibold text-[#3F55A5]' >Cow</h1>
                    <div className='flex justify-center lg:justify-end'>
                        <button className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-3 py-1 rounded-tl-xl rounded-br-xl shadow-lg' >see all</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        cowData.map((post, i) => <Posts key={i} posts={post}></Posts>)
                    }
                </div>
            </div>
            <div>
                <div className='grid grid-cols-2 items-center mt-10 mb-10' >
                    <h1 className='text-4xl text-end font-semibold text-[#3F55A5]' >Goat</h1>
                    <div className='flex justify-center lg:justify-end'>
                        <button className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-3 py-1 rounded-tl-xl rounded-br-xl shadow-lg' >see all</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        goatData.map((post, i) => <Posts key={i} posts={post}></Posts>)
                    }
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <button className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-5 py-3 rounded-tl-xl rounded-br-xl shadow-lg' >Show all products</button>
            </div>
        </div>
    );
};

export default AnimalSection;
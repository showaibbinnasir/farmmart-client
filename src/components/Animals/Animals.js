import React, { useEffect, useState } from 'react';
import Posts from '../Homepage/Posts';

const Animals = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchData, setSearchData] = useState('')
    const searchbar = (value) => {
        setSearchData(value)
    }
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/all_animals?searchId=${searchData}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
    },[searchData])

    return (
        <div className='bg-white'>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center pt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg'> All animals </h1>
            </div>
            <div className='pb-3'>
                <form className='flex justify-center mt-5 items-center gap-2'>
                    <h1 className='text-2xl'><i class="fa-solid fa-magnifying-glass text-[#3F55A5]"></i></h1>
                    <input onChange={(e) => searchbar(e.target['value'])} type="text" name='searchInput' placeholder="Type here" className="input input-bordered w-[300px] border-[#A3519F]" />
                </form>
            </div>
            {
                isLoading ?
                    <div className='flex justify-center my-5'>
                        <progress className="progress w-56"></progress>
                    </div> :
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                data.map((post, i) => <Posts key={i} posts={post}></Posts>)
                            }
                        </div>
                    </div>

            }

        </div>
    );
};

export default Animals;
import React, { useEffect, useState } from 'react';

const Animals = () => {
    const [data,setData] = useState([])
    const [searchData, setSearchData] = useState('')
    const searchbar = (value) => {
        setSearchData(value)
    }
    useEffect(()=>{
            fetch(`http://localhost:5000/all_animals?searchId=${searchData}`)
            .then(res => res.json())
            .then(data => console.log(data))
    },[searchData])
    
    return (
        <div>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg'> All animals </h1>
            </div>
            <div>
                <form className='flex justify-center mt-5 items-center gap-2'>
                    <h1 className='text-2xl'><i class="fa-solid fa-magnifying-glass text-[#3F55A5]"></i></h1>
                    <input onChange={(e) => searchbar(e.target['value'])} type="text" name='searchInput' placeholder="Type here" className="input input-bordered w-[300px] border-[#A3519F]" />
                </form>
            </div>
        </div>
    );
};

export default Animals;
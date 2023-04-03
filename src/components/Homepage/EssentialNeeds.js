import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./EssentialNeed.css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";
import { useNavigate } from 'react-router-dom';

const EssentialNeeds = () => {
    const navigate = useNavigate()
    const navigation = (id) => {
        navigate(`/needsdetails/${id}`)
    }
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://farmmart-backend-showaibbinnasir.vercel.app/all_needs')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <div>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Essential Needs</h1>
            </div>
            <div className='mt-5'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    freeMode={true}
                    
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <div className='mt-5'>
                        {
                            data.map((post, i) => {
                                return <SwiperSlide>
                                    <div data-aos="zoom-out-up" data-aos-duration="1000" className='w-[550px] h-[96]  p-1 rounded-xl bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white'>
                                        <img className=' w-full rounded-xl' src={post.images[0].thumbnail} alt="" />
                                        <h1 className='text-sm lg:text-2xl'>{post.title}</h1>
                                        <h1 className='text-sm lg:text-xl'>Price: {post.price} /= Taka</h1>
                                        <button onClick={()=> navigation(post._id)} className='btn btn-primary'>Buy Now</button>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </div>

                </Swiper>
            </div>
        </div>
    );
};

export default EssentialNeeds;
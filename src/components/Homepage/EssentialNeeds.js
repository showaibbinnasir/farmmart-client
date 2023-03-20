import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./EssentialNeed.css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";

const EssentialNeeds = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('posts.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <div>
            <div className='flex justify-center lg:justify-center mt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Essential Needs</h1>
            </div>
            <div className='mt-5'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <div className='mt-5'>
                        {
                            data.map((post, i) => {
                                return <SwiperSlide>
                                    <div className='w-[350px]  p-1 rounded-xl bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white'>
                                        <img className=' w-full rounded-xl' src={post.images[0]} alt="" />
                                        <h1>{post.title}</h1>
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
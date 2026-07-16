"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    const images = ["/majar.jpg", "/AliRoza.jpg", "/majar.jpg"];

    return (
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <Swiper 
                navigation={true} 
                pagination={{ clickable: true }} 
                autoplay={{ delay: 3000, disableOnInteraction: false }} 
                modules={[Pagination, Navigation, Autoplay]} 
                className="w-full h-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} className="w-full h-full">
                        {/* ইমেজের চারপাশে কোনো অতিরিক্ত প্যাডিং বা মার্জিন যেন না থাকে */}
                        <div className="relative w-full h-full">
                            <Image
                                src={src}
                                alt="Banner"
                                fill
                                priority={index === 0}
                                className="object-cover"
                                sizes="100vw"
                                suppressHydrationWarning
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
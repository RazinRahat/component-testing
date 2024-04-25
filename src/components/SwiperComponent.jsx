import React, { useRef, useState } from 'react';
// import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SwiperLogo from './SwiperLogo';

export default function SwiperComponent() {
  const delayArray = [2000, 4000, 6000, 8000, 10000]
  const randomIndex = Math.floor(Math.random() * delayArray.length);
  const randomElement = delayArray[randomIndex];
  return (
    <>
      <Swiper 
        autoplay={{
            delay: randomElement,
            disableOnInteraction: false,
        }}
        direction={'vertical'} 
        loop={true}
        // pagination={true} 
        modules={[Autoplay, Pagination]} 
        className="mySwiper"
    >
        <SwiperSlide><SwiperLogo /></SwiperSlide>
        <SwiperSlide><SwiperLogo /></SwiperSlide>
        <SwiperSlide><SwiperLogo /></SwiperSlide>
      </Swiper>
    </>
  );
}
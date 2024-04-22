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
  return (
    <>
      <Swiper 
        autoplay={{
            delay: 3000,
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
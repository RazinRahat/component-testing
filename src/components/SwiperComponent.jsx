import React, { useRef, useState } from 'react';
// import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './BannerBottomStyles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SwiperLogo from './SwiperLogo';

// const SwiperContainer = styled.div`
//   .swiper {
//     width: 100%;
//     height: 100%;
//   }

//   .swipper-wrapper {
//     height: 80px;
//   }

//   .swiper-slide {
//     text-align: center;
//     font-size: 18px;
//     /* height: 80px; */
//     /* background: #fff; */

//     /* Center slide text vertically */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .swiper-slide img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `

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
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SolutionBottomStyles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import SolutionCard from './SolutionCard';

export default function SolutionSwiperComponent() {
  return (
    <>
      <Swiper
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        slidesPerView={4}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><SolutionCard /></SwiperSlide>
        <SwiperSlide><SolutionCard /></SwiperSlide>
        <SwiperSlide><SolutionCard /></SwiperSlide>
        <SwiperSlide><SolutionCard /></SwiperSlide>
        <SwiperSlide><SolutionCard /></SwiperSlide>
        <SwiperSlide><SolutionCard /></SwiperSlide>
        <SwiperSlide><SolutionCard /></SwiperSlide>
        <SwiperSlide><SolutionCard /></SwiperSlide>
        <SwiperSlide><SolutionCard /></SwiperSlide>
        <SwiperSlide><SolutionCard /></SwiperSlide>
        <SwiperSlide><SolutionCard /></SwiperSlide>
      </Swiper>
    </>
  );
}

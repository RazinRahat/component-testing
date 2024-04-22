import React from 'react'
import styled from 'styled-components'
import BottomSliderSingle from './BottomSliderSingle'

const BottomSliderWrapper = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: absolute;
    bottom: 20px;
    left: 15px;
    right: 15px;
    height: 80px;
    overflow: hidden;


    .swiper {
      width: 100%;
      height: 80px;
    }

    .swipper-wrapper {
      height: 80px;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      /* height: 80px; */
      /* background: #fff; */

      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`

const BottomSlider = () => {
  return (
    <BottomSliderWrapper>
        <BottomSliderSingle />
        <BottomSliderSingle />
        <BottomSliderSingle />
        <BottomSliderSingle />
        <BottomSliderSingle />
        <BottomSliderSingle />
    </BottomSliderWrapper>
  )
}

export default BottomSlider
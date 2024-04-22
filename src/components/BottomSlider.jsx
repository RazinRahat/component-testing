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
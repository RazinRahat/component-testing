import React from 'react'
import styled from 'styled-components'
import SwiperComponent from './SwiperComponent'

const BottomSliderSingleWrapper = styled.div`
    width: 16%;

    ul {
        margin: 0px;
        padding: 0px;
    }

    @media (max-width: 991px) {
        &:nth-child(n+5) {
            display: none;
        }
        &:nth-child(n+6) {
            display: none;
        }
    }

    @media (max-width: 600px) {
        &:nth-child(n+4) {
            display: none;
        }
    }
`

const BottomSliderSingle = () => {
  return (
    <BottomSliderSingleWrapper>
        <ul>
            <SwiperComponent />
        </ul>
    </BottomSliderSingleWrapper>
  )
}

export default BottomSliderSingle
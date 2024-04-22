import React from 'react'
import styled from 'styled-components'
import { GrFormPreviousLink } from "react-icons/gr";


const ArrowWrapper = styled.li`
  cursor: pointer;
  list-style: none;
  margin-right: 20px;
`

const ArrowSvg = styled(GrFormPreviousLink)`
  color: white;
  height: 40px;
  width: 40px;
  border: 1px solid white;
  border-radius: 50%;

  /* span {
    position: absolute;
    display: block;
    background: white;
  }

  span:nth-child(1) {
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.2s;
    transition-delay: 0.45s;
  }

  &:hover span:nth-child(1) {
    transition: transform 0.2s;
    transform: scaleX(1);
  }

  span:nth-child(2) {
    right: 0;
    top: 0;
    width: 2px;
    height: 100%;
    transform-origin: top;
    transform: scaleY(0);
    transition: transform 0.2s;
    transition-delay: 0.3s;
  }

  &:hover span:nth-child(2) {
    transition: transform 0.2s;
    transform: scaleY(1);
    transition-delay: 0.1s;
  }

  span:nth-child(3) {
    right: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.2s;
    transition-delay: 0.15s;
  }

  &:hover span:nth-child(3) {
    transition: transform 0.2s;
    transform: scaleX(1);
    transition-delay: 0.2s;
  }

  span:nth-child(4) {
    left: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    transform-origin: bottom;
    transform: scaleY(0);
    transition: transform 0.2s;
    transition-delay: 0.45s;
  }

  &:hover span:nth-child(4) {
    transition: transform 0.2s;
    transform: scaleY(1);
    transition-delay: 0.3s;
  } */
`

const ArrowButtonPrev = () => {
  return (
    <ArrowWrapper>
      <ArrowSvg >
        {/* <span></span>
        <span></span>
        <span></span>
        <span></span> */}
      </ArrowSvg>
    </ArrowWrapper>
  )
}

export default ArrowButtonPrev
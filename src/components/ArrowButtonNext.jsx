import React from 'react'
import styled from 'styled-components'
import { GrFormNextLink } from "react-icons/gr";


const ArrowWrapper = styled.li`
    cursor: pointer;
    list-style: none;
    margin-right: 20px;
`

const ArrowSvg = styled(GrFormNextLink)`
  color: white;
  height: 40px;
  width: 40px;
  border: 1px solid white;
  border-radius: 50%;
`


const ArrowButtonNext = () => {
  return (
    <ArrowWrapper>
      <ArrowSvg>
        {/* <span></span>
        <span></span>
        <span></span>
        <span></span> */}
      </ArrowSvg>
    </ArrowWrapper>
  )
}

export default ArrowButtonNext
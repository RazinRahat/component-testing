import React, { useState } from 'react'
import styled from 'styled-components'

const HamBurgerContainer = styled.div`
    width: 15px;
    height: 10px;
    position: relative;
    margin: auto 0px;

    span {
        height: 1px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        right: 0px;
        width: 8px;
        transition: all 1s cubic-bezier(0.4, 0, 0, 1) 0s;
    }

    span:nth-child(1) {
        top: 0px;
        transform: none;
        width: 8px;
    }

    span:nth-child(2) {
        top: 5px;
        width: 15px;
        opacity: 1;
    }

    span:nth-child(3) {
        top: 10px;
        left: 0px;
        transform: none;
        width: 8px;
    }

    /* span:nth-child(1) {
        top: 0px;
        transform: ${({ isActive }) => isActive ? 'rotate(45deg) translateY(7px)' : 'none'};
        width: ${({ isActive }) => isActive ? '15px' : '8px'};
    }

    span:nth-child(2) {
        top: 5px;
        width: 15px;
        opacity: ${({ isActive }) => isActive ? '0' : '1'};
    }

    span:nth-child(3) {
        top: 10px;
        left: 0px;
        transform: ${({ isActive }) => isActive ? 'rotate(-45deg) translateY(-7px)' : 'none'};
        width: ${({ isActive }) => isActive ? '15px' : '8px'};
    } */

    &:hover span {
        width: 15px;
    }

`

const HamBurgerMobile = () => {
    // const [active, setActive] = useState(false);
    // const handleClick = () => {
    //     setIsActive(!isActive);
    // };
    return (
        <HamBurgerContainer id="hamburgermobile">
            <span></span>
            <span></span>
            <span></span>
        </HamBurgerContainer>
    )
}

export default HamBurgerMobile
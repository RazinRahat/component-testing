import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import styled from 'styled-components'

const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    width: fit-content;
    padding: 20px 36px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    border: 0px solid #3498db;
    background: white;
    cursor: pointer;
    transition: 0.8s;
    color: black;
    z-index: 5;

    &:hover{
        color: white;
    }

    &::before{
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 0%;
        background: #999999;
        z-index: -1;
        transition: 0.8s;
        bottom: 0;
        border-radius: 50% 50% 0 0;
    }

    &:hover::before{
        height: 180%;
    }
`


const Button = ({ text }) => {
    return (
        <ButtonContainer>{text} <FaArrowRight /></ButtonContainer>
    )
}

export default Button
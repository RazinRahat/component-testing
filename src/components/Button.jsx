import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import styled from 'styled-components'

// const ButtonContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 44px;
//     width: fit-content;
//     padding: 20px 36px;
//     border-radius: 40px;
//     font-size: 16px;
//     font-weight: bold;
//     position: relative;
//     overflow: hidden;
//     border: 0px solid #3498db;
//     background: white;
//     cursor: pointer;
//     transition: 0.8s;
//     color: black;
//     z-index: 5;

//     &:hover{
//         color: white;
//     }

//     &::before{
//         content: "";
//         position: absolute;
//         left: 0;
//         width: 100%;
//         height: 0%;
//         background: #999999;
//         z-index: -1;
//         transition: 0.8s;
//         bottom: 0;
//         border-radius: 50% 50% 0 0;
//     }

//     &:hover::before{
//         height: 180%;
//     }
// `

const ButtonDiv = styled.div`
    margin: 0px;
    width: fit-content;
    height: 44px;
    cursor: pointer;
`

const ButtonLink = styled.a`
    text-decoration: none;
    display: flex;
    width: fit-content;
    height: 100%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
    line-height: 20px;
    background-color: rgb(255, 255, 255);
    position: relative;
    border-radius: 22px;
    overflow: hidden;
    z-index: 0;
    transition: border 0.3s ease 0s;
    padding: 12px 36px;
    box-sizing: border-box;
    border: 0px;
    color: rgb(10, 14, 18);

    &:hover {
        text-decoration: none;
        outline: none;
        box-shadow: none;
        color: rgb(153, 153, 153) !important;
    }

    &::before{
        content: "";
        display: block;
        position: absolute;
        right: 0px;
        top: 100%;
        left: 0px;
        background-color: rgb(153, 153, 153);
        height: 100%;
        width: 100%;
        margin: auto;
        transition: all 0.5s cubic-bezier(0.4, 0, 0, 1) 0s;
        border-radius: 22px;
    }

    &:hover::before{
        top: 0px;
    }
`

const ButtonSpan = styled.span`
    transition: color 0.3s ease 0s;
    color: rgb(10, 14, 18);
    position: relative;
    z-index: 2;
`

const ButtonArrow = styled(FaArrowRight)`
    padding-left: 5px;
    filter: none;
    transition: all 0.6s cubic-bezier(0.4, 0, 0, 1) 0s;
    max-width: 100%;
    object-fit: contain;
`

const Button = ({ text }) => {
    return (
        // <ButtonContainer>{text} <FaArrowRight /></ButtonContainer>
        <ButtonDiv>
            <ButtonLink>
                <ButtonSpan>
                    {text}
                    <ButtonArrow />
                </ButtonSpan>
            </ButtonLink>
        </ButtonDiv>
    )
}

export default Button
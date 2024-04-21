import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import styled from 'styled-components'

const ButtonDiv = styled.div`
    margin: 0px;
    width: fit-content;
    height: 44px;
    cursor: pointer;

    @media (max-width: 991px) {
        margin: 0px;
    }
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
    background-color: transparent;
    position: relative;
    border-radius: 22px;
    overflow: hidden;
    z-index: 0;
    transition: border 0.3s ease 0s;
    padding: 12px 36px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.3);
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
    color: rgb(255, 255, 255);
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

const InsightsButton = ({ text }) => {
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

export default InsightsButton
import React from 'react'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa";

const ServicesDiv = styled.div`
    background-color: rgba(38, 38, 38, 0.48);
    backdrop-filter: blur(80px);
    padding: 24px;
    border-radius: 8px;

    h4 {
        font-size: 24px;
        line-height: 32px;
        font-weight: 400;
        color: rgb(255, 255, 255);
        padding-bottom: 15px;
        margin: 0;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(112, 112, 112, 0.53);
    }
`

const ServicesList = styled.ul`
    margin: 0;
    padding: 0;
`

const ServicesListItem = styled.li`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    margin-bottom: 18px;
    list-style: none;

    a {
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: rgb(255, 255, 255);
        font-weight: 400;
        margin: 0px;
        transition: color 0.3s ease 0s;
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
        outline: none;
        box-shadow: none;
    }
`

const Arrow = styled(FaArrowRight)`
    max-width: 100%;
    object-fit: contain;
    padding-left: 5px;
    opacity: 0;
    height: 16px;
    transition: all 0.6s cubic-bezier(0.4, 0, 0, 1) 0s;

    &:hover {
        opacity: 1;
        margin-left: 10px;
    }
`

const Services = () => {
  return (
    <ServicesDiv>
        <h4>Services</h4>
        <ServicesList>
            <ServicesListItem>
                <a href="/">
                    Insight & Strategy
                    <Arrow />
                </a>
            </ServicesListItem>
            <ServicesListItem>
                <a href="/">
                    Brand Identity
                    <Arrow />
                </a>
            </ServicesListItem>
            <ServicesListItem>
                <a href="/">
                    Organic Marketing
                    <Arrow />
                </a>
            </ServicesListItem>
            <ServicesListItem>
                <a href="/">
                    Paid Marketing
                    <Arrow />
                </a>
            </ServicesListItem>
            <ServicesListItem>
                <a href="/">
                    Digital Design
                    <Arrow />
                </a>
            </ServicesListItem>
            <ServicesListItem>
                <a href="/">
                    Photography & More
                    <Arrow />
                </a>
            </ServicesListItem>
        </ServicesList>
    </ServicesDiv>
  )
}

export default Services
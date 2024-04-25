import React from 'react'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa6";

const ServicesDiv = styled.div`
    background-color: rgba(38, 38, 38, .48);
    backdrop-filter: blur(80px);
    padding: 24px;
    border-radius: 8px;

    h4 {
        font-size: 24px;
        line-height: 32px;
        color: #ffffff;
        padding-bottom: 15px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(112, 112, 112, 0.53);
    }

    ul {
        color: white;
        li {
            margin-bottom: 18px !important;
            position: relative;
            font-size: 16px;
            line-height: 20px;
            cursor: pointer;

            svg {
                padding-left: 5px;
                opacity: 0;
                transition: .6s all cubic-bezier(0.4, 0, 0, 1) 0s;
            }

            a {
              font-size: 16px;
              line-height: 20px;
            }

            ul:nth-last-of-type(1) {
              margin-bottom: 0 !important;
            }

            ul:hover {
              svg {
                opacity: 1;
                margin-left: 10px;
              }
            }
        }
    }
`

const Services = () => {
  return (
    <ServicesDiv className="menu-desktop__items__slide__subs as-service-sub">
        <h4>Services</h4>
        <ul>
            <li>
                Insight & Strategy 
                <FaArrowRight />
            </li>
            <li>
                Brand Identity
                <FaArrowRight />
            </li>
            <li>
                Organic Marketing 
                <FaArrowRight />
            </li>
            <li>
                Paid Marketing 
                <FaArrowRight />
            </li>
            <li>
                Digital Design 
                <FaArrowRight />
            </li>
            <li>
                Photography & Video 
                <FaArrowRight />
            </li>
        </ul>
    </ServicesDiv>
  )
}

export default Services
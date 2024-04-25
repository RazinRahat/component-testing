import React from 'react'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa6";

const ContactUsButtonLink= styled.a`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #FFFFFF !important;
    background-color: rgba(38, 38, 38, .48);
    backdrop-filter: blur(80px);
    width: 180px;
    height: 48px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 24px;
    border-radius: 8px;
    text-decoration: none;

    svg {
        position: absolute;
        right: 24px;
        transition: 1s all cubic-bezier(0.4, 0, 0, 1) 0s;;
    }

    &:hover {
        svg {
            right: 18px;
        }
    }
`

const ContactUsButton = () => {
  return (
    <ContactUsButtonLink href="contact">
        Contact us
        <FaArrowRight />
    </ContactUsButtonLink>
  )
}

export default ContactUsButton
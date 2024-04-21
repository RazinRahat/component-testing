import React from 'react'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa";

const ContactUsLink = styled.a`
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    background-color: rgba(38, 38, 38, 0.48);
    backdrop-filter: blur(80px);
    width: 180px;
    height: 48px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0px 24px;
    border-radius: 8px;
    color: rgb(255, 255, 255);
    margin: 0px;
    text-decoration: none;
    transition: color 0.3s ease 0s;
`

const Arrow = styled(FaArrowRight)`
    position: absolute;
    right: 24px;
    transition: all 1s cubic-bezier(0.4, 0, 0, 1) 0s;
    max-width: 100%;
    object-fit: contain;
    vertical-align: middle;

    &:hover {
        right: 18px;
    }
`

const ContactUsButton = () => {
  return (
    <ContactUsLink href="/contact">
        Contact Us
        <Arrow />
    </ContactUsLink>
  )
}

export default ContactUsButton
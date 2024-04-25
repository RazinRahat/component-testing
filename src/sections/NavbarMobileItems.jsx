import React from 'react'
import styled from 'styled-components'
import ContactUsButtonMobile from '../components/ContactUsButtonMobile'

const NavbarMobileItemsWrapper = styled.div`
    /* display: none; */
    translate: none;
    rotate: none;
    scale: none;
    padding: 120px 15px 50px;
    position: relative;
    height: calc(100svh);
    overflow: hidden auto;
    background-color: rgb(10, 14, 18);
    width: 200vw;
`

const NavbarMobileItemsList = styled.ul`
    margin: 0px;
    padding: 0px;

    li {
      text-transform: capitalize;
      display: block;
      width: 100%;
      color: rgb(255, 255, 255);
      font-size: 28px;
      line-height: 32px;
      list-style: none;
    }

    li:not(:nth-last-of-type(1)) {
        margin-bottom: 20px;
    }

    li:nth-child(n+7) {
        font-size: 16px;
        line-height: 20px;
    }

    a {
      color: rgb(255, 255, 255);
      font-size: 28px;
      line-height: 32px;
      font-weight: 400;
      text-decoration: none;
      transition: color 0.3s ease 0s;
    }

    a:hover {
      outline: none;
      box-shadow: none;
      color: rgb(153, 153, 153) !important;
    }

    h4 {
      font-size: 28px;
      line-height: 32px;
      color: rgb(255, 255, 255);
      margin-top: 60px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(112, 112, 112, 0.3);
      width: calc(-30px + 100vw);
      margin-bottom: 20px;
      color: rgb(255, 255, 255);
      font-weight: 400;
      /* margin: 0px; */
    }
`

const NavbarMobileItems = () => {
  return (
    <NavbarMobileItemsWrapper id="navbaritems">
        <NavbarMobileItemsList>
            <ContactUsButtonMobile style="margin-bottom: 50px;" />
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/about">About Us</a>
            </li>
            <li>
                <a href="/portfolio">Portfolios</a>
            </li>
            <li>
                <a href="/join">Join Us</a>
            </li>
            <h4>Services</h4>
            <li>Insight & Strategy</li>
            <li>Brand Identity</li>
            <li>Organic Marketing</li>
            <li>Paid Marketing</li>
            <li>Digital Design</li>
            <li>Web Development</li>
            <li>Photography & Video</li>
        </NavbarMobileItemsList>
    </NavbarMobileItemsWrapper>
  )
}

export default NavbarMobileItems
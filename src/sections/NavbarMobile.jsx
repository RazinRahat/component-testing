import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import HamBurger from '../components/HamBurger'

const NavbarSectionWrapper = styled.section`
    position: fixed;
    width: 100%;
    left: 0px;
    top: 30px;
    z-index: 9;

    @media (min-width: 992px) {
        display: none;
    }
`

const MobileBarDiv = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 25px;
    position: fixed;
    top: 20px;
    right: 15px;
    left: 15px;
    z-index: 999;
    transition: all 0.4s ease 0s;
    height: 50px;
    background-color: rgba(38, 38, 38, 0.48);
    backdrop-filter: blur(80px);
    border-radius: 8px;
`

const LogoLink = styled.a`
    color: rgb(255, 255, 255);
    font-weight: 400;
    margin: 0px;

    img {
        max-width: 100%;
        object-fit: contain;
        vertical-align: middle;
    }
`

const NavbarMobile = () => {
  return (
    <NavbarSectionWrapper>
        <MobileBarDiv>
            <LogoLink href="/">
                <img src={logo} alt="Logo" />
            </LogoLink>
            <HamBurger />
        </MobileBarDiv>
    </NavbarSectionWrapper>
  )
}

export default NavbarMobile
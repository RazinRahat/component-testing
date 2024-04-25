import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../components/LogoMobile'
import HamBurgerMobile from '../components/HamBurgerMobile'
import NavbarMobileItems from './NavbarMobileItems'
import gsap from 'gsap'

const NavbarMobileWrapper = styled.section`
    position: fixed;
    width: 100%;
    z-index: 99999;
    top: 0px;
    left: 0px;

    @media (min-width: 992px) {
        display: none;
    }
`

const NavbarMobileTop = styled.div`
    background-color: rgb(60, 60, 59);
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
    height: 50px;
    backdrop-filter: blur(80px);
    border-radius: 8px;

    .activeHamburger {
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
            transform: rotate(45deg) translateY(7px);
            width: 15px;
        }

        span:nth-child(2) {
            top: 5px;
            width: 15px;
            opacity: 0;
        }

        span:nth-child(3) {
            top: 10px;
            left: 0px;
            transform: rotate(-45deg) translateY(-7px);
            width: 15px;
        }

        &:hover span {
            width: 15px;
        }
    }
`

const NavbarMobile = () => {
    useEffect(() => {
        let getHamburgerClick = document.querySelector('#hamburgermobile')
    
        return () => {
            getHamburgerClick.addEventListener('click', () => {
                console.log('clicked')
                if(getHamburgerClick.classList.contains("activeHamburger")) {
                    getHamburgerClick.classList.remove("activeHamburger")
                    gsap.to('#navbaritems', {x: '0px', duration: 0.5})
                } else {
                    getHamburgerClick.classList.add("activeHamburger")
                    gsap.to('#navbaritems', {x: '100%', duration: 0.5})
                }
            })
        }
    }, [])
    
    return (
        <NavbarMobileWrapper>
            <NavbarMobileTop>
                <Logo />
                <HamBurgerMobile />
            </NavbarMobileTop>
            <NavbarMobileItems />
        </NavbarMobileWrapper>
    )
}

export default NavbarMobile
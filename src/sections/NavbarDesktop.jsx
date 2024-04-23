import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Menu from '../components/Menu'
import ContactUsButton from '../components/ContactUsButton'
import Logo from '../components/LogoDesktop'

const NavbarSectionWrapper = styled.section`
    position: fixed;
    width: 100%;
    left: 0px;
    top: 30px;
    z-index: 9;

    @media (max-width: 991px) {
        display: none;
    }
`

const NavbarContainer = styled(Container)`
    /* margin-left: auto;
    margin-right: auto; */

    @media (max-width: 1199px) and (min-width: 768px) {
        max-width: 90%;
        margin: auto;
    }   
`
const NavbarRow = styled(Row)`
    display: flex;
    flex-wrap: wrap;
    /* margin-left: -15px;
    margin-right: -15px; */
`

const LogoMenuWrapper = styled(Col)`
    display: flex;
    /* align-items: center; */
    padding-left: 15px;
    padding-right: 15px;
`
const ContactUsButtonWrapper = styled(Col)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-left: 15px;
    padding-right: 15px;
`

const NavbarDesktop = () => {
    useEffect(() => {
        let getHamburgerClick = document.querySelector('#hamburgerdesktop')
    
        return () => {
        
        }
    }, [])
    
    return (
        <NavbarSectionWrapper>
            <NavbarContainer>
                <NavbarRow>
                    <LogoMenuWrapper sm={6}>
                        <Logo />
                        <Menu />
                    </LogoMenuWrapper>
                    <ContactUsButtonWrapper sm={6}>
                        <ContactUsButton />
                    </ContactUsButtonWrapper>
                </NavbarRow>     
            </NavbarContainer>
        </NavbarSectionWrapper>
    )
}

export default NavbarDesktop;
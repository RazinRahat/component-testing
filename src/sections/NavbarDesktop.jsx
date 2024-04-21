import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Menu from '../components/Menu'
import ContactUsButton from '../components/ContactUsButton'
import Logo from '../components/Logo'

const NavbarSectionWrapper = styled.section`
    position: fixed;
    width: 100%;
    left: 0px;
    top: 30px;
    z-index: 9;
`

const NavbarContainer = styled(Container)`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;

    @media (min-width: 1400px) {
        max-width: 1140px;
    }
`
const NavbarRow = styled(Row)`
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
`

const LogoMenuWrapper = styled(Col)`
    display: flex;
    align-items: center;
`
const ContactUsButtonWrapper = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`

const NavbarDesktop = () => {
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
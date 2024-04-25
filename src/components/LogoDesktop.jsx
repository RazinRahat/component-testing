import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'

const LogoDesktopDiv = styled.div`
    height: 48px;
    width: 86px;
    background-color: rgba(38, 38, 38, .48);
    backdrop-filter: blur(80px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    border-radius: 8px;

    img {
        max-width: 100%;
        object-fit: contain;
    }
`

const LogoDesktop = () => {
  return (
    <LogoDesktopDiv>
        <a href="/">
            <img src={logo} alt="logo"/>
        </a>
    </LogoDesktopDiv>
  )
}

export default LogoDesktop
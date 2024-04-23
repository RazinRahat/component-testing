import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.svg'

const LogoWrapper = styled.div`
    cursor: pointer;
    /* height: 48px;
    width: 86px; */
    background-color: rgba(38, 38, 38, 0.48);
    backdrop-filter: blur(80px);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    /* margin-right: 30px; */
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

const LogoMobile = () => {
  return (
    <LogoWrapper>
        <LogoLink href="/">
            <img src={logo} alt="Logo" />
        </LogoLink>
    </LogoWrapper>
  )
}

export default LogoMobile
import React from 'react'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa";
import Services from './Services';

const MenuDiv = styled.div`
    padding: 0px 28px 28px;
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
    height: 100%;
    /* background-color: rgba(38, 38, 38, 0.48); */
    backdrop-filter: blur(80px);
`

const OpenMenuList = styled.ul`
    opacity: 1;
    margin: 0;
    padding: 0;
`
const OpenMenuListItems = styled.li`
    margin-bottom: 16px;
    list-style: none;

    a { 
        display: flex;
        font-size: 24px;
        line-height: 32px;
        display: flex;
        align-items: center;
        color: rgb(255, 255, 255);
        font-weight: 400;
        margin: 0px;
        transition: color 0.3s ease 0s;
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
        outline: none;
        box-shadow: none;
    }
`

const Arrow = styled(FaArrowRight)`
    max-width: 100%;
    object-fit: contain;
    padding-left: 5px;
    height: 16px;
    right: -10px;
    transition: all 0.6s cubic-bezier(0.4, 0, 0, 1) 0s;

    &:hover {
        right: 0px;
    }
`

const JoinUsButton = styled.div`
    margin-top: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: rgba(38, 38, 38, 0.48);
    backdrop-filter: blur(80px);
    padding: 24px;
    border-radius: 8px;

    ul {
        margin: 0px;
        padding: 0px;
    }

    li {
        position: relative;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
        margin-bottom: 0px;
        list-style: none;
    }

    a {
        font-size: 16px;
        line-height: 20px;
        display: flex;
        color: rgb(255, 255, 255);
        font-weight: 400;
        margin: 0px;
        transition: color 0.3s ease 0s;
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
        outline: none;
        box-shadow: none;
        color: rgb(153, 153, 153);
    }
`

const MenuItems = () => {
  return (
    <MenuDiv id="menuitems">
        <OpenMenuList>
            <OpenMenuListItems>
                <a href="/home">
                    Home
                    <Arrow />
                </a>
            </OpenMenuListItems>
            <OpenMenuListItems>
                <a href="/about">
                    About Us
                    <Arrow />
                </a>
            </OpenMenuListItems>
            <OpenMenuListItems>
                <a href="/portfolio">
                    Portfolio
                    <Arrow />
                </a>
            </OpenMenuListItems>
        </OpenMenuList>
        <Services />
        <JoinUsButton>
            <ul>
                <li>
                    <a href="/">
                        Join us
                        <Arrow />
                    </a>
                </li>
            </ul>
        </JoinUsButton>
    </MenuDiv>
  )
}

export default MenuItems
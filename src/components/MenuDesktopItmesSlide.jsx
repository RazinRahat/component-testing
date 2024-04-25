import React from 'react'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa6";
import Services from './Services';
import JoinUsButton from './JoinUsButton';

const MenuDesktopItemsDiv = styled.div`
    padding: 0px 28px 28px 28px;
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
    height: 100%;
    opacity: 0;

    ul {
        margin: 0px;
        padding: 0px;
        li {
            list-style: none;
            a {
                color: #FFF !important;
                    font-size: 24px;
                    line-height: 32px;
                    display: flex;

                svg {
                    padding-left: 5px;
                    opacity: 0;
                    transition: .6s all cubic-bezier(0.4, 0, 0, 1) 0s;
                }
            }

                &:hover {
                    svg {
                        opacity: 1;
                        margin-left: 10px;
                    }
                }
            }

        li:not(:nth-last-of-type(1) a) {
            margin-bottom: 16px;
        }
    }

    .menu-desktop__items__slide__subs {
        background-color: rgba(38, 38, 38, .48);
        backdrop-filter: blur(80px);
        padding: 24px;
        border-radius: 8px;

        h4 {
          font-size: 24px;
          line-height: 32px;
          color: #ffffff;
          padding-bottom: 15px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(112, 112, 112, 0.53);
        }

        ul {
            li {
                margin-bottom: 18px !important;
                position: relative;
                font-size: 16px;
                line-height: 20px;
                cursor: pointer;

                img {
                    padding-left: 5px;
                    opacity: 0;
                    transition: .6s all cubic-bezier(0.4, 0, 0, 1) 0s;
                }

                a {
                    font-size: 16px;
                    line-height: 20px;
                }

                a:nth-last-of-type(1) {
                    margin-bottom: 0 !important;
                }

                a:hover {
                    img {
                        opacity: 1;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
`

const MenuDesktopItmesSlide = () => {
  return (
    <MenuDesktopItemsDiv className="menu-desktop__items__slide">
        <ul className="open-menu">
            <li>
                <a to="/home">
                    Home 
                    <FaArrowRight />
                </a>
            </li>
            <li>
                <a to="/about">
                    About Us 
                    <FaArrowRight />
                </a>
            </li>
            <li>
                <a to="/portfolios">
                    Portfolios 
                    <FaArrowRight />
                </a>
            </li>                          
        </ul>
        <Services />
        <JoinUsButton />
    </MenuDesktopItemsDiv>
  )
}

export default MenuDesktopItmesSlide
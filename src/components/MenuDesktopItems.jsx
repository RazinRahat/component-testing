import React, { useEffect } from 'react'
import styled from 'styled-components'
import MenuDesktopItmesSlide from './MenuDesktopItmesSlide'

const MenuDesktopItemsDiv = styled.div`
    width: 340px;
    height: 48px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: rgba(38, 38, 38, .48);
    backdrop-filter: blur(80px);
    border-radius: 8px;
    position: relative;
    z-index: 9;

    .menu-desktop__items__top {
        padding: 15px 28px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        cursor: pointer;

        h4 {
            font-size: 16px;
            line-height: 20px;
            font-weight: 500;
            color: #ffffff;
        }

        .menu-desktop__items__top__hamburger {
            width: 15px;
            height: 10px;
            position: relative;
            margin: 5px 0 auto;

            span {
                height: 1px;
                background-color: #FFF;
                position: absolute;
                right: 0;
                width: 8px;
                transition: 1s all cubic-bezier(0.4, 0, 0, 1) 0s;

                &:nth-of-type(1) {
                    top: 0;
                }

                &:nth-of-type(2) {
                    width: 15px;
                    top: 5px;
                }

                &:nth-of-type(3) {
                    top: 10px;
                    left: 0;
                }

                &:not(:nth-last-of-type(1)) {
                    margin-bottom: 5px;
                }
            }
        }

        &:hover {
            .menu-desktop__items__top__hamburger {
                span {
                     width: 16px;
                }
            }
        }
    }

    .menu-slided {
        .menu-desktop__items__top__hamburger {
            span {
                width: 16px;

                &:nth-of-type(2) {
                    opacity: 0;
                }

                &:nth-of-type(1) {
                    transform: rotate(43deg);
                    transform-origin: left;
                }

                &:nth-of-type(3) {
                    transform: rotate(-45deg) translate(-1px);
                    transform-origin: left;
                }
            }
        }
    }
`

const MenuDesktopItems = () => {
    return (
        <MenuDesktopItemsDiv className='menu-desktop__items'>
            <div className="menu-desktop__items__top">
                <h4>Home</h4>
                <div className="menu-desktop__items__top__hamburger">
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
            <MenuDesktopItmesSlide />
        </MenuDesktopItemsDiv>
    )
}

export default MenuDesktopItems
import React from 'react'
import styled from 'styled-components'
import HamBurgerDesktop from './HamBurgerDesktop'

const MenuWrapper = styled.div`
    cursor: pointer;
    width: 340px;
    height: 48px;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgba(38, 38, 38, 0.48);
    backdrop-filter: blur(80px);
    border-radius: 8px;
    position: relative;
    z-index: 9;
    color: white;
`

const MenuTop = styled.div`
    padding: 15px 28px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;

    h4 {
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      color: rgb(255, 255, 255);
      margin: 0px;
    }
`

const Menu = () => {
  return (
    <MenuWrapper>
        <MenuTop>
            <h4>Home</h4>
            <HamBurgerDesktop />
        </MenuTop>
    </MenuWrapper>
  )
}

export default Menu
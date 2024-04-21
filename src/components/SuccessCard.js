import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SuccessCardCol = styled(Col)`
    @media (max-width: 600px) {
        margin-bottom: 50px;
        padding-top: 0px !important;
        margin-top: 0px !important;
        min-width: 100%;
    }

    @media (max-width: 991px) {
        padding-left: 15px !important;
        padding-right: 15px !important;
    }

    &:nth-child(2n+1) {
        padding-top: 90px;
        padding-right: 60px;
    }

    &:nth-child(2n+2) {
        margin-top: -90px;
        padding-left: 60px;
    }
`

const SuccessCardSection = styled.section`
    position: relative;

    a {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0px;
        bottom: 0px;
        z-index: 2;
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
        color: rgb(153, 153, 153) !important;
    }
`

const SuccessImageContainer = styled.div`
    position: relative;
    padding-top: calc(110.638%);
    border-radius: 20px;
    overflow: hidden;
`

const SuccessImageChildContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    margin: 0px;
    overflow: hidden;

    img {
        width: 100%;
        max-width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        inset: 0px;
        transform: scale(1.01);
        transition: all 1s cubic-bezier(0.4, 0, 0, 1) 0s;
    }
`

const CardContentDiv = styled.div`
    margin-top: 16px;

    ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0px;
        margin-bottom: 15px;
        padding: 0px;
    }

    li {
        color: rgb(153, 153, 153);
        position: relative;
        padding-right: 16px;
        margin-right: 10px;
        list-style: none;
    }

    h4 {
        font-size: 28px;
        font-weight: 500;
        line-height: 32px;
        color: rgb(255, 255, 255);
        margin: 0px;
    }
`

const SuccessCard = () => {
  return (
    <SuccessCardCol sm={6}>
        <SuccessCardSection>
            <a href="/portfolio/reelstar"></a>
            <SuccessImageContainer>
                <SuccessImageChildContainer>
                    <picture>
                        <source media="(max-width:650px)" 
                        srcset="https://bestinbd.com/projects/web/Digitomark/admin/uploads/1711773272P8Lz0.jpg"></source>
                        <img src="https://bestinbd.com/projects/web/Digitomark/admin/uploads/1711773272P8Lz0.jpg" 
                        alt="https://bestinbd.com/projects/web/Digitomark/admin/uploads/1711773272P8Lz0.jpg"></img>
                    </picture>
                </SuccessImageChildContainer>
            </SuccessImageContainer>
            <CardContentDiv>
                <ul>
                    <li>Social Media Marketing</li>
                </ul>
                <h4>ReelStar</h4>
            </CardContentDiv>
        </SuccessCardSection>
    </SuccessCardCol>
  )
}

export default SuccessCard
import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SuccessCardCol = styled(Col)`
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

    /* img:hover { */
        /* scale: 1.01; */
    /* } */
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
        </SuccessCardSection>
    </SuccessCardCol>
  )
}

export default SuccessCard
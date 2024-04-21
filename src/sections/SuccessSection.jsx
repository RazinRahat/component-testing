import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SuccessCard from '../components/SuccessCard'

const SuccessContainerSection = styled.section`
    @media (max-width: 767px) {
        padding-bottom: 100px;
        padding-top: 100px;
    }
`

const SuccessContainer = styled(Container)`
    padding-right: 80px;

    @media (min-width: 1400px) {
        max-width: 1140px;
    }
`

const TitleCol = styled(Col)`
    @media (min-width: 576px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`

const TitleH2 = styled.h2`
    font-size: 120px;
    line-height: 120px;
    color: rgb(255, 255, 255);
    margin: 0px;

    @media (max-width: 1024px) {
        font-size: 48px;
        line-height: 48px;
    }
`

const TitleSpan = styled.span`
    display: block;

    &:nth-child(2) {
        padding-left: 150px;
    }

    @media (max-width: 1024px) {
        padding-left: 0px !important;
    }
`

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
`


const SuccessSection = () => {
  return (
    <SuccessContainerSection>
        <SuccessContainer>
            <Row>
                <TitleCol sm={12}>
                    <TitleH2>
                        <TitleSpan>The Success</TitleSpan>
                        <TitleSpan>of Our Clients</TitleSpan>
                    </TitleH2>
                </TitleCol>
            </Row>
            <Row>
                <SuccessCard />
                {/* <SuccessCardCol sm={6}>
                    <SuccessCardSection>
                        <a href="/portfolio/reelstar"></a>
                    </SuccessCardSection>
                </SuccessCardCol> */}
            </Row>
        </SuccessContainer>
    </SuccessContainerSection>
  )
}

export default SuccessSection
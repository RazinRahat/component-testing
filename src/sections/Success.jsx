import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SuccessCard from '../components/SuccessCard'

const SuccessContainerSection = styled.section`
    padding-bottom: 200px;
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

    @media (max-width: 991px) {
        padding-right: 15px;
    }

    @media (max-width: 767px) {
        max-width: 100%;
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

const Success = () => {
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
                <SuccessCard />
                <SuccessCard />
                <SuccessCard />
                <SuccessCard />
                <SuccessCard />
            </Row>
        </SuccessContainer>
    </SuccessContainerSection>
  )
}

export default Success
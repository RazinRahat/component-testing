import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WhatWeDoButton from '../components/WhatWeDoButton'

const SolutionsSection = styled.section`
    
`

const SolutionsContainer = styled(Container)`
    @media (max-width: 1199px) and (min-width: 768px) {
        max-width: 90%;
        margin: auto;
    }

    @media (max-width: 767px) {
        max-width: 100%;
    }
`

const SolutionsTitleDiv = styled.div`
    margin: 0px 0px 60px;
    position: relative;
    width: fit-content;
`

const SoltuionsTitleH2 = styled.h2`
    font-size: 80px;
    line-height: 80px;
    font-weight: 400;
    color: rgb(255, 255, 255);
    margin: 0px;

    @media (max-width: 767px) {
        font-size: 48px !important;
        line-height: 48px !important;
    }
`

const ButtonsCol = styled(Col)`
    display: flex;
    justify-content: space-between;
`

const ArrowList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0px;
    margin: 0px;
`

const Solutions = () => {
  return (
    <SolutionsSection>
        <SolutionsContainer>
            <Row>
                <Col sm={12}>
                    <SolutionsTitleDiv>
                        <SoltuionsTitleH2>We provide 360° solutions
                             perfect for promoting growth</SoltuionsTitleH2>
                    </SolutionsTitleDiv>
                </Col>
                <ButtonsCol sm={12}>
                    <WhatWeDoButton text="What We Do" />
                    <div>
                        <ArrowList>

                        </ArrowList>
                    </div>
                </ButtonsCol>
            </Row>
        </SolutionsContainer>
    </SolutionsSection>
  )
}

export default Solutions
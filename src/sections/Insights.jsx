import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const InsighsSection = styled.section`
  padding-top: 200px;
  padding-bottom: 200px;

  @media (max-width: 767px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`

const InsightsContainer = styled(Container)`
  @media (max-width: 1199px) and (min-width: 768px) {
    margin: auto;
  }

  @media (max-width: 767px) {
      max-width: 100%;
  }
`

const TitleDiv = styled.div`
  margin: 0px 0px 60px;
  position: relative;
  width: fit-content;

  @media (max-width: 767px) {
    padding: 0px;
  }
`

const TitleH2 = styled.h2`
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

const Insights = () => {
  return (
    <InsighsSection>
      <InsightsContainer>
        <Row>
          <Col sm={12} >
            <TitleDiv>
              <TitleH2>Insights</TitleH2>
            </TitleDiv>
          </Col>
        </Row>
      </InsightsContainer>
    </InsighsSection>
  )
}

export default Insights
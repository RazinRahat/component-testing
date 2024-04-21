import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '../components/Button'

const HomeBannerSection = styled.section`
    height: 100svh;
    background-color: rgb(10, 14, 18);
    padding-top: 140px;
    position: relative;
    overflow: hidden;
`

const HomeBannerContainer = styled(Container)`
    position: relative;
    height: 100%;

    @media (max-width: 1199px) and (min-width: 768px) {
        max-width: 90%;
        margin: auto;
    }

    @media (max-width: 767px) {
        max-width: 100%;
    }
`

const HomeBannerRow = styled(Row)`
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
`

const HomeBannerCol = styled(Col)`
    display: flex;
    flex-wrap: wrap;
`

const HomeBannerColH1 = styled.h1`
    font-size: 80px;
    line-height: 80px;
    color: rgb(255, 255, 255);

    @media (max-width: 991px) {
        font-size: 40px;
        line-height: 40px;
    }
`

const HomeBannerButtonRow = styled(Row)`
    margin-top: 60px;


    @media (max-width: 991px) {
        flex-direction: column-reverse;
        margin-top: 40px;
    }

    p {
        color: rgb(153, 153, 153);
        font-size: 24px;
        line-height: 32px;
        margin-left: auto;
    }
`

const ButtonCol = styled(Col)`
    @media (max-width: 991px) {
        min-width: 100%;
    }
`

const ParagraphCol = styled(Col)`
    @media (max-width: 991px) {
        min-width: 100%;
    }
`

const HomeBanner = () => {
  return (
    <HomeBannerSection>
        <HomeBannerContainer>
            <HomeBannerRow>
                <HomeBannerCol sm={10}>
                    <HomeBannerColH1>
                        <span>
                            We are obsessed with growth, 
                            <i>your </i> growth in particular
                        </span>
                    </HomeBannerColH1>
                </HomeBannerCol>
            </HomeBannerRow>
            <HomeBannerButtonRow>
                <ButtonCol sm={7}>
                    <Button text="Start your digital journey" />
                </ButtonCol>
                <ParagraphCol sm={5}>
                    <p>
                        Digitomark is a growth-first marketing studio with 
                        an obsession for mixing brand and digital media to 
                        boost your business in new and exciting ways.
                    </p>
                </ParagraphCol>
            </HomeBannerButtonRow>
        </HomeBannerContainer>
    </HomeBannerSection>
  )
}

export default HomeBanner
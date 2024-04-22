import React from 'react'
import styled from 'styled-components'

const SolutionCardSection = styled.section`
    width: 100%;
    position: relative;
`

const SolutionCardLink = styled.a`
    position: absolute;
    z-index: 5;
    inset: 0px;
    transition: color 0.3s ease 0s;
    text-decoration: none;

    &:hover {
        text-decoration: none;
        outline: none;
        box-shadow: none;
        color: rgb(153, 153, 153) !important;
    }
`

const ImageContainer = styled.div`
    padding-top: calc(137.037%);
    position: relative;
    border-radius: 15px;
    overflow: hidden;
`

const ImageWrapper = styled.div`
position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    margin: 0px;
    overflow: hidden;   
`

const SolutionImage = styled.img`
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0px;
    transition: all 1.4s ease 0s;
`

const ContentWrapper = styled.div`
    margin-top: 30px;
`

const ContentTitle = styled.h4`
    text-align: left;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    color: rgb(255, 255, 255);
    margin: 0px;
    margin-bottom: 15px;
`

const ContentParagraph = styled.p`
    text-align: left;
    font-size: 12px;
    line-height: 16px;
    color: rgb(153, 153, 153);
    font-weight: 400;
    margin: 0px;
`

const SolutionCard = () => {
  return (
    <SolutionCardSection>
        <SolutionCardLink href="/services/organic-marketing"></SolutionCardLink>
        <ImageContainer>
            <ImageWrapper>
                <picture>
                    <source media="(max-width:650px)" srcset="https://bestinbd.com/projects/web/Digitomark/admin/uploads/1709465512QpHtW.jpg" />
                    <SolutionImage src="https://bestinbd.com/projects/web/Digitomark/admin/uploads/1709465512QpHtW.jpg" alt="https://bestinbd.com/projects/web/Digitomark/admin/uploads/1709465512QpHtW.jpg" />
                </picture>
            </ImageWrapper>
        </ImageContainer>
        <ContentWrapper>
            <ContentTitle>
                Organic Marketing
            </ContentTitle>
            <ContentParagraph>
                Organic Marketing can help you abridge the gap 
                between expansion, lead generation and goal conversion. 
            </ContentParagraph>
        </ContentWrapper>
    </SolutionCardSection>
  )
}

export default SolutionCard
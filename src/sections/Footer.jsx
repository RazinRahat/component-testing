import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterContainer = styled(Container)`
    @media (max-width: 1199px) and (min-width: 768px) {
        max-width: 90%;
        margin: auto;
    }

    @media (max-width: 767px) {
        max-width: 100%;
    }
`

const TitleDiv = styled.div`
    margin: 0px 0px 120px;
    position: relative;
    width: fit-content;
`

const TitleH2 = styled.h2`
    font-size: 80px;
    line-height: 80px;
    font-weight: 400;
    color: rgb(255, 255, 255);

    @media (max-width: 991px) {
        font-size: 48px;
        line-height: 48px;
    }

    @media (max-width: 767px) {
        font-size: 48px !important;
        line-height: 48px !important;
    }
`

const TitleLink = styled.a`
    font-size: 32px;
    line-height: 36px;
    color: rgb(255, 255, 255);
    display: flex;
    width: fit-content;
    transition: color 0.3s ease 0s;
    text-decoration: none;

    &:hover {
        text-decoration: none;
        outline: none;
        box-shadow: none;
        color: rgb(153, 153, 153);
    }
`

const SocialsList = styled.ul`
    margin: 0px;
    padding: 0px;

    @media (max-width: 575px) {
        display: flex;
        margin-top: 50px;
    }
`

const SocialLink = styled.li`
    height: 35px;
    width: 35px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    margin-left: auto;
    margin-bottom: 15px;
    overflow: hidden;
    list-style: none;

    @media (max-width: 575px) {
        display: flex;
        margin: 0px 15px;
    }

    a {
        display: flex;
        height: 100%;
        width: 100%;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }

    a:hover {
        text-decoration: none;
        outline: none;
        box-shadow: none;
        color: rgb(153, 153, 153);
        font-weight: 400;
        margin: 0px; 
    }

    a::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        top: 100%;
        left: 0px;
        right: 0px;
        background-color: rgb(153, 153, 153);
        border-radius: 50%;
        transition: all 0.6s cubic-bezier(0.4, 0, 0, 1) 0s;
    }

    a:hover::after {
        top: 0px;
    }
`

const FacebookIcon = styled(FaFacebookF)`
    color: rgb(255, 255, 255);
    height: 12px;
    position: relative;
    z-index: 2;
`
const TwitterIcon = styled(FaXTwitter)`
    color: rgb(255, 255, 255);
    height: 12px;
    position: relative;
    z-index: 2;
`
const LinkedinIcon = styled(FaLinkedinIn)`
    color: rgb(255, 255, 255);
    height: 12px;
    position: relative;
    z-index: 2;
`
const InstagramIcon = styled(FaInstagram)`
    color: rgb(255, 255, 255);
    height: 12px;
    position: relative;
    z-index: 2;
`
const YoutubeIcon = styled(FaYoutube)`
    color: rgb(255, 255, 255);
    height: 12px;
    position: relative;
    z-index: 2;
`

const FooterMenu = styled.div`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid rgb(255, 255, 255);


    @media (max-width: 575px) {
        margin-top: 40px;
        padding-top: 40px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0px;
        padding: 0px;
    }

    a {
        color: rgb(255, 255, 255);
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
        outline: none;
        box-shadow: none;
        color: rgb(153, 153, 153);
    }
`

const FooterMenuLink = styled.li`
    margin-right: 40px;
    margin-bottom: 10px;
    list-style: none;

    @media (max-width: 575px)
    /* &:not(:nth-last-of-type(1)) */
    {
        margin-bottom: 30px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`

const FooterCopyRight = styled.div`
    margin-top: 50px;
    margin-bottom: 60px;

    p {
        font-size: 12px;
        line-height: 16px;
        color: rgb(153, 153, 153);
        font-weight: 400;
        margin: 0px;
    }
`

const Footer = () => {
  return (
    <FooterContainer>
        <Row>
            <Col sm={9}>
                <TitleDiv>
                    <TitleH2>
                        Let's talk about
                        <br></br>
                        your next project
                    </TitleH2>
                </TitleDiv>
                <TitleLink href="tel:+88 014 0707 1199">+88 014 0707 1199</TitleLink>
                <TitleLink href="mailto:info@digitomark.com">info@digitomark.com</TitleLink>
            </Col>
            <Col sm={3}>
                <SocialsList>
                    <SocialLink>
                        <a href="https://www.facebook.com/">
                            <FacebookIcon />
                        </a>
                    </SocialLink>
                    <SocialLink>
                        <a href="https://www.twitter.com/">
                            <TwitterIcon />
                        </a>
                    </SocialLink>
                    <SocialLink>
                        <a href="https://www.linkedin.com/">
                            <LinkedinIcon />
                        </a>
                    </SocialLink>
                    <SocialLink>
                        <a href="https://www.instagram.com/">
                            <InstagramIcon />
                        </a>
                    </SocialLink>
                    <SocialLink>
                        <a href="https://www.youtube.com/">
                            <YoutubeIcon />
                        </a>
                    </SocialLink>
                </SocialsList>
            </Col>
            <Col sm={12}>
                <FooterMenu>
                    <ul>
                        <FooterMenuLink>
                            <a href="/">Organic Marketing</a>
                        </FooterMenuLink>
                        <FooterMenuLink>
                            <a href="/">Paid Marketing</a>
                        </FooterMenuLink>
                        <FooterMenuLink>
                            <a href="/">Creative Design</a>
                        </FooterMenuLink>
                        <FooterMenuLink>
                            <a href="/">Web Design</a>
                        </FooterMenuLink>
                        <FooterMenuLink>
                            <a href="/">Copy Writing</a>
                        </FooterMenuLink>
                        <FooterMenuLink>
                            <a href="/">Visual Arts</a>
                        </FooterMenuLink>
                    </ul>
                </FooterMenu>
                <FooterCopyRight>
                    <p>
                    © 2024 Digitomark Limited
                    </p>
                </FooterCopyRight>
            </Col>
        </Row>
    </FooterContainer>
  )
}

export default Footer
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactUsButton from '../components/ContactUsButton';
import LogoDesktop from '../components/LogoDesktop';
import MenuDesktopItems from '../components/MenuDesktopItems';
import {gsap, TimelineLite} from "gsap";
import NavbarMobile from './NavbarMobile';

const NavbarDesktop = styled.section`
    position: fixed;
    width: 100%;
    left: 0;
    top: 30px;
    z-index: 9;
    @media (max-width: 991px) {
        display: none;
    }

    .menu-desktop__contact {
        display: flex;
        justify-content: flex-end;
    }

    .menu-slided {
        .menu-desktop__items__top__hamburger {
            span {
                width: 16px;

                &:nth-of-type(2) {
                    opacity: 0;
                }

                &:nth-of-type(1) {
                    transform: rotate(43deg);
                    transform-origin: left;
                }

                &:nth-of-type(3) {
                    transform: rotate(-45deg) translate(-1px);
                    transform-origin: left;
                }
            }
        }
    }
`

const DesktopContainer = styled(Container)`
    @media (max-width: 1199px) and (min-width: 768px) {
        max-width: 90%;
        margin: auto;
    }
`

const DesktopRow = styled(Row)`
    .d-flex {
        display: flex !important;
    }
`

const Navbar = () => {

    useEffect(() => {
        // main menu toggle down
        const tl = gsap.timeline();
        const ti = gsap.timeline();
        const tl2 = gsap.timeline();
        document.querySelector('.menu-desktop__items__top').addEventListener('click', function () {
            if (!document.querySelector('.menu-desktop').classList.contains("menu-slided")) {
                document.querySelector('.menu-desktop').classList.add("menu-slided")
                console.log(document.querySelector('.menu-slided'))
                tl.to(".menu-desktop__items__slide", .4, {
                    opacity: 1
                }).to(".menu-desktop__items", .4, {
                    height: "auto",
                    // overflow: "auto",

                }).to(".open-menu, .menu-desktop__items__slide__subs, .as-join", 1, {
                    opacity: 1,
                    y: 0,
                    stagger: .15,
                    ease: "cubic-bezier(.22,.6,.36,1)"
                }, "-=.2")
            } else {
                tl.to(".menu-desktop__items__slide", .4, {
                    opacity: 0
                }).to(".open-menu, .menu-desktop__items__slide__subs, .as-join", .3, {
                    opacity: 0,
                    y: "25px",
                    stagger: .1,
                    ease: "cubic-bezier(.22,.6,.36,1)"
                },).to(".menu-desktop__items", .4, {
                    height: "48px"
                }, "-=.5")
                document.querySelector('.menu-desktop').classList.remove("menu-slided")
            }
        });

        // close manu on outside click
        window.addEventListener("click", (e) => {
            if (document.querySelector('.menu-desktop').classList.contains("menu-slided")) {
                if (!e.target.matches(".menu-desktop__items, .menu-desktop__items div,.menu-desktop__items span,.menu-desktop__items__slide,.menu-desktop__items__top, .menu-desktop__items__top h4,.menu-desktop__items__slide ul,.menu-desktop__items__slide li,.menu-desktop__items__slide,.menu-desktop__items__slide img,.as-service-sub,.menu-desktop__items__slide__subs:not(.as-join),.menu-desktop__items__slide__subs h4,.menu-desktop__items__inner-sub, .menu-desktop__items__inner-sub ul, .menu-desktop__items__inner-sub li")) {
                    ti.to(".menu-desktop__items__inner-sub ul li", .1, {
                        y: "20px",
                        opacity: 0,
                    }).to(".menu-desktop__items__inner-sub ul", {
                        display: "none",
                    }, '-=.2').to('.menu-desktop__items__inner-sub', {
                        width: '0px',
                        opacity: 0,
                        display: "none"
                    }, '-=.3').to(".open-menu, .menu-desktop__items__slide__subs, .as-join", .3, {
                        opacity: 0,
                        y: "25px",
                        stagger: .1,
                        ease: "cubic-bezier(.22,.6,.36,1)"
                    }, '-=.5').to(".menu-desktop__items", .4, {
                        height: "48px"
                    }, "-=.6")
                    document.querySelector('.menu-desktop').classList.remove("menu-slided")
                }
            }

        })


        // // service sub menu action
        const getAllSubClick = document.querySelectorAll('.as-service-sub ul li');
        const getAllSub = document.querySelectorAll('.menu-desktop__items__inner-sub ul');
        getAllSubClick.forEach((e, i) => {
            e.addEventListener('click', function () {

                tl2.to(getAllSub, 0, {
                    display: 'none'
                }).to(".menu-desktop__items__inner-sub li", .2, {
                    y: 20,
                    opacity: 0,
                }).to('.menu-desktop__items__inner-sub', {
                    display: "block",
                    width: '340px',
                    opacity: 1
                }).to(getAllSub[i], {
                    display: "block",
                }, '-=.2').to(getAllSub[i].querySelectorAll('li'), {
                    y: 0,
                    opacity: 1,
                    stagger: .1
                }, '-=.4')
            });

        })

    }, [])

    return (
        <>
            <NavbarDesktop className='menu-desktop'>
                <DesktopContainer>
                    <DesktopRow>
                        <Col sm={6} className={"d-flex"}>
                            <LogoDesktop />
                            <MenuDesktopItems />
                        </Col>
                        <Col sm={6} className={"menu-desktop__contact"}>
                            <ContactUsButton />
                        </Col>
                    </DesktopRow>
                </DesktopContainer>
            </NavbarDesktop>
            <NavbarMobile />
        </>
    )
}

export default Navbar
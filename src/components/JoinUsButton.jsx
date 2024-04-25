import React from 'react'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa6";

const JoinUsButtonDiv = styled.div`
    margin-top: 16px;
    padding-top: 12px;
    padding-bottom: 12px;

    li {
        margin-bottom: 0px !important;

        a {
            position: relative;
            text-decoration: none;

                svg {
                opacity: 1;
                right: 0;
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto 0 !important;
            }

            a:hover {
                svg {
                    right: -10px;
                }
            }
        }
    }
`

const JoinUsButton = () => {
  return (
    <JoinUsButtonDiv className="menu-desktop__items__slide__subs as-join">
        <ul>
            <li>
                <a href="/career">
                    Join us 
                    <FaArrowRight />
                </a>
            </li>
        </ul>
    </JoinUsButtonDiv>
  )
}

export default JoinUsButton
import React from 'react'
import styled from 'styled-components'
import contactbtn from '../images/contactbtn.svg'

const ContactUsButtonMobileItem = styled.li`
    text-transform: capitalize;
    display: block;
    width: 100%;
    list-style: none;
    margin-bottom: 50px;
`

const ContactUsButtonMobileLink = styled.a`
    width: 800px;
    display: block;
    font-weight: 400;
    color: rgb(255, 255, 255);
    margin: 0px;
    border-radius: 8px;

    img {
        max-width: calc(-30px + 100vw);
        object-fit: contain;
    }
`

const ContactUsButtonMobile = () => {
  return (
    <ContactUsButtonMobileItem>
        <ContactUsButtonMobileLink>
            <img src={contactbtn} alt="Contact Us" />
        </ContactUsButtonMobileLink>
    </ContactUsButtonMobileItem>
  )
}

export default ContactUsButtonMobile
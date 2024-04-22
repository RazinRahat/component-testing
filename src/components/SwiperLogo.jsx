import React from 'react'
import style from 'styled-components'

const SwiperLogoWrapper = style.li`
    height: 80px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    list-style: none;
    
    img {
        max-width: 100%;
        object-fit: contain;
    }
`

const SwiperLogo = () => {
  return (
    <SwiperLogoWrapper>
        <img src="https://bestinbd.com/projects/web/Digitomark/admin/uploads/gallery/banner-logo-gallery/1711382992NkKTp.svg" alt="" />
    </SwiperLogoWrapper>
  )
}

export default SwiperLogo
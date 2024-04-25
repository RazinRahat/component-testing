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
  const logoArray = ["1711382992NkKTp", "1711382844ZuV7X", "17113830936T5tK", "1711383554dRpeM", "17113832049FGMi", "1711383605gThBT"]
  const randomIndex = Math.floor(Math.random() * logoArray.length);
  const randomElement = logoArray[randomIndex];
  const src = "https://bestinbd.com/projects/web/Digitomark/admin/uploads/gallery/banner-logo-gallery/" + randomElement + ".svg";
  return (
    <SwiperLogoWrapper>
        <img src={src} alt="" />
    </SwiperLogoWrapper>
  )
}

export default SwiperLogo
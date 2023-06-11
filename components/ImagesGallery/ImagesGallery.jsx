'use client'

import '@splidejs/react-splide/css';
import Image from 'next/image'
import s from './ImagesGallery.module.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'

export default function ImagesGallery({images}) {

  return (
  <Splide className={s.slider}>
    {images.map((item, index)=>
      <SplideSlide key={index} className={s.slide}>
        <Image src={`/${item}.jpg`} key={index + 3} fill={true} alt='Product image'/>
      </SplideSlide>
    )}
  </Splide>
)
    
}

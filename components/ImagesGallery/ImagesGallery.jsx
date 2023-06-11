'use client'

import '@splidejs/react-splide/css';
import Image from 'next/image'
import s from './ImagesGallery.module.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'

export default function ImagesGallery({images}) {

  console.log(images)

  return (
  <Splide className={s.slider}>
    {images.map((item)=>
      <SplideSlide key={crypto.randomUUID} className={s.slide}>
        <Image src={`/${item}.jpg`} key={crypto.randomUUID} fill={true} alt='Product image'/>
      </SplideSlide>
    )}
  </Splide>
)
    
}

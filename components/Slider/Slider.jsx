'use client'
import '@splidejs/react-splide/css';
import { items } from './constants'
import Item from './Item/Item'
import { Splide, SplideSlide } from '@splidejs/react-splide'

export default function Slider() {

  return (
    <Splide>
      {items.map(item=>
      <SplideSlide key={item.name}>
        <Item title={item.title} image={item.image} key={item.name} link={item.name}/>
      </SplideSlide>
        )}
    </Splide>
  )
}

'use client'

import ImagesGallery from '@/components/ImagesGallery/ImagesGallery';
import { find } from '../../find';
import s from './page.module.scss'
import Additional from '@/components/Additional/Additional';
import dynamic from 'next/dynamic';
import { categories } from '../../data';


// export async function generateMetadata ({params}) {

//   const info = find(params.product, )
//   return {title: info.metatitle, description: info.metadescription}

// }

export default function ProductPage({params}) {

  const category = find(params.category, categories)
  const item = find(params.product, category.items)

  console.log(item)

  return (
    <div className='container'>
      <ImagesGallery className={s.images} images={item.additional} title={item.name}/>
      <div className={s.row}>
        <div className={s.content}>
          <h1 className={s.title}>{item.name}</h1>
          <p className={s.text}>{item.description}</p>
        </div>  
        <Additional className={s.additional}/>
      </div>
    </div>
  )
}

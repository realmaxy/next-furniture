import ImagesGallery from '@/components/ImagesGallery/ImagesGallery';
import { find } from '../find';
import s from './page.module.scss'
import Additional from '@/components/Additional/Additional';


export async function generateMetadata ({params}) {

  const info = find(params.id)
  return {title: info.metatitle, description: info.metadescription}

}

export default function ProductPage({params}) {
  const info = find(params.id)
  return (
    <div className='container'>
      <ImagesGallery className={s.images} images={info.additional} title={info.name}/>
      <div className={s.row}>
        <div className={s.content}>
          <h1 className={s.title}>{info.name}</h1>
          <p className={s.text}>{info.description}</p>
        </div>  
        <Additional className={s.additional}/>
      </div>
    </div>
  )
}

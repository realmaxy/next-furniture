import Link from 'next/link'
import s from './Item.module.scss'

export default function Item({title, link, image}) {
  return (
    <div className={s.item} style={{
      background: `url("/${image}.jpg")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <div className={s.section}>
        <h2 >Продажа мебели в Краснодаре по ценам фабрики</h2>
      </div>
      <h2 className={s.name}>{title}</h2>
      <Link href={`/products/${link}`} className={s.link} >Смотреть</Link>
    </div>
  )
}

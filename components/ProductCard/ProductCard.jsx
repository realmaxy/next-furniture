import Link from 'next/link'
import s from './ProductCard.module.scss'

export default function ProductCard({name, link, image}) {
  return (
    <Link href={`/products/${link}`}  className={s.card} style={{
      background: `url("/${image}.png")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <div className={s.block}>
        <h2 className={s.title}>{name}</h2>
      </div>
    </Link>
  )
}

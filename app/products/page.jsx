import ProductCard from "@/components/ProductCard/ProductCard";
import { cards } from "./data";
import s from './page.module.scss'

export default function page() {
  
  return (
    <div className="container">
      <div className={s.products}>
        {cards.map((item, index) => <ProductCard name={item.name} key={index} link={item.id} image={item.image}/>)}
      </div>
    </div>
  )
}

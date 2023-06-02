import ProductCard from "@/components/ProductCard/ProductCard";
import s from './page.module.scss'
import { categories } from "./data";

export default function page() {
  
  return (
    <div className="container">
      <h2 className={s.title}>ПРОДАЖА МЕБЕЛИ В КРАСНОДАРЕ ПО ЦЕНАМ ФАБРИКИ</h2>
      <div className={s.products}>
        {categories.map((item, index) => <ProductCard name={item.name} key={index} link={item.id} image={item.image} isProduct={true} />)}
      </div>
    </div>
  )
}

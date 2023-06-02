import ProductCard from "@/components/ProductCard/ProductCard";
import s from './page.module.scss'
import { categories } from "./data";

export default function page() {
  
  return (
    <div className="container">
      <div className={s.products}>
        {categories.map((item, index) => <ProductCard name={item.name} key={index} link={item.id} image={item.image}/>)}
      </div>
    </div>
  )
}

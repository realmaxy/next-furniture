'use client'

import ProductCard from "@/components/ProductCard/ProductCard";
import s from './page.module.scss'
import { categories } from "../data";
import { find } from "../find";

export default function page({params}) {

  const category = find(params.category, categories)
  const items = category.items

  return (
    <div className="container">
      <div className={s.products}>
        {items.map((item, index) => <ProductCard name={item.name} key={index} link={item.id} image={item.image} isProduct={false} category={category.id}/>)}
      </div>
    </div>
  )
}

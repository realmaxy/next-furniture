import { cards } from "./products/data"

export default async function sitemap() {
  const routes = ['', 'about', 'products'].map(route => ({
    url: `http://localhost3000:${route}`,
    lastModified: new Date().toISOString()
  }))

  const products = cards.map((product)=> ({
    url: `http://localhost3000:/products/${product.id}`,
    lastModified: new Date().toISOString()
  }))

  return [...routes, ...products]
}
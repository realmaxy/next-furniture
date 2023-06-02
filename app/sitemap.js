import { categories, livingrooms, bedrooms, offices, kitchens, hallways } from "./products/data"

export default async function sitemap() {
  const routes = ['', 'about', 'products'].map(route => ({
    url: `http://localhost3000:${route}`,
    lastModified: new Date().toISOString()
  }))

  const categoriesPages = categories.map((category)=> ({
    url: `http://localhost3000:/products/${category.id}`,
    lastModified: new Date().toISOString()
  }))
 
  const livingroomsPages = livingrooms.map((item) => ({
    url: `http://localhost3000:/products/${item.category}/${item.id}`,
    lastModified: new Date().toISOString()
  }))

  const bedroomsPages = bedrooms.map((item) => ({
    url: `http://localhost3000:/products/${item.category}/${item.id}`,
    lastModified: new Date().toISOString()
  }))

  const officesPages = offices.map((item) => ({
    url: `http://localhost3000:/products/${item.category}/${item.id}`,
    lastModified: new Date().toISOString()
  }))

  const kitchensPages = kitchens.map((item) => ({
    url: `http://localhost3000:/products/${item.category}/${item.id}`,
    lastModified: new Date().toISOString()
  }))

  const hallwaysPages = hallways.map((item) => ({
    url: `http://localhost3000:/products/${item.category}/${item.id}`,
    lastModified: new Date().toISOString()
  }))

  return [...routes, ...categoriesPages, ...livingroomsPages, ...bedroomsPages, ...kitchensPages, ...officesPages, ...hallwaysPages ]
}
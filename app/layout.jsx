import Header from '@/components/Header/Header'
import '../sass/globals.scss'

export const metadata = {
  title: 'Кубань Мебель — Производство качественной мебели по ценам фабрики.',
  description: 'Качественная мебель для дома и офиса в Краснодаре. Широкий выбор диванов, кроватей, столов и другой мебели по ценам фабрики.', 
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}

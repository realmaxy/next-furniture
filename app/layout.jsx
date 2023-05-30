import Header from '@/components/Header/Header'
import '../sass/globals.scss'
import Head from 'next/head'

export const metadata = {
  title: 'Кубань Мебель — Производство качественной мебели по ценам фабрики.',
  description: 'Качественная мебель для дома и офиса в Краснодаре. Широкий выбор диванов, кроватей, столов и другой мебели по ценам фабрики.', 
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <link rel='shortcut icon' href='../public/favicon.ico'/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://next-furniture-lime.vercel.app/"/>
        <meta property="og:title" content="Кубань Мебель — Производство качественной мебели по ценам фабрики."/>
        <meta property="og:description" content="Качественная мебель для дома и офиса в Краснодаре. Широкий выбор диванов, кроватей, столов и другой мебели по ценам фабрики."/>
        <meta property="og:image" content=""/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://next-furniture-lime.vercel.app/"/>
        <meta property="twitter:title" content="Кубань Мебель — Производство качественной мебели по ценам фабрики."/>
        <meta property="twitter:description" content="Качественная мебель для дома и офиса в Краснодаре. Широкий выбор диванов, кроватей, столов и другой мебели по ценам фабрики."/>
        <meta property="twitter:image" content=""/>
      </Head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}

import Image from 'next/image'
import s from './Header.module.scss'
import Link from 'next/link'
import logo from '../../public/logo.svg'
import icon from '../../public/phoneIcon.svg'

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.top}>
        <Link href='/' className={s.logoLink}>
          <Image className={s.logo} src={logo} width={106} height={82} alt='logo'/>
        </Link>
        <div className={s.phone}>
          <Image src={icon} width={25} height={25} alt='phone'/>
          <div className={s.textBlock}>
            <h3 className={s.title}>Наш номер</h3>
            <a href='tel:89180797222' className={s.text}>8 (918) 079-72-22</a>
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <Link href='/products' className={s.link}>Наша продукция</Link>
        <Link href='/about' className={s.link}>О нас</Link>
      </div>
    </header>
  )
}

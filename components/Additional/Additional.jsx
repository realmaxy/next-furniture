import s from './Additional.module.scss'

export default function Additional({colors}) {
  return (
    <div className={s.row}>
      <p className={s.color}><span>{colors}</span>{(colors > 1)?'цвета':'цвет'}</p>
    </div>
  )
}

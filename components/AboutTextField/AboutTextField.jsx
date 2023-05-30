import s from './AboutTextField.module.scss'

export default function AboutTextField({title, text, index}) {

  if(index === 0){
    return (
      <div className={s.large} >
        <h2 className={s.title}>{title}</h2>
        <p className={s.text}>{text}</p>
      </div>
    )
  }
  else {
    return (
      <div className={s.small} >
        <h2 className={s.title}>{title}</h2>
        <p className={s.text}>{text}</p>
      </div>
    )
  }
}

import AboutTextField from "@/components/AboutTextField/AboutTextField"
import { about } from "./data"
import s from './page.module.scss'

export default function page() {

  return (
    <div className={s.page}>
      <div className="container">
        {about.map((item, index) => <AboutTextField key={index} text={item.text} title={item.title} index={index}/>)}
      </div>
    </div>
  )
}

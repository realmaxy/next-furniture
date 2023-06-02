import s from './ImagesGallery.module.scss'

export default function ImagesGallery({images, title}) {
  if(images.length === 2) {
    return (
      <div className={s.row}>
        <div className={s.big} style={{
          background: `url("/${images[0]}.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
          <div className={s.block}>
            <h2 className={s.title}>{title}</h2>
          </div>
        </div>
        <div className={s.small} style={{
          background: `url("/${images[1]}.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        </div>
      </div>
    )
  }
  else if(images.length === 3) {
    return (
      <div className={s.row}>
        <div className={s.big} style={{
          background: `url("/${images[0]}.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
          <div className={s.block}>
            <h2 className={s.title}>{title}</h2>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.first} style={{
            background: `url("/${images[1]}.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
          </div>
          <div className={s.second} style={{
            background: `url("/${images[2]}.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className={s.one} style={{
        background: `url("/${images[0]}.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className={s.block}>
          <h2 className={s.title}>{title}</h2>
        </div>
      </div>
    )
  }
}

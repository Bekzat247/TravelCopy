import css from "./preloader.module.css"

function Preloader() {
    const gif = "https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
  return (
    <img src={gif} alt="" className={css.img}/>
  )
}

export default Preloader
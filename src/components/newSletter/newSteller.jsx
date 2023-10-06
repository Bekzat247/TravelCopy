import css from './newSletter.module.css'
import arrowSvg from '../../pages/landingPage/landingImage/latestPostImage/iconbase.svg'
function NewSteller() {
  return (
    <div className={css.newSletter}>
        <div>
            <h1>Newsletter</h1>
            <p>Sign up now to receive hot special offers <br /> and information about the best tours! </p>
            <div>
                <input type="text" placeholder='Enter your email'/>
                <button><img src={arrowSvg} alt="" /></button>  
            </div>
        </div>
    </div>  
  )
}

export default NewSteller
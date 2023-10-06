import css from './Footer.module.css'
import logoSvg from './FooterImage/Logo (1).svg'
import messageSvg from './FooterImage/Message.svg'
import mapMakerSvg from './FooterImage/Map marker.svg'
import arrowBucketSvg from '../../pages/landingPage/landingImage/latestPostImage/iconbase.svg'
import facebookSvg from './FooterImage/ic_facebbook_outlined.svg'
import instSvg from './FooterImage/ic_instagram_outlined.svg'
import IgSvg from './FooterImage/iconbase.svg'
import twitterSvg from './FooterImage/iconbase (2).svg'
import { Link } from 'react-router-dom'




function Footer() {
  return (
    <div className={css.wrapper}>
        <img src={logoSvg} alt="" />
        <div className={css.info}>
            <p>The starting point for your next project based on easy-to-customize Material-UI © helps you build apps faster and better.</p>
            <div className={css.icnBtn}>
                <button><img src={facebookSvg} alt="" /></button>
                <button><img src={instSvg} alt="" /></button>
                <button><img src={IgSvg} alt="" /></button>
                <button><img src={twitterSvg} alt="" /></button>
            </div>

            <div className={css.email}>
                <div>
                    <img src={messageSvg} alt="" />
                    <p>info@example.com</p>
                </div>
                <div>
                    <img src={mapMakerSvg} alt="" />
                    <p>655 Schaefer Dale</p>
                </div>
            </div>
            <div>
                <input type="text" placeholder='Email addres'/>
                <button><img src={arrowBucketSvg} alt="" /></button>
            </div>
        </div>
        <div className={css.icnBtn}>
            <button><img src={facebookSvg} alt="" /></button>
            <button><img src={instSvg} alt="" /></button>
            <button><img src={IgSvg} alt="" /></button>
            <button><img src={twitterSvg} alt="" /></button>
        </div>
        <div className={css.lastDiv}>
            <p>© 2021. All rights reserved</p>
            <div>
                <Link to='/contacts'>Help center</Link>
                <Link to='/aboutUs'>Team of Service</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
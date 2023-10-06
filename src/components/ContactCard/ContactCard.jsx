import css from './ContactCard.module.css'
import cardImg from './ContactImg/IMG.png'
import icPinSvg from './ContactImg/ic_pin.svg'
import LinkOutLineSvg from './ContactImg/ic_external_link_outline.svg'
import phoneSvg from './ic_mobile.svg'
import messageSvg from './ic_email.svg'




function ContactCard() {
  return (
    <div className={css.cardMain}>
        <div className={css.ImgDiv}>
            <img src={cardImg} alt="" />
        </div>
        <div className={css.restContent}>
            <h5>Portugal</h5>
            <div>
                <div>
                    <div>
                        <img src={icPinSvg} alt="" />
                        <p>Addres</p>
                        <img src={LinkOutLineSvg} alt="" />
                    </div>
                    <span>2118 Thornridge Cir. Syracuse, Connecticut 35624</span>
                </div>
                <div>
                    <div>
                        <img src={phoneSvg} alt="" />
                        <p>Phone</p>
                    </div>
                    <span>(217) 555-0113</span>
                </div>
                <div>
                    <div>
                        <img src={messageSvg} alt="" />
                        <p>Email</p>
                    </div>
                    <span>curtis.weaver@example.com</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactCard
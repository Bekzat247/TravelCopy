import css from './compleated.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import logoSvg from '../../components/Footer/FooterImage/Logo (1).svg'
import loupe from '../../images/iconbase (5).svg'
import globus from '../../images/iconbase (6).svg'
import burgerMenu from '../../components/Header/iconbase (11).svg'
import darkBurgerMenu from '../../components/Header/iconbase (12).svg'
import imgSvg from './compleatedImage/IMG (1).png'
import starSvg from '../../pages/detailsPage/detailsImage/OverViewTextImage/ic_star_fill.svg'
import avatarSvg from '../../pages/detailsPage/detailsImage/img user1.png'
import calendarSvg from './compleatedImage/ic_calendar.svg'
import usersSvg from './compleatedImage/ic_users_group.svg'
import cubeSvg from './compleatedImage/ic_cube_outline.svg'
import reciept from './compleatedImage/ic_receipt.svg'
import creditCardSvg from './compleatedImage/ic_credit_card.svg'
import btnImgSvg from './compleatedImage/iconbase (14).svg'
import arrowSvg from '../../pages/listPage/listImage/iconbase (4).svg'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Api from '../Api/Api'




function Compleated() {
    const navigate = useNavigate()
    const params = useParams()
    const [isLoading1, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [comp, setComp] = useState([])
    useEffect(() => {
        const fetchData = () => {
          Api.getHouseById(params.id)
            .then(resp => {
              setComp(resp.data)
              console.log(resp.data);
            })
            .finally(setLoading(false))
            .catch((e) => setError(e))
        } 
        fetchData()
        
      }, [])
    if(isLoading1){
        return <div>
            no content in there
        </div>
    }
    if(error){
        return <div>
            oops website was crashed
        </div>
    }
  return (
    <div>
        <Header color={'black'} logosvg={logoSvg} background={'#212B36'} secondColor={'white'} loupe={loupe} globus={globus} burgerMenu = {darkBurgerMenu}/>
        <div className={css.Compleated}>
            <img src={comp.image} alt="" />
            <div>
                <h1>Completed 🎉</h1>
                <div className={css.CompleatedUser}>
                    <div>
                        <h2>{comp.name}</h2>
                        <div>
                            <img src={starSvg} alt="" />
                            <p>{comp.review}</p>
                            <span>{`(${comp.reviewLength} reviews)`}</span>
                        </div>
                    </div>
                    <div>
                        <img src={comp.avatar} alt="" />
                        <div>
                            <span>Tour Guide By</span>
                            <p>{comp.by}</p>
                        </div>
                    </div>
                </div>
                <div className={css.CompleatedDetails}>
                    <h2>Booking Details</h2>
                    <div>
                        <div>
                            <img src={calendarSvg} alt="" />
                            <span>Departure Dau</span>
                        </div>
                        <p>{comp.data}</p>
                    </div>
                    <div>
                        <div>
                            <img src={usersSvg} alt="" />
                            <span>Guest</span>
                        </div>
                        <p>{comp.guestLength} Guest</p>
                    </div>
                    <div className={css.nullDiv}></div>
                    <div>
                        <div>
                            <img src={cubeSvg} alt="" />
                            <span>Booking code</span>
                        </div>
                        <p>{comp.bookingCode}</p>
                    </div>
                    <div>
                        <div>
                            <img src={calendarSvg} alt="" />
                            <span>Booking day</span>
                        </div>
                        <p>{comp.bookingDate}</p>
                    </div>
                    <div>
                        <div>
                            <img src={reciept} alt="" />
                            <span>Total</span>
                        </div>
                        <p>${comp.servicePrice}</p>
                    </div>
                    <div>
                        <div>
                            <img src={creditCardSvg} alt="" />
                            <span>Paymen method</span>
                        </div>
                        <p>Paypal</p>
                    </div>
                </div>
                <div className={css.CompleatedBtns}>
                    <button onClick={()=>{navigate('/')}}><img src={arrowSvg} alt="" /><p>Back home</p></button>
                    <button> <img src={btnImgSvg} alt="" /> Download Invoice</button>

                </div>
            </div>
        </div>  
        <Footer/>
    </div>
  )
}

export default Compleated
import css from './Card.module.css'
import likeSvg from '../../pages/landingPage/landingImage/featuredImage/iconbase.svg'
import clock2Svg from '../../pages/landingPage/landingImage/featuredImage/ic_clock.svg'
import star2Svg from '../../pages/landingPage/landingImage/featuredImage/ic_star_fill.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteHouses } from '../../pages/redux/AsuncThunk'






function Card({ price, id, image, review, days, nights, country, title}) {
    const navigate = useNavigate()  
    const dispatch = useDispatch()
    const [isLiker, setLiker] = useState(false)
    return (
            <div className={css.wrapper}>
                <div className={css.fea_card}>
                    <div className={css.fea_warsaw} style={{backfaceVisibility:0}}>
                        <div>   
                            <label>
                                ${price}
                            </label>
                            <div className={isLiker ? css.fea_opaLiker : css.fea_liker} onClick={()=>{setLiker(!isLiker)}}>
                                <img src={likeSvg} alt="" />
                            </div>
                        </div>
                        <img src={image} alt="" />
                    </div>
                    <div className={css.fea_tour}>
                        <div>
                            <p>{country}</p>
                            <h1 onClick={()=>{navigate('/details/'+ id)}}>{title}</h1>
                        </div>
                        <div>
                            <div><img src={clock2Svg} alt="" /><p>{days} days {nights} nights</p></div>
                            <div><img src={star2Svg} alt="" /><h1>{review}</h1></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card
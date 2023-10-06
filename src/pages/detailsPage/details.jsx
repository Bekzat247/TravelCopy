import Header from '../../components/Header/Header'
import css from './details.module.css'
import logoSvg from '../../components/Footer/FooterImage/Logo (1).svg'
import loupe from '../../images/iconbase (5).svg'
import globus from '../../images/iconbase (6).svg'
import starSvg from './detailsImage/OverViewTextImage/ic_star_fill.svg'
import locationSvg from './detailsImage/OverViewTextImage/ic_pin.svg'
import calendarSvg from './detailsImage/OverViewTextImage/ic_calendar.svg'
import clockSvg from './detailsImage/OverViewTextImage/ic_clock.svg'
import mobileSvg from './detailsImage/OverViewTextImage/ic_mobile.svg'
import translateSvg from './detailsImage/OverViewTextImage/ic_translate.svg'
import checkSvg from './detailsImage/OverViewTextImage/ic_check_1.svg'
import check2Svg from './detailsImage/OverViewTextImage/ic_check_2.svg'
import facebookSvg from './detailsImage/OverViewTextImage/iconbase Facebook.svg'
import instagramSvg from './detailsImage/OverViewTextImage/iconbase Instagramm.svg'
import LNSvg from './detailsImage/OverViewTextImage/iconbase IN.svg'
import twiterSvg from './detailsImage/OverViewTextImage/iconbase Twitter.svg'
import shareSvg from './detailsImage/iconbase (9).svg'
import likeSvg from './detailsImage/iconbase (10).svg'
import { useNavigate, useParams } from 'react-router-dom'
import checkMarkSvg from './detailsImage/ic_checkmark_fill.svg'
import userSvg from './detailsImage/OverViewTextImage/ic_user.svg'
import arrowSvg from '../landingPage/landingImage/toursImage/iconbase.svg'
import Card from '../../components/card/Card'
import NewSteller from '../../components/newSletter/newSteller'
import Footer from '../../components/Footer/Footer'
import burgerMenu from '../../components/Header/iconbase (11).svg'
import darkBurgerMenu from '../../components/Header/iconbase (12).svg'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import ellipseSvg from './detailsImage/Ellipse.svg'
import Api from '../Api/Api'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../components/preloader/preloader'

function Details() {
    const [isDarkMode, setDarkMode] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const [isLoading1, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [comp, setComp] = useState([])
    const {cards, isLoading} = useSelector((state) => state)
    const migthCardLike = cards.slice(0, 4) || []
    const [addComent , setComent] = useState(false)

    useEffect(() => {
        const fetchData = () => {
          Api.getHouseById(params.id)
            .then(resp => {
              setComp(resp.data)
            })
            .finally(setLoading(false))
            .catch((e) => setError(e))
        } 
        fetchData()
        
      }, [])

    const highlightsInfo = comp.highlights
    const [comentContent, setComentContent] = useState('')
    const handleComentSave = () => {
        const newContent = {
            content: comentContent
        }
        // dispatch(replaceComentById( {coments: [...comp.coments, newContent], id: params.id}))
        Api.replaceComentById(params.id, {coments: [...comp.coments, newContent]})
        
        setComentContent('')
        setComent(false)       
    }
   
  if (isLoading1) {
    return <div>
        sorry no contnet in this time
    </div>
  }
  if (error){
    return <div>
        sorry no content
    </div>
  }

  return (
    <div className={css.wrapper}>
        <Header color={'black'} logosvg={logoSvg} background={'#212B36'} secondColor={'white'} loupe={loupe} globus={globus} burgerMenu = {isDarkMode ? burgerMenu : darkBurgerMenu}/>
        <div className={css.Container}>
           <BreadCrumbs title={comp.name}/>
        </div>
        <section className={css.gallery}>
           <div className={css.Container}>
               <img src={comp.image} alt="" />
               <div>
                   <img src={comp.image} alt="" />
                   <img src={comp.image} alt="" />
                   <img src={comp.image} alt="" />
                   <img src={comp.image} alt="" />
               </div>
           </div>
        </section>
        <section className={css.overview}>
           <div className={css.Container}>
               <div className={css.overviewText}>
                   <div className={css.OT1}>
                       <h1>{comp.name}</h1>
                       <div>
                           <button><img src={shareSvg} alt="" /></button>
                           <button><img src={likeSvg} alt="" /></button>
                       </div>
                   </div>
                   <div className={css.OT2}>
                       <div>
                           <img src={starSvg} alt="" />
                           <p>{comp.review}</p>
                           <span>{`(${comp.reviewLength} reviews)`}</span>
                       </div>
                       <div>
                           <img src={locationSvg} alt="" />
                           <p>{comp.country}</p>
                       </div>
                       <div>
                           <img src={comp.avatar} alt="" />
                           <span>Tour guide by </span>
                           <p>{comp.by  }</p>
                       </div>
                   </div>
                   <div className={css.OT3}>
                       <h2>Tour Overview</h2>
                       <div>
                           <div>
                               <div>
                                   <img src={calendarSvg} alt="" />
                                   <div>
                                       <p>Available</p>
                                       <span>{comp.awailable}</span>
                                   </div>
                               </div>
                               <div>
                                   <img src={locationSvg} alt="" />
                                   <div>
                                       <p>Location</p>
                                       <span>{comp.location}</span>
                                   </div>
                               </div>
                               <div>
                                   <img src={clockSvg} alt="" />
                                   <div>
                                       <p>Durations</p>
                                       <span>{comp.days} days {comp.nights} nights</span>
                                   </div>
                               </div>
                           </div>
                           <div>
                               <div>
                                   <img src={userSvg} alt="" />
                                   <div>
                                       <p>Contact Name</p>
                                       <span>{comp.by}</span>
                                   </div>
                               </div>
                               <div>
                                   <img src={mobileSvg} alt="" />
                                   <div>
                                       <p>Contact phone</p>
                                       <span>{comp.contactNumb}</span>
                                   </div>
                               </div>
                               <div>
                                   <img src={translateSvg} alt="" />
                                   <div>
                                       <p>Languages</p>
                                       <span>{comp.country2}, {comp.country}</span>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className={css.OT4}>
                       <h2>Tour Descriptions</h2>
                       <p>{comp.desc}</p>
                   </div>
                   <div className={css.OT5}>
                       <h2>Tour Highlights</h2>
                       <ul>

                        
                       {
                        isLoading
                        ? 
                        <Preloader/>
                        :
                        highlightsInfo?.map((el, index) => (
                            <li><span>{el}</span></li>
                        ))
                        }
                       </ul>
                   </div>
                   <div className={css.OT6}>
                       <h2>Tour Inclides</h2>
                       <div>
                           <div>
                               <div>
                                   <img src={comp.includess ? checkSvg : check2Svg} alt="" />
                                   <p>Audio guide</p>
                               </div>
                               <div>
                                   <img src={comp.includess ? checkSvg : check2Svg} alt="" />
                                   <p>Food and Drinks</p>
                               </div>
                               <div>
                                   <img src={comp.includess ? checkSvg : check2Svg} alt="" />
                                   <p>Lunch</p>
                               </div>
                                <div>
                                    <img src={comp.includess ? checkSvg : check2Svg} alt="" />
                                    <p>Private Tour</p>
                                </div>
                                <div>
                                    <img src={comp.includess ? checkSvg : check2Svg} alt="" />
                                    <p>Special activites</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={comp.includess ? checkSvg : check2Svg} alt="" />
                                    <p>Entrance fees</p>
                                </div>
                                <div>
                                    <img src={comp.includess ? checkSvg : check2Svg} alt="" />
                                    <p>Gratuities</p>
                                </div>
                                <div>
                                    <img src={comp.includess ? checkSvg : check2Svg}alt="" />
                                    <p>Pick-up and drop off</p>
                                </div>
                                <div>
                                    <img src={comp.includess ? checkSvg : check2Svg} alt="" />
                                    <p>Professional guide</p>
                                </div>
                                <div>
                                    <img src={comp.includess ? checkSvg : check2Svg} alt="" />
                                    <p>Transport by air-conditioned</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={css.OT7}>
                        <h2>Tour Programm</h2>
                        {/* {
                            comp.tourProgramm.map((el, index)=>{
                                <div>
                                    <div>
                                        <div></div>
                                        <span>Day {index}</span>
                                    </div>
                                    <p>{el}</p>
                                </div>
                            })
                        } */}
                    </div>
                    <div className={css.OTBTNS}>
                        <p>Share:</p>
                        <button className={css.BTN1}>
                            <img src={facebookSvg} alt="" />
                            Facebook
                        </button>
                        <button className={css.BTN2}>
                            <img src={instagramSvg} alt="" />
                            Instagram
                        </button>
                        <button className={css.BTN3}>
                            <img src={LNSvg} alt="" />
                            Linkedln
                        </button>
                        <button className={css.BTN4}>
                            <img src={twiterSvg} alt="" />
                            Twitter
                        </button>

                    </div>
                </div>
                <div className={css.overviewCard}>
                    <div className={css.OCPrice}>
                        <div>
                            <h2>${comp.price}</h2>
                            <h2>${comp.price}</h2>
                            <div>
                                <p>/Tour</p>
                            </div>
                        </div>
                        <div>
                            <input type="text"  placeholder='Departure day'/>
                            <input type="text"  placeholder='Guest'/>
                        </div>
                        <div>
                            <div>
                                <p>Service charge</p>
                                <span>${comp.servicePrice}</span>
                            </div>
                            <div>
                                <p>Discount</p>
                                <span>-</span>
                            </div>
                        </div>
                    </div>
                    <div className={css.OCreserve}>
                        <div>
                            <span>Total</span>
                            <span>${comp.servicePrice}</span>
                        </div>
                        <button onClick={()=>{navigate('/checkout/'+comp.id)}}>Reserve</button>
                    </div>
                </div>
            </div>
         </section>
         <section className={css.reviews}>
            <div className={css.Container}>
                <div className={css.reviewCard}>
                    <div>
                        <div>
                            <div><img src={comp.avatar} alt="" /></div>
                            <div>
                                <img src={checkMarkSvg} alt="" />
                            </div>
                        </div>
                        <div>
                            <img src={starSvg} alt="" />
                            <span>{comp.review}</span>
                            <div>
                                <p>{`(${comp.reviewLength} reviews)`}</p>
                            </div>
                            
                        </div>
                        <p>{comp.desc}</p>
                    </div>
                    <div>
                        <button><img src={facebookSvg} alt="" /></button>
                        <button><img src={instagramSvg} alt="" /></button>
                        <button><img src={LNSvg} alt="" /></button>
                        <button><img src={twiterSvg} alt="" /></button>

                    </div>
                    <div>
                        <p>Member since {comp.data}</p>
                        <button><span>Contact Your Guide</span></button>
                    </div>
                </div>
                <div className={css.allreviews}>
                    <div>
                        <h2>{isLoading ? 0 : comp.coments?.length} Reviews</h2>
                        <div>
                            <select>
                                <option className={css.allreviewsOption}>Most recent</option>
                            </select>
                            <button onClick={()=>{setComent(!addComent)}}>Write a Review</button>
                        </div>
                    </div>
                    {
                        addComent
                        ?
                        <div className={css.comentInput}>
                            <input type="text" placeholder='Your coment...' value={comentContent} onChange={(e)=>{setComentContent(e.target.value)}}/>
                            <button onClick={handleComentSave}>Submit</button>
                        </div>
                        :
                        null
                    }   
                    <div className={css.comentsWrapper}>
                        {
                            isLoading
                            ? 
                            <Preloader/>
                            :
                            comp.coments?.map((el) => (
                                <div className={css.reviewComment}>
                                    <img src={comp.avatar} alt="" />
                                    <div className={css.comentTextCont} >
                                        <div>
                                                <h4>Kathryn Murphy</h4>
                                                    <div>
                                                        <img src={starSvg} alt="" />
                                                        <img src={starSvg} alt="" />
                                                        <img src={starSvg} alt="" />
                                                        <img src={starSvg} alt="" />
                                                        <img src={starSvg} alt="" />
                                                    </div>
                                        </div>
                                        <span>09 Mar 2020</span>
                                        <p>{el.content}</p>
                                        <div className={css.comentTextContBtn}>
                                                <button>Helpful</button>
                                                <img src={ellipseSvg} alt="" />
                                                <button>Reply</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                   </div>
               </div>
           </div>
        </section>
        <section className={css.mightLike}>
           <div>
               <h1>You might Like</h1>
               <button onClick={()=>{navigate('/list')}}>View all <img src={arrowSvg} alt="" /></button>
           </div>
           <div className={css.cards}>
               {
                isLoading
                ?
                <Preloader/>
                
                :
                migthCardLike.map((el, index) => (
                    <Card
                      key={el.id + index}
                      title={el.name}
                      country={el.country}
                      days={el.days}
                      nights={el.nights}
                      review={el.review}
                      image={el.image}
                      id={el.id}
                      price={el.price}
                    />
                ))
               }
           </div>
        </section>
        <NewSteller/>
        <Footer/>
    </div>
  )
}

export default Details

import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import css from './landing.module.css'
import clocksvg from './landingImage/ic_clock.svg'
import starcvg from './landingImage/ic_star.svg'
import currencysvg from './landingImage/ic_currency.svg'
import thailand from './landingImage/Ellipse 4.svg'
import london from './landingImage/Ellipse 4 (2).svg'
import india from './landingImage/Ellipse 4 (3).svg'
import pinsvg from './landingImage/ic_pin.svg'
import Filter from '../../components/filter/Filter'
import icPlaySvg from './landingImage/ic_play.svg'
import popularitySvg from './landingImage/ic_popularity.svg'
import reputationSvg from './landingImage/ic_reputation.svg'
import securitySvg from './landingImage/ic_secure_payment.svg'
import tickedSvg from './landingImage/ratinfImage/ic_travel_tickets.svg'
import bookingSvg from './landingImage/ratinfImage/ic_travel_booking.svg'
import visitorsSvg from './landingImage/ratinfImage/ic_travel_site_visitors.svg'
import verifiedHotelsSvg from './landingImage/ratinfImage/ic_travel_verified_hotels.svg'
import arrowSvg from './landingImage/toursImage/iconbase.svg'
import qatarPng from './landingImage/toursImage/IMG.png'
import barbadosPng from './landingImage/toursImage/IMG (2).png'
import hungaryPng from './landingImage/toursImage/IMG (3).png'
import netherlandPng from './landingImage/toursImage/IMG (4).png'
import ugandaPng from './landingImage/toursImage/IMG (5).png'
import eritreaPng from './landingImage/toursImage/IMG (6).png'
import gambiaPng from './landingImage/toursImage/IMG (7).png'
import lebanonPng from './landingImage/toursImage/IMG (8).png'
import iconQuotesSvg from './landingImage/testCustomersImage/ic_quotes.svg'
import avatarSvg1 from './landingImage/testCustomersImage/testCustomersAvatars/Ellipse 8.svg'
import avatarSvg2 from './landingImage/testCustomersImage/testCustomersAvatars/Ellipse 7.svg'
import avatarSvg3 from './landingImage/testCustomersImage/testCustomersAvatars/Ellipse 7 (2).svg'
import avatarSvg4 from './landingImage/testCustomersImage/testCustomersAvatars/Ellipse 8 (2).svg'
import avatarSvg5 from './landingImage/testCustomersImage/testCustomersAvatars/Ellipse 9.svg'
import avatarSvg6 from './landingImage/testCustomersImage/testCustomersAvatars/Ellipse 9 (2).svg'
import avatarSvg7 from './landingImage/testCustomersImage/testCustomersAvatars/Ellipse 8 (3).svg'
import NewSteller from '../../components/newSletter/newSteller'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/card/Card'
import logoSvg from '../../images/Logo (1).svg'
import loupe from '../../images/iconbase (7).svg'
import globus from '../../images/iconbase (8).svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import arrowBtn from './landingImage/testimonials/iconbase.svg'
import burgerMenu from '../../components/Header/iconbase (11).svg'
import darkBurgerMenu from '../../components/Header/iconbase (12).svg'
import './landing.css'
import { useEffect, useState } from 'react'
import Api from '../Api/Api'
import { useSelector } from 'react-redux'
import landingImage from './landingImage/IMG.png'
import Preloader from '../../components/preloader/preloader'


function Landing() {
    const navigate = useNavigate()

    const handleRedirect = () => {
        window.location.href = 'https://www.youtube.com/watch?v=mI9hE3Sqhkk'
    }

    const {cards, isLoading} = useSelector((state) => state)
    const migthCardLike = cards.slice(0, 4) || []
    const migthByCityCard = cards.slice(0, 8) || []
    const [isLoadingMC, setLoadingMC] = useState(false)
    const [content, setContent] = useState('thailand')
    const honkong = cards[0]
    const ireland = cards[1]
    const madagascar = cards[2]
    const vietnam = cards[3]
    
    // const [isLoading1, setLoading] = useState(true)
    // const [error, setError] = useState(null)
    // const [comp, setComp] = useState([])
    // const params = useParams()
    // useEffect(() => {
    //     const fetchData = () => {
    //       Api.getHouseById(params.id)
    //         .then(resp => {
    //           setComp(resp.data)
    //           console.log(resp.data);
    //         }) 
    //         .finally(setLoading(false))
    //         .catch((e) => setError(e))
    //     } 
    //     fetchData()
        
    //   }, [])

    const cardData = [
        { id: 1, title: 'Карточка 1', content: 'Содержимое карточки 1' },
        { id: 2, title: 'Карточка 2', content: 'Содержимое карточки 2' },
        { id: 3, title: 'Карточка 3', content: 'Содержимое карточки 3' },
        { id: 4, title: 'Карточка 4', content: 'Содержимое карточки 4' },

    ];
    return (
    <div>
        <section className={css.travelHero} >
            <Header color={'white'} logosvg={logoSvg} loupe={loupe} globus={globus} burgerMenu={burgerMenu}/>
            <div className={css.tour}>
                <Link>NEW TOUR</Link>
                <h1>{content === 'thailand' ? 'Thailand Tour' : content === 'india' ? 'India Tour' : 'London Tour' }</h1>
                <div>
                    <div>
                        <img src={clocksvg} alt="" />
                        <p>3 days 2 nights</p>
                    </div>
                    <div>
                        <img src={starcvg} alt="" />
                        <p>4.8 reviews</p>
                    </div>
                    <div>
                        <img src={currencysvg} alt="" />
                        <p>Starting at $69</p>
                    </div>
                </div>
                <Link to={content === 'thailand' ? '/details/1' : content === 'india' ? '/details/2' : '/details/3' }><button>Book Now</button></Link>
            </div>
            <div className={css.country}>
                <Link onClick={()=>{setContent('thailand')}}>
                    <div>
                        <img src={thailand} alt="" />
                        <div>
                            <h3>Thailand</h3>
                            <div>
                                <img src={pinsvg} alt="" />
                                Asia
                            </div>
                        </div>
                    </div>
                </Link>
                <Link onClick={()=>{setContent('london')}}>
                    <div>
                        <img src={london} alt="" />
                        <div>
                            <h3>London</h3>
                            <div>
                                <img src={pinsvg} alt="" />
                                Europa
                            </div>
                        </div>
                    </div>
                </Link>
                <Link onClick={()=>{setContent('india')}}>
                    <div>
                        <img src={india} alt="" />
                        <div>
                            <h3>India</h3>
                            <div>
                                <img src={pinsvg} alt="" />
                                Asia
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
            <div className={css.filterDiv}>
                <Filter className={css.filter} background={'rgba(255, 255, 255, 0.04)'}/>
            </div>
            
        </section>
        <section className={css.different}>
            <div className={css.difTravel}>
                <h1>Explore A Different Way To Travel</h1>
                <p>Cras ultricies mi eu turpis hendrerit fringilla. Nulla consequat massa quis enim.</p>
            </div>
            <div className={css.device}>
                <div>
                    <p>DEVICE</p>
                    <h1>The More Important the Work</h1>
                    <Link onClick={handleRedirect}>
                        <img src={icPlaySvg} alt="" />
                        Watch Video
                    </Link>
                </div>
            </div>
            <div className={css.reviews}>
                <div>
                    <img src={popularitySvg} alt="" />
                    <div>
                        <h1>Professional Tour Guides</h1>
                        <p>Nunc nonummy metus. Donec elit libero</p>
                    </div>
                </div>
                <div>
                    <img src={reputationSvg} alt="" />
                    <div>
                        <h1>Customer Satisfaction</h1>
                        <p>Nunc nonummy metus. Donec elit libero</p>
                    </div>
                </div>
                <div>
                    <img src={securitySvg} alt="" />
                    <div>
                        <h1>Secure Payment</h1>
                        <p>Nunc nonummy metus. Donec elit libero</p>
                    </div>
                </div>
            </div>
        </section>
        <section className={css.rating}>
            <div>
                <h1>Fastest Way to Book over 450 Great Tours</h1>
                <p>Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases</p>
            </div>
            <div>
                <div>
                    <img src={tickedSvg} alt="" />
                    <div>
                        <h1>130</h1>
                        <p>Air ticked sold</p>
                    </div>
                </div>
                <div>
                    <img src={bookingSvg} alt="" />
                    <div>
                        <h1>196</h1>
                        <p>Tours booked</p>
                    </div>
                </div>
                <div>
                    <img src={visitorsSvg} alt="" />
                    <div>
                        <h1>10,67k</h1>
                        <p>Site visitors</p>
                    </div>
                </div>
                <div>
                    <img src={verifiedHotelsSvg} alt="" />
                    <div>
                        <h1>877</h1>
                        <p>Verified hostels</p>
                    </div>
                </div>

            </div>
        </section>
        <section className={css.destinations}>
            <div className={css.des_list}>
                <h1>Our Favorite Destinations</h1>
                <p>Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases</p>
                <ul>
                    <li><span>First Class Flights</span></li>
                    <li><span>5 Star Accommodations</span></li>
                    <li><span>Inclusive Packages</span></li>
                    <li><span>Latest Model Vehicles</span></li>
                    <li><span>Handpicked Hotels</span></li>
                    <li><span>Accesibility managment</span></li>
                </ul>
            </div>
            <div className={css.cards}>
                <div className={css.top_cards}>
                    <div className={css.Hongkong}>
                        <div>
                            <h1 onClick={()=>{ navigate(`/details/${honkong.id}`)}}>Hongkong</h1>
                            <div><img src={pinsvg} alt="" /><p>Asia</p></div>
                        </div>
                    </div>
                    <div className={css.Ireland}>
                        <div>
                            <h1  onClick={()=>{ navigate(`/details/${ireland.id}`)}}>Ireland</h1>
                            <div><img src={pinsvg} alt="" /><p>Asia</p></div>
                        </div>
                    </div>
                </div>
                <div className={css.bottom_cards}>
                    <div className={css.madagascar}>
                        <div>
                            <h1 onClick={()=>{ navigate(`/details/${madagascar.id}`)}}>Madagascar</h1>
                            <div><img src={pinsvg} alt="" /><p>Asia</p></div>
                        </div>
                    </div>
                    <div className={css.vietnam}>
                        <div>
                            <h1 onClick={()=>{ navigate(`/details/${vietnam.id}`)}}>vietnam</h1>
                            <div><img src={pinsvg} alt="" /><p>Asia</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={css.featured}>
            <div className={css.fea_tours}>
                <h1>Featured Tours</h1>
                <p>Our Featured Tours can help you find the trip that's perfect for you!</p>
            </div>
            <div className={css.fea_cards}>
                {
                    isLoadingMC
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
            <button onClick={()=>{navigate('/list')}}>View All Tours</button>
        </section>
        <section className={css.toursByCity}>
            <div className={css.toursText}>
                <div>
                    <h1>Tours By City</h1>
                    <p>Our Featured Tours can help you find the trip that's perfect for you!</p>
                </div>
                <button onClick={()=>{navigate('/list')}}>View All <img src={arrowSvg} alt="" /></button>
            </div>
            <div className={css.toursContacts}>
                    {
                        isLoading
                        ? 
                        <Preloader/>
                        :
                        migthByCityCard.map((el, index) => (
                            <div className={css.toursCard}>
                                <img src={el.image} alt="" />
                                <div>
                                    <h1 onClick={()=>{ navigate(`/details/${el.id}`)}}>{el.city}</h1>
                                    <p>{el.place} place</p>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className={css.toursCard}>
                        <img src={barbadosPng} alt="" />
                        <div>
                            <h1 onClick={()=>{ navigate('/details')}}>Barbados</h1>
                            <p>196 place</p>
                        </div>
                    </div>
                    <div className={css.toursCard}>
                        <img src={hungaryPng} alt="" />
                        <div>
                            <h1 onClick={()=>{ navigate('/details')}}>Hungary</h1>
                            <p>196 place</p>
                        </div>
                    </div>
                    <div className={css.toursCard}>
                        <img src={netherlandPng} alt="" />
                        <div>
                            <h1 onClick={()=>{ navigate('/details')}}>Netherland</h1>
                            <p>196 place</p>
                        </div>
                    </div> */}
                    {/* <div className={css.toursCard}>
                        <img src={ugandaPng} alt="" />
                        <div onClick={()=>{ navigate('/details')}}>
                            <h1>Uganda</h1>
                            <p>196 place</p>
                        </div>
                    </div>
                    <div className={css.toursCard}>
                        <img src={eritreaPng} alt="" />
                        <div onClick={()=>{ navigate('/details')}}>
                            <h1>Eritrea</h1>
                            <p>196 place</p>
                        </div>
                    </div>
                    <div className={css.toursCard}>
                        <img src={gambiaPng} alt="" />
                        <div onClick={()=>{ navigate('/details')}}>
                            <h1>Gambia</h1>
                            <p>196 place</p>
                        </div>
                    </div>
                    <div className={css.toursCard}>
                        <img src={lebanonPng} alt="" />
                        <div onClick={()=>{ navigate('/details')}}>
                            <h1>Lebanon</h1>
                            <p>196 place</p>
                        </div>
                    </div> */}
            </div>
        </section>
        <section className={css.latestPost}>
            <h1>Latest Post</h1>
            <div className={css.PostCarouselWrapper}>
                <Carousel  showStatus={false} infiniteLoop={true} emulateTouch={true} showThumbs={false}>
                    <div className={css.latestPostCarousel}> 
                        <div>
                            <div>
                                <div>
                                    <p>19 May 2021</p>
                                    <h1>To avoid conflicts it is recommended that business </h1>
                                </div>
                                <p> Business stakeholders review wireframes to ensure that requirements and objectives </p>
                            </div>                            
                            
                        </div>
                    </div>
                    <div className={css.latestPostCarousel}>
                        <div>
                            <div>
                                <div>
                                    <p>19 May 2021</p>
                                    <h1>To avoid conflicts it is recommended that business </h1>
                                </div>
                                <p> Business stakeholders review wireframes to ensure that requirements and objectives </p>
                            </div>                            
                            
                        </div>
                    </div>

                    <div className={css.latestPostCarousel}>    
                        <div>
                            <div>
                                <div>
                                    <p>19 May 2021</p>
                                    <h1>To avoid conflicts it is recommended that business </h1>
                                </div>
                                <p> Business stakeholders review wireframes to ensure that requirements and objectives </p>
                            </div>                            
                            
                            
                        </div>
                    </div>
                    <div className={css.latestPostCarousel}>
                        <div>
                            <div>
                                <div>
                                    <p>19 May 2021</p>
                                    <h1>To avoid conflicts it is recommended that business </h1>
                                </div>
                                <p> Business stakeholders review wireframes to ensure that requirements and objectives </p>
                            </div>                            
                            
                        </div>
                    </div>

                </Carousel>
            </div>
            <div className={css.latestPostText}>
                <h1>Latest Posts </h1>
                <div>
                    <div>
                        <div>
                            <div>
                                <p> 17 May 2021</p>
                                <h1 onClick={()=>{navigate('/blog/details')}}>Understanding color theory: the color wheel and finding complementary colors</h1>
                            </div>
                            <p>Digital product design news, articles, and resources delivered straight to your inbox.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p> 17 May 2021</p>
                            <h1 onClick={()=>{navigate('/blog/details')}}>Understanding color theory: the color wheel and finding complementary colors</h1>
                            </div>
                            <p>Digital product design news, articles, and resources delivered straight to your inbox.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p> 17 May 2021</p>
                                <h1 onClick={() =>{navigate('/blog/details')}}>Understanding color theory: the color wheel and finding complementary colors</h1>
                            </div>
                            <p>Digital product design news, articles, and resources delivered straight to your inbox.</p>
                        </div>
                    </div>

                </div>
                <button onClick={()=>{navigate('/blog')}}>View All
                    <img src={arrowSvg} alt="" />
                </button>
            </div>
        </section>
        <section className={css.testimonals}>
            <div className={css.testCustomers}>
                <div className={css.testCustomersText}>
                    <h1>What Our Customer Say</h1>
                    <div>
                        <img src={iconQuotesSvg} alt="" />
                        <div>
                            <p>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                        </div>
                        <ul>
                            <li><span>Robert Fox</span></li>
                        </ul>
                    </div>
                </div>
                <div className={css.testCustomersImg}>
                    <div>
                        <img src={avatarSvg1} alt="" />
                        <img src={avatarSvg2} alt="" />
                    </div>
                    <div>
                        <img src={avatarSvg3} alt="" />
                        <img src={avatarSvg4} alt="" />
                        <img src={avatarSvg5} alt="" />
                    </div>
                    <div>
                        <img src={avatarSvg6} alt="" />
                        <img src={avatarSvg7} alt="" />
                    </div>
                </div>
            </div>
            <div className={css.testimonalsButtons}>
                <button><img src={arrowBtn} alt="" /></button>
                <button><img src={arrowBtn} alt="" /></button>

            </div>
        </section>
        <NewSteller/>
        <Footer />
    </div>
  )
}

export default Landing
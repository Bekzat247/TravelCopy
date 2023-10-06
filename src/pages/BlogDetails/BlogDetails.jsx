import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NewSteller from '../../components/newSletter/newSteller'
import css from './BlogDetails.module.css'
import logoSvg from '../../components/Footer/FooterImage/Logo (1).svg'
import loupe from '../../images/iconbase (5).svg'
import globus from '../../images/iconbase (6).svg'
import burgerMenu from '../../components/Header/iconbase (11).svg'
import darkBurgerMenu from '../../components/Header/iconbase (12).svg'
import facebookSvg from './BlogDetailsImage/btnsSvg/ic_facebbook_outlined.svg'
import instagramSvg from './BlogDetailsImage/btnsSvg/ic_instagram_outlined.svg'
import IGSvg from './BlogDetailsImage/btnsSvg/iconbase.svg'
import twitterSvg from './BlogDetailsImage/btnsSvg/iconbase(twitter).svg'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import infoImg1 from './BlogDetailsImage/infoimg/IMG.png'
import infoImg2 from './BlogDetailsImage/infoimg/Blog/IMG.png'
import comentImg from './BlogDetailsImage/ic_quotes.svg'
import avatarSvg from './BlogDetailsImage/Blog/img.png'
import SideBar from '../../components/SideBar/SideBar'
import arrowSvg from '../landingPage/landingImage/toursImage/iconbase.svg'
import BlogCard from '../../components/BlogCard/BlogCard'
import CardBlogInfo from '../../components/CardBlogInfo/CardBlogInfo'
import { useSelector } from 'react-redux'
import Preloader from '../../components/preloader/preloader'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Api from '../Api/Api'





function BlogDetails() {
    const {isLoading, cards} = useSelector((state) => state)
    const latestPostCards = cards.slice(0, 4)
    console.log(latestPostCards)
    const [isLoading1, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [comp, setComp] = useState([])
    const params = useParams()
    console.log(comp.coments);
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
        
    },[])

    console.log(comp);
    
    if (isLoading1) {
        return <Preloader/>
    }
    if (error){
      return <div>
          sorry no content
      </div>
    }
    
  return (
    <div className={css.mainBlogContent}>
        <Header color={'black'} logosvg={logoSvg} background={'#212B36'} secondColor={'white'} loupe={loupe} globus={globus} burgerMenu = {darkBurgerMenu}/>
        <section className={css.travelDetails}>
            <div>
                <p>{comp.data}</p>
                <h1>{comp.news}</h1>
                <span>{comp.createdAt}</span>
                <div>
                    <button>
                        <img src={facebookSvg} alt="" />
                    </button>
                    <button>
                        <img src={instagramSvg} alt="" />
                    </button>
                    <button>
                        <img src={IGSvg} alt="" />
                    </button>
                    <button>
                        <img src={twitterSvg} alt="" />
                    </button>

                </div>
            </div>
        </section>
        <section className={css.breadCrumbs}>
            <div className={css.container}>
                <BreadCrumbs title={comp.news}/>
            </div>
        </section>
        <section className={css.blogAllContent}>
            <div className={css.container}>
                <div className={css.blogFirstContent}>
                    <div className={css.blogContent}>
                        <div>
                            <p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>
                            <div>
                                <div>
                                    <h1>P</h1>
                                    <span>ellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</span>
                                </div>
                                <span>Donec posuere vulputate arcu. Quisque rutrum.</span>
                            </div>
                            <span>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula. 
                                <br /> <br /> <br />Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque 
                                velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</span>
                            <img src={infoImg1} alt="" />
                            <h2>Curabitur suscipit suscipit tellus</h2>
                            <span>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</span>
                            <h2>Nullam accumsan lorem in</h2>
                            <span>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</span>
                            <div className={css.coment}>
                                <img src={comentImg} alt="" />
                                <p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.</p>
                            </div>
                            <img src={infoImg2} alt="" />
                            <span>
                                Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula. <br /> <br />
                                Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. 
                                Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh. <br /> <br />
                                Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
                            </span>     
                        </div>
                        <div className={css.tags}>
                            <p>Tags:</p>
                            <button>Marketing</button>
                            <button>Development</button>
                            <button>HR & Recruting</button>
                            <button>Design</button>
                            <button>Managment</button>

                        </div>  
                        <div className={css.share}>
                            <p>Share:</p>
                            <button className={css.facebookBtn}>
                                <img src={facebookSvg} alt="" />
                                Facebook
                            </button>
                            <button className={css.instagramBtn}>
                                <img src={instagramSvg} alt="" />
                                Instagram
                            </button>
                            <button className={css.IGBtn}>
                                <img src={IGSvg} alt="" />
                                Linkedln
                            </button>
                            <button className={css.twitterBtn}>
                                <img src={twitterSvg} alt="" />
                                Twitter
                            </button>

                        </div>  

                    </div>
                    <div className={css.nullDiv}></div>
                    <div className={css.blogReview}>
                        <img src={comp.avatar} alt="" />
                        <div>
                            <div>
                                <div>
                                    <h2>{comp.by}</h2>
                                    <span>Curator of Marketing Course</span>
                                </div>
                                <div>
                                    <button>
                                        <img src={facebookSvg} alt="" />
                                    </button>
                                    <button>
                                        <img src={instagramSvg} alt="" />
                                    </button>
                                    <button>
                                        <img src={IGSvg} alt="" />
                                    </button>
                                    <button>
                                        <img src={twitterSvg} alt="" />
                                    </button>
                                </div>
                            </div>
                            <span>{comp.desc}</span>
                            <i>{comp.createdAt}</i>
                        </div>
                    </div>
                </div>
                <div className={css.latestPost}>
                    <div className={css.container}> 
                        <div>
                            <h1>Latest Post </h1>
                            <button>View all <img src={arrowSvg} alt="" /></button>
                        </div>
                        <div>
                            <div className={css.latestPC}>
                                <CardBlogInfo/>
                                <CardBlogInfo/>
                                <CardBlogInfo/>
                                <CardBlogInfo/>
                            </div>
                            <div className={css.latestPostPhoneWrapper}>
                                <div>
                                    <img src={comp.image} alt="" />
                                    <div>
                                        <span>{comp.news}</span>
                                        <i>{comp.createdAt}</i>
                                    </div>
                                </div>
                                <div>
                                    <img src={comp.image} alt="" />
                                    <div>
                                        <span>{comp.news}</span>
                                        <i>{comp.createdAt}</i>
                                    </div>
                                </div>

                                <div>
                                    <img src={comp.image} alt="" />
                                    <div>
                                        <span>{comp.news}</span>
                                        <i>{comp.createdAt}</i>
                                    </div>
                                </div>

                                <div>
                                    <img src={comp.image} alt="" />
                                    <div>
                                        <span>{comp.news}</span>
                                        <i>{comp.createdAt}</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.blogSecondContent}>
                    <div className={css.blogSideBarComent}>
                        <img src={comp.avatar} alt="" />
                        <div>
                            <div>
                                <h2>{comp.by}</h2>
                                <span>Curator of Marketing Course</span>
                            </div>
                            <div>
                                <button>
                                    <img src={facebookSvg} alt="" />
                                </button>
                                <button>
                                    <img src={instagramSvg} alt="" />
                                </button>
                                <button>
                                    <img src={IGSvg} alt="" />
                                </button>
                                <button>
                                    <img src={twitterSvg} alt="" />
                                </button>
                            </div>

                        </div>
                    </div>
                    <SideBar/>
                </div>
            </div>
        </section>
        <section className={css.latestPost}>
            <div className={css.container}> 
                <div>
                    <h1>Latest Post </h1>
                    <button>View all <img src={arrowSvg} alt="" /></button>
                </div>
                <div>
                    <div className={css.latestPC}>
                        {
                            isLoading
                            ?
                            <Preloader/>
                            :
                            latestPostCards?.map((el, index)=> (
                                <CardBlogInfo
                                    key={el.id + index}
                                    title={el.news}
                                    country={el.country}
                                    days={el.days}
                                    nights={el.nights}
                                    review={el.review}
                                    image={el.image}
                                    id={el.id}
                                    price={el.price}
                                    avatar={el.avatar}
                                    by={el.by}
                                    data={el.data}
                                />
                            ))
                        }
                    </div>
                    <div className={css.latestPostPhoneWrapper}>
                        <div>
                            <img src={comp.image} alt="" />
                            <div>
                                <span>{comp.news}</span>
                                <i>{comp.createdAt}</i>
                            </div>
                        </div>
                        <div>
                            <img src={comp.image} alt="" />
                            <div>
                                <span>{comp.news}</span>
                                <i>{comp.createdAt}</i>
                            </div>
                        </div>

                        <div>
                            <img src={comp.image} alt="" />
                            <div>
                                <span>{comp.news}</span>
                                <i>{comp.createdAt}</i>
                            </div>
                        </div>

                        <div>
                            <img src={comp.image} alt="" />
                            <div>
                                <span>{comp.news}</span>
                                <i>{comp.createdAt}</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <NewSteller/>
        <Footer/>
    </div>
  )
}

export default BlogDetails
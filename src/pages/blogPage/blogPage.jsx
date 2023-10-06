import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NewSteller from '../../components/newSletter/newSteller'
import css from './blogPage.module.css'
import logoSvg from '../../components/Footer/FooterImage/Logo (1).svg'
import loupe from '../../images/iconbase (5).svg'
import globus from '../../images/iconbase (6).svg'
// import burgerMenu from '../../components/Header/iconbase (11).svg'
import darkBurgerMenu from '../../components/Header/iconbase (12).svg'
import BlogCard from '../../components/BlogCard/BlogCard'
import arrowSvg from '../../pages/landingPage/landingImage/testimonials/iconbase.svg'
import CardBlogInfo from '../../components/CardBlogInfo/CardBlogInfo'
import Pagination from '../../components/Pagination/pagination'
import SideBar from '../../components/SideBar/SideBar'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Preloader from '../../components/preloader/preloader'


function BlogPage() {
    const isMobile = window.innerWidth <= 768;
    const [leftpos, setleftPos] = useState(0)
    const boundary = 810
    const moveLeft = (step) => {
        if(leftpos - 50 >= -boundary){
            setleftPos(leftpos-step)
        }else{
            setleftPos(0)
        } 
        
    }
    const moveRight = (step) => {
        if(leftpos === 0){
            setleftPos(-945)
        }else{
            setleftPos(leftpos+step)
        }
    }
    const {cards, isLoading} = useSelector((state) => state)
    // const [cards, setcards] = useState([])
    // console.log(cards);
    const newCards = cards.slice(0, 12)
  return (
    <div>
        <Header color={'black'} logosvg={logoSvg} background={'#212B36'} secondColor={'white'} loupe={loupe} globus={globus} burgerMenu = {darkBurgerMenu}/>
        <section className={css.heroTravel}>
            <div className={css.container}>
                    <div>
                        <BlogCard title={cards[0]?.news} desc={cards[0]?.desc} data={cards[0]?.data} avatar={cards[0]?.avatar} image={cards[0]?.image} by={cards[0]?.by} id={cards[0]?.id}/>
                    </div>
                    <div>
                        <div>
                            <BlogCard title={cards[1]?.news} desc={cards[1]?.desc} data={cards[1]?.data} avatar={cards[1]?.avatar} image={cards[1]?.image} by={cards[1]?.by} id={cards[1]?.id}/>
                        </div>
                        <div>
                            <div>
                                <BlogCard title={cards[2]?.news} desc={cards[2]?.desc} data={cards[2]?.data} avatar={cards[2]?.avatar} image={cards[2]?.image} by={cards[2]?.by} id={cards[2]?.id}/>
                            </div>
                            <div>
        
                                <BlogCard title={cards[3]?.news} desc={cards[3]?.desc} data={cards[3]?.data} avatar={cards[3]?.avatar} image={cards[3]?.image} by={cards[3]?.by} id={cards[3]?.id}/>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        <section className={css.Tranding}>
            <div className={css.container}>
                    <div>
                        <h1>Trending Topics</h1>
                        <div className={css.trandingBtns}>
                            <button onClick={()=>{isMobile ? moveRight(374) : moveRight(315)}}>
                                <img src={arrowSvg} alt="" />
                            </button>
                            <button onClick={()=>{isMobile ? moveLeft(374) : moveLeft(315)}}>
                                <img src={arrowSvg} alt="" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className={css.trandingBlocks} style={{position: 'relative' , left: `${leftpos}px`, transition: 'left 0.3s ease' }}>
                            <div className={css.trandingBlock}>
                                <h2>Sport</h2>
                                <span>16 Posts</span>
                            </div>
                            <div className={css.trandingBlock}>
                                <h2>Sport</h2>
                                <span>16 Posts</span>
                            </div>
                            <div className={css.trandingBlock}>
                                <h2>Sport</h2>
                                <span>16 Posts</span>
                            </div>
                            <div className={css.trandingBlock}>
                                <h2>Sport</h2>
                                <span>16 Posts</span>
                            </div>
                            <div className={css.trandingBlock}>
                                <h2>Sport</h2>
                                <span>16 Posts</span>
                            </div>
                            <div className={css.trandingBlock}>
                                <h2>Sport</h2>
                                <span>16 Posts</span>
                            </div>
                            <div className={css.trandingBlock}>
                                <h2>Sport</h2>
                                <span>16 Posts</span>
                            </div>

                        </div>
                </div>
            </div>
        </section>
        <section className={css.highLights}>
            <div className={css.container}>
                <div><h1>Today's Top Highlights</h1></div>
                <div className={css.HLInfo}>
                    <div className={css.cardWrapper}>
                    {
                    isLoading
                    ? 
                    <Preloader/>
                    :
                    newCards?.map((el, index) => (
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
                        <Pagination/>
                    </div>
                    <div className={css.HLPostDiv}>
                        <SideBar/>
                    </div>
                </div>
            </div>
        </section>
        <NewSteller/>
        <Footer/>
    </div>
  )
}

export default BlogPage
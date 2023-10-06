import css from './SideBar.module.css'
import cardBGImg from '../../pages/blogPage/blogPageImage/blogUsers/IMG.png'
import user1Svg from '../../pages/blogPage/blogPageImage/blogUsers/img (1).png'
import { useSelector } from 'react-redux'



function SideBar() {
    const {cards , isLoading} = useSelector((state)=> state)
    const recentNews = cards.slice(0, 4) || []
    console.log(cards);
  return (
    <div className={css.HLposts}>   
        <input type="text" placeholder='Search...' />
        <div className={css.HLcategories}>
            <h3>Categories</h3>
            <ul>
                <li><span>Marketing</span></li>
                <li><span>Community</span></li>
                <li><span>Tutorials</span></li>
                <li><span>Business</span></li>
                <li><span>Managment</span></li>
            </ul>
        </div>
        <div className={css.HLRecentPost}>
            <h3>Recent Post</h3>
            {
                isLoading 
                ? 
                <div>no content</div>
                : 
                recentNews?.map((el, idx)=> (
                    <div>
                        <img src={el.image} alt="" />
                        <div>
                            <span>{el.news}</span>
                            <i>{el.data}</i>
                        </div>
                    </div>
                ))
            }
            {/* <div>
                <img src={cardBGImg} alt="" />
                <div>
                    <span>Understanding color theory: the color wheel and finding...</span>
                    <i>February 28, 2018 • 8 min read</i>
                </div>
            </div>
            <div>
                <img src={cardBGImg} alt="" />
                <div>
                    <span>Understanding color theory: the color wheel and finding...</span>
                    <i>February 28, 2018 • 8 min read</i>
                </div>
            </div>
            <div>
                <img src={cardBGImg} alt="" />
                <div>
                    <span>Understanding color theory: the color wheel and finding...</span>
                    <i>February 28, 2018 • 8 min read</i>
                </div>
            </div> */}

        </div>  
        <div className={css.HLPopularTegs}>
            <h3>Popular Tegs</h3>
            <div>
                <button>Marketing</button>
                <button>Development</button>
                <button>Banking</button>
                <button>HR & Recruting</button>
                <button>Design</button>
                <button>Managment</button>
                <button>Business</button>
                <button>Community</button>
                <button>Tutorials</button>
            </div>
        </div>
        <div className={css.HLAdvertisement}>
            <div>
                <h2>Advertisment</h2>
                <span>Duis leo. Donec orci lectus, aliquam ut, faucibus non</span>
            </div>
            <button>Go now</button>
        </div>
    </div>

  )
}

export default SideBar
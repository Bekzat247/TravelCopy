import css from './aboutUsPage.module.css'
import logoSvg from '../../components/Footer/FooterImage/Logo (1).svg'
import loupe from '../../images/iconbase (5).svg'
import globus from '../../images/iconbase (6).svg'
import burgerMenu from '../../components/Header/iconbase (11).svg'
import darkBurgerMenu from '../../components/Header/iconbase (12).svg'
import NewSteller from '../../components/newSletter/newSteller'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import poster1Img from './aboutUsImage/IMG (2).png'
import poster2Img from './aboutUsImage/Teachers=1.png'
import poster3Img from './aboutUsImage/Teachers=1 (1).png'
import poster4Img from './aboutUsImage/Teachers=1 (2).png'
import illustrationSvg from './aboutUsImage/illustration_vision.svg'
import facebookICNSvg from './aboutUsImage/Новая папка/iconbaseFacobook.svg'
import instagramICNSvg from './aboutUsImage/Новая папка/iconbaseInsta.svg'
import IGICNSvg from './aboutUsImage/Новая папка/iconbaseIG.svg'
import twiterICNSvg from './aboutUsImage/Новая папка/iconbaseTwitter.svg'
import iconQuotesSvg from '../landingPage/landingImage/testCustomersImage/ic_quotes.svg'
import avatarSvg1 from '../landingPage/landingImage/testCustomersImage/testCustomersAvatars/Ellipse 8.svg'
import avatarSvg2 from '../landingPage/landingImage/testCustomersImage/testCustomersAvatars/Ellipse 7.svg'
import avatarSvg3 from '../landingPage/landingImage/testCustomersImage/testCustomersAvatars/Ellipse 7 (2).svg'
import avatarSvg4 from '../landingPage/landingImage/testCustomersImage/testCustomersAvatars/Ellipse 8 (2).svg'
import avatarSvg5 from '../landingPage/landingImage/testCustomersImage/testCustomersAvatars/Ellipse 9.svg'
import avatarSvg6 from '../landingPage/landingImage/testCustomersImage/testCustomersAvatars/Ellipse 9 (2).svg'
import avatarSvg7 from '../landingPage/landingImage/testCustomersImage/testCustomersAvatars/Ellipse 8 (3).svg'
import arrowBtn from '../landingPage/landingImage/testimonials/iconbase.svg'
import clientSpotifySvg from './aboutUsClients/brand_spotify.svg'
import clientSlackSvg from './aboutUsClients/brand_slack.svg'
import clientNetflixSvg from './aboutUsClients/brand_netflix.svg'
import clientMicrosoftSvg from './aboutUsClients/brand_microsoft.svg'
import clientDropboxSvg from './aboutUsClients/brand_dropbox.svg'
import clientFacebookSvg from './aboutUsClients/brand_facebook.svg'
import clientHerokuSvg from './aboutUsClients/brand_heroku.svg'
import clientLenovoSvg from './aboutUsClients/brand_lenovo.svg'
import clientTripadvistorSvg from './aboutUsClients/brand_tripadvisor.svg'
import clientVimeoSvg from './aboutUsClients/brand_vimeo.svg'
import clientAirbnbSvg from './aboutUsClients/brand_airbnb.svg'
import clientGoogleSvg from './aboutUsClients/brand_google.svg'
import arrowSvg from '../landingPage/landingImage/toursImage/iconbase.svg'
import CardBlogInfo from '../../components/CardBlogInfo/CardBlogInfo'
import cardBGImg from '../../pages/blogPage/blogPageImage/blogUsers/IMG.png'






function AboutUsPage() {
  return (
    <div> 
        <Header color={'black'} logosvg={logoSvg} background={'#212B36'} secondColor={'white'} loupe={loupe} globus={globus} burgerMenu = {darkBurgerMenu}/>
        <section className={css.mainContent}>
            <div className={css.container}>
                <div className={css.MCText}>
                    <h1>About Us</h1>
                    <span>Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!</span>
                </div>
                <div className={css.MCPosters}>
                    <img src={poster1Img} alt="" />
                    <img src={poster2Img} alt="" />
                    <img src={poster3Img} alt="" />
                    <img src={poster4Img} alt="" />
                </div>
                <div className={css.MCStatistic}>
                    <div>
                        <div>
                            <h2>130</h2>
                            <i>+</i>
                        </div>
                        <span>Air tickets sold</span>
                    </div>
                    <div>
                        <div>
                            <h2>196</h2>
                            <i>+</i>
                        </div>
                        <span>Tours booked</span>
                    </div>
                    <div>
                        <div>
                            <h2>10.68k</h2>
                            <i>+</i>
                        </div>
                        <span>Sit visitors</span>
                    </div>
                    <div>
                        <div>
                            <h2>877</h2>
                            <i>+</i>
                        </div>
                        <span>Verified hotels</span>
                    </div>

                </div>
            </div>
        </section>
        <section className={css.textContent}>
            <div className={css.container}>
                <div>
                    <div></div>
                    <h3>
                    Maecenas malesuada. Cras ultricies mi eu turpis hendrerit fringilla. 
                    </h3>
                </div>
                <div>
                    <h4>Fusce convallis metus id felis luctus</h4>
                    <span>
                        Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci. Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis. <br /> <br />
                        
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Maecenas nec odio et ante tincidunt tempus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vestibulum eu odio. Curabitur ullamcorper ultricies nisi.
                    </span>
                </div>
            </div>      
        </section>
        <section className={css.ourMission}>
            <div className={css.container}>
                <div>
                    <h2>Our mission</h2>
                    <span>Curabitur ullamcorper ultricies nisi. Aenean viverra rhoncus pede.</span>
                </div>
                <div>
                    <img src={illustrationSvg} alt="" />
                    <div>
                        <div className={css.ourMissionCard}>
                            <h1>01</h1>
                            <h4>Vestibulum</h4>
                            <span>Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</span>
                        </div>
                        <div>
                            <div className={css.ourMissionCard}>
                                <h1>02</h1>
                                <h4>Vestibulum</h4>
                                <span>Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</span>
                            </div>
                            <div className={css.ourMissionCard}>
                                <h1>03</h1>
                                <h4>Vestibulum</h4>
                                <span>Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={css.ourTeam}>
            <div className={css.container}>
                <div>
                    <h1>Our team</h1>
                    <span>
                    Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.
                    </span>
                </div>
                <div className={css.ourTeamWrapper}>
                    <div className={css.AgataIris}>
                        <div>
                            <h6>AgataIris</h6>
                            <span>Marketing</span>
                            <div>
                                <img src={facebookICNSvg} alt="" />
                                <img src={instagramICNSvg} alt="" />
                                <img src={IGICNSvg} alt="" />
                                <img src={twiterICNSvg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={css.ViolaWendy}>
                        <div>
                            <h6>ViolaWendy</h6>
                            <span>Marketing</span>
                            <div>
                                <img src={facebookICNSvg} alt="" />
                                <img src={instagramICNSvg} alt="" />
                                <img src={IGICNSvg} alt="" />
                                <img src={twiterICNSvg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={css.SamEdgar}>
                        <div>
                            <h6>SamEdgar</h6>
                            <span>Marketing</span>
                            <div>
                                <img src={facebookICNSvg} alt="" />
                                <img src={instagramICNSvg} alt="" />
                                <img src={IGICNSvg} alt="" />
                                <img src={twiterICNSvg} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className={css.OberonRegis}>
                        <div>
                            <h6>OberonRegis</h6>
                            <span>Marketing</span>
                            <div>
                                <img src={facebookICNSvg} alt="" />
                                <img src={instagramICNSvg} alt="" />
                                <img src={IGICNSvg} alt="" />
                                <img src={twiterICNSvg} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className={css.LeonaKelly}>
                        <div>
                            <h6>LeonaKelly</h6>
                            <span>Marketing</span>
                            <div>
                                <img src={facebookICNSvg} alt="" />
                                <img src={instagramICNSvg} alt="" />
                                <img src={IGICNSvg} alt="" />
                                <img src={twiterICNSvg} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className={css.GeorgeOliver}>
                        <div>
                            <h6>GeorgeOliver</h6>
                            <span>Marketing</span>
                            <div>
                                <img src={facebookICNSvg} alt="" />
                                <img src={instagramICNSvg} alt="" />
                                <img src={IGICNSvg} alt="" />
                                <img src={twiterICNSvg} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className={css.SavannahNguyen}>
                        <div>
                            <h6>SavannahNguyen</h6>
                            <span>Marketing</span>
                            <div>
                                <img src={facebookICNSvg} alt="" />
                                <img src={instagramICNSvg} alt="" />
                                <img src={IGICNSvg} alt="" />
                                <img src={twiterICNSvg} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className={css.EllaEster}>
                        <div>
                            <h6>EllaEster</h6>
                            <span>Marketing</span>
                            <div>
                                <img src={facebookICNSvg} alt="" />
                                <img src={instagramICNSvg} alt="" />
                                <img src={IGICNSvg} alt="" />
                                <img src={twiterICNSvg} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
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
        <section className={css.clients}>
            <div className={css.container}>
                <div>
                    <h2>Our clients</h2>
                    <div>
                        <h4>Enhance Your Life By Having A Sense Of Purpose</h4>
                        <span>Around the world, food-borne illnesses have become increasingly common. In the United States alone, millions of people get a food-related illness each year.</span>
                    </div>
                </div>
                <div>
                    <img src={clientSpotifySvg} alt="" />
                    <img src={clientSlackSvg} alt="" />
                    <img src={clientNetflixSvg} alt="" />
                    <img src={clientMicrosoftSvg} alt="" />
                    <img src={clientDropboxSvg} alt="" />
                    <img src={clientFacebookSvg} alt="" />
                    <img src={clientHerokuSvg} alt="" />
                    <img src={clientLenovoSvg} alt="" />
                    <img src={clientTripadvistorSvg} alt="" />
                    <img src={clientVimeoSvg} alt="" />
                    <img src={clientAirbnbSvg} alt="" />
                    <img src={clientGoogleSvg} alt="" />

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
                        <CardBlogInfo/>
                        <CardBlogInfo/>
                        <CardBlogInfo/>
                        <CardBlogInfo/>
                    </div>
                    <div className={css.latestPostPhoneWrapper}>
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

export default AboutUsPage
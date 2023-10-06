import css from './ContactPage.module.css'
import logoSvg from '../../components/Footer/FooterImage/Logo (1).svg'
import loupe from '../../images/iconbase (5).svg'
import globus from '../../images/iconbase (6).svg'
import burgerMenu from '../../components/Header/iconbase (11).svg'
import darkBurgerMenu from '../../components/Header/iconbase (12).svg'
import NewSteller from '../../components/newSletter/newSteller'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ContactCard from '../../components/ContactCard/ContactCard'
import contactIllustrationSvg from './ContactImg/illustration_travel_contact.png'



function ContactPage() {
  return (
    <div>
        <Header color={'black'} logosvg={logoSvg} background={'#212B36'} secondColor={'white'} loupe={loupe} globus={globus} burgerMenu = {darkBurgerMenu}/>
        <section className={css.workWorldwide}>
            <div className={css.container}>
                <h1>We Work <br /> Worldwide </h1>
                <span>We'd love to talk about how we can help you.</span>
            </div>
        </section>
        <section className={css.cardWrapper}>
            <div className={css.container}>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>

            </div>      
        </section>
        <section className={css.dropUsALine}>
            <div className={css.container}>
                <img src={contactIllustrationSvg} alt="" />
                <form>
                    <div className={css.DUALTextContent}>
                        <h3>
                            Drop Us A Line
                        </h3>
                        <span>We normally respond within 2 business days</span>
                    </div>
                    <div className={css.inputs}>
                        <input type="text" placeholder='Full name'/>
                        <input type="text" placeholder='Email'/>
                        <input type="text" placeholder='Subject'/>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Message' />
                    </div>
                    <button>Send Message</button>
                </form>
            </div>
        </section>
        <NewSteller/>
        <Footer/>
    </div>
  )
}

export default ContactPage
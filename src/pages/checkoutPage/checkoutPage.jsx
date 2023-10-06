import css from './checkoutPage.module.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import logoSvg from '../../components/Footer/FooterImage/Logo (1).svg'
import loupe from '../../images/iconbase (5).svg'
import globus from '../../images/iconbase (6).svg'
import burgerMenu from '../../components/Header/iconbase (11).svg'
import darkBurgerMenu from '../../components/Header/iconbase (12).svg'
import paypalSvg from './checkoutImage/ic_paypal.svg'
import masterCardSvg from './checkoutImage/ic_mastercard.svg'
import visaSvg from './checkoutImage/ic_visa.svg'
import pagePng from './checkoutImage/IMG.png'
import starSvg from '../../pages/detailsPage/detailsImage/OverViewTextImage/ic_star_fill.svg'
import avatarSvg from '../../pages/detailsPage/detailsImage/img user1.png'
import calendarSvg from '../../pages/detailsPage/detailsImage/OverViewTextImage/ic_calendar.svg'
import userSvg from '../../pages/detailsPage/detailsImage/OverViewTextImage/ic_user.svg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Api from '../Api/Api'



function CheckoutPage() {
    const [status1, setStatus1] = useState(false)
    const [status2, setStatus2] = useState(false)
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

    const navigate = useNavigate()

    const [address1Name, setaddres1Name] = useState('')
    const handleFirstNamechange = (e) => {
        setaddres1Name(e.target.value)
    }
    const [addresslastName, setaddresslastName] = useState('')
    const handleLastNamechange = (e) => {
        setaddresslastName(e.target.value)
    }
    const [addres1fulladdress, setaddres1fulladdress] = useState('')
    const handleaddresschange = (e) => {
        setaddres1fulladdress(e.target.value)
    }
    const [address1fulladdress2, setaddress1fulladdress2] = useState('')
    const handleaddress2change = (e) => {
        setaddress1fulladdress2(e.target.value)
    }
    const [address1NameShip, setaddres1NameShip] = useState('')
    const handleFirstNameShipchange = (e) => {
        setaddres1NameShip(e.target.value)
    }
    const [addresslastNameShip, setaddresslastNameShip] = useState('')
    const handleLastNameShipchange = (e) => {
        setaddresslastNameShip(e.target.value)
    }
        const [addres1fulladdressShip, setaddres1fulladdressShip] = useState('')
    const handleaddressShipchange = (e) => {
        setaddres1fulladdressShip(e.target.value)
    }
    const [address1fulladdress2Ship, setaddress1fulladdress2Ship] = useState('')
    const handleaddress2Shipchange = (e) => {
        setaddress1fulladdress2Ship(e.target.value)
    }
    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchToggle = () => {
        setIsChecked((prevChecked) => !prevChecked);       
    };
    const [cardValue, setCardValue] = useState('')
    const handleAddCard = (e) => {
        if(e.target.value.length <= 19){
            const value = e.target.value.replace(/\D/g, '');
            const formattedValue = formatWithSpaces(value);
            setCardValue(formattedValue);
        }
    };
    const formatWithSpaces = (value) => {
        return value.replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
    };
    const [cardName, setCardName] = useState('')
    const handleCardNameChange = (e) => {
        setCardName(e.target.value)
    }
    const [cardNumbValue, setCardNumbValue] = useState('')
    const handleCardNumbChange = (e) => {
        if(e.target.value.length <= 8){
            const value = e.target.value.replace(/\D/g, '');
            const formattedValue = formatWithDots(value);
            setCardNumbValue(formattedValue);
        }
    };
    const formatWithDots = (value) => {
        return value.replace(/(\d{2})(?=\d)/g, '$1/');
    };
    const [CardCVC, setCardCVC] = useState('')
    const handleCardCVCChange = (e) => {
        if(e.target.value.length <=3){
            setCardCVC(e.target.value)
        }
    }
    console.log(comp);
  if(isLoading1){
    return <div>
        no content in there
    </div>
  }
  return (  
    <div>
        <Header color={'black'} logosvg={logoSvg} background={'#212B36'} secondColor={'white'} loupe={loupe} globus={globus} burgerMenu = {darkBurgerMenu}/>
        <section className={css.checkout}>  
            <div className={css.checkoutText}>  
                <h1>Confirm and Pay</h1>
                <div className={css.checkoutTextDiv1}> 
                    <div className={css.checkoutShippingInfo}>
                        <div className={css.checkoutEllipse}>1</div> <h2>Shipping Information</h2>
                    </div>
                    <p>Billing Address</p>
                    <div className={css.checkoutInputs}>
                        <div>
                            <input type="text" placeholder='First Name' value={address1Name} onChange={handleFirstNamechange}/>
                            <input type="text" placeholder='Last Name'value={addresslastName} onChange={handleLastNamechange}/>
                        </div>
                        <input type="text" placeholder='Full Adress' value={addres1fulladdress} onChange={handleaddresschange}/>
                        <input type="text" placeholder='Full Adress 2 (optional)'value={address1fulladdress2} onChange={handleaddress2change}/>
                    </div>
                </div>
                <div> 
                    <div className={css.checkoutAddressSame}>
                        <p>Shipping Address</p>
                        <div>
                            <span>Same as Billing Address</span>
                            <label className={css.switch}>
                                <input type="checkbox" onChange={handleSwitchToggle} defaultChecked={isChecked}/>
                                <span className={css.slider}></span>
                            </label>
                        </div>
                    </div>
                    <div className={css.checkoutInputs}>
                        <div>
                            <input type="text" placeholder='First Name' value={isChecked ? address1Name : address1NameShip} onChange={handleFirstNameShipchange}/>
                            <input type="text" placeholder='Last Name' value={isChecked ? addresslastName : addresslastNameShip} onChange={handleLastNameShipchange}/>
                        </div>
                        <input type="text" placeholder='Full Adress' value={isChecked ? addres1fulladdress : addres1fulladdressShip} onChange={handleaddressShipchange}/>
                        <input type="text" placeholder='Full Adress 2 (optional)' value={isChecked ? address1fulladdress2 : address1fulladdress2Ship} onChange={handleaddress2Shipchange}/>
                    </div>
                </div>
                <div className={css.checkoutTextDiv}>
                    <div className={css.checkoutShippingInfo}>
                        <div className={css.checkoutEllipse}>2</div> <h2>Payment Methods </h2>
                    </div>
                    <div className={css.checkoutpaypale}>
                        <div>
                            <input type="checkbox" defaultChecked={status1} onClick={() => {setStatus1(!status1)}}/>

                            <div>
                                <h3>Pay with Paypal</h3>
                                <span>You will be redirected to PayPal website to complete your purchase securely.</span>
                            </div>
                            <img src={paypalSvg} alt="" />
                        </div>
                        {
                            status1
                            ?
                            <div className={css.checkoutForm1}>
                                <div className={css.checkoutInputDiv}>
                                    <input type="text" name='cardNumb' placeholder='XXXX XXXX XXXX XXXX' value={cardValue} onChange={handleAddCard}/>
                                    <label htmlFor="cardNumb">Card Number</label>
                                </div>
                                <div className={css.checkoutInputDiv}>
                                    <input type="text" name='cardNumb' placeholder='John Doe' value={cardName} onChange={handleCardNameChange}/>
                                    <label htmlFor="cardNumb">Card Holder</label>
                                </div>
                                <div className={css.inputWrapper}>
                                    <div className={css.checkoutInputDiv}>
                                        <input type="text" name='cardNumb' placeholder='MM/YY' value={cardNumbValue} onChange={handleCardNumbChange}/>
                                        <label htmlFor="cardNumb">Expiration Date</label>
                                    </div>
                                    <div className={css.checkoutInputDiv}>
                                        <input type="password" name='cardNumb' placeholder='***' value={CardCVC} onChange={handleCardCVCChange}/>
                                        <label htmlFor="cardNumb">CVC</label>
                                    </div>
                                </div>
                            </div>
                            :
                            null
                        }
                    </div>
                    <div>
                        <div className={css.checkoutCreditCard}>
                        <input type="checkbox" name="" id="" defaultChecked={status2} onClick={() => {setStatus2(!status2)}}/>

                            <div className={css.checkoutRadioText}>
                                <h3>Credit / Debit Card</h3>
                                <span>We support Mastercard, Visa, Discover and Stripe.</span>
                            </div>
                            <div className={css.CCCImg}>
                                <img src={masterCardSvg} alt="" />
                                <img src={visaSvg} alt="" />
                            </div>
                        </div>
                        {
                            status2
                            ?
                            <div className={css.checkoutForm2}>
                                <div className={css.checkoutInputDiv}>
                                    <input type="text" name='cardNumb' placeholder='XXXX XXXX XXXX XXXX' value={cardValue} onChange={handleAddCard}/>
                                    <label htmlFor="cardNumb">Card Number</label>
                                </div>
                                <div className={css.checkoutInputDiv}>
                                    <input type="text" name='cardNumb' placeholder='John Doe' value={cardName} onChange={handleCardNameChange}/>
                                    <label htmlFor="cardNumb">Card Holder</label>
                                </div>
                                <div className={css.inputWrapper}>
                                    <div className={css.checkoutInputDiv}>
                                        <input type="text" name='cardNumb' placeholder='MM/YY'  value={cardNumbValue} onChange={handleCardNumbChange}/>
                                        <label htmlFor="cardNumb">Expiration Date</label>
                                    </div>
                                    <div className={css.checkoutInputDiv}>
                                        <input type="text" name='cardNumb' placeholder='***' value={CardCVC} onChange={handleCardCVCChange}/>
                                        <label htmlFor="cardNumb">CVC</label>
                                    </div>
                                </div>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
            <div className={css.checkoutCard}>
                <div>
                    <div>
                        <img src={comp.image} alt="" />
                    </div>
                    <div className={css.cardInfo}>
                        <div>
                            <h3>{comp.name}</h3>
                            <div>
                                <img src={starSvg} alt="" />
                                <span>{comp.review}</span>
                                <div>
                                    <p>{`(${comp.reviewLength} reviews)`}</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div>
                            <img src={comp.avatar} alt="" />
                            <div>
                                <p>Tour guide by</p>
                                <span>{comp.by}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.cardDate}>
                    <div>
                        <div>
                            <img src={calendarSvg} alt="" />
                            <div>
                                <p>Departure day</p>
                                <span>{comp.data}</span>
                            </div>
                        </div>
                        <div></div>
                        <div>
                            <img src={userSvg} alt="" />
                            <div>
                                <p>Guest</p>
                                <span>{comp.guestLength} Guest</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Service charge</span>
                            <p>{comp.servicePrice}$</p>
                        </div>
                        <div>
                            <span>Discount</span>
                            <p>-</p>
                        </div>
                    </div>
                </div>
                <div className={css.cardPrice}>
                    <div>
                        <span>Service charge</span>
                        <p>{comp.servicePrice}$</p>
                    </div>
                    <button onClick={()=>{navigate(`/checkout/${comp.id}/compleated/${comp.id}`)}}>Complete Booking</button>

                </div>
            </div>


        </section>
        <Footer/>
    </div>
  )
}

export default CheckoutPage
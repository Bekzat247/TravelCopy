import css from './Header.module.css'
import { Link, useNavigate } from "react-router-dom"
import dotsvg from '../../images/Ellipse.svg'
import borderSvg from './Divider.svg'
import logoSvg from '../../components/Footer/FooterImage/Logo (1).svg'
import loupe from '../../images/iconbase (5).svg'
import globus from '../../images/iconbase (6).svg'
import burgerMenu from '../../components/Header/iconbase (11).svg'
import darkBurgerMenu from '../../components/Header/iconbase (12).svg'
import { useState } from 'react'

// import burgerMenu from './iconbase (13).svg'


function Header({color, logosvg, background, secondColor, loupe, globus, burgerMenu}) {
  const navigate = useNavigate()
  const [isDarkMode, setDarkMode] = useState(false)
  return (
    <div className={css.wrapper}>
      <div>
        <Link to='/'>
          <img src={logosvg} alt=''/>   
        </Link>
        <Link to='/'><span>Home</span></Link>
        <Link to='/list'><span>Components</span></Link>
        <Link>
          <div className={css.pages}>
            <img src={dotsvg} alt=''/>
            <select name="" id="" style={{color: color}}>
              <option>Pages</option>
            </select>
          </div>
        </Link>
        <Link to='/blog'><span>Documentation</span></Link>
      </div>
      <div>
        <button>
          <img src={burgerMenu} alt="" />
        </button>
        <Link> <img src={loupe} alt="" /></Link>
        <Link><img src={globus} alt="" /></Link>
        <img src={borderSvg} alt="" />
        <Link to={'/login'} style={{color: color}}>Login</Link>
        <Link to={'/login'}><button style={{background: background, color:secondColor}}  >Join Us</button></Link>
      </div>
    </div>
  )
}

export default Header
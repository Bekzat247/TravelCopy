import { Link } from 'react-router-dom'
import css from './BreadCrumbs.module.css'
import iconSvg from '../../pages/detailsPage/detailsImage/ic_chevron_right.svg'

function BreadCrumbs({title}) {
  return (
    <div className={css.breadCrumb}>
        <Link to='/'>Home</Link>
        <img src={iconSvg} alt="" />
        <Link to='/list'>Tours</Link>
        <img src={iconSvg} alt="" />
        <p>{title}</p>
    </div>

  )
}

export default BreadCrumbs
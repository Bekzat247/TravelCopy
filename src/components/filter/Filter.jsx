import css from './Filter.module.css'
import loupe from '../../images/iconbase.svg'
import pinsvg from './filterImage/ic_pin.svg'
import calendarsvg from './filterImage/ic_calendar.svg'
import userGroupSvg from './filterImage/ic_users_group.svg'
import { Link } from 'react-router-dom'


function Filter({background}) {
  return (
    <div className={css.wrapper} style={{background: background}}>
        <Link>
          <div>
            <img src={pinsvg} alt="" />
            Where we go?
          </div>
        </Link>
        <div></div>
        <Link>
          <div>
              <img src={calendarsvg} alt="" />
              Departure Day
          </div>
        </Link>
        <div></div>
        <Link>
          <div>
              <img src={userGroupSvg} alt="" />
              Guest
          </div>
        </Link>
        <button><img src={loupe} alt="" /></button>
    </div>
  )
}

export default Filter
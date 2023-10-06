import css from './CardBlogInfo.module.css'
import cardBGImg from '../../pages/blogPage/blogPageImage/blogUsers/IMG.png'
import user1Svg from '../../pages/blogPage/blogPageImage/blogUsers/img (1).png'
import { useNavigate } from 'react-router-dom'



function CardBlogInfo({image, title, data, by, avatar, id}) {
  const navigate = useNavigate()
  return (
     <div className={css.cardBlogInfo}>
        <img src={image} alt="" />
        <div>
            <i>{data}</i>
            <h2 onClick={()=>{navigate(`/blog/details/${id}`)}}>{title}</h2>
        </div>
        <div onClick={() => alert('The user page is not found or not created')}>
            <img src={avatar} alt="" />
            <span>{by}</span>
        </div>
    </div>
  )
}

export default CardBlogInfo
import css from './BlogCard.module.css'
import user1Svg from '../../pages/blogPage/blogPageImage/blogUsers/img (1).png'
import { useNavigate } from 'react-router-dom'


function BlogCard({desc, title, avatar, by, data, id}) {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/blog/details')
    }
    const handleUserNavigate = () => {
        alert('The user page not founded or not created ')
    }
  return (
    <div className={css.wrapper} >
        <div>
            <div>
                <i>{data}</i>
            </div>
            <h2 onClick={()=>{navigate(`/blog/details/${id}`)}}>{title}</h2>
            <span>{desc}</span>
        </div>
        <div onClick={handleUserNavigate}>
            <img src={avatar} alt="" />
            <div>
                <p>{by}</p>
            </div>
        </div>
    </div>

  )
}

export default BlogCard
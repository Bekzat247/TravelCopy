import Header from '../../components/Header/Header'
import loupe from '../../images/iconbase (5).svg'
import globus from '../../images/iconbase (6).svg'
import burgerMenu from '../../components/Header/iconbase (11).svg'
import darkBurgerMenu from '../../components/Header/iconbase (12).svg'
import logoSvg from '../../components/Footer/FooterImage/Logo (1).svg'
import css from './login.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [Email, setEamil] = useState('')
    const [Avatar, setAvatar] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, Avatar, Email);
        const accContent = {
            name :name, 
            Email: Email, 
            Avatar: Avatar
        }
        console.log(accContent);
        navigate('/')
        localStorage.setItem('accInfo', accContent)
        setAvatar('')
        setEamil('')
        setName('')
    }
  return (
    <div>
        <Header color={'black'} logosvg={logoSvg} background={'#212B36'} secondColor={'white'} loupe={loupe} globus={globus} burgerMenu={darkBurgerMenu}/>
        <div className={css.wrapper}>
            <h1>Join to us</h1>
            <form className={css.inputs} onSubmit={handleSubmit}>
                <input type="text" placeholder='Full name' required onChange={(e) => setName(e.target.value)} value={name}/>
                <input type="text" placeholder='Email' required onChange={(e) => setEamil(e.target.value)} value = {Email}/>
                <input type="url" placeholder='Avatar URL' required onChange={(e) => setAvatar(e.target.value)} value={Avatar}/>
                <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
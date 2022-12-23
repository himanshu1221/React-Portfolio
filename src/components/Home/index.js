import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['i','m','a','n','s','h','u']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])  
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span> 
                <br/>
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span>    
                <img className='lettr_img' src={LogoTitle} alt="developer  " />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Frontend Developer / Blogger / Speaker</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Logo/>
        <Loader type='pacman'/> 
        </>
    )
}

export default Home
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Slider from "react-slick";
import LogoP from '../../projects_assets/cheatsheet.png'
import LogoW from '../../projects_assets/weather.png'
import LogoWC from '../../projects_assets/worldclock.png'
import LogoC from '../../projects_assets/calculator.png'
import LogoWa from '../../projects_assets/favicon.ico'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Bg from '../../projects_assets/bg.png'


const Projects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
    

    return(
        
        <>
        <div className="img_bg">
            <img src={Bg} alt='bulb'/>
        </div>
            <div className="container project-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't',"s"]}
                        idx={15}
                        />
                    </h1>
                        <h2>For More Projects you can see my <a href="https://github.com/himanshu1221">GitHub <FontAwesomeIcon icon={faGithub} color='black'/></a></h2>
                        <div className='project_slider'>
                            <Slider {...settings}>
                                <a className='link_toproject' target='_blank' href="https://himanshu1221.github.io/CheatSheet_Template/">
                                <div className="card">
                                    <img className='img' src={LogoP} />
                                    <span className='text_card'>Cheatsheet Template</span>
                                </div>
                                </a>
                                <a className='link_toproject' target='_blank' href="https://himanshu1221.github.io/Weather_Web/">
                                <div className="card">
                                    <img className='img' src={LogoW} />
                                    <span className='text_card'>Weathr Website</span>
                                </div>
                                </a>
                                <a className='link_toproject' target='_blank' href="https://himanshu1221.github.io/World-Clock/">
                                <div className="card">
                                    <img className='img' src={LogoWC} />
                                    <span className='text_card'>World Clock</span>
                                </div>
                                </a>
                                <a className='link_toproject' target='_blank' href="https://himanshu1221.github.io/Calculator/">
                                <div className="card">
                                    <img className='img' src={LogoC} />
                                    <span className='text_card'>Calculator</span>
                                </div>
                                </a>
                                <a className='link_toproject' target='_blank' href="https://himanshu1221.github.io/Windows_11_Clone/">
                                <div className="card">
                                    <img className='img' src={LogoWa} />
                                    <span className='text_card'>Windows 11 Clone</span>
                                </div>
                                </a>
                            </Slider>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Projects
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'



const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []) 
    return(
        <>
        <div className="contianer about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
                <p>
                Hi guys 👋
                I am Himanshu chhatwal . I am a student of btech cse . I have a keen intrest in learning as well as practising Java , python , AI , JavaScript . my major interest currently is to learn WEB3 and explore the blockchain world as it fascinates me a lot</p>
                <p> I am a person who is always eager to learn about the new technology and adapt them as quick as possible.</p>
                <p>I did an internship at immersephere as a web developer also contributed in open source . I look Forward to learn more and I am open to internships and projects related to my field....
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"/>
                    </div>
                </div>
            </div>        
        </div>
        <Loader type='pacman'/>
        </>

    )
}


export default About
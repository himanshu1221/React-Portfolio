import './index.scss'
import Logos from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faHashnode, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className="Nav-Bar">
        <Link className="logo" to='/'>
            <img src={Logos} alt="logo" /> 
            <img className='sub-logo' src={LogoSubtitle} alt="Himanshu" /> 
        </Link>

        <nav>
            <NavLink exact = "true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className="about-link" to = "/about">
                <FontAwesomeIcon icon = {faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className="contact-link" to = "/contact">
                <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className="project-link" to = "/projects">
                <FontAwesomeIcon icon = {faEye} color = "#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreffer' href='https://www.linkedin.com/in/himanshu-c-537527215/'>
                    <FontAwesomeIcon icon={faLinkedin} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreffer' href='https://github.com/himanshu1221'>
                    <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreffer' href='https://twitter.com/himanshuchhatw2'>
                    <FontAwesomeIcon icon={faTwitter} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreffer' href='https://hashnode.com/@Himanshu2314'>
                    <FontAwesomeIcon icon={faHashnode} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreffer' href='https://www.instagram.com/himanshu__2314/'>
                    <FontAwesomeIcon icon={faInstagram} color = "#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar
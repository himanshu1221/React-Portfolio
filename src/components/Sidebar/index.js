import './index.scss'
import Logos from '../../assets/images/logo-h.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => (
    <div className="Nav-Bar">
        <Link className="logo" to='/'>
            <img src={Logos} alt="logo" /> 
            <img className='sub-logo' src={LogoSubtitle} alt="logo" /> 
        </Link>

        <nav>
            <NavLink exact = "true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
            </NavLink>
        </nav>
    </div>
)
export default Sidebar
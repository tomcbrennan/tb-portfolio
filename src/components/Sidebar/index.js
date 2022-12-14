import { NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { UseScrollPosition } from '../../hooks/UseScrollPosition';

export default function Sidebar() {

    const navigation = document.querySelector('.navigation');
    let previousScrollPosition = UseScrollPosition();

    window.onscroll = () => {
        let currentScrollPosition = window.pageYOffset;

        if(currentScrollPosition > previousScrollPosition){
            navigation.style.bottom = '-100px';
        } else {
            navigation.style.bottom = '0';
        }

        previousScrollPosition = currentScrollPosition;
    }

  return (
    <div className="navigation">
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#cccccc" />
                <span>Home</span>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#cccccc" />
                <span>About</span>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faBriefcase} color="#cccccc" />
                <span>Portfolio</span>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#cccccc" />
                <span>Contact</span>
            </NavLink>
        </nav>
        {/* <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/thomas-brennan-523b68119/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/tomcbrennan">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul> */}
    </div>
  )
}
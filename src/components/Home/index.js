import { Link } from "react-router-dom"
import './index.scss';
import Logo from '../../assets/images/tb-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';


export default function Home() {

  return (
    <div className="homepage fade-in">
        <div className="homepage-content">
            <h1>Tom Brennan.</h1>
            <h2>digital designer + developer</h2>
            <img src={Logo} className="logo" alt="Logo" />
            <Link to="/portfolio" className="btn btn-filled">Explore my work<FontAwesomeIcon icon={faLongArrowAltRight} color="#f4f4f4" /></Link>
        </div>
    </div>
  )
}
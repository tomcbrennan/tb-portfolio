import { Link } from "react-router-dom"
import './index.scss';
import Logo from '../../assets/images/tb-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    

    return (
        <div className="container homepage">
            <div className="homepage-content">
                <h1>Tom Brennan.</h1>
                <h2>web developer + ui/ux designer</h2>
                <img src={Logo} className="logo" alt="Logo Wink" />
                <Link to="/portfolio" className="btn btn-filled">View my work<FontAwesomeIcon icon={faLongArrowAltRight} color="#f4f4f4" /></Link>
            </div>
        </div>
    )
}

export default Home
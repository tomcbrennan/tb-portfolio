import './index.scss';
import Sidebar from '../Sidebar';
import { Link, Outlet } from 'react-router-dom';
import PDF from '../../assets/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
    
    // const cursor = document.querySelector('.cursor');

    // document.addEventListener('mousemove', e => {
    //     cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px");
    // });


    return (
        <div className="App">
            <Link className="home-initials" to="/">
                <span>tb.</span>
            </Link>
            <Sidebar/>
            <div className="page">
                <Outlet />
            </div>
            <a className='btn btn-outline resume-btn' href={PDF} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDownload} color="#353535" /> Resume</a>
            <div className="cursor"></div>
        </div>
    )
}

export default Layout
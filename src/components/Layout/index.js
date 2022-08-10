import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import PDF from '../../assets/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import TopLetters from '../Top Letters';


export default function Layout() {
  return (
    <div className="App">
        <TopLetters />
        <div className="page">
            <Outlet />
        </div>
        <a className='btn btn-outline resume-btn' href={PDF} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDownload} color="#353535" /> Resume</a>
        <Sidebar/>
    </div>
  )
}
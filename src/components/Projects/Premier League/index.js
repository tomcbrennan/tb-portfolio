import './index.scss';
import '../allProjects.scss';
// import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faLongArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function PremierLeague() {
  
  return (
    <div className="project-page fade-in">
      <div className="section-container project-banner premierleague-banner">
        <div className="container top-container">
            <div className="content">
              <span>FEATURED PROJECT</span>
              <h1>Premier League App</h1>
              <h2>Live premier league scores & statistics.</h2>
              <div className="buttons">
                <a href="https://kalbarriskywalkdinner.com.au" className="btn btn-project" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLink} color="#353535" /> &nbsp; View Website</a>
                <AnchorLink href="#scroll" className="btn btn-project">View Project Details &nbsp;<FontAwesomeIcon icon={faLongArrowDown} color="#353535" /></AnchorLink>
              </div>
            </div>
        </div>
      </div>

      <div className="section-container" style ={{height: "100vh", backgroundColor: "#000000"}} id='scroll'>
          hello
      </div>
    </div>
  )
}
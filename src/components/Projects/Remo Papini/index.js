import './index.scss';
import '../allProjects.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowDown, faExternalLink } from '@fortawesome/free-solid-svg-icons';

export default function RemoPapini() {
  return (
    <div className="project-page fade-in">
      <div className="project-banner remopapini-banner">
        <div className="container">
          <div className="content">
            <span>FEATURED PROJECT</span>
            <h1>Remo Papini</h1>
            <h2>Improved function and a better way of life.</h2>
          </div>
          <div className="buttons">
            <a href="https://remopapini.com.au" className="btn btn-project" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLink} color="#353535" />&nbsp; View Website</a>
            <AnchorLink href="#scroll" className="btn btn-project">View Project Details &nbsp;<FontAwesomeIcon icon={faLongArrowDown} color="#353535" /></AnchorLink>
          </div>
        </div>
      </div>
      <div className="section-container" style ={{height: "100vh", backgroundColor: "#000000"}} id='scroll'>
        hello
      </div>
    </div>
  )
}
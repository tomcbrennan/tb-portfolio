import './index.scss';
import '../allProjects.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowDown } from '@fortawesome/free-solid-svg-icons';
// import { faFigma } from '@fortawesome/free-brands-svg-icons';
import pocketparkhand from './../../../assets/images/pocketparkhand.png';

export default function PocketPark() {
  return (
    <div className="project-conainer fade-in">
      <div className="project-banner pocketpark-banner">
        <div className="container">
          <div className="content">
            <span>FEATURED PROJECT</span>
            <h1>Pocket Park</h1>
            <h2>Perth's alternative parking solution.</h2>
            <div className="buttons">
              <AnchorLink href="#hello" className="btn btn-project">View Project Details &nbsp;<FontAwesomeIcon icon={faLongArrowDown} color="#353535" /></AnchorLink>
            </div>
          </div>
        </div>
        <div className="project-image">
          <img src={pocketparkhand} alt="Pocket Park" />
        </div>
      </div>
    </div>
  )
}
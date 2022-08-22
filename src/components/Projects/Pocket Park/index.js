import './index.scss';
import '../allProjects.scss';
import pocketparkhand from './../../../assets/images/pocketparkhand.png';

export default function PocketPark() {
  return (
    <div className="container pocketpark-project">
        <div className="project-intro">
          <div className="content">
            <span>FEATURED PROJECT</span>
            <h1>Pocket Park</h1>
            <h2>Perth's alternative parking solution.</h2>
          </div>
          <div className="project-image">
            <img src={pocketparkhand} alt="Pocket Park" />
          </div>
        </div>
    </div>
  )
}
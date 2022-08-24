import './index.scss';
import introPic from '../../assets/images/intro-pic.png';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faSass, faReact, faVuejs, faWordpress, faFigma, faHotjar, faGithub, faBitbucket } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  
  const ref = useRef(null);

  useEffect(() => {

    const element = ref.current;

    gsap.fromTo(
      element.querySelector(".fade-up"),
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.4
      }
    );

  }, []);


  return (
    <div className="about-page fade-in" ref={ref}>
      <div className="about-section">
        <div className='container top-container'>
            <div className="about-content">
              <div className="about-image">
                  <img src={introPic} alt="Tom Brennan" />
              </div>
              <div className="about-text fade-up">
                  <h1>Hey Hi Hello! 👋</h1>
                  <h3>I'm Tom, and I'm a <span>Digital</span> <span>Designer</span> & <span>Developer</span> from Perth, Western Australia. Welcome to my corner of the web.</h3>
                  <p>Since I can remember, I've been a sucker for sports, sushi, family board game nights and most importantly, building things. From the moment I picked up my first LEGO brick as a child, the desire to turn the smallest of ideas into my own unique experiences has steadily eased me towards the digital world. This passion has finally landed me where I am today, working in Perth's digital industry. Nothing excites me more than where user interface and experience design can take us in the future, and I'd love to be part of it!</p>
              </div>
          </div>
        </div>
      </div>
      <div className="skills-section">
        <div className="container">
          <div className="skills-grid">
            <div className="skill">
              <FontAwesomeIcon icon={faHtml5} color="#cccccc" />
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faSass} color="#cccccc" />
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faReact} color="#cccccc" />
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faVuejs} color="#cccccc" />
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faWordpress} color="#cccccc" />
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faFigma} color="#cccccc" />
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faHotjar} color="#cccccc" />
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faGithub} color="#cccccc" />
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faBitbucket} color="#cccccc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
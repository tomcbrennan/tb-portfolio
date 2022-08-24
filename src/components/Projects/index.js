import './index.scss';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Projects() {

  const [projects] = useState([
    { 
      title: 'Premier League App', 
      url: '/portfolio/premier-league-app', 
      body: 'Live premier league scores & statistics.',
      date: '2020', 
      tech: 'Next JS, Rapid API',
      id: 1, 
      name: 'premierleague-tile',
    },
    { 
      title: 'Pocket Park', 
      url: '/portfolio/pocket-park', 
      body: "Perth's alternative parking solution.",
      date: '2020', 
      tech: 'Adobe XD',
      id: 2, 
      name: 'pocketpark-tile'
    },
    { 
      title: 'Little Green Pharma', 
      url: '/portfolio/little-green-pharma', 
      body: 'Making a world of difference.',
      date: '2022',
      tech: 'Wordpress, mySQL, PHP, Figma',
      id: 3, 
      name: 'littlegreenpharma-tile'
    },
    { 
      title: 'Remo Papini', 
      url: '/portfolio/remo-papini', 
      body: 'Improved function and a better way of life.', 
      date: '2021', 
      tech: 'Wordpress, mySQL, PHP',
      id: 4,
      name: 'remopapini-tile'
    },
    { 
      title: 'Sportal', 
      url: '/portfolio/sportal', 
      body: 'Your campus exercise companion.', 
      date: '2020', 
      tech: 'Adobe XD',
      id: 5,
      name: 'sportal-tile'
    },
    { 
      title: 'Party on the Green', 
      url: '/portfolio/party-on-the-green', 
      body: "Perth's premier mobile mini golf.",
      date: '2021', 
      tech: 'Wordpress, mySQL, PHP',
      id: 6, 
      name: 'partyonthegreen-tile'
    },

  ]);

  const itemsRef = useRef([]);
  itemsRef.current = [];

  const addToRefs = (item) => {
    if (item) {
      itemsRef.current.push(item)
    }
  }

  useEffect(() => {
    itemsRef.current.map((item) => {
      gsap.fromTo(
        item,
        {
          autoAlpha: 0,
          ease: Power2.out,
          clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
          scale: 1.3,
          delay: -1.5,
        },
        {
          duration: 1.25,
          autoAlpha: 1,
          ease: Power2.out,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,

          scrollTrigger: {
            trigger: item,
            start: "top center+=150",
            end: "top 50%",
          }
        }
      )
    });

  }, []);
  

  return (
    <div className="projects">
        <h2>My latest work</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <NavLink className={ `project-tile ${project.name}` } to={ project.url } key={ project.id }>
              <div className="project-image-container" ref={addToRefs}>
                <div className="project-image"></div>
              </div>
              <div className="project-details">
                <h3>{ project.title }</h3>
                <p className="project-body">{ project.body }</p>
                <p className="project-name">{ project.date } { project.tech }</p>
              </div>
            </NavLink>
          ))}
        </div>
    </div>
  )
}
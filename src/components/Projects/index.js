import './index.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Projects() {

  const [projects] = useState([
    { 
      title: 'Little Green Pharma', 
      url: '/portfolio/little-green-pharma', 
      body: 'lorem ipsum...', 
      date: '2022', 
      id: 1, 
      name: 'lgp-tile'
    },
      
    { 
      title: 'Remo Papini', 
      url: '/portfolio/remo-papini', 
      body: 'lorem ipsum...', 
      date: '2021', 
      id: 2, 
      name: 'remopapini-tile'
    },

    { 
      title: 'Premier League App', 
      url: '/portfolio/premier-league-app', 
      body: 'lorem ipsum...', 
      date: '2020', 
      id: 3, 
      name: 'premierleague-tile'
    },

  ]);


  return (
    <div className="projects">
        <h1>My latest work</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <NavLink className={ `project-tile ${project.name}` } to={ project.url } key={ project.id }>
              <h3>{ project.title }</h3>
              <p>{ project.body }</p>
              <p>{ project.date }</p>
            </NavLink>
          ))}
        </div>
    </div>
  )
}
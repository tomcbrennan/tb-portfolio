import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import Projects from '../Projects';
import './index.scss';

export default function Portfolio() {

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
    <div className="portfolio-page fade-in" ref={ref}>
        <div className="intro-section">
          <div className="container top-container">
            <div className="content">
                <div className="portfolio-intro-heading">
                    <h1>What do I do?</h1>
                </div>
                <div className="portfolio-intro-text fade-up">
                    <h4>Below you'll find some of my latest work and featured projects. Not all make the cut, so you can be sure these are what I'm most proud of...so far❗</h4>
                    <p>My projects range from digital and user experience design, through to web development. I'm passionate about honing my craft in all aspects of a project. With a strong understanding of how design translates to development, I strive to create cutting-edge products and solutions.<br/><br/> <strong>Happy exploring &nbsp; : - )</strong></p>
                </div>
              </div>
            </div>
        </div>
        <div className="projects-section">
            <div className="container">
              <Projects />
            </div>
        </div>
    </div>
  )
}
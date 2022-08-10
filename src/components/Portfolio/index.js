import Projects from '../Projects';
import './index.scss';

export default function Portfolio() {
  return (
    <div className="container portfolio-page">
        <div className="portfolio-intro">
            <div className="portfolio-intro-heading">
                <h1>What do I do?</h1>
            </div>
            <div className="portfolio-intro-text">
                <h4>Below you'll find some of my latest work and featured projects. Not all make the cut, so you can be sure these are what I'm most proud of...so far❗</h4>
                <p>My projects range from digital and user experience design, through to web development. I'm passionate about honing my craft in all aspects of a project. With a strong understanding of how design translates to development, I strive to create cutting-edge products and solutions.<br/><br/> <strong>Happy exploring :)</strong></p>
            </div>
        </div>
        <div className="projects-section">
            <Projects />
        </div>
    </div>
  )
}
import './index.scss';
import introPic from '../../assets/images/intro-pic.png';

export default function About() {
  return (
    <div className="container about-page">
        <div className="about-content">
            <div className="about-image">
                <img src={introPic} alt="Tom Brennan" />
            </div>
            <div className="about-text">
                <h1>Hey Hi Hello! 👋</h1>
                <h3>I'm Tom, and I'm a Digital Designer & Developer from Perth, Western Australia. Welcome to my corner of the web.</h3>
                <p>Since I can remember, I've been a sucker for sports, sushi, family board game nights and most importantly, building things. From the moment I picked up my first LEGO brick as a child, the desire to turn the smallest of ideas into my own unique experiences has steadily eased me towards the digital world. This passion has finally landed me where I am today, working in Perth's Digital industry. Nothing excites me more than where user interface and experience design can take us in the future, and I'd love to be part of it!</p>
            </div>
        </div>
    </div>
  )
}
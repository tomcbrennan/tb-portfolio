import './App.scss';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import LittleGreenPharma from './components/Projects/Little Green Pharma';
import RemoPapini from './components/Projects/Remo Papini';
import PocketPark from './components/Projects/Pocket Park';
import PremierLeague from './components/Projects/Premier League';


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/premier-league-app" element={<PremierLeague />} />
        <Route path="/portfolio/little-green-pharma" element={<LittleGreenPharma />} />
        <Route path="/portfolio/remo-papini" element={<RemoPapini />} />
        <Route path="/portfolio/pocket-park" element={<PocketPark />} />
      </Route>
    </Routes>
  )
}
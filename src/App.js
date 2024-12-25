import React from 'react';
import { Link } from 'react-scroll';
import Home from './sections/Home';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import './styles/App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="services" smooth={true} duration={500}>Services</Link>
        <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>

      <div id="home">
        <Home />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;

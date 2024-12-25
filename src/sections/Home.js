import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

function Home() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const phrases = [
    'A Full-Stack Developer',
    'A Creative Problem-Solver',
    'A Tech Enthusiast',
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    if (index < phrases[currentPhraseIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + phrases[currentPhraseIndex][index]);
        setIndex(index + 1);
      }, 100); // Typing speed in milliseconds
      return () => clearTimeout(timeout);
    } else {
      // Pause for 2 seconds before clearing text
      const pauseTimeout = setTimeout(() => {
        setText('');
        setIndex(0);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(pauseTimeout);
    }
  }, [index, currentPhraseIndex]);

  return (
    <motion.section
      className="section home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-container">
        {/* Left Side Content */}
        <div className="home-left">
          <h1>
            Hi, I'm <span>Sanurag Maini</span>
          </h1>
          <h2 className="typewriter">{text}</h2>
          <p>
            I specialize in creating sleek websites, responsive mobile apps, and robust backend systems. Let's build something amazing together!
          </p>
          <div className="home-buttons">
            <button className="btn btn-filled">Hire Me</button>
            <button className="btn btn-outline">Experience</button>
          </div>
        </div>

        {/* Right Side Profile Picture */}
        <div className="home-right">
          <div className="profile-pic-container">
            <img
              src="/images/profilepic.jpeg" // Replace with your profile picture path
              alt="Sanurag Maini"
              className="profile-pic"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;

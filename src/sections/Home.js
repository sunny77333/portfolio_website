import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

function Home() {
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
          <h2>A Full-Stack Developer</h2>
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

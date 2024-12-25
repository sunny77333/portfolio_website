import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Portfolio.css'; // Create a Portfolio.css file for styles

function Portfolio() {
  // Array of project data
  const projects = [
    {
      id: 1,
      name: 'Project One',
      description: 'A description of Project One.',
      image: '/path-to-your-image1.jpg', // Replace with actual image paths
      link: 'https://github.com/sunny77333/project-one',
    },
    {
      id: 2,
      name: 'Project Two',
      description: 'A description of Project Two.',
      image: '/path-to-your-image2.jpg',
      link: 'https://github.com/sunny77333/project-two',
    },
    {
      id: 3,
      name: 'Project Three',
      description: 'A description of Project Three.',
      image: '/path-to-your-image3.jpg',
      link: 'https://github.com/sunny77333/project-three',
    },
  ];

  return (
    <motion.section
      className="section portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="portfolio-container">
        <h1>My Projects</h1>
        <p className="subheading">Sub heading goes here</p>
        <div className="portfolio-cards">
          {projects.map((project) => (
            <div className="card" key={project.id}>
              <div className="card-image">
                <img src={project.image} alt={project.name} />
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                <button className="btn btn-filled">Click to View</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;

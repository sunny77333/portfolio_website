import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Services.css';

function Services() {
  return (
    <motion.section
      className="section services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="services-container">
        <h1>Our Services</h1>
        <p className="subheading">Sub Heading Goes Here</p>
        <div className="services-cards">
          <div className="card">
            <div className="icon">&#128142;</div> {/* Use actual icon or image */}
            <h3>Development</h3>
            <p>
              Custom web development solutions tailored to your needs. Fast and scalable applications.
            </p>
          </div>
          <div className="card">
            <div className="icon">&#128155;</div> {/* Use actual icon or image */}
            <h3>Design</h3>
            <p>
              Modern and responsive designs for all devices. Creative solutions for your brand.
            </p>
          </div>
          <div className="card">
            <div className="icon">&#127758;</div> {/* Use actual icon or image */}
            <h3>SEO</h3>
            <p>
              Boost your website's visibility with expert SEO strategies. Get more traffic and leads.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Services;

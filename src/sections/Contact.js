import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

function Contact() {
  return (
    <motion.section
      className="section contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p className="subheading">I'd love to hear from you! Feel free to reach out.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn btn-filled">Send Message</button>
        </form>
        <div className="social-links">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/sunny77333" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;

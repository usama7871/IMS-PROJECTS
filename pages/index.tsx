"use client";
import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Header with Navigation */}
      <header className="header">
        <div className="header-content">
          <h1 className="site-title">Quran And Science </h1>          
        </div>
      </header>

      {/* Main Content */}
<main className="main-content">
  <h2 className="main-title">Explore My Projects</h2>
  <ul className="projects-list">
    <li className="project-item">
      <Link href="/projects/BlogPost1" passHref>
        <button className="project-button" aria-label="Sound And Prophet Dawood">
          <span role="img" aria-label="Book">📚</span> Sound And Prophet Dawood
        </button>
      </Link>
    </li>
    <li className="project-item">
      <Link href="/projects/BlogPost2" passHref>
        <button className="project-button" aria-label="The Night Journey Of Prophet Muhammad">
          <span role="img" aria-label="Book">📚</span> The Night Journey Of Prophet Muhammad
        </button>
      </Link>
    </li>
    <li className="project-item">
      <Link href="/projects/BlogPost3" passHref>
        <button className="project-button" aria-label="Next Topic">
          <span role="img" aria-label="Book">📚</span> The Origin, Purpose, and Destiny of Humanity
        </button>
      </Link>
    </li>
  </ul>
</main>

      {/* Footer */}
      <footer className="footer">        
        <div className="social-links">
          <a href="https://x.com/usama7871?t=jpefjAMY9dedR7pYjaA1Tw&s=09" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter size={20} /> Twitter-X
          </a>
          <a href="https://github.com/usama7871" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/usama-abdullah-91b693201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a href="https://wa.me/923154996438" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaWhatsapp size={20} /> WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
};
export default HomePage;

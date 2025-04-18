import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  const location= useLocation();
  const navigate= useNavigate();
  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      // Already on home page, scroll directly
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
        offset: -70, // optional: offset for sticky navbar
      });
    } else {
      // Navigate to home page and scroll to section
      navigate('/', { state: { scrollTo: sectionId } });
      // The scrolling will be handled in a useEffect in the Home component
    }
  };

  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 pt-8 pb-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Column 1: Logo & About */}
          <div>
            <div className="flex items-center mb-1">
              <img src="/img/logo.svg" alt="Generation of Miracles Logo" className="h-8 w-8 mr-2 invert" />
              <span className="text-lg font-display font-bold text-white">
                <span className="text-indigo-400">Generation of</span>
                <span className="text-indigo-400"> Miracles</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">We are a team of passionate developers and designers creating exceptional digital experiences.</p>
            {/* Spacer to push icons down */}
            <div className="flex-grow" />
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-1">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><button onClick={() => handleNavClick('home')} className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 block">Home</button></li>
              <li><button onClick={() => handleNavClick('about')} className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 block">About</button></li>
              <li><button onClick={() => handleNavClick('team')} className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 block">Team</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 block">Contact</button></li>
            </ul>
          </div>
          {/* Column 3: Mission Statement */}
          <div>
            <h3 className="text-white font-bold text-base mb-1">Our Mission</h3>
            <p className="text-gray-400 text-sm">We strive to create innovative digital solutions that empower businesses and individuals to achieve their goals through cutting-edge technology and exceptional user experiences.</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; {currentYear} Generation of Miracles. All rights reserved.</p>
            <p className="text-gray-500 text-sm">
              Designed with <span className="text-red-500">♥</span> by Generation of Miracles Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
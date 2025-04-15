import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Column 1: Logo & About */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/img/logo.png" alt="Generation of Miracles Logo" className="h-10 w-10 mr-3" />
              <span className="text-xl font-display font-bold text-white">
                <span className="text-indigo-400">Generation of</span>
                <span className="text-indigo-400"> Miracles</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">We are a team of passionate developers and designers creating exceptional digital experiences.</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 block">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 block">About</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 block">Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 block">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
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
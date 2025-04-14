import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      // In a real app, you would send this to your API
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 pt-8 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Logo & About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-display font-bold">
                <span className="text-indigo-600 dark:text-indigo-400">Generation of</span>
                <span className="text-indigo-600 dark:text-indigo-400"> Miracles</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">We are a team of passionate developers and designers creating exceptional digital experiences.</p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Home</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3: Mission Statement */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-4">We strive to create innovative digital solutions that empower businesses and individuals to achieve their goals through cutting-edge technology and exceptional user experiences.</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 Generation of Miracles. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
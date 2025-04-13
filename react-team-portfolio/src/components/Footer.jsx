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

// Column 3: Mission Statement
<div>
  <h3 className="text-white font-bold text-lg mb-4">Our Mission</h3>
  <p className="text-gray-400 mb-4">We strive to create innovative digital solutions that empower businesses and individuals to achieve their goals through cutting-edge technology and exceptional user experiences.</p>
  <div className="flex space-x-4">
    <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
      <span className="sr-only">LinkedIn</span>
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>
  </div>
</div>
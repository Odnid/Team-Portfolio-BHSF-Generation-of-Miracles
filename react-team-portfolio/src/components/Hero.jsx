import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    
    // Start animations after a short delay for better UX
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 overflow-hidden"> 
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className={`absolute rounded-full bg-primary-400/20 dark:bg-primary-600/10 ${isAnimated ? 'animate-float' : ''}`}
            style={{
              width: `${Math.random() * 8 + 2}rem`,
              height: `${Math.random() * 8 + 2}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary-500/10 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-secondary-500/15 to-transparent"></div>
      
      {/* Main overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 via-transparent to-secondary-900/20"></div>
      
      <div className="container mx-auto relative z-10 px-6">
        <div className="flex flex-col items-center justify-center">
          {/* Hero content */}
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Generation of Miracles
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              We transform ideas into exceptional digital experiences with passion, 
              creativity and technical expertise.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#team" 
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-gray-700 px-8 py-3 rounded-lg transition-all duration-300 inline-block font-semibold shadow-lg hover:shadow-gray-300/30 dark:hover:shadow-gray-900/30 transform hover:-translate-y-1"
              >
                Meet Our Team
              </a>
              <a 
                href="#contact" 
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-gray-700 px-8 py-3 rounded-lg transition-all duration-300 inline-block font-semibold shadow-lg hover:shadow-gray-300/30 dark:hover:shadow-gray-900/30 transform hover:-translate-y-1"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className={`w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 ${isAnimated ? 'animate-bounce' : ''}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
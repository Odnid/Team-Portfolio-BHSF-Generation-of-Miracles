import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900"> 
    <div className="absolute inset-0 bg-gradient-to-b from-gray-400/30 to-secondary-10/10 dark:from-primary-900/5 dark:to-secondary-900/5"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 
            className="text-4xl font-display font-bold mb-8 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent" 
            data-aos="fade-up"
          >
            Meet Our Amazing Team
          </h1>
          <p 
            className="text-xl text-gray-600 dark:text-gray-400 mb-12" 
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            We're a group of passionate individuals working together to create amazing experiences.
          </p>
          <a 
            href="#team" 
            className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white px-8 py-3 rounded-full transition-colors inline-block font-semibold"
          >
            Meet the Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
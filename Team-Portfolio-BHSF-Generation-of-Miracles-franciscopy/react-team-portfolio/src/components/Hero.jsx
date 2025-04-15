import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const buttonRef = useRef(null);
  
  // Performance optimization: Debounce mouse movement handler
  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Only update state if there's significant movement
    if (Math.abs(x - mousePosition.x) > 0.01 || Math.abs(y - mousePosition.y) > 0.01) {
      setMousePosition({ x, y });
    }
  }, [mousePosition]);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: 'mobile' // Performance optimization for mobile
    });
    
    // Start animations after a short delay for better UX
    const timer = setTimeout(() => {
      setIsAnimated(true);
      setIsLoaded(true);
    }, 300);
    
    // Performance optimization: Use passive listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Add focus tracking for accessibility
    const handleFocus = () => {
      if (buttonRef.current && document.activeElement === buttonRef.current) {
        buttonRef.current.classList.add('ring-2', 'ring-indigo-400', 'ring-offset-2');
      }
    };
    
    window.addEventListener('focus', handleFocus, true);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('focus', handleFocus, true);
    };
  }, [handleMouseMove]);

  // Performance optimization: Memoize particle options
  const particleOptions = useMemo(() => ({
    fullScreen: { enable: false },
    fpsLimit: 60, // Reduced for better performance
    particles: {
      groups: {
        z5000: {
          number: { value: window.innerWidth < 768 ? 30 : 70 }, // Responsive reduction
          zIndex: { value: 5000 }
        },
        z7500: {
          number: { value: window.innerWidth < 768 ? 15 : 30 },
          zIndex: { value: 7500 }
        },
        z2500: {
          number: { value: window.innerWidth < 768 ? 25 : 50 },
          zIndex: { value: 2500 }
        },
        z1000: {
          number: { value: window.innerWidth < 768 ? 20 : 40 },
          zIndex: { value: 1000 }
        }
      },
      number: {
        value: window.innerWidth < 768 ? 100 : 200, // Responsive reduction
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#4F46E5", "#818CF8", "#6366F1", "#4338CA", "#3730A3"],
        animation: {
          enable: true,
          speed: 20,
          sync: false
        }
      },
      shape: {
        type: ["circle", "triangle", "star", "polygon"],
        options: {
          star: {
            sides: 5
          },
          polygon: {
            sides: 6
          }
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 3,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 5,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#6366F1",
        opacity: 0.4,
        width: 1,
        triangles: {
          enable: true,
          color: "#6366F1",
          opacity: 0.1
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      },
      life: {
        duration: {
          sync: false,
          value: 3
        },
        count: 0,
        delay: {
          random: {
            enable: true,
            minimumValue: 0.5
          },
          value: 1
        }
      },
      rotate: {
        random: true,
        direction: "clockwise",
        animation: {
          enable: true,
          speed: 5,
          sync: false
        }
      },
      tilt: {
        random: true,
        direction: "clockwise",
        animation: {
          enable: true,
          speed: 10,
          sync: false
        }
      },
      roll: {
        darken: {
          enable: true,
          value: 25
        },
        enable: true,
        speed: {
          min: 15,
          max: 25
        }
      },
      wobble: {
        distance: 30,
        enable: true,
        speed: {
          min: -15,
          max: 15
        }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8
        },
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    background: {
      color: "transparent",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    },
    backgroundMask: {
      enable: true,
      cover: {
        color: "#000",
        opacity: 0.05
      }
    },
    detectRetina: true
  }), []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Animation variants for framer-motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const buttonHoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 overflow-hidden"
      aria-label="Welcome to Generation of Miracles"
    > 
      {/* Dynamic particles background with lazy loading */}
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Particles
              id="tsparticles"
              init={particlesInit}
              className="absolute inset-0"
              options={particleOptions}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Animated flowing ribbons with parallax effect */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[150%] h-[50%] animate-wave" 
          style={{
            top: `${30 + mousePosition.y * 10}%`,
            left: `-25%`,
            background: `linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.1) 30%, rgba(99, 102, 241, 0.2) 50%, rgba(99, 102, 241, 0.1) 70%, transparent 100%)`,
            transform: `rotate(${-5 + mousePosition.y * 2}deg) translateX(${mousePosition.x * 5}px)`,
            transformOrigin: 'center center',
            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        ></div>
        <div 
          className="absolute w-[150%] h-[30%] animate-wave-reverse animation-delay-1000" 
          style={{
            top: `${60 - mousePosition.y * 5}%`,
            left: `-25%`,
            background: `linear-gradient(90deg, transparent 0%, rgba(67, 56, 202, 0.05) 20%, rgba(67, 56, 202, 0.1) 50%, rgba(67, 56, 202, 0.05) 80%, transparent 100%)`,
            transform: `rotate(${3 - mousePosition.y * 1}deg) translateX(${-mousePosition.x * 3}px)`,
            transformOrigin: 'center center',
            transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        ></div>
      </div>
      
      {/* Dynamic glow orbs with parallax effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[40vw] h-[40vw] rounded-full filter blur-[100px] animate-pulse-slow"
          style={{
            top: `${30 - mousePosition.y * 15}%`,
            left: `${30 - mousePosition.x * 15}%`,
            background: `radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 60%, transparent 100%)`,
            transform: `scale(${1 + (mousePosition.x * 0.1)})`,
            transition: 'transform 0.5s ease-out, top 0.5s ease-out, left 0.5s ease-out'
          }}
        ></div>
        <div 
          className="absolute w-[35vw] h-[35vw] rounded-full filter blur-[120px] animate-pulse-slower animation-delay-2000"
          style={{
            bottom: `${20 - mousePosition.y * 15}%`,
            right: `${20 - mousePosition.x * 15}%`,
            background: `radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, rgba(79, 70, 229, 0.05) 60%, transparent 100%)`,
            transform: `scale(${1 + (mousePosition.y * 0.1)})`,
            transition: 'transform 0.5s ease-out, bottom 0.5s ease-out, right 0.5s ease-out'
          }}
        ></div>
      </div>
      
      {/* Advanced 3D mouse tracking effect */}
      <div 
        className="absolute pointer-events-none z-10 h-56 w-56 opacity-30"
        style={{
          left: `calc(${mousePosition.x * 100}% - 100px)`,
          top: `calc(${mousePosition.y * 100}% - 100px)`,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
          filter: 'blur(20px)',
          transition: 'left 0.3s ease-out, top 0.3s ease-out, opacity 0.3s ease-out',
          opacity: isAnimated ? 0.3 : 0
        }}
      ></div>
      
      {/* Main content with framer-motion animations */}
      <div className="container mx-auto relative z-20 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Hero content */}
          <motion.div 
            className="text-center md:text-left max-w-3xl mx-auto md:mx-0 md:w-3/5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              variants={fadeIn}
            >
              We are the{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
                Generation of Miracles
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              variants={fadeIn}
            >
              We transform ideas into exceptional digital experiences with passion, 
              creativity and technical expertise.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              variants={fadeIn}
            >
              <motion.a 
                href="#team" 
                className="group relative overflow-hidden bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/30 px-8 py-3 rounded-lg transition-all duration-300 inline-block font-semibold shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10 transform hover:-translate-y-1 focus:outline-none"
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                ref={buttonRef}
                aria-label="Meet our team section"
                tabIndex={0}
              >
                <span className="relative z-10">Meet Our Team</span>
                <motion.div 
                  className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                ></motion.div>
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white px-8 py-3 rounded-lg transition-all duration-300 inline-block font-semibold shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 focus:outline-none"
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                aria-label="Contact us section"
                tabIndex={0}
              >
                <span className="relative z-10">Contact Us</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
                ></motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Animated illustration/graphic - visible on medium screens and up */}
          <motion.div 
            className="hidden md:block md:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <div className="relative">
              {/* Abstract shapes that respond to mouse movement */}
              <div 
                className="absolute -top-20 -left-10 w-64 h-64 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                style={{
                  transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                  transition: 'transform 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
                }}
              ></div>
              <div 
                className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                style={{
                  transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
                  transition: 'transform 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
                }}
              ></div>
              
              {/* 3D rotating cube for visual interest */}
              <div className="relative h-80 w-80 mx-auto perspective-800">
                <div 
                  className={`relative h-full w-full transform-style-3d ${isAnimated ? 'animate-slow-spin' : ''}`}
                  style={{
                    transform: `rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`,
                    transition: 'transform 0.4s ease-out'
                  }}
                >
                  {/* Cube faces */}
                  <div className="absolute h-40 w-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-indigo-300/30 dark:border-indigo-700/30 bg-indigo-100/10 dark:bg-indigo-900/10 backdrop-blur-sm rounded-xl transform-style-3d rotate-cube-front"></div>
                  <div className="absolute h-40 w-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-indigo-300/30 dark:border-indigo-700/30 bg-indigo-100/10 dark:bg-indigo-900/10 backdrop-blur-sm rounded-xl transform-style-3d rotate-cube-back"></div>
                  <div className="absolute h-40 w-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-indigo-300/30 dark:border-indigo-700/30 bg-indigo-100/10 dark:bg-indigo-900/10 backdrop-blur-sm rounded-xl transform-style-3d rotate-cube-left"></div>
                  <div className="absolute h-40 w-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-indigo-300/30 dark:border-indigo-700/30 bg-indigo-100/10 dark:bg-indigo-900/10 backdrop-blur-sm rounded-xl transform-style-3d rotate-cube-right"></div>
                  <div className="absolute h-40 w-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-indigo-300/30 dark:border-indigo-700/30 bg-indigo-100/10 dark:bg-indigo-900/10 backdrop-blur-sm rounded-xl transform-style-3d rotate-cube-top"></div>
                  <div className="absolute h-40 w-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-indigo-300/30 dark:border-indigo-700/30 bg-indigo-100/10 dark:bg-indigo-900/10 backdrop-blur-sm rounded-xl transform-style-3d rotate-cube-bottom"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      
      
      {/* Custom animation keyframes and tailwind extensions */}
      <style jsx>{`
        @keyframes wave {
          0% { transform: translateX(-5%) rotate(-2deg); }
          50% { transform: translateX(5%) rotate(1deg); }
          100% { transform: translateX(-5%) rotate(-2deg); }
        }
        
        @keyframes wave-reverse {
          0% { transform: translateX(5%) rotate(2deg); }
          50% { transform: translateX(-5%) rotate(-1deg); }
          100% { transform: translateX(5%) rotate(2deg); }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
        
        @keyframes pulse-slower {
          0% { opacity: 0.4; }
          50% { opacity: 0.7; }
          100% { opacity: 0.4; }
        }
        
        @keyframes scroll-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
        
        @keyframes slow-spin {
          0% { transform: rotateX(10deg) rotateY(0deg); }
          100% { transform: rotateX(10deg) rotateY(360deg); }
        }
        
        .animate-wave {
          animation: wave 15s ease-in-out infinite;
        }
        
        .animate-wave-reverse {
          animation: wave-reverse 20s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        
        .perspective-800 {
          perspective: 800px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .rotate-cube-front {
          transform: translateZ(20px);
        }
        
        .rotate-cube-back {
          transform: translateZ(-20px);
        }
        
        .rotate-cube-left {
          transform: rotateY(-90deg) translateZ(20px);
        }
        
        .rotate-cube-right {
          transform: rotateY(90deg) translateZ(20px);
        }
        
        .rotate-cube-top {
          transform: rotateX(90deg) translateZ(20px);
        }
        
        .rotate-cube-bottom {
          transform: rotateX(-90deg) translateZ(20px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
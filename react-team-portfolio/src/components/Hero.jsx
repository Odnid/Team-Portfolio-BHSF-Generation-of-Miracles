import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const buttonRef = useRef(null);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      
    });
    
    // Start animations after a short delay for better UX
    const timer = setTimeout(() => {
      setIsAnimated(true);
      setIsLoaded(true);
    }, 300);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
      
      {/* Background mesh pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20 max-w-full"
        style={{
          backgroundImage: 'radial-gradient(rgba(99, 102, 241, 0.18) 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Dashboard-like grid background - more visible */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal grid lines */}
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={`h-line-${index}`}
            className="absolute h-[2px] w-full bg-indigo-500/40 dark:bg-indigo-400/40 shadow-lg"
            style={{ top: `${10 * (index + 1)}%` }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.8, scaleX: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.1 * index,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Vertical grid lines */}
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={`v-line-${index}`}
            className="absolute w-[2px] h-full bg-indigo-500/40 dark:bg-indigo-400/40 shadow-lg"
            style={{ left: `${10 * (index + 1)}%` }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 0.8, scaleY: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.1 * index,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Animated data points - larger, glowing, colorful */}
        {[...Array(18)].map((_, index) => {
          const x = 5 + Math.floor(Math.random() * 90);
          const y = 5 + Math.floor(Math.random() * 90);
          const size = 10 + Math.floor(Math.random() * 18);
          const color = [
            'bg-indigo-400',
            'bg-purple-400',
            'bg-pink-400',
            'bg-blue-400',
            'bg-cyan-400'
          ][Math.floor(Math.random() * 5)];
          const glow = [
            'shadow-indigo-400/60',
            'shadow-purple-400/60',
            'shadow-pink-400/60',
            'shadow-blue-400/60',
            'shadow-cyan-400/60'
          ][Math.floor(Math.random() * 5)];
          
          return (
            <motion.div
              key={`data-point-${index}`}
              className={`absolute rounded-full ${color} ${glow}`}
              style={{ 
                left: `${x}%`, 
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                boxShadow: `0 0 16px 4px rgba(99,102,241,0.4)`
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.9, 0],
                scale: [0, 1.2, 0]
              }}
              transition={{ 
                duration: 2.5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          );
        })}
        {/* Animated floating blurred shapes */}
        <motion.div
          className="absolute rounded-full bg-indigo-400/30 blur-2xl"
          style={{ width: '180px', height: '80px', top: '10%', left: '5%' }}
          animate={{ x: [0, '40vw', 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full bg-purple-500/30 blur-2xl"
          style={{ width: '140px', height: '60px', bottom: '12%', right: '8%' }}
          animate={{ x: [0, '-40vw', 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.2,
            y: [0, -20, 0, 20, 0],
            x: [0, 20, 40, 20, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute w-[50vw] h-[50vw] rounded-full"
          style={{
            top: '-10%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0.1) 70%, transparent 100%)',
            filter: 'blur(80px)'
          }}
        />
        
        {/* Bottom right orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.2,
            y: [0, 20, 0, -20, 0],
            x: [0, -20, -40, -20, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute w-[35vw] h-[35vw] rounded-full"
          style={{
            bottom: '-10%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(79, 70, 229, 0.3) 0%, rgba(79, 70, 229, 0.1) 70%, transparent 100%)',
            filter: 'blur(80px)'
          }}
        />
        
        {/* Center orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.2,
            scale: [1, 1.1, 1, 0.9, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute w-[35vw] h-[35vw] rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(129, 140, 248, 0.3) 0%, rgba(129, 140, 248, 0.1) 70%, transparent 100%)',
            filter: 'blur(80px)'
          }}
        />
      </div>
      
      {/* Main content with framer-motion animations */}
      <div className="container mx-auto relative z-20 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Hero content */}
          <motion.div 
            className="text-center md:text-left max-w-3xl mx-auto md:mx-0 w-full"
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
        </div>
      </div>
      
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

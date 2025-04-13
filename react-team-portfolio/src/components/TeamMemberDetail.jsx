import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Footer from './Footer';

const TeamMemberDetail = ({ name, role, description, image, skills, projects, social }) => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#4f46e5", "#818cf8", "#6366f1", "#4338ca"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.2,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 2,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        bounce: true,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#4f46e5",
        opacity: 0.4,
        width: 1.5
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 200,
          size: 8,
          duration: 0.3,
          opacity: 0.8,
          speed: 3
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true,
    fullScreen: {
      enable: false,
      zIndex: 0
    }
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
    });
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Back Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow z-50">
        <div className="container mx-auto px-4">
          <div className="h-12 flex items-center">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm">Back to Team</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <section className="pt-24 pb-8 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/20 via-primary-400/10 to-white/90 dark:from-primary-900/30 dark:via-primary-800/20 dark:to-gray-800/95"></div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <main className="py-12">
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400 relative z-10">
                    <img 
                      src={image} 
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-4xl font-display font-bold mb-4 text-primary-500 dark:text-primary-400" data-aos="fade-up">
                  {name}
                </h1>
                <h2 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
                  {role}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-12" data-aos="fade-up" data-aos-delay="200">
                  {description}
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-8 mb-12">
                  {social && (
                    <>
                      {social.github && (
                        <a 
                          href={social.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-primary-50 dark:hover:bg-primary-900/30"
                        >
                          <span className="sr-only">GitHub</span>
                          <svg 
                            className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300"
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C21.14 22.11 24 16.42 24 12A10 10 0 0 0 12 2z"/>
                          </svg>
                        </a>
                      )}
                      {social.linkedin && (
                        <a 
                          href={social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-primary-50 dark:hover:bg-primary-900/30"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg 
                            className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300"
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                      {social.twitter && (
                        <a 
                          href={social.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-primary-50 dark:hover:bg-primary-900/30"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg 
                            className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300"
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                          </svg>
                        </a>
                      )}
                    </>
                  )}
                </div>

                {/* Skills Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(skills).map(([category, skillList], index) => (
                    <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                      <h3 className="text-xl font-bold mb-4 text-primary-500 flex items-center">
                        <span className="mr-3">
                          {category === 'technical' && (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414l-3-3a1 1 0 011.414-1.414zm0-3a1 1 0 011-1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10z" clipRule="evenodd"/>
                            </svg>
                          )}
                          {category === 'soft' && (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0-3a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" clipRule="evenodd"/>
                            </svg>
                          )}
                          {category === 'tools' && (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm0 2h12v12H6V4zm3 3a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" clipRule="evenodd"/>
                            </svg>
                          )}
                          {category === 'design' && (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h12v12H4V4zm3 3a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" clipRule="evenodd"/>
                            </svg>
                          )}
                        </span>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </h3>
                      <div className="space-y-4">
                        {skillList.map((skill, skillIndex) => (
                          <div key={skillIndex}>
                            {typeof skill === 'string' ? (
                              <div className="text-base text-gray-700 dark:text-gray-300 py-1">
                                {skill}
                              </div>
                            ) : (
                              <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="text-base text-gray-700 dark:text-gray-300">{skill.name}</span>
                                  <span className="text-sm font-semibold text-primary-500">{skill.mastery}%</span>
                                </div>
                                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-1000 ease-in-out transform origin-left"
                                    style={{ width: `${skill.mastery}%` }}
                                    data-aos="zoom-in-right"
                                    data-aos-duration="1000"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {projects && (
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-display font-bold mb-12 text-center text-gray-900 dark:text-gray-100" data-aos="fade-up">
                Featured Projects
              </h2>
              <div className="space-y-12">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow p-5" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
                      <span className="text-sm font-medium text-primary-500 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                        {project.date}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-primary-500/20 text-gray-700 dark:text-white rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

TeamMemberDetail.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  skills: PropTypes.object.isRequired,
  projects: PropTypes.array,
  social: PropTypes.object
};

export default TeamMemberDetail;
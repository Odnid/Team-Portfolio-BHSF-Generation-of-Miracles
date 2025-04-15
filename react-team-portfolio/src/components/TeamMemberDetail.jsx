import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';
import teamData from '../data/teamData';
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
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 1,
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
        opacity: 0.25,
        width: 1
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

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/10 via-primary-400/5 to-white/95 dark:to-gray-800/95 backdrop-blur-md"></div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 opacity-60"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <main className="py-12">
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400 relative z-10 bg-white dark:bg-gray-700">
                    <img 
                      src={image} 
                      alt={name}
                      className="w-full h-full object-cover filter dark:brightness-90"
                    />
                  </div>
                </div>
                <h1 className="text-4xl font-display font-bold mb-4 text-primary-500 dark:text-primary-400" data-aos="fade-up">
                  {name}
                </h1>
                <h2 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
                  {role}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
                  {description}
                </p>

                <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center pt-10">
                    Let's connect!
                  </p>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href={teamData.find(member => member.name === name)?.social?.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-7 h-7" />
                    </a>
                    <a 
                      href={teamData.find(member => member.name === name)?.social?.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-7 h-7" />
                    </a>
                
                    
                  </div>
                </div>

                  {/* Skills Section */}
                  <div className="mt-32 pt-24 border-t border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center" data-aos="fade-up">
                      Skills & Expertise
                    </h2>
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
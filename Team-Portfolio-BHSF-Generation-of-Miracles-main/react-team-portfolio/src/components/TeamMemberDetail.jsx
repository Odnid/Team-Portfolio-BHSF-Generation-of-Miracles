import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const TeamMemberDetail = ({ name, role, description, image, skills, projects }) => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#6366f1", "#818cf8", "#4f46e5"]
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
          opacity_min: 0.2,
          sync: false
        }
      },
      size: {
        value: 4,
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
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        bounce: true,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#6366f1",
        opacity: 0.3,
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
          size: 6,
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
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Back Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50">
        <div className="container mx-auto px-6">
          <div className="h-16 flex items-center">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Team
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <section className="pt-32 pb-10 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-white/80 dark:from-primary-900/20 dark:to-gray-800/90"></div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0"
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <main className="py-20">
              <div className="flex justify-center items-center h-full">
                <div className="text-center">
                  <div className="flex justify-center mb-8">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400 relative z-10">
                      <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-cover object-center"
                        style={{ 
                          maxWidth: '100%',
                          maxHeight: '100%'
                        }} 
                      />
                    </div>
                  </div>
                  <h1 className="text-4xl font-display font-bold mb-4 text-gray-900 dark:text-gray-100">{name}</h1>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">{role}</p>
                  <p className="text-gray-600 dark:text-gray-400">{description}</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-12 text-center text-gray-900 dark:text-gray-100" data-aos="fade-up">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={category} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                  <h3 className="text-xl font-bold mb-6 text-primary-500">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                    {skillList.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {projects && (
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-12 text-center text-gray-900 dark:text-gray-100" data-aos="fade-up">
                Featured Projects
              </h2>
              <div className="space-y-12">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg p-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm">
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

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-8">
              <span className="text-2xl font-display font-bold">
                <span className="text-primary-500">Team</span>
                <span className="text-white">Portfolio</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

TeamMemberDetail.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  skills: PropTypes.object.isRequired,
  projects: PropTypes.array
};

export default TeamMemberDetail;
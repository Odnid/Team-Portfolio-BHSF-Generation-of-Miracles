import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  

  // Company values/services
  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Communication",
      description: "We believe in transparent, open communication with our clients throughout every project."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Speed",
      description: "We deliver high-quality solutions efficiently, ensuring quick turnaround without compromising quality."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Security",
      description: "We prioritize the security and privacy of our clients' data and implement robust protection measures."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-gray-100">
            <span className="relative inline-block">
              About Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Driving digital transformation through innovative solutions
          </p>
        </div>

        <div className="flex flex-col items-center mb-20">
          {/* About content */}
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Brief Introduction</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
            We are a group of Bachelor of Science in Information Technology (BSIT) students from Cavite State University – Imus Campus, driven by curiosity and a passion for learning. As we explore the world of web development, we aim to sharpen our skills, build meaningful projects, and grow together as aspiring developers.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
            This portfolio showcases our journey, creativity, and commitment to continuous improvement in the ever-evolving tech landscape.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0 mr-2">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Front End</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0 mr-2">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Backend</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0 mr-2">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">UI/UX Design</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0 mr-2">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Quality Assurance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values/Services section */}
        <div className="pt-10 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10" data-aos="fade-up">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg" data-aos="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="p-8 text-center border-r border-b md:border-b-0 border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold text-primary-500 dark:text-primary-400 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="p-8 text-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold text-primary-500 dark:text-primary-400 mb-2">5</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="p-8 text-center border-r border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold text-primary-500 dark:text-primary-400 mb-2">1+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-primary-500 dark:text-primary-400 mb-2">5</div>
              <div className="text-gray-600 dark:text-gray-400">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
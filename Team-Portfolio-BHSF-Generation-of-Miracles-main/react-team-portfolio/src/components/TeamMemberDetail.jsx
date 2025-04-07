import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamMemberDetail = ({ name, role, description, image }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-block mb-8 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
          >
            ← Back to Team
          </Link>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl overflow-hidden shadow-xl" data-aos="fade-up">
            <div className="md:flex">
              <div className="md:w-1/3 p-8">
                <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400">
                  <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{name}</h1>
                <h2 className="text-xl text-primary-500 dark:text-primary-400 mb-6">{role}</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamMemberDetail.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default TeamMemberDetail;
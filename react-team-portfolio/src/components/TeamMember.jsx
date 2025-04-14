import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaGithub, FaFacebook, FaDiscord, FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamMember = ({ id, name, role, description, image, social, delay }) => {
  return (
    <div className="group" data-aos="fade-up" data-aos-delay={delay}>
      <Link 
        to={`/team/${id}`} 
        className="block bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
      >
        <div className="relative p-6">
          <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">{name}</h3>
          <p className="text-gray-700 dark:text-gray-300">{role}</p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{description}</p>

         
        </div>
      </Link>
    </div>
  );
};

TeamMember.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  social: PropTypes.object,
  delay: PropTypes.number
};

TeamMember.defaultProps = {
  delay: 0
};

export default TeamMember;
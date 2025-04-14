import { useEffect, useState } from 'react';
import TeamMember from './TeamMember';
import teamData from '../data/teamData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
  const [filter, setFilter] = useState('all');
  const [filteredTeam, setFilteredTeam] = useState(teamData);
  const [isAnimated, setIsAnimated] = useState(false);
  
  // Extract unique roles for filter buttons
  const roles = ['all', ...new Set(teamData.map(member => member.role.toLowerCase()))];
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    
    // Start animations after a short delay for better UX
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);
    
    // Apply filtering
    if (filter === 'all') {
      setFilteredTeam(teamData);
    } else {
      setFilteredTeam(teamData.filter(member => 
        member.role.toLowerCase() === filter
      ));
    }
    
    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <section id="team" className="relative py-20 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, index) => (
          <div 
            key={index}
            className={`absolute rounded-lg bg-primary-400/5 dark:bg-primary-600/5 ${isAnimated ? 'animate-float' : ''}`}
            style={{
              width: `${Math.random() * 12 + 4}rem`,
              height: `${Math.random() * 12 + 4}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 20}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          ></div>
        ))}
      </div>
      
      {/* Section content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-gray-100">
            <span className="relative inline-block">
              Our Team Members
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Meet the talented individuals who make our projects shine
          </p>
          
          {/* Role filter */}
          
        </div>
        
        <div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filteredTeam.length > 0 ? (
            filteredTeam.map((member, index) => (
              <TeamMember
                key={member.id}
                id={member.id}
                name={member.name}
                role={member.role}
                description={member.description}
                image={member.image}
                social={member.social}
                delay={(index + 1) * 100}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292V15M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No team members found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try selecting a different role filter</p>
            </div>
          )}
        </div>
        

      </div>
    </section>
  );
};

export default Team;
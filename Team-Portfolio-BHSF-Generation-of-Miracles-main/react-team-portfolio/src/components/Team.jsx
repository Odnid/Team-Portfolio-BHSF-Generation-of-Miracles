import { useEffect } from 'react';
import TeamMember from './TeamMember';
import teamData from '../data/teamData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section id="team" className="min-h-screen py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl font-display font-bold text-center mb-16 text-gray-900 dark:text-gray-100" 
          data-aos="fade-up"
        >
          Our Team Members
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <TeamMember
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
              delay={(index + 1) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
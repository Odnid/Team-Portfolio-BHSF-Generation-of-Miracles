import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { scroller } from 'react-scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import TeamMemberDetail from './components/TeamMemberDetail'
import Footer from './components/Footer'
import teamData from './data/teamData'
import './App.css'

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a scrollTo parameter in the location state
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: 500,
          smooth: true,
          offset: -70,
        });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 no-horizontal-scroll">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <main className="w-full">
              <Hero />
              <About />
              <Team />
              <Contact />
              <Footer />
            </main>
          </>
        } />
        {teamData.map(member => (
          <Route
            key={member.id}
            path={`/team/${member.id}`}
            element={
              <>
                <Navbar />
                <TeamMemberDetail 
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  image={member.image}
                  skills={member.skills}
                  projects={member.projects}
                  social={member.social}
                />
                <Footer />
              </>
            }
          />
        ))}
      </Routes>
    </div>
  )
}

export default App
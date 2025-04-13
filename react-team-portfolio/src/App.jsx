import { Routes, Route } from 'react-router-dom'
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
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900">
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
              <TeamMemberDetail 
                name={member.name}
                role={member.role}
                description={member.description}
                image={member.image}
                skills={member.skills}
                projects={member.projects}
              />
            }
          />
        ))}
      </Routes>
    </div>
  )
}

export default App
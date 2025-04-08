import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Contact from './components/Contact'
import TeamMemberDetail from './components/TeamMemberDetail'
import Footer from './components/Footer'
import teamData from './data/teamData'
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="w-full">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Team />
              <Contact />
              <Footer />
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
      </main>
    </div>
  )
}

export default App
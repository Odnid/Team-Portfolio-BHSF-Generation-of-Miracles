import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Contact from './components/Contact'
import TeamMemberDetail from './components/TeamMemberDetail'
import teamData from './data/teamData'
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Team />
            <Contact />
          </>
        } />
        {teamData.map(member => (
          <Route
            key={member.id}
            path={`/team/${member.id}`}
            element={<TeamMemberDetail {...member} />}
          />
        ))}
      </Routes>
    </div>
  )
}

export default App

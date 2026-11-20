import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'
import Toast from './components/Toast'
import portfolioData from './data/portfolioData'

function App() {
  return (
    <>
      <Navbar data={portfolioData} />
      <div className="container">
        <Hero data={portfolioData.personal} />
        <Experience experiences={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Education education={portfolioData.education} />
      </div>
      <Footer name={portfolioData.personal.name} />
      <Toast />
    </>
  )
}

export default App

import { downloadResume } from '../utils/downloadResume'

export default function Navbar({ data }) {
  const handleResumeClick = () => {
    downloadResume(data.personal.resumePath)
  }

  return (
    <nav>
      <div className="logo">DS.</div>
      <div className="nav-links">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <button onClick={handleResumeClick} className="btn-outline">
          Resume
        </button>
      </div>
    </nav>
  )
}

import { useRef } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FaExternalLinkAlt } from 'react-icons/fa'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function ProjectCard({ project }) {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <div className="project-card fade-in" ref={ref}>
      <div className="project-header">
        <h3>{project.title}</h3>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" title="GitHub Repo">
              <FaGithub />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" title="Live Demo">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
      <div className="project-desc">
        <ul>
          {project.bullets.map((bullet, i) => (
            <li key={i} style={{ marginBottom: '10px' }}>
              {bullet.label && <strong>{bullet.label}: </strong>}
              {bullet.text}
            </li>
          ))}
        </ul>
      </div>
      {project.techStack && (
        <div className="project-tags">
          <div className="tech-stack" style={{ marginTop: '1.5rem' }}>
            <strong>Tech Stack:</strong> {project.techStack}
          </div>
        </div>
      )}
    </div>
  )
}

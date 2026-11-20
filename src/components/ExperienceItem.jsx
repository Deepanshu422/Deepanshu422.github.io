import { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function ExperienceItem({ experience }) {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <div className="experience-item fade-in" ref={ref}>
      <div className="exp-header">
        <h3 className="exp-role">
          {experience.role} <span className="exp-company">@ {experience.company}</span>
        </h3>
        <span className="exp-date">
          {experience.date} {experience.location && `| ${experience.location}`}
        </span>
      </div>
      <div className="exp-desc">
        <ul>
          {experience.bullets.map((bullet, i) => (
            <li key={i}>
              {bullet.label && <strong>{bullet.label}: </strong>}
              {bullet.text}
            </li>
          ))}
        </ul>
      </div>
      {experience.techStack && (
        <div className="tech-stack">Tech Stack: {experience.techStack}</div>
      )}
    </div>
  )
}

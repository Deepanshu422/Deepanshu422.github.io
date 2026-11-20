import { useRef } from 'react'
import SectionTitle from './SectionTitle'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Education({ education }) {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="card fade-in" ref={ref}>
        <div className="exp-header" style={{ marginBottom: 0 }}>
          <h3 className="exp-role">
            {education.degree} <span className="exp-company">@ {education.institution}</span>
          </h3>
          <span className="exp-date">
            {education.date} | {education.location}
          </span>
        </div>
        <p style={{ marginTop: '10px', color: 'var(--text-main)', fontWeight: 600 }}>
          CGPA: {education.cgpa}
        </p>
      </div>
    </section>
  )
}

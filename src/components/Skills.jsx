import { useRef } from 'react'
import SectionTitle from './SectionTitle'
import SkillCard from './SkillCard'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Skills({ skills }) {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="skills-grid fade-in" ref={ref}>
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </div>
    </section>
  )
}

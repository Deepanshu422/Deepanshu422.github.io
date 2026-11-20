import SectionTitle from './SectionTitle'
import ExperienceItem from './ExperienceItem'

export default function Experience({ experiences }) {
  return (
    <section id="experience">
      <SectionTitle>Where I've Worked</SectionTitle>
      {experiences.map((exp, i) => (
        <ExperienceItem key={i} experience={exp} />
      ))}
    </section>
  )
}

import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  return (
    <section id="projects">
      <SectionTitle>Some Things I've Built</SectionTitle>
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </section>
  )
}

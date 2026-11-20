export default function SkillCard({ skill }) {
  return (
    <div className="card">
      <h4>{skill.category}</h4>
      <p>{skill.items}</p>
    </div>
  )
}

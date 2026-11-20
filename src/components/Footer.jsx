export default function Footer({ name }) {
  return (
    <footer>
      <p>Design & Built by {name}</p>
      <p style={{ marginTop: '5px', fontSize: '0.8em', color: 'var(--text-secondary)' }}>
        Recently Updated @ 2026
      </p>
    </footer>
  )
}

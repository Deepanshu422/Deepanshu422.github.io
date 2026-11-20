import { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function SectionTitle({ children }) {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <h2 className="section-title fade-in" ref={ref}>
      {children}
    </h2>
  )
}

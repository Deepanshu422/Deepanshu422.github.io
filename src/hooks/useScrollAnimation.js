import { useEffect } from 'react'

export default function useScrollAnimation(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Set initial animation state
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [ref])
}

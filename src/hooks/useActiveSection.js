import { useEffect, useState } from 'react'

export function useActiveSection(ids) {
  const [active, setActive] = useState('')
  const key = ids.join('|')

  useEffect(() => {
    const elements = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}

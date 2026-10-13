import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/** Counts from 0 to `to` once, when scrolled into view. Shows the final value straight away with reduced motion. */
export default function CountUp({ to, decimals = 0, suffix = '', delay = 0.5 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (reduce) {
      setValue(to)
      return undefined
    }
    if (!inView) return undefined
    const controls = animate(0, to, { duration: 1.6, delay, ease: [0.22, 1, 0.36, 1], onUpdate: setValue })
    return () => controls.stop()
  }, [inView, reduce, to, delay])

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const groupVariants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/** Fades one block in once as it scrolls into view. Renders plainly with reduced motion. */
export default function Reveal({ children, delay = 0, y = 14, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </Component>
  )
}

/** Parent that staggers its RevealItem children once the group scrolls into view. */
export function RevealGroup({ children, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  const Component = motion[as]
  return (
    <Component className={className} variants={groupVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
      {children}
    </Component>
  )
}

/**
 * Child of RevealGroup. Keep hover effects on an inner element: this wrapper owns the
 * inline transform while it animates, which would override a CSS hover transform.
 */
export function RevealItem({ children, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  const Component = motion[as]
  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  )
}

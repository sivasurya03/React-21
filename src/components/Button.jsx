import { motion } from 'framer-motion'

const VARIANTS = {
  primary: 'bg-roast text-white hover:bg-roast-soft active:bg-black',
  ember: 'bg-ember text-roast hover:bg-[#F0B04F] active:bg-[#D9922B]',
  secondary: 'border border-ink/20 bg-white/60 text-ink hover:border-ink/40 hover:bg-white active:bg-chaff',
  ghostDark: 'border border-white/25 text-white hover:border-white/50 hover:bg-white/5 active:bg-white/10',
}

const SIZES = {
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-12 px-6 text-base',
}

export default function Button({ variant = 'primary', size = 'md', href, className = '', children, ...rest }) {
  const Component = href ? motion.a : motion.button
  const extra = href ? { href } : { type: 'button' }
  return (
    <Component
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...extra}
      {...rest}
    >
      {children}
    </Component>
  )
}

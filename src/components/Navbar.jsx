import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { NAV_LINKS } from '../data/content.js'
import { useScrolled } from '../hooks/useScrolled.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const MENU_ID = 'mobile-menu'

export default function Navbar({ onStartTrial }) {
  const scrolled = useScrolled()
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const active = useActiveSection(NAV_LINKS.map((link) => link.id))
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const goToSection = (id) => (event) => {
    event.preventDefault()
    setOpen(false)
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' })
      window.history.pushState(null, '', `#${id}`)
    })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? 'border-b border-line bg-paper shadow-card'
          : scrolled
            ? 'border-b border-line bg-paper/90 shadow-card backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-roast px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-3"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className={`container-x flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
        <a href="#top" aria-label="Firstcrack, back to top" className="rounded-md">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block whitespace-nowrap rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
                    isActive ? 'text-ink' : 'text-mute hover:bg-ink/[0.05] hover:text-ink'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-ember"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button className="hidden sm:inline-flex" onClick={() => onStartTrial()}>
            Start free trial
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls={MENU_ID}
            onClick={() => setOpen((value) => !value)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'open'}
                initial={{ rotate: -80, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 80, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={MENU_ID}
            key="menu"
            className="overflow-hidden lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="container-x flex flex-col gap-1 pb-6 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={goToSection(link.id)}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={`block rounded-xl px-3 py-3 text-lg font-medium transition-colors hover:bg-chaff ${
                      active === link.id ? 'text-ink' : 'text-mute'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    setOpen(false)
                    onStartTrial()
                  }}
                >
                  Start free trial
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      {scrolled && !reduce && (
        <motion.div aria-hidden="true" style={{ scaleX: scrollYProgress }} className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-ember" />
      )}
    </header>
  )
}

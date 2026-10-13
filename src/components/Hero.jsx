import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Button from './Button.jsx'
import DashboardMockup from './DashboardMockup.jsx'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero({ onStartTrial }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const contourY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section ref={ref} id="top" className="relative overflow-x-clip pb-24 pt-32 sm:pt-36 lg:pb-32 lg:pt-40" aria-labelledby="hero-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div style={reduce ? undefined : { y: glowY }} className="absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-ember/20 blur-3xl" />
        <motion.svg style={reduce ? undefined : { y: contourY }} className="absolute inset-x-0 top-0 h-full w-full text-moss/[0.1]" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} d={`M-20 ${520 + i * 46} C 300 ${760 + i * 20}, 520 ${240 + i * 30}, 900 ${300 + i * 36} S 1300 ${120 + i * 40}, 1480 ${60 + i * 44}`} stroke="currentColor" strokeWidth="2" />
          ))}
        </motion.svg>
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <motion.div className="lg:col-span-5" variants={container} initial={reduce ? false : 'hidden'} animate="show">
          <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-moss/20 bg-moss-light/70 px-3.5 py-1.5 text-sm font-medium text-moss-dark">
            <span className="h-2 w-2 rounded-full bg-ember" aria-hidden="true" />
            Roast analytics for independent roasters
          </motion.p>
          <motion.h1 variants={item} id="hero-title" className="mt-6 text-balance text-[2.5rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[3.75rem]">
            Roast the same great coffee, batch after batch
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-mute sm:text-xl">
            Firstcrack records every roast curve, tracks your green coffee and turns wholesale orders into a weekly roasting plan.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => onStartTrial()}>
              Start free trial
            </Button>
            <Button size="lg" variant="secondary" href="#how-it-works">
              See how it works
            </Button>
          </motion.div>
          <motion.p variants={item} className="mt-5 text-sm text-mute">
            14 days free on every plan. Built for independent roasters.
          </motion.p>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  )
}

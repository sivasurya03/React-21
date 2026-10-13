import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { ICONS } from './icons.js'
import { STEPS } from '../data/content.js'

export default function HowItWorks() {
  const reduce = useReducedMotion()
  return (
    <section id="how-it-works" data-theme="dark" className="section-y bg-roast text-white" aria-labelledby="how-title">
      <div className="container-x">
        <SectionHeading
          id="how-title"
          dark
          title="From first setup to the last bag out the door"
          text="Four steps, in the order a roastery works. You can start with step two today and fill in the rest later."
        />

        <div className="relative mt-16">
          <div aria-hidden="true" className="absolute left-7 right-[calc(25%-3.25rem)] top-[27px] hidden h-px lg:block">
            <motion.div
              className="h-full w-full origin-left bg-gradient-to-r from-ember via-ember/60 to-roast-line"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, index) => {
              const Icon = ICONS[step.icon]
              return (
                <Reveal as="li" key={step.title} delay={index * 0.12} className="relative flex gap-5 lg:block">
                  <div className="relative flex shrink-0 flex-col items-center lg:block">
                    <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-ember/60 bg-roast-soft font-display text-xl font-semibold text-ember">
                      {index + 1}
                    </span>
                    {index < STEPS.length - 1 && (
                      <motion.span
                        aria-hidden="true"
                        className="mt-2 h-full w-px flex-1 origin-top bg-ember/50 lg:hidden"
                        initial={reduce ? false : { scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.7, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      />
                    )}
                  </div>
                  <div className="pb-2 lg:mt-7">
                    <Icon size={22} className="text-ember" aria-hidden="true" />
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-roast-mute">{step.text}</p>
                    <p className="mt-4 inline-block rounded-full bg-roast-soft px-3 py-1 text-sm text-white/90">{step.detail}</p>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

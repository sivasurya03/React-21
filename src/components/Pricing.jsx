import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { BILLING_DISCOUNT, PLANS } from '../data/content.js'

function priceFor(plan, yearly) {
  return yearly ? Math.round(plan.monthly * (1 - BILLING_DISCOUNT)) : plan.monthly
}

function BillingToggle({ yearly, onChange }) {
  const labelId = useId()
  const options = [
    { value: false, label: 'Monthly' },
    { value: true, label: 'Yearly' },
  ]
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      <span id={labelId} className="sr-only">
        Billing period
      </span>
      <div role="radiogroup" aria-labelledby={labelId} className="relative inline-flex rounded-full border border-line bg-chaff p-1">
        {options.map((option) => {
          const selected = yearly === option.value
          return (
            <button
              key={option.label}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option.value)}
              className="relative h-10 rounded-full px-5 text-[15px] font-medium transition-colors"
            >
              {selected && (
                <motion.span layoutId="billing-pill" className="absolute inset-0 rounded-full bg-roast" transition={{ type: 'spring', stiffness: 450, damping: 36 }} />
              )}
              <span className={`relative ${selected ? 'text-white' : 'text-mute hover:text-ink'}`}>{option.label}</span>
            </button>
          )
        })}
      </div>
      <span className="rounded-full bg-ember-soft px-3 py-1.5 text-sm font-medium text-ember-deep">Save {Math.round(BILLING_DISCOUNT * 100)}% with yearly billing</span>
    </div>
  )
}

function Price({ value, yearly }) {
  const reduce = useReducedMotion()
  return (
    <div className="mt-6 flex items-baseline gap-1.5">
      <span aria-hidden="true" className="relative inline-flex h-14 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            className="font-display text-5xl font-semibold tracking-tight"
            initial={reduce ? false : { y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: -24, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            ${value}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="sr-only">{`$${value} per month${yearly ? ', billed yearly' : ''}`}</span>
      <span aria-hidden="true" className="text-sm opacity-70">/month</span>
    </div>
  )
}

export default function Pricing({ onStartTrial }) {
  const [yearly, setYearly] = useState(false)
  return (
    <section id="pricing" className="section-y bg-paper" aria-labelledby="pricing-title">
      <div className="container-x">
        <SectionHeading
          id="pricing-title"
          title="Pricing that grows with your roastery"
          text="Every plan starts with a 14-day trial. Switch plans or cancel whenever you like."
        />
        <BillingToggle yearly={yearly} onChange={setYearly} />

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {PLANS.map((plan, index) => {
            const price = priceFor(plan, yearly)
            const dark = Boolean(plan.recommended)
            return (
              <Reveal key={plan.id} delay={index * 0.08} className="h-full">
                <article
                  data-theme={dark ? 'dark' : 'light'}
                  className={`relative flex h-full flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                    dark
                      ? 'bg-roast text-white shadow-float ring-2 ring-ember'
                      : 'border border-line bg-chaff/60 shadow-card hover:border-moss/40 hover:shadow-lift'
                  }`}
                >
                  {dark && (
                    <span className="absolute right-6 top-6 rounded-full bg-ember px-3 py-1 text-sm font-semibold text-roast">Recommended</span>
                  )}
                  <h3 className="text-2xl font-semibold tracking-tight">{plan.name}</h3>
                  <p className={`mt-1 ${dark ? 'text-roast-mute' : 'text-mute'}`}>{plan.blurb}</p>
                  <Price value={price} yearly={yearly} />
                  <p className={`mt-1 min-h-[1.5rem] text-sm ${dark ? 'text-roast-mute' : 'text-mute'}`}>
                    {yearly ? `Billed $${price * 12} once a year, saves $${(plan.monthly - price) * 12}` : 'Billed monthly'}
                  </p>
                  <ul className="mt-7 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check size={20} aria-hidden="true" className={`mt-0.5 shrink-0 ${dark ? 'text-ember' : 'text-moss'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    variant={dark ? 'ember' : 'primary'}
                    className="mt-8 w-full"
                    onClick={() => onStartTrial(plan.name)}
                    aria-label={`Start 14-day trial of the ${plan.name} plan`}
                  >
                    Start 14-day trial
                  </Button>
                </article>
              </Reveal>
            )
          })}
        </div>
        <p className="mt-8 text-sm text-mute">Prices in US dollars. This is a demo page, so no payment is collected.</p>
      </div>
    </section>
  )
}

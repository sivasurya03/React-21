import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import RoastCurve from './RoastCurve.jsx'
import { ICONS } from './icons.js'
import { BENEFITS, STATS } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="section-y bg-paper" aria-labelledby="about-title">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="about-title"
            title="Roasting is a craft. Your records should not be guesswork."
            text="Most roasteries run on a binder, a spreadsheet and memory. Firstcrack keeps roast curves, green stock and orders in one place, so the person roasting on Monday knows exactly what worked on Friday."
          />
          <ul className="mt-10 space-y-6">
            {BENEFITS.map((benefit, index) => {
              const Icon = ICONS[benefit.icon]
              return (
                <Reveal as="li" key={benefit.title} delay={index * 0.08} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-moss-light text-moss-dark">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-mute">{benefit.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>

        <Reveal className="lg:col-span-7" y={24}>
          <figure className="rounded-3xl border border-line bg-chaff p-5 sm:p-8">
            <figcaption className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
              <span className="font-display text-lg font-semibold">This batch against your saved profile</span>
              <span className="flex items-center gap-4 text-sm text-mute">
                <span className="flex items-center gap-2">
                  <span className="h-0.5 w-5 rounded bg-ink" aria-hidden="true" /> This batch
                </span>
                <span className="flex items-center gap-2">
                  <svg width="20" height="2" aria-hidden="true">
                    <line x1="0" y1="1" x2="20" y2="1" stroke="#2B6A56" strokeWidth="2" strokeDasharray="4 3" />
                  </svg>
                  Saved profile
                </span>
              </span>
            </figcaption>
            <div className="mt-4 rounded-2xl bg-paper p-3 sm:p-5">
              <RoastCurve variant="light" showTarget showEvents={false} />
            </div>
            <p className="mt-4 text-sm text-mute">Gaps show up the moment they start, not after the batch is bagged.</p>
          </figure>

          <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end rounded-2xl border border-line bg-paper p-5">
                <dt className="mt-1 text-sm text-mute">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-mute">Illustrative figures for this demo page.</p>
        </Reveal>
      </div>
    </section>
  )
}

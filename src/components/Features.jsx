import { RevealGroup, RevealItem } from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import RoastCurve from './RoastCurve.jsx'
import { ICONS } from './icons.js'
import { FEATURES, ORDERS, STOCK } from '../data/content.js'

function StockVisual() {
  return (
    <ul className="space-y-4">
      {STOCK.map((lot) => {
        const pct = Math.round((lot.kg / lot.max) * 100)
        const low = pct < 25
        return (
          <li key={lot.origin}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-medium">{lot.origin}</span>
              <span className={low ? 'font-medium text-ember-deep' : 'text-mute'}>
                {lot.kg} kg{low ? ', reorder soon' : ''}
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-chaff" role="img" aria-label={`${lot.origin}: ${pct} percent of stock remaining`}>
              <div className={`h-full rounded-full ${low ? 'bg-ember' : 'bg-moss'}`} style={{ width: `${pct}%` }} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

function CuppingVisual() {
  const scores = [
    { label: 'Aroma', value: 8.5 },
    { label: 'Acidity', value: 9 },
    { label: 'Body', value: 7.5 },
    { label: 'Finish', value: 8 },
  ]
  return (
    <div>
      <div className="flex items-end gap-4">
        <p className="font-display text-5xl font-semibold leading-none tracking-tight">86.5</p>
        <ul className="grid flex-1 grid-cols-2 gap-x-4 gap-y-1 text-sm text-mute">
          {scores.map((score) => (
            <li key={score.label} className="flex justify-between">
              <span>{score.label}</span>
              <span className="font-medium text-ink">{score.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {['Blueberry', 'Jasmine', 'Cane sugar'].map((note) => (
          <li key={note} className="rounded-full bg-ember-soft px-3 py-1 text-sm font-medium text-ember-deep">
            {note}
          </li>
        ))}
      </ul>
    </div>
  )
}

function OrdersVisual() {
  return (
    <ul className="divide-y divide-line rounded-2xl border border-line bg-chaff/60">
      {ORDERS.map((order) => (
        <li key={order.name} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
          <span className="min-w-0">
            <span className="block truncate font-medium">{order.name}</span>
            <span className="block truncate text-mute">{order.detail}</span>
          </span>
          <span className="shrink-0 rounded-full bg-moss-light px-3 py-1 text-xs font-medium text-moss-dark">{order.day}</span>
        </li>
      ))}
    </ul>
  )
}

const VISUALS = {
  curve: () => (
    <div className="rounded-2xl bg-chaff/70 p-3 sm:p-4">
      <RoastCurve variant="light" showEvents={false} animate={false} />
    </div>
  ),
  stock: StockVisual,
  cupping: CuppingVisual,
  orders: OrdersVisual,
}

function SpotlightCard({ children }) {
  const onMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }
  return (
    <div
      onPointerMove={onMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-moss/40 hover:shadow-lift sm:p-8"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(232,162,58,0.13), transparent 70%)' }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="section-y" aria-labelledby="features-title">
      <div className="container-x">
        <SectionHeading
          id="features-title"
          title="Everything a roastery tracks, in one place"
          text="From the first bag of green to the last order of the week, each part of the work has a place and they all share the same data."
        />
        <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-12">
          {FEATURES.map((feature) => {
            const Icon = ICONS[feature.icon]
            const Visual = feature.visual ? VISUALS[feature.visual] : null
            return (
              <RevealItem key={feature.id} className={feature.span}>
                <SpotlightCard>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-roast text-ember transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{feature.title}</h3>
                  <p className="mt-2 max-w-xl text-mute">{feature.text}</p>
                  {Visual && (
                    <div className="mt-auto pt-6">
                      <Visual />
                    </div>
                  )}
                  {feature.chips && (
                    <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                      {feature.chips.map((chip) => (
                        <li key={chip} className="rounded-full border border-line bg-chaff px-3 py-1 text-sm font-medium text-mute">
                          {chip}
                        </li>
                      ))}
                    </ul>
                  )}
                </SpotlightCard>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}

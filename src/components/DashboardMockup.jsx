import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import RoastCurve from './RoastCurve.jsx'
import CountUp from './CountUp.jsx'

const METRICS = [
  { label: 'Development', to: 18.4, decimals: 1, suffix: '%' },
  { label: 'Weight loss', to: 12.6, decimals: 1, suffix: '%' },
  { label: 'Drop temp', to: 210, decimals: 0, suffix: '°C' },
]

function FloatCard({ children }) {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, -28])
  return (
    <motion.div style={reduce ? undefined : { y }} className="absolute bottom-[27%] right-[4%] hidden w-60 md:block">
      <motion.div
        className="rounded-2xl bg-paper p-4 text-ink shadow-lift"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function DashboardMockup() {
  return (
    <div className="relative" data-theme="dark">
      <div className="overflow-hidden rounded-3xl bg-roast text-white shadow-float ring-1 ring-white/10">
        <div className="flex items-center justify-between gap-3 border-b border-roast-line px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="truncate font-display text-lg font-semibold">Batch 214</p>
            <p className="truncate text-sm text-roast-mute">Ethiopia Guji, washed, 12 kg</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-roast-soft px-3 py-1.5 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-ember" aria-hidden="true" />
            Dropped at 10:30
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 px-5 pt-4 text-sm text-roast-mute sm:px-6">
          <span className="flex items-center gap-2">
            <span className="h-0.5 w-5 rounded bg-ember" aria-hidden="true" /> Bean temperature
          </span>
          <span className="flex items-center gap-2">
            <span className="h-0.5 w-5 rounded bg-roast-mute/75" aria-hidden="true" /> Rate of rise
          </span>
        </div>
        <div className="px-3 pb-2 pt-2 sm:px-5">
          <RoastCurve variant="dark" showRor />
        </div>
        <dl className="grid grid-cols-3 gap-px border-t border-roast-line bg-roast-line">
          {METRICS.map((metric) => (
            <div key={metric.label} className="bg-roast px-4 py-4 sm:px-6">
              <dt className="text-xs text-roast-mute sm:text-sm">{metric.label}</dt>
              <dd className="mt-1 font-display text-xl font-semibold tabular-nums sm:text-2xl">
                <CountUp to={metric.to} decimals={metric.decimals} suffix={metric.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <FloatCard>
        <p className="text-sm font-medium">Guji green stock</p>
        <p className="mt-1 text-sm text-mute">42 kg left, about 6 days of roasting</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-chaff" role="img" aria-label="35 percent of stock remaining">
          <div className="h-full w-[35%] rounded-full bg-ember" />
        </div>
      </FloatCard>
    </div>
  )
}

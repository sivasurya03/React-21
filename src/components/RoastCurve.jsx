import { motion, useReducedMotion } from 'framer-motion'

const ACTUAL = 'M40 64 C58 150 78 186 97 186 C140 180 170 130 212 108 C260 82 320 76 366 68 C395 62 420 56 442 52'
const TARGET = 'M40 64 C58 140 80 172 99 172 C148 160 184 108 226 92 C270 72 326 66 366 58 C396 54 420 48 442 44'
const ROR = 'M97 118 C150 146 210 166 270 178 C330 190 400 198 442 204'
const EVENTS = [
  { x: 97, y: 186, label: 'Turning point', anchor: 'start', dx: 8, dy: 18 },
  { x: 212, y: 108, label: 'Dry end', anchor: 'start', dx: 8, dy: 22 },
  { x: 366, y: 68, label: 'First crack', anchor: 'middle', dx: 0, dy: -20, accent: true },
  { x: 442, y: 52, label: 'Drop', anchor: 'end', dx: 0, dy: 24 },
]

/**
 * Illustrative roast curve. `variant="dark"` is for dark panels, "light" for light cards.
 * With `animate`, the line draws itself once and the first-crack marker pulses.
 */
export default function RoastCurve({ variant = 'dark', showRor = false, showTarget = false, showEvents = true, animate = true, className = '' }) {
  const reduce = useReducedMotion()
  const motionOn = animate && !reduce
  const dark = variant === 'dark'
  const grid = dark ? '#2A4B42' : '#DCD6C6'
  const axis = dark ? '#9FB5AC' : '#56605A'
  const line = dark ? '#E8A23A' : '#173730'
  const target = dark ? '#9FB5AC' : '#2B6A56'

  const draw = motionOn
    ? { initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true, amount: 0.4 }, transition: { duration: 2.2, ease: [0.4, 0, 0.2, 1] } }
    : {}

  return (
    <svg viewBox="0 0 520 260" className={`h-auto w-full ${className}`} role="img" aria-label="Roast curve: bean temperature rising from a turning point near 90 degrees to a drop at 210 degrees">
      {[64, 108, 152, 196].map((y) => (
        <line key={y} x1="40" x2="500" y1={y} y2={y} stroke={grid} strokeWidth="1" strokeDasharray="2 5" />
      ))}
      <line x1="40" x2="500" y1="226" y2="226" stroke={grid} strokeWidth="1" />
      {['0:00', '3:00', '6:00', '9:00', '12:00'].map((t, i) => (
        <text key={t} x={40 + i * 115} y="246" textAnchor="middle" fontSize="11" fill={axis} className="max-sm:hidden">
          {t}
        </text>
      ))}
      {showTarget && (
        <path d={TARGET} fill="none" stroke={target} strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" opacity="0.85" />
      )}
      {showRor && (
        <motion.path
          d={ROR}
          fill="none"
          stroke={dark ? '#9FB5AC' : '#2B6A56'}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.75"
          {...(motionOn
            ? { initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true }, transition: { duration: 1.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] } }
            : {})}
        />
      )}
      <motion.path d={ACTUAL} fill="none" stroke={line} strokeWidth="3.5" strokeLinecap="round" {...draw} />
      {showEvents &&
        EVENTS.map((e, i) => (
          <motion.g
            key={e.label}
            {...(motionOn
              ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { delay: 0.5 + i * 0.5, duration: 0.4 } }
              : {})}
          >
            <circle cx={e.x} cy={e.y} r={e.accent ? 6 : 4.5} fill={e.accent ? '#E8A23A' : dark ? '#0F2620' : '#FAFBF8'} stroke={e.accent ? '#FAFBF8' : line} strokeWidth="2" />
            <text className="max-sm:hidden" x={e.x + e.dx} y={e.y + e.dy} textAnchor={e.anchor} fontSize="11.5" fontWeight={e.accent ? 600 : 500} fill={dark ? '#F1F3EE' : '#13201B'}>
              {e.label}
            </text>
          </motion.g>
        ))}
      {motionOn && showEvents && (
        <motion.circle
          cx="366"
          cy="68"
          r="6"
          fill="none"
          stroke="#E8A23A"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: [0, 0.9, 0], scale: [1, 3.2, 3.2] }}
          viewport={{ once: true }}
          transition={{ delay: 2.0, duration: 1.4, repeat: 1, repeatDelay: 0.3 }}
          style={{ transformOrigin: '366px 68px', transformBox: 'view-box' }}
        />
      )}
    </svg>
  )
}

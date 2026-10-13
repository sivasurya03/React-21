import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Loader2, X } from 'lucide-react'
import Button from './Button.jsx'
import { useDialogFocus } from '../hooks/useDialogFocus.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function SignupDialog({ open, plan, onClose }) {
  const panelRef = useRef(null)
  const titleId = useId()
  const errorId = useId()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const timer = useRef(0)

  const close = useCallback(() => onClose(), [onClose])
  useDialogFocus(open, panelRef, close)

  useEffect(() => {
    if (open) {
      setEmail('')
      setError('')
      setDone(false)
      setLoading(false)
    }
    return () => window.clearTimeout(timer.current)
  }, [open])

  const submit = (event) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Enter an email address like name@roastery.com.')
      return
    }
    setError('')
    setLoading(true)
    // Demo only: there is no backend, so this just simulates a short wait.
    timer.current = window.setTimeout(() => {
      setLoading(false)
      setDone(true)
    }, 800)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-roast/70 p-4 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close()
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            data-theme="light"
            className="relative w-full max-w-md rounded-3xl bg-paper p-6 shadow-float sm:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close dialog"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-mute transition-colors hover:bg-chaff hover:text-ink"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {done ? (
              <div role="status">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-moss-light text-moss-dark">
                  <Check size={22} aria-hidden="true" />
                </span>
                <h2 id={titleId} className="mt-5 text-2xl font-semibold tracking-tight">
                  Thanks, we have your email
                </h2>
                <p className="mt-2 text-mute">
                  This is a demo site, so no account was created and nothing was sent or charged. In a live product,{' '}
                  <span className="font-medium text-ink">{email.trim()}</span> would get the {plan ?? 'Firstcrack'} trial invite.
                </p>
                <Button className="mt-6 w-full" onClick={close}>
                  Back to the page
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <h2 id={titleId} className="pr-10 text-2xl font-semibold tracking-tight">
                  {plan ? `Start your ${plan} trial` : 'Start your free trial'}
                </h2>
                <p className="mt-2 text-mute">Enter your email to try the 14-day demo. This page is a demo, so nothing is sent or charged.</p>
                <label htmlFor="trial-email" className="mt-6 block text-sm font-medium">
                  Work email
                </label>
                <input
                  id="trial-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={loading}
                  aria-invalid={error ? 'true' : 'false'}
                  aria-describedby={error ? errorId : undefined}
                  placeholder="name@roastery.com"
                  className={`mt-2 h-12 w-full rounded-xl border bg-white px-4 text-base outline-none transition-colors placeholder:text-mute/60 focus:border-moss focus:ring-2 focus:ring-moss/25 ${
                    error ? 'border-red-600' : 'border-line'
                  }`}
                />
                {error && (
                  <p id={errorId} role="alert" className="mt-2 text-sm text-red-700">
                    {error}
                  </p>
                )}
                <Button type="submit" size="lg" className="mt-6 w-full" disabled={loading} aria-busy={loading}>
                  {loading ? (
                    <>
                      <Loader2 size={18} aria-hidden="true" className="animate-spin" />
                      Saving your email
                    </>
                  ) : (
                    'Start free trial'
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

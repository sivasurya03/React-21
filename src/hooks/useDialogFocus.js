import { useEffect } from 'react'

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Keeps keyboard focus inside a modal while it is open, closes it on Escape,
 * locks page scroll and returns focus to the element that opened it.
 */
export function useDialogFocus(open, containerRef, onClose) {
  useEffect(() => {
    if (!open) return undefined
    const previous = document.activeElement
    const container = containerRef.current
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusables = () => (container ? Array.from(container.querySelectorAll(FOCUSABLE)) : [])
    focusables()[0]?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusables()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [open, containerRef, onClose])
}

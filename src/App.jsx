import { useCallback, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'
import SignupDialog from './components/SignupDialog.jsx'

export default function App() {
  const [dialog, setDialog] = useState({ open: false, plan: null })
  const openTrial = useCallback((plan = null) => setDialog({ open: true, plan }), [])
  const closeTrial = useCallback(() => setDialog((current) => ({ ...current, open: false })), [])

  return (
    <MotionConfig reducedMotion="user">
      <Navbar onStartTrial={openTrial} />
      <main id="main">
        <Hero onStartTrial={openTrial} />
        <About />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing onStartTrial={openTrial} />
      </main>
      <Footer />
      <SignupDialog open={dialog.open} plan={dialog.plan} onClose={closeTrial} />
    </MotionConfig>
  )
}

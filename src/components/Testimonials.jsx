import { RevealGroup, RevealItem } from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import TestimonialCard from './TestimonialCard.jsx'
import { TESTIMONIALS } from '../data/content.js'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-y" aria-labelledby="reviews-title">
      <div className="container-x">
        <SectionHeading
          id="reviews-title"
          title="Loved by Coffee Professionals"
          text="Roasters use Firstcrack to keep every batch on profile and every order on schedule. Sample reviews written for this demo page; the people and roasteries are fictional."
        />
        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <RevealItem key={testimonial.id} className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <TestimonialCard testimonial={testimonial} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

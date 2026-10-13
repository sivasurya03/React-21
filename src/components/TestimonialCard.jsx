import { Quote, Star } from 'lucide-react'

function Stars({ rating }) {
  return (
    <div role="img" aria-label={`Rated ${rating} out of 5 stars`} className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={18} aria-hidden="true" className={n <= rating ? 'fill-ember text-ember' : 'text-line'} />
      ))}
    </div>
  )
}

function Avatar({ name, tone }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
  return (
    <span
      role="img"
      aria-label={`Avatar for ${name}`}
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-base font-semibold ring-4 ring-paper ${tone}`}
    >
      {initials}
    </span>
  )
}

/** One testimonial. Hover effects live here, inside the reveal wrapper, so they are not overridden by animation transforms. */
export default function TestimonialCard({ testimonial }) {
  const { quote, name, role, rating, tone } = testimonial
  return (
    <figure className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-moss/40 hover:shadow-lift sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <Stars rating={rating} />
        <Quote size={28} aria-hidden="true" className="text-ember/60 transition-colors duration-300 group-hover:text-ember" />
      </div>
      <blockquote className="mt-5 flex-1 text-pretty text-lg leading-relaxed text-ink">{quote}</blockquote>
      <figcaption className="mt-8 flex items-start gap-3 border-t border-line pt-6">
        <Avatar name={name} tone={tone} />
        <div className="min-w-0">
          <p className="font-medium">{name}</p>
          <p className="min-h-[2.5rem] text-sm text-mute">{role}</p>
        </div>
      </figcaption>
    </figure>
  )
}

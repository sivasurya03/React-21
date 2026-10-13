import Reveal from './Reveal.jsx'

export default function SectionHeading({ id, title, text, dark = false, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  return (
    <Reveal className={`max-w-2xl ${alignment} ${className}`}>
      <h2
        id={id}
        className={`text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 max-w-xl text-pretty text-lg leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${dark ? 'text-roast-mute' : 'text-mute'}`}>
          {text}
        </p>
      )}
    </Reveal>
  )
}

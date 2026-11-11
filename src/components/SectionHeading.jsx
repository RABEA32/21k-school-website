import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, intro, align = 'left', light = false, className = '' }) {
  const center = align === 'center'
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <p className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-gold' : 'text-coral'}`}>{eyebrow}</p>
      )}
      <h2 className={`font-display text-4xl leading-[1.08] font-medium text-balance sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/75' : 'text-ink-soft'}`}>{intro}</p>}
    </Reveal>
  )
}

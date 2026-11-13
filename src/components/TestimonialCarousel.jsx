import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Icon from './Icon.jsx'

export default function TestimonialCarousel({ items, interval = 8000 }) {
  const [[index, dir], setState] = useState([0, 1])
  const [paused, setPaused] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const reduce = useReducedMotion()

  const show = (i, d) => {
    setState([i, d])
    setExpanded(false)
  }
  const go = (step) => show((index + step + items.length) % items.length, step)

  useEffect(() => {
    if (paused || reduce || expanded) return
    const t = setTimeout(() => show((index + 1) % items.length, 1), interval)
    return () => clearTimeout(t)
  }, [index, paused, reduce, expanded, interval, items.length])

  const item = items[index]
  const arrow = 'grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white text-navy shadow-sm transition hover:bg-navy hover:text-white'

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Parent reviews"
    >
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => go(-1)} aria-label="Previous review" className={arrow}>
          <Icon name="left" className="size-4" />
        </button>
        <div className="min-h-[15rem] flex-1 overflow-hidden rounded-xl bg-white p-5 shadow-card ring-1 ring-line">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: dir * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -30 }}
              transition={{ duration: 0.35 }}
              aria-live="polite"
              className="flex flex-col gap-4 sm:flex-row"
            >
              <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-full bg-mist font-display text-xl font-bold text-navy ring-4 ring-gold/40">
                {item.who[0]}
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-wide text-gold-dark uppercase">A parent’s story</p>
                <blockquote className={`mt-2 space-y-2 text-sm leading-relaxed text-ink ${expanded ? '' : 'line-clamp-4'}`}>
                  {item.quote.map((para, i) => (
                    <p key={i}>{i === 0 && '“'}{para}{i === item.quote.length - 1 && '”'}</p>
                  ))}
                </blockquote>
                <button type="button" onClick={() => setExpanded((e) => !e)} aria-expanded={expanded} className="mt-1 text-xs font-semibold text-navy hover:text-gold-dark">
                  {expanded ? 'Read less' : 'Read more'}
                </button>
                <figcaption className="mt-3">
                  <span className="block font-display text-sm font-semibold text-navy">{item.who}</span>
                  <span className="text-xs text-muted">{item.where}</span>
                </figcaption>
              </div>
            </motion.figure>
          </AnimatePresence>
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next review" className={arrow}>
          <Icon name="right" className="size-4" />
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => show(i, i > index ? 1 : -1)}
            aria-label={`Show review ${i + 1}`}
            aria-current={i === index}
            className={`relative h-2 rounded-full transition-all after:absolute after:-inset-x-1 after:-inset-y-2 duration-300 ${i === index ? 'w-6 bg-navy' : 'w-2 bg-navy/20 hover:bg-navy/40'}`}
          />
        ))}
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Icon from './Icon.jsx'

export default function TestimonialCarousel({ items, interval = 7000 }) {
  const [[index, dir], setState] = useState([0, 1])
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()

  const go = (step) => setState(([i]) => [(i + step + items.length) % items.length, step])

  useEffect(() => {
    if (paused || reduce) return
    const t = setTimeout(() => setState(([i]) => [(i + 1) % items.length, 1]), interval)
    return () => clearTimeout(t)
  }, [index, paused, reduce, interval, items.length])

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
      aria-label="Parent testimonials"
    >
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className={arrow}>
          <Icon name="left" className="size-4" />
        </button>
        <div className="min-h-[13rem] flex-1 overflow-hidden rounded-xl bg-white p-5 shadow-card ring-1 ring-line sm:min-h-[11rem]">
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
              <span aria-hidden="true" className="grid size-16 shrink-0 place-items-center rounded-full bg-mist font-display text-xl font-bold text-navy ring-4 ring-gold/40">
                P
              </span>
              <div>
                <div className="flex gap-0.5 text-gold" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((s) => <Icon key={s} name="star" className="size-4" />)}
                </div>
                <blockquote className="mt-2 text-sm leading-relaxed text-ink">“{item.quote}”</blockquote>
                <figcaption className="mt-3">
                  <span className="block font-display text-sm font-semibold text-navy">{item.who}</span>
                  <span className="text-xs text-muted">Placeholder testimonial</span>
                </figcaption>
              </div>
            </motion.figure>
          </AnimatePresence>
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className={arrow}>
          <Icon name="right" className="size-4" />
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setState([i, i > index ? 1 : -1])}
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-navy' : 'w-2 bg-navy/20 hover:bg-navy/40'}`}
          />
        ))}
      </div>
    </div>
  )
}

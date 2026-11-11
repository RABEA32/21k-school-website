import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

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

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Parent testimonials"
    >
      <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] bg-white p-8 shadow-card sm:min-h-[300px] sm:p-14">
        <span aria-hidden="true" className="absolute -top-6 right-8 font-display text-[12rem] leading-none text-coral/10">
          “
        </span>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-live="polite"
            className="relative"
          >
            <blockquote className="font-display text-2xl leading-snug text-ink sm:text-3xl">“{item.quote}”</blockquote>
            <figcaption className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <span className="font-semibold text-ink">{item.who}</span>
              <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-ink/70">{item.where}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setState([i, i > index ? 1 : -1])}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-coral' : 'w-2.5 bg-ink/20 hover:bg-ink/40'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {[
            [-1, 'Previous testimonial', 'M12 4 6 10l6 6'],
            [1, 'Next testimonial', 'm8 4 6 6-6 6'],
          ].map(([step, label, d]) => (
            <button
              key={label}
              type="button"
              onClick={() => go(step)}
              aria-label={label}
              className="grid size-12 place-items-center rounded-full border border-ink/15 bg-white text-ink transition hover:border-ink hover:bg-ink hover:text-white"
            >
              <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d={d} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

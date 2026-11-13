import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Icon from './Icon.jsx'
import { enquiry } from '../data/home.js'

const field =
  'w-full rounded-lg border border-line bg-mist px-4 py-3 text-ink placeholder:text-ink/40 transition focus:border-navy focus:bg-white focus:ring-4 focus:ring-navy/10 focus:outline-none'

// The original "Quick enquiry" form. Frontend only: it validates and confirms, but sends nothing —
// the live site's verification and booking step needs its backend.
export default function ContactForm() {
  const [sent, setSent] = useState(false)

  return (
    <div className="rounded-2xl bg-white p-7 text-ink sm:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-8 text-center" role="status">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-gold/20 text-navy">
              <Icon name="check" className="size-8" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold text-navy">Thank you.</h3>
            <p className="mx-auto mt-3 max-w-sm text-muted">This redesign preview doesn’t send enquiries yet. Your details have not been stored.</p>
            <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-navy underline-offset-4 hover:underline">
              Back to the form
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0 }}
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="grid gap-4"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">{enquiry.kicker}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-navy">{enquiry.title}</h3>
              <p className="mt-1 text-sm text-muted">{enquiry.body}</p>
            </div>
            <label className="grid gap-1.5 text-sm font-semibold">
              <span>Email <span className="text-rose-600" aria-hidden="true">*</span></span>
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
            <label className="flex items-start gap-3 text-sm text-muted">
              <input name="consent" type="checkbox" required className="mt-1 size-4 accent-navy" />
              <span>
                I agree to the <a href={enquiry.privacy} className="font-semibold text-navy underline">Privacy Policy</a> {enquiry.consent}
              </span>
            </label>
            <button
              type="submit"
              className="mt-1 rounded-md bg-gold px-6 py-3.5 font-semibold text-navy-dark transition hover:-translate-y-0.5 hover:bg-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              {enquiry.submit}
            </button>
            <p className="text-center text-xs text-muted">{enquiry.note}</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

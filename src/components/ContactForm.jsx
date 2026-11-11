import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const field =
  'w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3.5 text-ink placeholder:text-ink/40 transition focus:border-coral focus:bg-white focus:ring-4 focus:ring-coral/15 focus:outline-none'

// Frontend only: validates in the browser and confirms, but nothing is sent anywhere.
export default function ContactForm() {
  const [sentTo, setSentTo] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setSentTo(data.get('name').trim().split(/\s+/)[0] || 'there')
  }

  return (
    <div className="rounded-[2rem] bg-white p-7 text-ink shadow-card sm:p-10">
      <AnimatePresence mode="wait">
        {sentTo ? (
          <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center" role="status">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-teal/10 text-teal">
              <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="mt-6 font-display text-3xl">Thank you, {sentTo}.</h3>
            <p className="mx-auto mt-3 max-w-sm text-ink-soft">
              Your details are ready for an admissions counsellor. This preview site doesn’t send them anywhere yet.
            </p>
            <button type="button" onClick={() => setSentTo(null)} className="mt-6 text-sm font-semibold text-coral underline-offset-4 hover:underline">
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" exit={{ opacity: 0 }} onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <h3 className="font-display text-2xl sm:col-span-2">Start your child’s admission journey</h3>
            <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
              Parent’s name
              <input name="name" required autoComplete="name" className={field} placeholder="Your full name" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold">
              Email
              <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold">
              Child’s grade
              <select name="grade" required defaultValue="" className={field}>
                <option value="" disabled>Select a grade</option>
                <option>Pre-primary (ages 3–5)</option>
                <option>Primary (Grades 1–5)</option>
                <option>Middle (Grades 6–8)</option>
                <option>Senior (Grades 9–12)</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
              Interested in
              <select name="programme" defaultValue="21K School Online" className={field}>
                <option>21K School Online</option>
                <option>21K On Campus</option>
                <option>21K FLOWW</option>
                <option>21K Learning Garage</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <button
              type="submit"
              className="mt-2 rounded-full bg-coral px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:col-span-2"
            >
              Request a call
            </button>
            <p className="text-center text-xs text-ink-soft sm:col-span-2">20 minutes with an academic counsellor, not a salesperson.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Icon from './Icon.jsx'

const field =
  'w-full rounded-lg border border-line bg-mist px-4 py-3 text-ink placeholder:text-ink/40 transition focus:border-navy focus:bg-white focus:ring-4 focus:ring-navy/10 focus:outline-none'

// Frontend only: validates in the browser and confirms, but nothing is sent anywhere.
export default function ContactForm() {
  const [sentTo, setSentTo] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setSentTo(data.get('name').trim().split(/\s+/)[0] || 'there')
  }

  return (
    <div className="rounded-2xl bg-white p-7 text-ink sm:p-9">
      <AnimatePresence mode="wait">
        {sentTo ? (
          <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-8 text-center" role="status">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-gold/20 text-navy">
              <Icon name="check" className="size-8" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold text-navy">Thank you, {sentTo}.</h3>
            <p className="mx-auto mt-3 max-w-sm text-muted">
              Your details are ready for an admissions counsellor. This preview site doesn’t send them anywhere yet.
            </p>
            <button type="button" onClick={() => setSentTo(null)} className="mt-6 text-sm font-semibold text-navy underline-offset-4 hover:underline">
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" exit={{ opacity: 0 }} onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <h3 className="font-display text-2xl font-bold text-navy">Apply for Admission</h3>
              <p className="mt-1 text-sm text-muted">20 minutes with an academic counsellor, not a salesperson.</p>
            </div>
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
                <option>Early Years (ages 3–5)</option>
                <option>Elementary (Grades 1–5)</option>
                <option>Middle (Grades 6–8)</option>
                <option>High School (Grades 9–12)</option>
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
              className="mt-2 rounded-md bg-gold px-6 py-3.5 font-semibold text-navy-dark transition hover:-translate-y-0.5 hover:bg-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:col-span-2"
            >
              Request a call
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

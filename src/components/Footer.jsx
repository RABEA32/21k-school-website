import { useState } from 'react'
import { Link } from 'react-router'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { navLinks, sectionLinks, socials } from '../data/navLinks.js'
import { contact } from '../data/home.js'

const usefulInfo = [
  { to: '/online-school', label: 'Online School Admissions' },
  { to: '/on-campus', label: 'Campus Visits' },
  { to: '/floww', label: 'FLOWW Enrolment' },
  { to: '#apply', label: 'Book a Call' },
  { to: '#tour', label: 'Virtual Tour' },
]

const year = new Date().getFullYear()
const linkCls = 'text-muted transition-colors hover:text-navy'

function Column({ title, children, id }) {
  return (
    <div id={id} className="scroll-mt-28">
      <h3 className="mb-4 font-display text-sm font-semibold text-navy">{title}</h3>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  )
}

function Newsletter() {
  const [done, setDone] = useState(false)
  if (done) {
    return (
      <p role="status" className="flex items-center gap-2 rounded-lg bg-mist px-4 py-3 text-sm text-navy">
        <Icon name="check" className="size-4" /> Thanks! (Preview only — no email is stored.)
      </p>
    )
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setDone(true)
      }}
      className="flex gap-2"
    >
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input id="newsletter-email" type="email" required placeholder="Your email address" className="min-w-0 flex-1 rounded-md border border-line px-3 py-2.5 text-sm outline-none focus:border-navy" />
      <button type="submit" className="flex items-center gap-1.5 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-navy-dark hover:bg-gold-dark">
        Subscribe <Icon name="arrow" className="size-4" />
      </button>
    </form>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 xl:grid-cols-[1.3fr_0.9fr_1fr_1.1fr_1.5fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">Another way to school. A global K-12 learning ecosystem, built to make every child succeed.</p>
          <ul className="mt-5 flex gap-2" aria-label="Social media (links coming soon)">
            {socials.map((s) => (
              <li key={s.name} title={`${s.name} — link coming soon`} className="grid size-9 place-items-center rounded-full bg-navy text-white">
                <Icon name={s.icon} className="size-4" />
                <span className="sr-only">{s.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <Column title="Quick Links">
          {[...navLinks, ...sectionLinks].map(({ to, label }) => (
            <li key={to}><Link to={to} className={linkCls}>{label}</Link></li>
          ))}
        </Column>

        <Column title="Useful Information">
          {usefulInfo.map(({ to, label }) => (
            <li key={label}><Link to={to} className={linkCls}>{label}</Link></li>
          ))}
        </Column>

        <Column title="Contact Us" id="contact">
          <li className="flex gap-3 text-muted"><Icon name="pin" className="mt-0.5 size-4 shrink-0 text-navy" />{contact.address}</li>
          <li><a href={`tel:${contact.phone.replace(/\s/g, '')}`} className={`flex gap-3 ${linkCls}`}><Icon name="phone" className="mt-0.5 size-4 shrink-0 text-navy" />{contact.phone}</a></li>
          <li><a href={`mailto:${contact.email}`} className={`flex gap-3 ${linkCls}`}><Icon name="mail" className="mt-0.5 size-4 shrink-0 text-navy" />{contact.email}</a></li>
          <li className="text-xs text-muted/70">Contact details are placeholders.</li>
        </Column>

        <div>
          <h3 className="mb-2 font-display text-sm font-semibold text-navy">Subscribe to Our Newsletter</h3>
          <p className="mb-4 text-sm text-muted">Learning insights, learner stories and news.</p>
          <Newsletter />
        </div>
      </div>

      <div className="bg-navy-dark text-xs text-white/75">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} 21K School website project. Content adapted from 21kschool.com. Photography via Unsplash.</p>
          <p className="flex items-center gap-3">#AnotherWay to School <span aria-hidden="true" className="h-0.5 w-8 rounded bg-gold" /></p>
        </div>
      </div>
    </footer>
  )
}

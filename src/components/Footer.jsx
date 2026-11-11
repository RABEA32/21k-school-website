import { Link } from 'react-router'
import Logo from './Logo.jsx'
import { navLinks } from '../data/navLinks.js'
import { contact } from '../data/home.js'

const programmes = [
  { to: '/online-school', label: 'Online School' },
  { to: '/on-campus', label: 'On Campus' },
  { to: '/floww', label: 'FLOWW' },
  { to: '/#contact', label: 'Learning Garage' },
]

const curricula = ['Cambridge Pathway', 'Pearson Edexcel IAL', 'Indian Pathway (NCF)', 'NIOS Pathway']
const socials = ['Instagram', 'LinkedIn', 'YouTube', 'Facebook']

function Column({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">{title}</h3>
      <ul className="space-y-3 text-sm text-white/70">{children}</ul>
    </div>
  )
}

const linkCls = 'transition-colors hover:text-white'
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              #AnotherWay to School — a global K-12 learning ecosystem, built to make every child succeed.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social media (links coming soon)">
              {socials.map((s) => (
                <li key={s}>
                  <span title="Link coming soon" className="inline-block rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/60">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Column title="Navigate">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={linkCls}>{label}</Link>
              </li>
            ))}
          </Column>

          <Column title="Programmes">
            {programmes.map(({ to, label }) => (
              <li key={label}>
                <Link to={to} className={linkCls}>{label}</Link>
              </li>
            ))}
          </Column>

          <Column title="Curriculum">
            {curricula.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </Column>

          <Column title="Contact">
            <li>
              <a href={`mailto:${contact.email}`} className={linkCls}>{contact.email}</a>
            </li>
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className={linkCls}>{contact.phone}</a>
            </li>
            <li>{contact.address}</li>
            <li className="text-xs text-white/40">Contact details are placeholders.</li>
          </Column>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} 21K School website project. Content adapted from 21kschool.com.</p>
          <p>Photography via Unsplash.</p>
        </div>
      </div>
    </footer>
  )
}

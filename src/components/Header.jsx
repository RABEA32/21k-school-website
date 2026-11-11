import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import Logo from './Logo.jsx'
import Button, { Arrow } from './Button.jsx'
import Icon from './Icon.jsx'
import { navLinks, searchIndex, sectionLinks, socials } from '../data/navLinks.js'
import { contact } from '../data/home.js'

const portals = ['Parent Portal', 'Student Portal', 'Alumni']

function TopBar() {
  return (
    <div className="hidden bg-navy-dark text-xs whitespace-nowrap text-white/85 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-2.5 sm:px-8">
        <ul className="flex items-center gap-6">
          <li className="hidden items-center gap-2 lg:flex"><Icon name="pin" className="size-3.5 text-gold" />{contact.address}</li>
          <li><a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-gold"><Icon name="phone" className="size-3.5 text-gold" />{contact.phone}</a></li>
          <li><a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-gold"><Icon name="mail" className="size-3.5 text-gold" />{contact.email}</a></li>
        </ul>
        <div className="flex items-center gap-5">
          <ul className="flex items-center divide-x divide-white/25" aria-label="Portals (coming soon)">
            {portals.map((p) => (
              <li key={p} className="px-3 first:pl-0" title="Coming soon">{p}</li>
            ))}
          </ul>
          <ul className="flex items-center gap-3" aria-label="Social media (links coming soon)">
            {socials.map((s) => (
              <li key={s.name} title={`${s.name} — link coming soon`}>
                <Icon name={s.icon} className="size-4" />
                <span className="sr-only">{s.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Search({ onDone }) {
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const ref = useRef(null)
  useEffect(() => ref.current?.focus(), [])
  const results = searchIndex.filter((l) => l.label.toLowerCase().includes(q.trim().toLowerCase()))

  const go = (to) => {
    navigate(to)
    onDone()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="absolute top-full right-0 z-10 mt-3 w-80 max-w-[calc(100vw-2.5rem)] rounded-xl bg-white p-3 shadow-card ring-1 ring-line"
    >
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault()
          if (results[0]) go(results[0].to)
        }}
      >
        <label className="flex items-center gap-2 rounded-lg border border-line px-3 py-2.5 focus-within:border-navy">
          <Icon name="search" className="size-4 text-muted" />
          <input ref={ref} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the site…" aria-label="Search the site" className="w-full text-sm outline-none" />
        </label>
      </form>
      <ul className="mt-2 max-h-64 overflow-auto">
        {results.map((r) => (
          <li key={r.label}>
            <button type="button" onClick={() => go(r.to)} className="w-full rounded-lg px-3 py-2 text-left text-sm text-ink hover:bg-mist">
              {r.label}
            </button>
          </li>
        ))}
        {!results.length && <li className="px-3 py-2 text-sm text-muted">No matches.</li>}
      </ul>
    </motion.div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open && !searching) return
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      setSearching(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, searching])

  const close = () => setOpen(false)
  const pageClass = ({ isActive }) =>
    `relative py-2 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded after:bg-gold after:transition-transform ${
      isActive ? 'text-navy after:scale-x-100' : 'text-ink/80 after:scale-x-0 hover:text-navy hover:after:scale-x-100'
    }`

  return (
    <>
      <TopBar />
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-[0_6px_24px_-12px_rgb(13_42_92/0.35)]' : 'border-b border-line'}`}>
        <div className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-5 transition-all duration-300 md:px-8 ${scrolled ? 'py-2.5' : 'py-4'}`}>
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-7 xl:flex">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} end className={pageClass}>{label}</NavLink>
            ))}
            {sectionLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="py-2 text-sm font-semibold text-ink/80 hover:text-navy">{label}</Link>
            ))}
          </nav>

          <div className="relative flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setSearching((s) => !s)}
              aria-expanded={searching}
              aria-label="Search"
              className="grid size-10 place-items-center rounded-md text-navy hover:bg-mist"
            >
              <Icon name="search" />
            </button>
            <AnimatePresence>{searching && <Search onDone={() => setSearching(false)} />}</AnimatePresence>
            <Button to="#apply" className="max-sm:hidden">
              Apply Now <Arrow />
            </Button>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid size-10 place-items-center rounded-md border border-line text-navy xl:hidden"
            >
              <Icon name={open ? 'close' : 'menu'} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-line bg-white xl:hidden"
            >
              <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4 sm:grid-cols-2 sm:px-8">
                {navLinks.map(({ to, label }) => (
                  <NavLink key={to} to={to} end onClick={close} className={({ isActive }) => `rounded-lg px-4 py-3 font-semibold ${isActive ? 'bg-navy text-white' : 'text-ink hover:bg-mist'}`}>
                    {label}
                  </NavLink>
                ))}
                {sectionLinks.map(({ to, label }) => (
                  <Link key={to} to={to} onClick={close} className="rounded-lg px-4 py-3 font-semibold text-ink hover:bg-mist">{label}</Link>
                ))}
                <Button to="#apply" onClick={close} className="mt-2 sm:col-span-2">
                  Apply Now <Arrow />
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

import { useState } from 'react'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { SmartLink } from './Button.jsx'
import { socials } from '../data/navLinks.js'
import { contact, footerGroups, footerMeta } from '../data/home.js'

const linkCls = 'text-muted transition-colors hover:text-navy'

// Frontend only: confirms locally; the real subscription needs the site's backend.
function Digest() {
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
      <label className="sr-only" htmlFor="digest-email">Email address</label>
      <input id="digest-email" type="email" required placeholder="Email address" className="min-w-0 flex-1 rounded-md border border-line px-3 py-2.5 text-sm outline-none focus:border-navy" />
      <button type="submit" className="flex items-center gap-1.5 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-navy-dark hover:bg-gold-dark">
        Subscribe <Icon name="arrow" className="size-4" />
      </button>
    </form>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(5,1fr)]">
          <div id="contact" className="scroll-mt-28 sm:col-span-2 lg:col-span-1">
            <Logo />
            <h3 className="mt-6 mb-2 font-display text-sm font-semibold text-navy">Registered office</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href={contact.mapUrl} className={`flex gap-3 ${linkCls}`}><Icon name="pin" className="mt-0.5 size-4 shrink-0 text-navy" />{contact.address}</a></li>
              <li><a href={`mailto:${contact.email}`} className={`flex gap-3 ${linkCls}`}><Icon name="mail" className="mt-0.5 size-4 shrink-0 text-navy" />{contact.email}</a></li>
              <li><a href={contact.whatsapp} className={`flex gap-3 ${linkCls}`}><Icon name="phone" className="mt-0.5 size-4 shrink-0 text-navy" />WhatsApp us</a></li>
            </ul>
            <ul className="mt-5 flex gap-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.to} aria-label={`21K School on ${s.name}`} className="grid size-9 place-items-center rounded-full bg-navy text-white transition hover:bg-gold hover:text-navy-dark">
                    <Icon name={s.icon} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerGroups.map((g) => (
            <div key={g.title}>
              <h3 className="mb-4 font-display text-sm font-semibold text-navy">{g.title}</h3>
              <ul className="space-y-2.5 text-sm">
                {g.links.map((l) => (
                  <li key={l.label}><SmartLink to={l.to} className={linkCls}>{l.label}</SmartLink></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-md">
            <h3 className="font-display text-sm font-semibold text-navy">{footerMeta.digest.title}</h3>
            <p className="mt-1 mb-4 text-sm text-muted">{footerMeta.digest.body}</p>
            <Digest />
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            {[footerMeta.apps, footerMeta.parentHub].map((l) => (
              <li key={l.label}><a href={l.to} className="text-navy hover:text-gold-dark">{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-navy-dark text-xs text-white/75">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <p>{footerMeta.copyright} <span className="block text-white/50 sm:inline">{footerMeta.formerly}</span></p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {footerMeta.legal.map((l) => (
              <li key={l.label}><a href={l.to} className="hover:text-gold">{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import Button, { Arrow, SmartLink } from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Accordion from '../components/Accordion.jsx'
import {
  acrossIndia, admission, alumni, awards, batches, boards, bookCall, experience, facts, faq, fees, fit, hero, pathways,
  press, programmes, reading, registrations, reviews, schoolDay, teachers,
} from '../data/onlineSchool.js'

const wrap = 'mx-auto max-w-7xl px-5 sm:px-8'
const ease = [0.22, 1, 0.36, 1]
const VERIFY_ID = 'our-registrations-and-how-to-verify-them' // anchor name used by the original page

// Renders content arrays: plain strings and { label, to } links, in order.
function Rich({ parts }) {
  return parts.map((p, i) =>
    typeof p === 'string' ? p : (
      <SmartLink key={i} to={p.to} className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark">{p.label}</SmartLink>
    ),
  )
}

// Same heading style as the Main Page's SectionHeading (gold rule, Poppins, navy), sized for page titles.
function Heading({ id, title, intro, link, light = false, center = false }) {
  return (
    <Reveal className={`mb-8 ${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <span aria-hidden="true" className={`mb-4 block h-1 w-12 rounded bg-gold ${center ? 'mx-auto' : ''}`} />
      <h2 id={id} className={`scroll-mt-28 font-display text-3xl leading-tight font-bold sm:text-[2.25rem] ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {intro && <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/80' : 'text-muted'}`}>{intro}</p>}
      {link && (
        <SmartLink to={link.to} className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-dark">
          {link.label} <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
        </SmartLink>
      )}
    </Reveal>
  )
}

function Stars({ n, className = 'size-4' }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={`${n} of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Icon key={s} name="star" className={`${className} ${s <= n ? 'text-gold' : 'text-line'}`} />
      ))}
    </span>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark">
      <div aria-hidden="true" className="absolute top-1/2 right-[-12%] -z-10 size-[44rem] -translate-y-1/2 rounded-full bg-navy max-lg:hidden" />
      <div className={`${wrap} grid grid-cols-1 gap-10 pt-8 pb-28 lg:grid-cols-[1fr_minmax(20rem,24rem)] lg:pb-32 xl:grid-cols-[1fr_auto_24rem] xl:items-end`}>
        <div className="xl:pb-6">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li aria-hidden="true"><Icon name="right" className="size-3.5" /></li>
              <li aria-current="page" className="text-white">Online School</li>
            </ol>
          </nav>
          <ul className="mt-6 flex flex-wrap gap-2 text-xs">
            <li className="rounded-full bg-gold px-3 py-1 font-semibold text-navy-dark">{hero.cohorts}</li>
            {hero.registrations.map((r) => (
              <li key={r.value} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-white/85">{r.label} <strong className="text-white">{r.value}</strong></li>
            ))}
          </ul>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mt-6 max-w-2xl font-display text-4xl leading-[1.1] font-bold text-white sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.15 }} className="mt-5 max-w-xl text-lg text-white/85">
            {hero.intro}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.3 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="#enquiry">{hero.bookCall} <Arrow /></Button>
            <Button to={hero.compare.to} variant="outline">{hero.compare.label}</Button>
          </motion.div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ul className="flex gap-2">
              {hero.logos.map((l) => (
                <li key={l.alt} className="rounded-lg bg-white px-3 py-2"><img src={l.src} alt={l.alt} className="h-7 w-auto" /></li>
              ))}
            </ul>
            <Link to={`#${VERIFY_ID}`} className="text-sm font-semibold text-gold underline-offset-4 hover:underline">{hero.verify}</Link>
            <a href={hero.rating.to} className="flex items-center gap-2 text-sm text-white/85 hover:text-white">
              <Stars n={4} /> <strong className="text-white">{hero.rating.value}</strong> {hero.rating.label}
            </a>
          </div>
        </div>

        <img src={hero.image} alt={hero.imageAlt} width="738" height="1058" fetchPriority="high" className="hidden max-h-[30rem] w-auto self-end xl:block" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.2 }} className="self-center rounded-2xl shadow-2xl">
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}

function Facts() {
  return (
    <section aria-label="Registrations" className={`${wrap} relative z-10 -mt-16`}>
      <Reveal className="overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line">
        <dl className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
          {facts.items.map((f) => (
            <div key={f.value} className="flex flex-col-reverse gap-1 p-5">
              <dt className="text-sm text-muted">{f.label}</dt>
              <dd className="font-display text-3xl font-bold text-navy">{f.value}</dd>
            </div>
          ))}
        </dl>
        <p className="border-t border-line bg-mist px-5 py-4 text-sm text-ink">{facts.summary}</p>
      </Reveal>
    </section>
  )
}

function Press() {
  return (
    <section aria-labelledby="press" className={`${wrap} py-12`}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 id="press" className="flex items-center gap-3 font-display text-sm font-semibold tracking-[0.18em] text-navy uppercase">
          {press.title} <span aria-hidden="true" className="h-0.5 w-8 rounded bg-gold" />
        </h2>
        <SmartLink to={press.link.to} className="group flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-dark">
          {press.link.label} <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
        </SmartLink>
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {press.logos.map((l) => (
          <li key={l.alt} className="grid h-16 place-items-center rounded-lg bg-white px-4 ring-1 ring-line">
            <img src={l.src} alt={l.alt} loading="lazy" className="max-h-8 w-auto max-w-full object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" />
          </li>
        ))}
      </ul>
    </section>
  )
}

function Fit() {
  return (
    <section className="bg-mist py-16">
      <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8`}>
        <Heading title={fit.title} />
        <Reveal className="space-y-4 text-ink">
          {fit.paragraphs.map((p) => <p key={p} className="leading-relaxed">{p}</p>)}
          <p className="flex gap-3 rounded-xl border-l-4 border-gold bg-white p-5 leading-relaxed shadow-sm">
            <Icon name="shield" className="mt-0.5 size-5 shrink-0 text-gold-dark" />
            {fit.caution}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className={`${wrap} py-16`}>
      <Heading title={experience.title} intro={experience.intro} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {experience.items.map((x, i) => (
          <Reveal key={x.title} delay={i * 0.08} className="rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
            <span className="grid size-11 place-items-center rounded-lg bg-navy text-gold"><Icon name={x.icon} /></span>
            <h3 className="mt-4 font-display text-lg font-semibold text-navy">{x.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{x.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Programmes() {
  return (
    <section className="bg-mist py-16">
      <div className={wrap}>
        <Heading title={programmes.title} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programmes.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <SmartLink to={p.link.to} className="group flex h-full flex-col rounded-xl bg-white p-6 shadow-card ring-1 ring-line transition hover:-translate-y-1">
                <span className={`grid size-11 place-items-center rounded-lg ${p.tone}`}><Icon name={p.icon} /></span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 text-xs font-semibold tracking-wide text-gold-dark uppercase">{p.grades}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.body}</p>
                <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold-dark">
                  {p.link.label} <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </SmartLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pathways() {
  return (
    <section className={`${wrap} py-16`}>
      <Heading title={pathways.title} />
      <div className="grid gap-6 lg:grid-cols-2">
        {pathways.items.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1} className="flex flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line">
            <div className={`flex items-end justify-between gap-4 px-6 pt-6 sm:px-8 ${p.tone}`}>
              <div className="pb-6">
                <h3 className="font-display text-2xl font-bold text-navy">{p.name}</h3>
                <p className="mt-2 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy">{p.span}</p>
              </div>
              <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-44 w-auto sm:h-52" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-ink"><Rich parts={p.intro} /></p>
              <ul className="mt-5 space-y-2.5">
                {p.points.map((x) => (
                  <li key={x} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-gold text-navy-dark"><Icon name="check" className="size-3" /></span>
                    {x}
                  </li>
                ))}
              </ul>
              {p.note && <p className="mt-6 rounded-lg bg-mist p-4 text-xs leading-relaxed text-muted">{p.note}</p>}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 text-center text-ink"><Rich parts={pathways.outro} /></Reveal>
    </section>
  )
}

// Table shell shared by the comparison, batch, fee and timeline tables on this page.
function Table({ caption, hint, children, className = '' }) {
  return (
    <Reveal className="rounded-xl bg-white shadow-card ring-1 ring-line">
      {hint && <p className="border-b border-line px-5 py-3 text-xs text-muted">{hint}</p>}
      <div className={`overflow-x-auto ${className}`} tabIndex={0} role="region" aria-label={caption}>
        <table className="w-full border-collapse text-left text-sm">
          {caption && <caption className="sr-only">{caption}</caption>}
          {children}
        </table>
      </div>
    </Reveal>
  )
}
const th = 'bg-navy px-4 py-3 font-display text-xs font-semibold tracking-wide text-white uppercase'
const td = 'border-t border-line px-4 py-3 align-top text-ink'

function Boards() {
  return (
    <section className="bg-mist py-16">
      <div className={wrap}>
        <Heading title={boards.title} />
        <Table caption={boards.title} hint={boards.hint}>
          <thead>
            <tr><th className={`${th} w-44`}><span className="sr-only">Compare</span></th>{boards.columns.map((c) => <th key={c} className={th}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {boards.rows.map(([label, ...cells]) => (
              <tr key={label} className="even:bg-mist/60">
                <th scope="row" className={`${td} min-w-36 font-display font-semibold text-navy`}>{label}</th>
                {cells.map((c, i) => <td key={i} className={`${td} min-w-56`}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  )
}

function Registrations() {
  return (
    <section className={`${wrap} py-16`}>
      <Heading id={VERIFY_ID} title={registrations.title} />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-4 leading-relaxed text-ink">
          {registrations.paragraphs.map((p, i) => <p key={i}><Rich parts={p} /></p>)}
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {registrations.cards.map((c, i) => (
            <Reveal key={c.value} delay={i * 0.1} className="flex flex-col rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
              <img src={c.logo} alt={c.logoAlt} loading="lazy" className="h-10 w-auto self-start" />
              <p className="mt-4 text-sm font-semibold text-navy">{c.org}</p>
              <p className="mt-3 text-xs text-muted">{c.label}</p>
              <p className="font-display text-3xl font-bold text-navy select-all">{c.value}</p>
              <p className="mt-1 text-sm text-ink">{c.status}</p>
              <div className="mt-5 flex flex-1 flex-col justify-end gap-2 text-sm font-semibold">
                <a href={c.doc.to} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-navy hover:text-gold-dark">
                  {c.doc.label} <span className="text-xs font-normal text-muted">View original (opens in a new tab)</span>
                </a>
                <a href={c.finder.to} className="group flex items-center gap-1.5 text-navy hover:text-gold-dark">
                  {c.finder.label} <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-xs font-normal text-muted">{c.how}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Timeline axis: ticks 9 am to 7 pm as on the original; the rail runs to 8 pm so the 7:20 pm window fits.
const AXIS_START = 9
const AXIS_END = 20
const ticks = [9, 11, 13, 15, 17, 19]
const pct = (h) => `${((h - AXIS_START) / (AXIS_END - AXIS_START)) * 100}%`

function SchoolDay() {
  return (
    <section className="bg-mist py-16">
      <div className={`${wrap} grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]`}>
        <div>
          <Heading title={schoolDay.title} intro={schoolDay.intro} />
          <Reveal as="ul" className="space-y-2">
            {schoolDay.hours.map((h) => (
              <li key={h} className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm text-ink shadow-sm">
                <Icon name="clock" className="size-4 shrink-0 text-navy" /> {h}
              </li>
            ))}
          </Reveal>
        </div>
        <div className="space-y-5">
          {schoolDay.examples.map((ex, i) => (
            <Reveal key={ex.title} delay={i * 0.1} className="rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
              <h3 className="font-display text-lg font-semibold text-navy">{ex.title}</h3>
              <div className="mt-5" aria-hidden="true">
                <div className="space-y-3">
                  {ex.windows.map((w) => (
                    <div key={w.label}>
                      <p className="mb-1 text-xs font-semibold text-navy">{w.label}</p>
                      <div className="relative h-3 rounded-full bg-mist">
                        <span className="absolute inset-y-0 rounded-full bg-navy" style={{ left: pct(w.from), width: pct(AXIS_START + w.to - w.from) }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative mt-1 h-4 text-[0.65rem] text-muted">
                  {ticks.map((t) => (
                    <span key={t} className="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full" style={{ left: pct(t) }}>{t > 12 ? t - 12 : t}</span>
                  ))}
                </div>
              </div>
              <ul className="sr-only">{ex.windows.map((w) => <li key={w.label}>{w.label}</li>)}</ul>
              <p className="mt-4 text-sm leading-relaxed text-muted">{ex.body}</p>
            </Reveal>
          ))}
          <Reveal as="p" className="flex gap-3 rounded-xl border-l-4 border-gold bg-white p-5 text-sm leading-relaxed text-ink shadow-sm">
            <Icon name="users" className="mt-0.5 size-5 shrink-0 text-gold-dark" />
            {schoolDay.note}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Batches() {
  return (
    <section className={`${wrap} py-16`}>
      <Heading title={batches.title} intro={batches.intro} />
      <p className="mb-3 text-sm font-semibold text-navy">{batches.tableIntro}</p>
      <Table caption={batches.title}>
        <thead><tr>{batches.columns.map((c) => <th key={c} className={th}>{c}</th>)}</tr></thead>
        <tbody>
          {batches.rows.map(([band, ...times]) => (
            <tr key={band} className="even:bg-mist/60">
              <th scope="row" className={`${td} font-display font-semibold whitespace-nowrap text-navy`}>{band}</th>
              {times.map((t, i) => <td key={i} className={`${td} whitespace-nowrap tabular-nums`}>{t}</td>)}
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="rounded-xl bg-mist p-6">
          <h3 className="font-display text-lg font-semibold text-navy">{batches.limitsTitle}</h3>
          <ul className="mt-4 space-y-3">
            {batches.limits.map((l) => (
              <li key={l} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-dark" />{l}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {batches.sizes.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="rounded-xl bg-white p-5 shadow-card ring-1 ring-line">
              <p className="text-xs font-semibold tracking-wide text-gold-dark uppercase">{s.title}</p>
              <p className="mt-1 font-display text-2xl font-bold text-navy">{s.value}</p>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Teachers() {
  return (
    <section className="bg-navy-dark py-16">
      <div className={wrap}>
        <Heading light title={teachers.title} intro={teachers.intro} />
        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {teachers.stats.map((s) => (
            <div key={s.value} className="flex flex-col-reverse gap-1 rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
              <dt className="text-xs text-white/70">{s.label}</dt>
              <dd className="font-display text-xl font-bold text-gold sm:text-2xl">{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 mb-4 text-sm text-white/70">{teachers.hint}</p>
        <ul className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:scroll-px-8 sm:px-8" tabIndex={0} aria-label="Academic crew">
          {teachers.items.map((t) => (
            <li key={t.name} className="flex w-64 shrink-0 snap-start flex-col overflow-hidden rounded-xl bg-white">
              <img src={t.photo} alt={t.name} loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
              <div className="flex flex-1 flex-col p-4">
                <p className="text-[0.7rem] font-semibold tracking-wide text-gold-dark uppercase">{t.group}</p>
                <h3 className="mt-1 font-display text-base font-semibold text-navy">{t.name}</h3>
                <p className="text-sm font-medium text-ink">{t.role}</p>
                <ul className="mt-3 flex-1 space-y-1 text-xs text-muted">
                  {t.details.map((d) => <li key={d}>{d}</li>)}
                </ul>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <a href={t.profile} className="text-sm font-semibold text-navy hover:text-gold-dark" aria-label={`Read ${t.name.split(' ')[0]}’s profile (${t.name})`}>Read {t.name.split(' ')[0]}’s profile <Icon name="arrow" className="inline size-3.5" /></a>
                  {t.linkedin && (
                    <a href={t.linkedin} aria-label={`${t.name} on LinkedIn`} className="grid size-8 place-items-center rounded-full bg-navy text-white hover:bg-gold hover:text-navy-dark">
                      <Icon name="linkedin" className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Button to={teachers.link.to} className="mt-6">{teachers.link.label} <Arrow /></Button>
      </div>
    </section>
  )
}

function Review({ r }) {
  const [open, setOpen] = useState(false)
  return (
    <li className="flex flex-col rounded-xl bg-white p-5 shadow-card ring-1 ring-line">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full bg-mist font-display text-sm font-bold text-navy ring-2 ring-gold/50">{r.initials}</span>
        <div>
          <p className="font-display text-sm font-semibold text-navy">{r.name}</p>
          <p className="flex items-center gap-2 text-xs text-muted"><Stars n={r.stars} className="size-3.5" /> rated {r.stars} of 5 on Google</p>
        </div>
      </div>
      <blockquote className={`mt-4 text-sm leading-relaxed text-ink ${open ? '' : 'line-clamp-5'}`}>“{r.quote}”</blockquote>
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="mt-2 self-start text-xs font-semibold text-navy hover:text-gold-dark">
        {open ? 'Read less' : 'Read more'}
      </button>
    </li>
  )
}

function Reviews() {
  return (
    <section className={`${wrap} py-16`}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <Heading title={reviews.title} />
          <Reveal className="space-y-3 text-sm leading-relaxed text-muted">
            <p><Rich parts={reviews.intro} /></p>
            <p><Rich parts={reviews.more} /></p>
          </Reveal>
          <Reveal className="mt-6 rounded-xl bg-navy p-6 text-white">
            <p className="font-display text-4xl font-bold">{reviews.rating.value}</p>
            <div className="mt-2"><Stars n={4} /></div>
            <p className="mt-2 text-sm text-white/80">{reviews.rating.label}</p>
            <Button to={reviews.rating.link.to} className="mt-5">{reviews.rating.link.label} <Arrow /></Button>
          </Reveal>
        </div>
        <ul className="grid content-start gap-4 sm:grid-cols-2">
          {reviews.items.map((r) => <Review key={r.name} r={r} />)}
        </ul>
      </div>
    </section>
  )
}

function Awards() {
  return (
    <section className="bg-mist py-16">
      <div className={wrap}>
        <Heading title={awards.title} link={awards.link} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {awards.items.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08} className="flex flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line">
              <img src={a.image} alt={a.alt} loading="lazy" className="aspect-[4/3] w-full bg-white object-contain p-2" />
              <div className="flex-1 border-t border-line p-5">
                <p className="inline-block rounded-full bg-gold px-2.5 py-0.5 text-xs font-semibold text-navy-dark">{a.year}</p>
                <h3 className="mt-3 font-display text-base font-semibold text-navy">{a.title}</h3>
                <p className="mt-1 text-xs font-medium text-muted">{a.by}</p>
                {a.body && <p className="mt-3 text-sm leading-relaxed text-ink">{a.body}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Alumni() {
  return (
    <section className={`${wrap} py-16`}>
      <Heading title={alumni.title} intro={alumni.intro} />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {alumni.items.map((a, i) => (
          <Reveal as="li" key={a.name} delay={(i % 3) * 0.08} className="rounded-xl bg-white p-6 shadow-card ring-1 ring-line">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-bold text-gold">{a.initials}</span>
              <div>
                <h3 className="font-display text-base font-semibold text-navy">{a.name}</h3>
                <p className="text-xs text-muted">{a.school} · {a.city}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink">{a.body}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

function Disclosure({ title, children }) {
  return (
    <details className="group rounded-xl bg-white shadow-sm ring-1 ring-line [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-sm font-semibold text-navy">
        {title}
        <span className="flex items-center gap-1 text-xs font-semibold text-muted">
          <span className="group-open:hidden">Show</span><span className="hidden group-open:inline">Hide</span>
          <Icon name="right" className="size-4 transition-transform group-open:rotate-90" />
        </span>
      </summary>
      <div className="border-t border-line px-5 py-4 text-sm leading-relaxed text-ink">{children}</div>
    </details>
  )
}

function Fees() {
  return (
    <section className="bg-mist py-16">
      <div className={`${wrap} grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr]`}>
        <div>
          <Heading title={fees.title} />
          <Reveal className="space-y-4 text-sm leading-relaxed text-ink">
            <p><Rich parts={fees.intro} /></p>
            <p className="rounded-lg border-l-4 border-gold bg-white p-4 font-medium">{fees.benefit} {fees.instalments}</p>
          </Reveal>
          <div className="mt-6 space-y-3">
            <Disclosure title={fees.includes.title}>
              <p>{fees.includes.intro}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5">{fees.includes.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </Disclosure>
            <Disclosure title={fees.excludes.title}>
              <ul className="list-disc space-y-2 pl-5">{fees.excludes.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </Disclosure>
          </div>
          <p className="mt-6 text-sm text-muted">{fees.outro}</p>
        </div>
        <div>
          <Table caption={fees.caption} hint={fees.hint} className="max-h-[34rem] overflow-y-auto">
            <thead className="sticky top-0">
              <tr>{fees.columns.map((c) => <th key={c} className={th}>{c}</th>)}</tr>
            </thead>
            <tbody>
              {fees.rows.map(([grade, indian, british]) => (
                <tr key={grade} className="even:bg-mist/60">
                  <th scope="row" className={`${td} font-display font-semibold text-navy`}>{grade}</th>
                  <td className={`${td} tabular-nums`}>{indian}</td>
                  <td className={`${td} tabular-nums`}>{british}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p className="mt-2 text-xs text-muted">{fees.caption}</p>
        </div>
      </div>
    </section>
  )
}

function Admission() {
  const t = admission.timeline
  return (
    <section className={`${wrap} py-16`}>
      <Heading title={admission.title} />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {admission.steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 0.06} className="relative rounded-xl bg-white p-5 shadow-card ring-1 ring-line">
            <span className="grid size-10 place-items-center rounded-full bg-gold font-display font-bold text-navy-dark">{i + 1}</span>
            <h3 className="mt-4 font-display text-base font-semibold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </Reveal>
        ))}
      </ol>
      <h3 className="mt-12 mb-4 font-display text-xl font-bold text-navy">{t.title}</h3>
      <Table caption={t.title}>
        <thead><tr><th className={th}>What</th><th className={th}>When</th></tr></thead>
        <tbody>
          {t.rows.map(([what, when]) => (
            <tr key={what} className="even:bg-mist/60">
              <th scope="row" className={`${td} min-w-48 font-semibold text-navy`}>{what}</th>
              <td className={`${td} min-w-64`}>{when}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p className="mt-4 text-sm text-muted">{t.note}</p>
    </section>
  )
}

function BookCall() {
  return (
    <section className={`${wrap} pb-16`}>
      <Reveal className="relative overflow-hidden rounded-xl bg-navy p-8 sm:p-10">
        <div aria-hidden="true" className="absolute -right-16 -bottom-24 size-72 rounded-full bg-gold/15" />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl">{bookCall.title}</h2>
            <p className="mt-4 max-w-2xl text-white/80">{bookCall.body}</p>
            <Button to="#enquiry" className="mt-7">{bookCall.cta} <Arrow /></Button>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <ul className="flex gap-2">
              {hero.logos.map((l) => <li key={l.alt} className="rounded-lg bg-white px-3 py-2"><img src={l.src} alt={l.alt} loading="lazy" className="h-7 w-auto" /></li>)}
            </ul>
            <a href={hero.rating.to} className="flex items-center gap-2 text-sm text-white/85 hover:text-white">
              <Stars n={4} /> <strong className="text-white">{hero.rating.value}</strong> {hero.rating.label}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Faq() {
  const items = faq.items.map(({ q, a }) => ({
    q,
    a: a.map((para, i) => <span key={i} className={`block ${i ? 'mt-3' : ''}`}><Rich parts={para} /></span>),
  }))
  return (
    <section className="bg-mist py-16">
      <div className={`${wrap} grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading title={faq.title} />
          <Button to="#enquiry" variant="navy">{faq.ask} <Arrow /></Button>
        </div>
        <Reveal><Accordion items={items} /></Reveal>
      </div>
    </section>
  )
}

function IndiaAndReading() {
  return (
    <section className={`${wrap} grid grid-cols-1 gap-10 py-16 lg:grid-cols-2`}>
      <div>
        <Heading title={acrossIndia.title} />
        <Reveal as="p" className="leading-relaxed text-ink">{acrossIndia.lead} {acrossIndia.body}</Reveal>
      </div>
      <div>
        <Heading title={reading.title} />
        <ul className="space-y-3">
          {reading.items.map((r) => (
            <li key={r.to}>
              <a href={r.to} className="group flex items-center justify-between gap-4 rounded-xl bg-white p-4 text-sm font-semibold text-navy shadow-sm ring-1 ring-line transition hover:-translate-y-0.5 hover:ring-gold">
                {r.label} <Icon name="arrow" className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            </li>
          ))}
        </ul>
        <Button to={reading.more.to} variant="outlineDark" className="mt-5">{reading.more.label} <Arrow /></Button>
      </div>
    </section>
  )
}

export default function OnlineSchool() {
  return (
    <>
      <Hero />
      <Facts />
      <Press />
      <Fit />
      <Experience />
      <Programmes />
      <Pathways />
      <Boards />
      <Registrations />
      <SchoolDay />
      <Batches />
      <Teachers />
      <Reviews />
      <Awards />
      <Alumni />
      <Fees />
      <Admission />
      <BookCall />
      <Faq />
      <IndiaAndReading />
    </>
  )
}

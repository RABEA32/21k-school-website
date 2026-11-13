import { motion } from 'motion/react'
import Button, { Arrow, SmartLink } from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CountUp from '../components/CountUp.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import { ORIGIN, about, accreditations, achievers, cta, ecosystem, events, hero, pedagogy, stats, testimonials } from '../data/home.js'

const wrap = 'mx-auto max-w-7xl px-5 sm:px-8'
const ease = [0.22, 1, 0.36, 1]
// On phones a card list becomes a swipeable row; from sm up it is a grid.
const row = '-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0'
const rowItem = 'w-[75%] shrink-0 snap-start sm:w-auto'

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark">
      <div aria-hidden="true" className="absolute top-1/2 right-[-10%] -z-10 size-[44rem] -translate-y-1/2 rounded-full bg-navy max-lg:hidden" />
      <div aria-hidden="true" className="absolute top-[18%] right-[8%] -z-10 size-[26rem] rounded-full bg-gold/90 max-lg:hidden" />

      <div className={`${wrap} grid grid-cols-1 items-end gap-6 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16`}>
        <div className="pb-24 lg:pb-32">
          <motion.ul initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.08 } } }} className="flex flex-wrap gap-2">
            {hero.badges.map((b) => (
              <motion.li key={b} variants={{ h: { opacity: 0, y: 8 }, s: { opacity: 1, y: 0 } }} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
                {b}
              </motion.li>
            ))}
          </motion.ul>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="mt-6 font-display text-[2.6rem] leading-[1.05] font-bold text-white min-[360px]:text-5xl sm:text-6xl lg:text-7xl"
          >
            {hero.title}
            <span className="block text-gold">{hero.accent}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.25 }} className="mt-5 max-w-lg text-lg text-white/85">
            {hero.intro}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.4 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="#enquiry">{hero.demo} <Arrow /></Button>
            <Button to={hero.explore.to} variant="outline">{hero.explore.label}</Button>
          </motion.div>
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="mt-9 flex flex-wrap gap-3" aria-label="Accreditations">
            {accreditations.map((a) => (
              <li key={a.id} className="flex items-center gap-3 rounded-lg bg-white px-3 py-2">
                <img src={a.logo} alt={a.name} className="h-7 w-auto" />
                <span className="border-l border-line pl-3 text-xs leading-tight">
                  <span className="block font-semibold text-navy">{a.id}</span>
                  <a href={a.verify} className="font-semibold text-blue-700 hover:underline" aria-label={`Verify ${a.name} ${a.id}`}>Verify</a>
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          src={hero.image}
          alt={hero.imageAlt}
          fetchPriority="high"
          width="739"
          height="1035"
          className="mx-auto hidden max-h-[34rem] w-auto self-end lg:block"
        />
      </div>
    </section>
  )
}

function Pedagogy() {
  return (
    <section aria-label="Our learning pedagogy" className={`${wrap} relative z-10 -mt-14`}>
      <Reveal as="ul" y={30} className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line shadow-card sm:grid-cols-3 lg:grid-cols-6">
        {pedagogy.map((p) => (
          <li key={p.label} className="group flex gap-3 bg-white p-4 sm:p-5">
            <span className="text-navy transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-gold-dark">
              <Icon name={p.icon} className="size-7" />
            </span>
            <span>
              <span className="block font-display text-sm leading-tight font-semibold text-navy">{p.label}</span>
              {p.line && <span className="mt-1 block text-xs leading-snug text-muted">{p.line}</span>}
            </span>
          </li>
        ))}
      </Reveal>
    </section>
  )
}

function About() {
  return (
    <section aria-labelledby="about" className={`${wrap} scroll-mt-28 py-14`}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr_0.8fr]">
        <Reveal>
          <SectionHeading id="about" label="Inside 21K" title={about.label} />
          <p className="text-sm leading-relaxed text-muted">{about.intro}</p>
          <blockquote className="mt-5 border-l-4 border-gold pl-4 text-sm leading-relaxed text-ink italic">“{about.quote}”</blockquote>
          <p className="mt-3 pl-5 text-sm">
            <span className="font-display font-semibold text-navy">{about.by}</span>
            <span className="block text-xs text-muted">{about.role}</span>
          </p>
          <Button to={`${ORIGIN}/another-way/`} variant="navy" className="mt-6">Another Way <Arrow /></Button>
        </Reveal>

        <Reveal delay={0.1} className="relative flex min-h-80 items-end justify-center overflow-hidden rounded-xl bg-mist">
          <div aria-hidden="true" className="absolute bottom-[-20%] left-1/2 size-[85%] -translate-x-1/2 rounded-full bg-gold/30" />
          <img src={about.image} alt={about.imageAlt} loading="lazy" width="539" height="640" className="relative max-h-[26rem] w-auto" />
        </Reveal>

        <Reveal delay={0.2} as="dl" className="grid gap-3 rounded-xl bg-mist p-5 sm:grid-cols-2 lg:grid-cols-1">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 rounded-lg bg-white p-3.5 shadow-sm">
              <span className={`grid size-11 shrink-0 place-items-center rounded-lg ${s.tone}`}><Icon name={s.icon} className="size-5" /></span>
              <div className="flex flex-col-reverse">
                <dt className="text-xs text-muted">{s.label}</dt>
                <dd className="font-display text-2xl leading-tight font-bold text-navy"><CountUp value={s.value} suffix={s.suffix} /></dd>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Programs() {
  return (
    <section aria-labelledby="programs" className={`${wrap} scroll-mt-28 pb-14`}>
      <SectionHeading id="programs" label="Programs" title={ecosystem.title} link={{ to: `${ORIGIN}/programs/`, label: 'Explore All Programs' }} />
      <div className={`${row} sm:grid-cols-2 sm:gap-5 lg:grid-cols-4`}>
        {ecosystem.items.map((e, i) => (
          <Reveal key={e.name} delay={i * 0.08} className={rowItem}>
            <SmartLink to={e.to} className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line transition hover:-translate-y-1">
              <div className={`flex h-56 items-end justify-center overflow-hidden ${e.tone}`}>
                <img src={e.image} alt="" loading="lazy" className="h-[95%] w-auto transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-navy">{e.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{e.body}</p>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold-dark">
                  Explore <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </SmartLink>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center font-display text-sm font-medium text-navy">{ecosystem.outro}</p>
    </section>
  )
}

function AchieversAndEvents() {
  return (
    <section className={`${wrap} grid grid-cols-1 gap-10 pb-14 lg:grid-cols-[1.45fr_1fr]`}>
      <div className="min-w-0 scroll-mt-28" id="achievers">
        <SectionHeading label="Our achievers" title={achievers.title} link={achievers.link} />
        <p className="mb-5 max-w-2xl text-sm text-muted">{achievers.body}</p>
        <ul className={`${row} sm:grid-cols-3`}>
          {achievers.items.map((a, i) => (
            <Reveal as="li" key={a.name} delay={i * 0.08} className={`${rowItem} group overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line`}>
              <div className="overflow-hidden">
                <img src={a.image} alt={a.name} loading="lazy" className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-[0.7rem] font-semibold tracking-wide text-gold-dark uppercase">{a.domain}</p>
                <h3 className="mt-1 font-display text-sm font-semibold text-navy">{a.name}</h3>
                <p className="mt-0.5 text-xs text-muted">{a.title}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="min-w-0 scroll-mt-28" id="events">
        <SectionHeading label="Upcoming events & webinars" link={events.link} />
        <ul className="space-y-3">
          {events.items.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 0.06}>
              <a href={e.to} className="group flex items-center gap-4 rounded-xl bg-white p-3 shadow-card ring-1 ring-line transition hover:-translate-y-0.5">
                <span className="grid w-16 shrink-0 place-items-center rounded-lg bg-navy py-2.5 leading-none text-white">
                  <span className="text-[0.65rem] font-semibold tracking-wide text-gold uppercase">{e.month}</span>
                  <span className="mt-1 font-display text-2xl font-bold">{e.day}</span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-sm font-semibold text-navy">{e.title}</span>
                  <span className="block text-xs text-muted">{e.when}</span>
                  <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-navy group-hover:text-gold-dark">
                    Event details <Icon name="arrow" className="size-3.5" />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CtaAndReviews() {
  return (
    <>
      <section className={`${wrap} grid grid-cols-1 gap-10 pb-12 lg:grid-cols-[1.45fr_1fr]`}>
        <Reveal className="relative flex h-full flex-col justify-center overflow-hidden rounded-xl bg-navy p-8 sm:p-10">
          <div aria-hidden="true" className="absolute -right-16 -bottom-24 size-72 rounded-full bg-gold/15" />
          <div aria-hidden="true" className="absolute -top-20 -right-10 size-48 rounded-full bg-white/5" />
          <p className="relative flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
            {cta.eyebrow} <span aria-hidden="true" className="h-0.5 w-8 rounded bg-gold" />
          </p>
          <h2 className="relative mt-3 font-display text-3xl leading-tight font-bold text-white sm:text-4xl">{cta.title}</h2>
          <p className="relative mt-3 max-w-md text-white/80">{cta.body}</p>
          <div className="relative mt-7 flex flex-col gap-3 sm:flex-row">
            <Button to="#enquiry">Book a call <Arrow /></Button>
            <Button to={cta.prospectus.to} variant="outline">{cta.prospectus.label}</Button>
          </div>
          <p className="relative mt-5 text-xs text-white/60">{cta.note}</p>
        </Reveal>
        <div aria-labelledby="testimonials" className="min-w-0 scroll-mt-28">
          <SectionHeading id="testimonials" label="What our community says" />
          <Reveal delay={0.1}>
            <TestimonialCarousel items={testimonials} />
          </Reveal>
        </div>
      </section>
      <div className="bg-navy">
        <div className={`${wrap} flex flex-col justify-end gap-3 py-5 sm:flex-row`}>
          <Button to={cta.apply.to}>{cta.apply.label} <Arrow /></Button>
          <Button to={cta.contactUs.to} variant="outline">{cta.contactUs.label}</Button>
        </div>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Pedagogy />
      <About />
      <Programs />
      <AchieversAndEvents />
      <CtaAndReviews />
    </>
  )
}

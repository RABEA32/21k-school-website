import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import Button, { Arrow } from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CountUp from '../components/CountUp.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import { about, cta, events, features, hero, programs, stats, studentLife, testimonials } from '../data/home.js'

const wrap = 'mx-auto max-w-7xl px-5 sm:px-8'
const ease = [0.22, 1, 0.36, 1]
// On phones a card list becomes a swipeable row; from sm up it is a grid.
const row = '-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0'
const rowItem = 'w-[75%] shrink-0 snap-start sm:w-auto'

function Tile({ icon, tone, size = 'size-11' }) {
  return (
    <span className={`grid ${size} shrink-0 place-items-center rounded-lg ${tone}`}>
      <Icon name={icon} className="size-5" />
    </span>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark">
      <img src={hero.image} alt="Young students with backpacks walking to school together" fetchPriority="high" className="absolute inset-0 -z-10 size-full object-cover object-[70%_center]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/10 max-lg:via-navy-dark/75 max-lg:to-navy-dark/45" />

      <div className={`${wrap} flex min-h-[30rem] flex-col justify-center pt-16 pb-28 lg:min-h-[36rem]`}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.2em] text-white/85 uppercase sm:text-xs sm:tracking-[0.25em]"
        >
          {hero.eyebrow}
          <span aria-hidden="true" className="h-0.5 w-10 rounded bg-gold" />
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mt-5 max-w-2xl font-display text-5xl leading-[1.08] font-bold text-white sm:text-6xl lg:text-[4.25rem]"
        >
          {hero.title}
          <span className="block text-gold">{hero.accent}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg"
        >
          {hero.intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button to="#apply">Apply for Admission <Arrow /></Button>
          <Button to="#tour" variant="outline">
            <span className="grid size-5 place-items-center rounded-full bg-white text-navy"><Icon name="play" className="size-3" /></span>
            Take a Virtual Tour
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 0.9, ease, delay: 0.5 }}
        className="absolute top-14 right-[6%] hidden size-40 place-items-center rounded-full border-4 border-white/90 bg-navy text-center shadow-2xl lg:grid"
      >
        <p className="px-4 font-display text-sm leading-snug font-semibold text-white">
          Accredited<span className="block text-lg text-gold">Cambridge</span>&amp; Pearson Edexcel
        </p>
      </motion.div>
    </section>
  )
}

function Features() {
  return (
    <section aria-label="Why families choose us" className={`${wrap} relative z-10 -mt-14`}>
      <Reveal as="ul" y={30} className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line shadow-card sm:grid-cols-3 lg:grid-cols-6">
        {features.map((f) => (
          <li key={f.label} className="group flex items-center gap-3 bg-white px-4 py-4 sm:px-5 sm:py-5">
            <span className="text-navy transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-gold-dark">
              <Icon name={f.icon} className="size-8" />
            </span>
            <span className="font-display text-sm leading-tight font-semibold text-navy">{f.label}</span>
          </li>
        ))}
      </Reveal>
    </section>
  )
}

function About() {
  return (
    <section aria-labelledby="about" className={`${wrap} scroll-mt-28 py-14`}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.15fr_0.8fr]">
        <Reveal>
          <SectionHeading id="about" label="About Our School" title={about.title} />
          <p className="text-sm leading-relaxed text-muted">{about.body}</p>
          <ul className="mt-5 space-y-2.5">
            {about.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-ink">
                <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-gold text-navy-dark"><Icon name="check" className="size-3" /></span>
                {p}
              </li>
            ))}
          </ul>
          <Button to="/#programs" variant="navy" className="mt-7">Explore Our Programs <Arrow /></Button>
        </Reveal>

        <Reveal delay={0.1} className="group relative min-h-72 overflow-hidden rounded-xl">
          <img src={about.image} alt="A school building with a green lawn" loading="lazy" className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-navy-dark/20" />
          <Link to="#tour" aria-label="Watch our video" className="absolute inset-0 grid place-items-center">
            <span className="grid size-16 place-items-center rounded-full bg-white text-navy shadow-xl transition-transform duration-300 group-hover:scale-110">
              <Icon name="play" className="size-7" />
            </span>
          </Link>
          <span className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-md bg-navy-dark/80 px-3 py-1.5 text-xs font-semibold text-white">
            <Icon name="play" className="size-3" /> Watch Our Video
          </span>
        </Reveal>

        <Reveal delay={0.2} as="dl" className="grid gap-3 rounded-xl bg-mist p-5 sm:grid-cols-2 lg:grid-cols-1">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 rounded-lg bg-white p-3.5 shadow-sm">
              <Tile icon={s.icon} tone={s.tone} />
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
      <SectionHeading id="programs" label="Our Academic Programs" link={{ to: '/online-school', label: 'View All Programs' }} />
      <div className={`${row} sm:grid-cols-2 lg:grid-cols-4 sm:gap-5`}>
        {programs.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className={rowItem}>
            <Link to="/online-school" className="group block h-full overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line transition hover:-translate-y-1">
              <div className="overflow-hidden">
                <img src={p.image} alt="" loading="lazy" className="aspect-[16/11] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex gap-3.5 p-5">
                <Tile icon={p.icon} tone={p.tone} />
                <div>
                  <h3 className="font-display text-base font-semibold text-navy">{p.title}</h3>
                  <p className="text-xs font-semibold text-navy/70">({p.grades})</p>
                  <p className="mt-1.5 text-sm text-muted">{p.body}</p>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function LifeAndNews() {
  const [all, setAll] = useState(false)
  const [openEvent, setOpenEvent] = useState(null)
  const shown = all ? events : events.slice(0, 3)

  return (
    <section className={`${wrap} grid grid-cols-1 gap-10 pb-14 lg:grid-cols-[1.45fr_1fr]`}>
      <div aria-labelledby="student-life" className="min-w-0 scroll-mt-28">
        <SectionHeading id="student-life" label="Student Life" link={{ to: '/on-campus', label: 'Discover More' }} />
        <div className={`${row} sm:grid-cols-3`}>
          {studentLife.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className={`${rowItem} group overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line`}>
              <div className="overflow-hidden">
                <img src={s.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex gap-3 p-4">
                <Tile icon={s.icon} tone={s.tone} size="size-9" />
                <div>
                  <h3 className="font-display text-sm font-semibold text-navy">{s.title}</h3>
                  <p className="mt-0.5 text-xs text-muted">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="min-w-0 scroll-mt-28" id="news">
        <SectionHeading
          label="News & Events"
          link={{
            to: '/#news',
            label: all ? 'Show Fewer' : 'View All Events',
            onClick: (e) => {
              e.preventDefault()
              setAll((a) => !a)
            },
          }}
        />
        <ul className={`${row} sm:grid-cols-3`}>
          {shown.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 0.08} className={`${rowItem} overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-line`}>
              <div className="relative">
                <img src={e.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <span className="absolute top-2 left-2 rounded-md bg-navy px-2 py-1 text-center leading-none text-white">
                  <span className="block font-display text-base font-bold">{e.day}</span>
                  <span className="text-[0.6rem] font-semibold tracking-wide text-gold uppercase">{e.month}</span>
                </span>
              </div>
              <div className="p-3.5">
                <h3 className="font-display text-sm leading-snug font-semibold text-navy">{e.title}</h3>
                {openEvent === e.title && <p className="mt-1 text-xs text-muted">{e.when}</p>}
                <button
                  type="button"
                  onClick={() => setOpenEvent(openEvent === e.title ? null : e.title)}
                  aria-expanded={openEvent === e.title}
                  className="mt-2 flex items-center gap-1 text-xs font-semibold text-navy hover:text-gold-dark"
                >
                  {openEvent === e.title ? 'Show less' : 'Read More'} <Icon name="arrow" className="size-3.5" />
                </button>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function JoinAndTestimonials() {
  return (
    <>
      <section className={`${wrap} grid grid-cols-1 gap-10 pb-12 lg:grid-cols-[1.45fr_1fr]`}>
        <Reveal className="grid h-full overflow-hidden rounded-xl bg-navy shadow-card sm:grid-cols-[0.9fr_1.1fr]">
          <img src={cta.image} alt="Graduates throwing their caps in the air" loading="lazy" className="aspect-[16/9] size-full object-cover sm:aspect-auto" />
          <div className="flex flex-col justify-center p-7 sm:p-9">
            <h2 className="font-display text-2xl leading-tight font-bold text-white sm:text-3xl">{cta.title}</h2>
            <p className="mt-3 text-sm text-white/80">{cta.body}</p>
            <span aria-hidden="true" className="mt-5 block h-1 w-12 rounded bg-gold" />
          </div>
        </Reveal>
        <div aria-labelledby="testimonials" className="scroll-mt-28">
          <SectionHeading id="testimonials" label="What Parents Say" />
          <Reveal delay={0.1}>
            <TestimonialCarousel items={testimonials} />
          </Reveal>
        </div>
      </section>
      <div className="bg-navy">
        <div className={`${wrap} flex flex-col justify-end gap-3 py-5 sm:flex-row`}>
          <Button to="#apply">Apply Now <Arrow /></Button>
          <Button to="/#contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Programs />
      <LifeAndNews />
      <JoinAndTestimonials />
    </>
  )
}

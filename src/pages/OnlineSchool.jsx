import Button from '../components/Button.jsx'

export default function OnlineSchool() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">Coming soon</p>
      <h1 className="mt-4 font-display text-5xl font-medium text-ink sm:text-6xl">Online School</h1>
      <p className="mt-5 max-w-xl text-lg text-ink-soft">This page is being designed next.</p>
      <Button to="/#programs" variant="outline" className="mt-8">See all programmes</Button>
    </section>
  )
}

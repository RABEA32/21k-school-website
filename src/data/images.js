// Temporary: these point at the original site so everything shows right away.
// Replace each value with a local path, e.g. '/images/garage/hero.webp'
// (see the "Adding pictures" section below).
const O = 'https://www.21kschool.com'
const G = `${O}/pages/garage/`

export const IMG = {
  logo: `${O}/figma/logo-21k-official-h144.webp`,

  garageHero: `${O}/images/garage-cutout.webp`,
  garageTeam: `${G}robotics-team.webp`,
  garageCircuit: `${G}circuit-learner.webp`,
  garageSpace: `${G}space.webp`,
  garageBuild: `${G}build-session.webp`,
  gallery: [
    ['robot-cars.webp', 'Learners build robot cars with a facilitator'],
    ['garage-learner-wiring-a-sensor.webp', 'A learner fits a small sensor onto a wire'],
    ['garage-learner-threading-a-wire.webp', 'A young learner threads a wire through a kit part'],
    ['garage-3d-printer-station.webp', 'A 3D printer station under 21K posters'],
    ['garage-learners-robot-car-race.webp', 'Two learners build robot cars by the window'],
    ['garage-open-floor.webp', 'The open floor with hexagonal work tables'],
    ['garage-learner-battery-pack.webp', 'A learner holds the battery for her robot car'],
    ['garage-learners-wiring-robot-cars.webp', 'Two learners wire the motors of their robot cars'],
    ['garage-through-the-glass.webp', 'The Garage seen through its glass wall'],
    ['garage-learners-test-a-robot.webp', 'Learners test their robot cars'],
  ].map(([f, alt]) => ({ src: G + f, alt })),

  applyHero: `${O}/images/online-school/how-to-apply-screen-cutout.webp`,
  applyCall: `${O}/pages/learner-led-podcast/banner.jpg`,
  applyDocs: `${O}/images/sections/teen-girl-notebook-cutout.webp`,

  anotherHero: `${O}/images/another-way.webp`,
  brochure: `${O}/pages/another-way/21k-school-legacy-brochure-cover.webp`,
  learner23: `${O}/pages/real/learner-23.webp`,
  learner45: `${O}/pages/real/learner-45.webp`,
  girl: `${O}/figma/sec/family-garage-girl.webp`,
  group: `${O}/pages/21k-group/21k-group.jpeg`,
  outing: `${O}/pages/british/find-your-path-web.jpg`,
}

export const blogImg = (name) => `${O}/image-assets/uploads/${name}.webp`
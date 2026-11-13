// FLOWW page content — verbatim from the original 21K School page,
// https://www.21kschool.com/us/floww/ (checked 13 Nov 2026).
// Images are the original's, in /public/original/floww/.
import { ORIGIN } from './home.js'

const o = (path) => `${ORIGIN}/floww${path}`
const A = '/original/floww'

export const ENQUIRE_ID = 'enquire' // anchor names used by the original page
export const PROGRAMMES_ID = 'three-ways-to-grow'

export const hero = {
  title: 'FLOWW: Strong Foundations for What Comes Next',
  intro: 'Live online programmes that help every learner strengthen essential skills, explore interests and build real-world capability.',
  programmes: [
    { label: 'Mastery', to: o('/mastery/'), icon: 'trophy', tone: 'bg-gold text-navy-dark' },
    { label: 'Languages', to: o('/languages/'), icon: 'globe', tone: 'bg-rose-600 text-white' },
    { label: 'Capstones', to: o('/capstones/'), icon: 'bulb', tone: 'bg-navy text-gold' },
  ],
  enrol: 'Enrol Now',
  explore: 'Explore the Programmes',
  welcome: 'We welcome learners from all schools',
  welcomeBody: 'You don’t need to be a 21K School learner to join FLOWW.',
  figures: [
    { value: '3', label: 'Programme families' },
    { value: '13', label: 'Languages' },
    { value: '5', label: 'Capstones' },
    { value: '2,000+', label: 'Learners enrolled since launch' },
  ],
  image: `${A}/floww-cutout.webp`,
  imageAlt: 'A grinning girl with headphones around her neck holding a tablet',
}

export const what = {
  title: 'What is FLOWW?',
  paragraphs: [
    'FLOWW stands for Fundamental Learning of Working Ways.',
    'FLOWW is 21K’s online learning ecosystem for foundational and future skills. It complements school through three independently selectable programme families: Mastery in English and Mathematics, Indian and international Languages, and applied Capstones.',
    'Families can choose one programme or combine programmes around a learner’s needs and interests. FLOWW is open to learners from 21K School Online, 21K School On Campus and other schools, as well as homeschooled and unschooled learners.',
  ],
  acronym: [['F', 'Fundamental'], ['L', 'Learning'], ['O', 'of'], ['W', 'Working'], ['W', 'Ways']],
}

export const ways = {
  title: 'Three ways to grow',
  intro: 'Each FLOWW family serves a different learning purpose.',
  items: [
    { title: 'Mastery', icon: 'trophy', tone: 'bg-gold text-navy-dark', body: 'English and Mathematics pathways begin with a diagnostic and place learners according to current skills rather than school grade alone. AI-assisted personalised practice, adaptive progression and live facilitator guidance help learners strengthen foundations or move into greater challenge.', link: { label: 'Explore Mastery', to: o('/mastery/') } },
    { title: 'Languages', icon: 'globe', tone: 'bg-rose-600 text-white', body: 'Eight Indian and five international languages build listening, speaking, reading and writing through live interactive learning. Learners may begin as beginners or join at a suitable level based on previous exposure. ESOL sits within International Languages, while IELTS Preparation is offered through Capstone.', link: { label: 'Explore Languages', to: o('/languages/') } },
    { title: 'Capstones', icon: 'bulb', tone: 'bg-navy text-gold', body: 'Five applied programmes turn concepts into visible outcomes: Financial Literacy, Artificial Intelligence, Public Speaking, Entrepreneurship and Coding. Standard Capstone levels run for three months, with projects, practice and continuous feedback. Entrepreneurship is a combined ten-month Levels 1–3 journey.', link: { label: 'Explore Capstones', to: o('/capstones/') } },
  ],
}

export const how = {
  title: 'How FLOWW learning works',
  intro: 'Every programme is live, online and designed around active participation.',
  verbs: ['Question', 'Practise', 'Create', 'Present', 'Apply'],
  paragraphs: [
    'Learners question, practise, create, present and apply. Facilitators guide progress and give feedback while digital resources support reinforcement between sessions. Core teaching happens live; supplementary videos or recorded learning resources may be provided where relevant.',
    'The experience follows 21K’s wider learning model: Pedagogy, Technology & AI, and Human Connections. Together, these make learning more Personalised, Flexible and Accelerated without reducing it to passive screen time.',
  ],
  modelLabel: '21K’s wider learning model',
  model: [
    { label: 'Pedagogy', icon: 'book' },
    { label: 'Technology & AI', icon: 'bulb' },
    { label: 'Human Connections', icon: 'users' },
  ],
  outcomes: [
    { label: 'Personalised', tone: 'bg-gold text-navy-dark' },
    { label: 'Flexible', tone: 'bg-rose-600 text-white' },
    { label: 'Accelerated', tone: 'bg-navy text-white' },
  ],
  band: {
    value: '2,000+',
    title: 'More than 2,000 learners have enrolled in FLOWW programmes since launch.',
    body: 'FLOWW launched in June 2026 and has already reached learners across its programme families.',
  },
}

export const join = {
  title: 'Who can join?',
  intro: 'Eligibility depends on the selected programme.',
  paragraphs: [
    'Mastery in English and Mathematics is designed for ages 6–13. Languages are currently available for Grades 1–8. Capstone eligibility varies: Artificial Intelligence spans Grades 1–12; Financial Literacy and Public Speaking serve Grades 3–12; Coding serves Grades 3–12; and Entrepreneurship serves Grades 6–10.',
    'A learner’s age or grade establishes the appropriate cohort. Previous learning, readiness and any required diagnostic determine the starting level.',
  ],
  photos: [
    { src: `${A}/p-171.webp`, alt: 'A learner reading a book at home' },
    { src: `${A}/p-012.webp`, alt: 'A young learner holding an open book' },
  ],
  mastery: { label: 'Mastery', value: 'Ages 6–13' },
  axisLabel: 'Grade',
  // Grade ranges as charted on the original; each bar's accessible label is the original's.
  bars: [
    { label: 'Languages', from: 1, to: 8, range: '1–8', tone: 'from-navy to-sky-600' },
    { label: 'Artificial Intelligence', from: 1, to: 12, range: '1–12', tone: 'from-sky-500 to-violet-400' },
    { label: 'Financial Literacy', from: 3, to: 12, range: '3–12', tone: 'from-rose-500 to-rose-300' },
    { label: 'Public Speaking', from: 3, to: 12, range: '3–12', tone: 'from-gold-dark to-gold' },
    { label: 'Coding', from: 3, to: 12, range: '3–12', tone: 'from-navy to-sky-600' },
    { label: 'Entrepreneurship', from: 6, to: 10, range: '6–10', tone: 'from-sky-500 to-violet-400' },
  ],
}

export const taster = {
  title: 'A free coding & AI taster for eligible 21K learners',
  intro: 'A time-bound introduction for selected new 21K School cohorts.',
  body: 'Eligible Grade 3–12 learners enrolling in the April or June 2027 cohorts are planned to receive a free one-month Coding & AI taster comprising eight sessions. The experience will use age-banded activities and remain separate from the paid Coding and Artificial Intelligence Capstones.',
  tiles: [
    { value: '1 month', label: 'Coding & AI Taster' },
    { value: '8', label: 'Sessions' },
    { value: 'Grades 3–12', label: 'Eligible Learners' },
  ],
}

export const isNot = {
  title: 'What FLOWW is—and is not',
  lead: 'FLOWW complements formal schooling; it does not replace it.',
  body: 'It is not an academic board or curriculum pathway, a tutoring marketplace, or the offline Learning Garage. It is a coherent set of live online programmes designed to deepen foundations and create space for applied learning.',
  is: { title: 'FLOWW is', items: ['A coherent set of live online programmes', 'Designed to deepen foundations', 'Space for applied learning'] },
  not: { title: 'FLOWW is not', items: ['An academic board or curriculum pathway', 'A tutoring marketplace', 'The offline Learning Garage'] },
}

export const faq = {
  title: 'Questions parents ask',
  intro: 'Clear answers before choosing a programme.',
  items: [
    { q: 'Can non-21K learners join FLOWW?', a: 'Yes. FLOWW is available to current 21K learners and learners outside 21K School, subject to the eligibility and availability of each programme.' },
    { q: 'Are all programmes online?', a: 'Yes. Core instruction is delivered live online. Some programmes also include digital resources or recorded reinforcement material.' },
    { q: 'Can my child take more than one programme?', a: 'Yes, subject to timetable compatibility, age or grade eligibility and seat availability.' },
    { q: 'Does every programme require a diagnostic?', a: 'No. English and Mathematics Mastery use a diagnostic before placement. Language placement may use one where previous proficiency needs to be established.' },
    { q: 'Will my child receive a certificate?', a: 'Eligible learners receive a 21K completion certificate subject to the programme’s attendance and completion requirements.' },
  ],
}

export const ask = {
  title: 'Ask the FLOWW team',
  form: {
    heading: 'Enrol or ask a question',
    note: 'No spam · Advisor calls within 2 hours · Your details are safe with us',
    title: 'Start your child’s admission journey',
    body: 'Share a few details and our counsellor will guide you.',
    consent: 'and to 21K School contacting me by phone, WhatsApp, SMS and email about admissions and programmes.',
    privacy: `${ORIGIN}/privacy-policy/`,
    submit: 'Verify & Talk to FLOWW Team',
  },
}

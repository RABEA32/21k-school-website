// On Campus page content — verbatim from the original 21K School page,
// https://www.21kschool.com/us/on-campus/ (checked 13 Nov 2026).
// 21K School, Puducherry is a proposed campus: every "planned", "proposed" and "subject to"
// qualifier below is the original's and must stay. Images are the original's, in /public/original/on-campus/.
import { ORIGIN } from './home.js'

const o = (path) => `${ORIGIN}/on-campus${path}`
const A = '/original/on-campus'

export const REGISTER_ID = 'register-interest' // anchor names used by the original page
export const STAGES_ID = 'learning-by-stage'

export const hero = {
  place: '21K School, Puducherry',
  title: 'Another Way to Learn.',
  accent: 'Now on campus.',
  intro: 'The inaugural intake will be for Nursery to Grade 8, with classes planned from June 2027. Grades 9–12 will be introduced progressively, subject to statutory permissions and CISCE requirements.',
  register: 'Register Your Interest',
  stages: 'Learning by Stage',
  image: `${A}/on-campus-front-elevation.webp`,
  imageAlt: '21K School, Puducherry — front elevation of the campus building',
  figures: [
    { value: '4.5', label: 'Acre campus' },
    { value: '32,000', label: 'Sq ft built-up space (approx.)' },
    { value: '24', label: 'Learners per section, at most' },
    { value: '720', label: 'Planned full K–12 capacity' },
  ],
  note: 'Admissions are expected to open in January 2027, with classes planned from June 2027.',
}

export const ecosystem = [
  { value: '25,000+', label: 'Learners across the 21K learning ecosystem', sub: '(cumulative registrations)' },
  { value: '78', label: 'Countries: families served' },
  { value: '46', label: 'Nationalities' },
  { value: '2', label: 'Sections per grade, at most' },
]

export const beginWithChild = {
  title: 'Begin with the child, not a school label',
  lead: 'A school where their child is not lost in a crowd, academic ambition is encouraged, learning is active, strengths are noticed and support arrives before a gap becomes a barrier.',
  qualities: ['Strong foundations', 'Deeper challenge', 'Meaningful choices', 'Real relationships', 'Room to grow without predetermined limits'],
  image: '/original/on-campus/physical-school-cutout.webp',
  imageAlt: 'A confident boy with a backpack holding a notebook',
}

export const whyFamilies = {
  title: 'Why families will choose 21K School, Puducherry',
  items: [
    { icon: 'users', title: 'Known', body: 'Limited cohorts and a maximum of 24 learners per section allow educators to understand how each child learns, participates, progresses and responds to challenge.' },
    { icon: 'trophy', title: 'Challenged', body: 'Benchmark-led interventions, Zero Period, enrichment, Mastery programmes and advanced learning opportunities support both deeper achievement and timely reinforcement.' },
    { icon: 'globe', title: 'Connected', body: 'Learners belong to a physical campus in Puducherry while gaining selected access to languages, Capstones, events, educators and collaborative experiences across the wider 21K community.' },
    { icon: 'cap', title: 'Prepared', body: 'The school develops conceptual understanding, competencies, communication, creativity, collaboration, self-direction and practical life skills—not examination recall alone.' },
    { icon: 'book', title: 'Grounded', body: 'A full campus day retains books, handwriting, conversation, laboratories, making, movement, arts, sports, friendships and outdoor play. Technology is used with purpose, not continuously.' },
  ],
  banner: 'Campus classes begin June 2027. Be the first to hear.',
}

export const stages = {
  title: 'Learning by stage',
  items: [
    { title: 'Pre-primary', grades: 'Nursery, KG1 and KG2', icon: 'blocks', tone: 'bg-gold text-navy-dark', body: 'An EYFS-based, thematic and play-led beginning. A consistent homeroom facilitator supports language, early mathematics, physical development, communication, creativity, curiosity and the habits that prepare children for Primary School.', extra: 'Typical day: approximately 8:30 a.m. to 12:00 noon, Monday to Friday.', link: { label: 'Explore Pre-Primary', to: o('/pre-primary/') } },
    { title: 'Primary school', grades: 'Grades 1–5', icon: 'book', tone: 'bg-blue-600 text-white', body: 'Strong foundations in English, Mathematics, Environmental Studies progressing into Science and Social Studies, languages, Computer Science, arts, physical education, Learning Garage experiences and clubs. A homeroom facilitator is supported by specialist educators.', link: { label: 'Explore Primary School', to: o('/primary-school/') } },
    { title: 'Middle school', grades: 'Grades 6–8', icon: 'users', tone: 'bg-emerald-600 text-white', body: 'Greater subject depth through specialist facilitators across English, Mathematics, Science, History and Civics, Geography, languages, Computer Science, arts, physical education, Learning Garage and club experiences.', link: { label: 'Explore Middle School', to: o('/middle-school/') } },
    { title: 'Senior school', grades: 'Grades 9–12', icon: 'cap', tone: 'bg-violet-600 text-white', body: 'A planned future pathway leading towards ICSE in Grade 10 and ISC in Grade 12, subject to statutory permissions, CISCE affiliation and applicable requirements.', link: { label: 'Explore the Planned Senior School', to: o('/senior-school/') } },
  ],
}

export const schoolDay = {
  title: 'A complete school day, designed around learning',
  steps: [
    'Arrival from different routes, followed by time to settle, move and play',
    'Morning assembly and community connection',
    'Interactive academic sessions with active learner participation',
    'Short and longer recesses, including time for movement and friendships',
    'Learning experiences thoughtfully placed around energy and attention patterns',
    'Arts, sports, laboratories, clubs, projects and making',
    'Zero Period at the end of the day for personalised enrichment, reinforcement or remediation',
  ],
  note: 'Pre-Primary concludes by approximately 12:00 noon. Grades 1–8 follow a full campus day, planned from approximately 8:30 a.m. to 3:30 p.m.',
  link: { label: 'Experience a Day at 21K School, Puducherry', to: o('/a-day-in-the-life/') },
}

export const pfa = {
  title: 'Personalised. Flexible. Accelerated.',
  items: [
    { icon: 'users', title: 'Personalised', body: 'Learning evidence, educator observations and assessment data help identify the next appropriate step for each learner. Personalisation may mean reinforcement, a different explanation, greater practice, deeper challenge or an advanced opportunity.' },
    { icon: 'clock', title: 'Flexible', body: 'Flexibility means meaningful choice within a structured school day: languages, clubs, projects, ways of demonstrating learning and selected online opportunities. It does not mean optional attendance or diluted academic expectations.' },
    { icon: 'arrow', title: 'Accelerated', body: 'Acceleration means deeper challenge, enrichment, Mastery programmes, benchmark-led interventions, access to 21K’s personalised learning platform, wider educator expertise and opportunities to learn additional concepts. It does not mean routine grade skipping.' },
  ],
}

export const globalReach = {
  title: 'Campus learning with global reach',
  intro: 'Core academic classes are taught face-to-face on campus. Digital and online experiences expand—not replace—the campus model.',
  points: [
    'Selected access to 13 languages: Tamil and French on campus, with 11 additional languages available online, subject to grade and programme availability',
    'Mastery programmes, Capstones, benchmark testing and selected global events',
    'Meaningful collaboration with learners across the wider 21K community',
    'Access to the personalised learning and online assessment platforms',
    'Opportunities to learn with educators and specialists beyond the physical campus',
  ],
  devices: 'From Grade 3 onwards, learners will bring a prescribed laptop with a webcam and headphones. A limited day-loan facility will be available through the library. Nursery to KG2 will not require laptops or Computer Lab use; Grades 1–2 may use the Computer Lab or a device at home when required.',
  link: { label: 'Discover Hybrid & Global Learning', to: o('/hybrid-and-global-learning/') },
}

export const laLumiere = {
  title: 'La lumière: A campus shaped by light and possibility',
  intro: 'La Lumière, The Light, is the proposed identity of the physical campus—not a separate school brand—connecting Puducherry’s French heritage with knowledge, discovery and enlightenment.',
  quote: 'From the beginning to the infinite, illuminated by learning.',
  chain: ['21K School, Puducherry', 'La Lumière', 'Aarambh and Anantha'],
  wings: [
    { icon: 'bulb', name: 'Aarambh', meaning: 'The Beginning', tone: 'from-gold to-amber-300', body: 'Home to classrooms from Early Years to Grade 8, along with the school office, admissions centre, Principal’s office, infirmary, library, Computer Lab and Mathematics Lab.' },
    { icon: 'star', name: 'Anantha', meaning: 'The Infinite', tone: 'from-navy to-sky-500', body: 'The future Senior School wing and home to the separate science laboratories, Learning Garage, recreation and activity spaces, and open areas for discussion, brainstorming and technology-enabled independent learning.' },
  ],
  link: { label: 'Explore La Lumière', to: o('/facilities-and-labs/') },
}

export const facilities = {
  title: 'Facilities that serve learning',
  image: `${A}/on-campus-puducherry-campus.webp`,
  imageAlt: '21K School campus building in Puducherry, with its lawn and water feature',
  items: [
    { icon: 'flask', label: 'Separate Physics, Chemistry and Biology laboratories' },
    { icon: 'blocks', label: 'Mathematics Lab' },
    { icon: 'bulb', label: 'Learning Garage for design, electronics, robotics, AI, making and applied problem-solving' },
    { icon: 'book', label: 'Library and digital or virtual library access' },
    { icon: 'search', label: 'Computer Lab' },
    { icon: 'palette', label: 'Arts, Music, Dance, Drama and Theatre Studios' },
    { icon: 'users', label: 'Indoor Activity Hall' },
    { icon: 'ball', label: 'Outdoor facilities for football, cricket, basketball, volleyball and skating' },
    { icon: 'trophy', label: 'Indoor opportunities including table tennis, carrom and chess' },
    { icon: 'shield', label: 'Infirmary with a full-time qualified nurse' },
  ],
  note: 'All confirmed facilities are planned to be operational when the school opens in June 2027.',
  link: { label: 'Explore Facilities and Laboratories', to: o('/facilities-and-labs/') },
}

export const beyond = {
  title: 'Beyond the classroom',
  points: [
    'Sports, art, music, dance, drama and theatre within the regular programme',
    'At least one and no more than two age-appropriate clubs selected during the academic year',
    'TED-Ed Student Talks Program, subject to applicable programme guidelines',
    'Book Reading Club and additional interest-led clubs',
    'Sports Day, Arts Festival, Science Fest, Literary Festival, Annual Day, exhibitions, learner-led conferences, cultural celebrations and the School Carnival',
    'An inclusive House system—Google, Amazon, Microsoft and Apple—centred on belonging, service, leadership, collaboration and participation rather than points, rankings or winners',
  ],
  link: { label: 'Explore Life on Campus', to: o('/a-day-in-the-life/') },
  photos: [
    { src: `${A}/bglr-2.webp`, alt: 'Learners queue with hoops for a Sports Day activity led by a facilitator' },
    { src: `${A}/rishikesh-4-qkg-ppir.webp`, alt: 'Learners playing a circle game on a lawn under tall trees' },
    { src: `${A}/south-3-pe-fu4ub.webp`, alt: '21K learners on a school trip beside the balancing boulder at Mahabalipuram' },
    { src: `${A}/rishikesh-2.webp`, alt: 'Learners on a nature trail among the roots of a large tree' },
  ],
  // Added at the project owner's request (not original text): the campus is not open yet.
  photoNote: 'Photos show activities at other 21K School locations, not the proposed Puducherry campus.',
}

export const trips = {
  title: 'Trips, tours and learning beyond the campus',
  body: 'An age-appropriate progression from local field visits and day experiences to regional and domestic journeys, with optional national and international opportunities for eligible learners. Campus learners may also join selected learning journeys organised across the wider 21K School community.',
  link: { label: 'Explore Trips and Tours', to: o('/trips-and-tours/') },
}

export const progress = {
  title: 'Progress parents can see and understand',
  intro: 'A balanced, NCF-informed assessment system without marks, ranks or competitive comparison.',
  items: [
    'Competency-based and formative assessment',
    'Age-appropriate summative assessments, projects, portfolios and practical work',
    'Educator observations, narrative feedback and proficiency indicators',
    'Online formative assessments where appropriate',
    'Formal report cards at the end of Term 1 and Term 2',
    'Scheduled and on-demand parent–teacher meetings, Coffee Meets, one-to-one parent and learner connects, and parent and learner surveys',
    'A parent dashboard showing assessment evidence, learning progress and conceptual understanding',
  ],
  outro: 'The emphasis remains on what the learner understands, can apply and is ready to learn next.',
}

export const support = {
  title: 'Support that responds to the learner',
  intro: 'Learning support is a whole-school system, not a service only for children with identified special educational needs.',
  points: [
    'Timely remediation and reinforcement',
    'Enrichment and deeper challenge for advanced and gifted learners',
    'Individual consideration for identified learning, developmental, medical or accessibility needs',
    'Online access to counsellors and relevant specialists',
    'An accessible and inclusive physical campus',
    'Zero Period and data-led intervention within the school day',
  ],
  note: 'Admissions involving specific support needs will be considered individually, based on the learner’s needs and the school’s ability to provide appropriate support.',
  link: { label: 'Understand Learning Support', to: o('/learning-support/') },
}

export const educators = {
  title: 'Educators who know how children learn',
  paragraphs: [
    'Facilitators will be graduates or postgraduates with B.Ed. qualifications or relevant early-years credentials. They will receive continuing professional development through 21K’s Learning Excellence system.',
    'Pre-Primary and Primary learners will have a homeroom facilitator supported by specialists. Middle School learners will learn with subject-specialist facilitators.',
  ],
}

export const care = {
  title: 'Medical care, safeguarding and wellbeing',
  link: { label: 'Read About Safety, Security and Hygiene', to: o('/safety-and-security/') },
  points: [
    'A full-time qualified nurse and an on-campus infirmary',
    'A tie-up with a local hospital for emergency support',
    'Online access to counsellors',
    'A formal child-protection framework with a designated safeguarding lead, trained staff and defined reporting and escalation protocols',
    'POCSO and POSH compliance',
    'Background and police verification for staff before joining',
    'Controlled visitor access and 24/7 campus security, including female security during school hours',
    'CCTV in classrooms, entrances and appropriate common areas, with access restricted to authorised personnel under defined privacy and retention protocols; footage will not be available for routine parent viewing',
    'Professionally managed housekeeping and hygiene systems',
    'Cybersecurity controls, filtered access and age-appropriate digital citizenship',
  ],
}

export const transport = {
  title: 'Transport and access',
  paragraphs: [
    'The campus is approximately a 30-minute drive from central Puducherry.',
    'Planned transport coverage will extend across Puducherry city through a carefully selected external transport partner. Families may also arrange their own transport.',
    'School transport will include planned safeguards such as a female escort, CCTV, fire-safety provisions and emergency alert mechanisms.',
  ],
  link: { label: 'Explore Transport', to: o('/transport/') },
  addressName: '21K School, Puducherry',
  address: 'Manapattu Village, Varkal Odai Street, Kattukuppam, Bahour Commune Taluk, Puducherry – 607402',
}

export const schoolYear = {
  title: 'The school year',
  intro: 'The academic year will run from June to May across two terms.',
  tiles: [
    { value: 'Monday to Friday', label: 'school week' },
    { value: 'April', label: 'compulsory Summer School Programme for enrolled learners, included within the annual school programme' },
    { value: 'May', label: 'summer break' },
  ],
  note: 'For the pre-opening year only, April 2027 will feature a structured short-term Summer School for prospective learners, with defined courses and learning outcomes.',
}

export const included = {
  title: 'What is included',
  points: [
    'Core academic programme and regular formative assessments',
    'Learning Garage, sports, visual and performing arts',
    'Selected clubs and school events',
    'ID card, textbooks and workbooks',
    'School and technology orientation',
    'Access to applicable online learning, assessment and library platforms',
  ],
  note: 'Parents will arrange notebooks, stationery, food from home and the prescribed learner device where applicable. The mandatory school uniform will be supplied separately by the school.',
  link: { label: 'See What’s Included', to: o('/whats-included/') },
}

export const founding = {
  title: 'Founding families',
  points: [
    'Priority invitations to campus previews and pre-opening experiences',
    'Periodic interactions with the Founder and school leadership',
    'Participation in a Founding Families advisory forum',
    'Early access to selected school events and community initiatives',
    'Recognition as members of the inaugural school community',
    'Opportunities to contribute feedback during the school’s formative year',
  ],
  note: 'The learners joining in 2027–28 may be recognised collectively as the Founding Cohort.',
}

export const admissions = {
  title: 'Admissions: A considered beginning',
  steps: [
    'Register interest',
    'Receive programme information',
    'Submit an application when admissions open',
    'Provide previous school records',
    'Participate in parent and age-appropriate learner interactions',
    'Receive an admission decision subject to eligibility and seat availability',
  ],
  criteria: 'Admissions will primarily consider age eligibility, previous school records, the family and learner interaction, the school’s ability to support the learner appropriately and seat availability. There is no standard competitive entrance examination.',
}

export const register = {
  title: 'Register your interest',
  lines: [
    'Admissions are expected to open in January 2027, with classes planned from June 2027.',
    'The learners joining in 2027–28 may be recognised collectively as the Founding Cohort.',
  ],
}

export const faq = {
  title: 'Frequently asked questions',
  items: [
    { q: 'Is 21K School, Puducherry an online school or a physical school?', a: 'It is a physical, non-residential school where core academic teaching, sports, arts and everyday school experiences take place face-to-face. Selected online programmes and learning tools connect learners with the wider 21K community and extend their opportunities beyond campus.' },
    { q: 'Which grades will open in the inaugural academic year?', a: 'The school plans to open with Nursery, KG1, KG2 and Grades 1–8 in the 2027–28 academic year, with classes beginning in June 2027, subject to regulatory approvals. Grades 9–12 will be introduced progressively, subject to statutory permissions and CISCE requirements.' },
    { q: 'Which curriculum will the school follow?', a: 'Nursery, KG1 and KG2 will follow an EYFS-based, thematic and play-led programme. From Grade 1 onwards, the school proposes to follow the CISCE curriculum and syllabus, combining strong academic foundations with inquiry, practical application and competency-based learning.' },
    { q: 'What does proposed CISCE affiliation mean?', a: 'It means the school intends to seek affiliation with the Council for the Indian School Certificate Examinations, New Delhi; affiliation has not yet been granted. The planned Senior School pathway will lead towards ICSE in Grade 10 and ISC in Grade 12, subject to the required approvals and affiliation.' },
    { q: 'How many learners will be in each section?', a: 'Each section will have a maximum of 24 learners, with no more than two sections per grade. This allows facilitators to know each learner, recognise strengths and respond promptly when support or greater challenge is needed.' },
    { q: 'How is learning personalised in a physical school?', a: 'Facilitators use classroom observations, assessment evidence and learning-platform insights to understand what each child needs next. Support may include a different explanation, targeted practice, small-group reinforcement or deeper challenge. A dedicated Zero Period within the school day provides time for enrichment, reinforcement and remediation.' },
    { q: 'Will my child be required to use a laptop throughout the day?', a: 'No. Technology will be used for specific learning purposes alongside books, handwriting, discussions, experiments, arts, sports and outdoor activities. Nursery to KG2 learners will not need laptops; Grades 1–2 may use the Computer Lab for selected activities. From Grade 3, learners will bring a prescribed laptop for purposeful use during the school day.' },
    { q: 'How are learner progress and assessment reported without marks or ranks?', a: 'Parents receive a clear picture of what their child understands, can apply and needs to develop next. Assessment draws on classroom work, projects, portfolios, practical tasks and age-appropriate assessments. Narrative feedback, proficiency indicators, term report cards, parent–teacher meetings and the parent dashboard make progress visible without ranking children against one another.' },
    { q: 'What support is available for remediation, enrichment, gifted learners and additional needs?', a: 'Learning support includes targeted reinforcement for gaps, enrichment and advanced challenges for learners ready to go further, and access to online counsellors and relevant specialists where appropriate. Zero Period makes personalised support part of the school day. Additional learning, developmental, medical or accessibility needs are considered individually with families, based on the support the school can provide.' },
    { q: 'What sports, arts, clubs and campus experiences are available?', a: 'The planned programme includes football, cricket, basketball, volleyball, skating, table tennis, chess and carrom, alongside visual art, music, dance, drama and theatre. Learners will also experience the Learning Garage, age-appropriate clubs, field visits, exhibitions and school festivals. These experiences help children discover interests, build friendships and develop confidence beyond academic lessons.' },
    { q: 'Is transport available across Puducherry?', a: 'School transport is planned across Puducherry city through a selected transport partner. Using school transport is optional, and families may arrange their own travel. Final routes, stops and operating details will be shared before opening; transport coverage will be limited to Puducherry city.' },
    { q: 'When will admissions and campus visits open?', a: 'Admissions are expected to open in January 2027, subject to regulatory approvals, with classes planned from June 2027. For now, parents can register their interest to receive opening announcements and application information. Campus visit dates and appointment bookings will be announced separately.' },
    { q: 'What is the Founding Families programme?', a: 'Founding Families brings together the inaugural school community to help shape the school’s formative year. Planned opportunities include campus previews, interactions with the Founder and school leadership, an advisory forum and invitations to selected pre-opening experiences. It is an opportunity to contribute feedback, build connections and be part of the school’s beginning.' },
  ],
  still: 'Still have a question?',
  stillLink: 'Register your interest',
}

export const disclaimer = [
  '21K School, Puducherry is a proposed school, subject to recognition by the Directorate of School Education, Government of Puducherry.',
  'The school proposes to follow the CISCE curriculum and syllabus and intends to seek affiliation with the Council for the Indian School Certificate Examinations (CISCE), New Delhi, subject to the prescribed approvals and requirements.',
  'Senior School and references to ICSE or ISC remain subject to statutory permissions, CISCE affiliation and applicable requirements.',
]

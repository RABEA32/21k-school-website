// Homepage content. Layout follows the office design reference; facts are 21K School's,
// taken from https://www.21kschool.com/us/ (reviewed Nov 2026).
// Photos: Unsplash (https://unsplash.com/license), illustrative only.
export const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

// shortcut: placeholder contact details, replace with the school's verified details before launch.
export const contact = {
  email: 'admissions@example.com',
  phone: '+00 000 000 0000',
  address: 'School address placeholder',
}

export const hero = {
  eyebrow: 'Personalised · Flexible · Accelerated',
  title: '#AnotherWay',
  accent: 'to School',
  intro: 'A global K-12 learning ecosystem, built to make every child succeed — with live classes, Indian and Cambridge pathways, and learners in 78+ countries.',
  image: img('1594608661623-aa0bd3a69d98', 1800),
}

export const features = [
  { icon: 'cap', label: 'Accredited Curricula' },
  { icon: 'users', label: 'Expert Facilitators' },
  { icon: 'book', label: 'Live & Self-Paced Learning' },
  { icon: 'shield', label: 'Safe & Supportive Environment' },
  { icon: 'bulb', label: 'Co-Curricular Activities' },
  { icon: 'globe', label: 'Global Opportunities' },
]

export const about = {
  title: 'Another way to think about school',
  body: 'The name 21K reverses “K–12”. We begin with the learner and design the pathway, pace, technology and human support around how each child can progress.',
  points: [
    'Indian and Cambridge pathways, Nursery to Grade 12',
    'Live classes with 350+ handpicked facilitators',
    'Personalised, flexible and accelerated learning',
    '7 Dimensions of Success and 16 Habits of Mind',
  ],
  image: img('1607237138185-eedd9c632b0b', 1000),
}

export const stats = [
  { value: 25000, suffix: '+', label: 'Learners', icon: 'smile', tone: 'bg-gold text-navy-dark' },
  { value: 98, suffix: '%', label: 'Parent satisfaction', icon: 'star', tone: 'bg-blue-600 text-white' },
  { value: 78, suffix: '+', label: 'Countries served', icon: 'globe', tone: 'bg-emerald-600 text-white' },
  { value: 1, suffix: 'M+', label: 'Hours of teaching', icon: 'clock', tone: 'bg-rose-600 text-white' },
]

export const programs = [
  { title: 'Early Years', grades: 'Ages 3 – 5', body: 'Play-rich foundations for confident beginners.', icon: 'blocks', tone: 'bg-gold text-navy-dark', image: img('1516627145497-ae6968895b74', 700) },
  { title: 'Elementary School', grades: 'Grades 1 – 5', body: 'Cambridge Primary or NCF-informed curriculum.', icon: 'book', tone: 'bg-blue-600 text-white', image: img('1577896851231-70ef18881754', 700) },
  { title: 'Middle School', grades: 'Grades 6 – 8', body: 'Growing independence and conceptual depth.', icon: 'users', tone: 'bg-emerald-600 text-white', image: img('1529390079861-591de354faf5', 700) },
  { title: 'High School', grades: 'Grades 9 – 12', body: 'IGCSE, A Levels or NIOS, ready for university.', icon: 'cap', tone: 'bg-violet-600 text-white', image: img('1571260899304-425eee4c7efc', 700) },
]

export const studentLife = [
  { title: 'Sports', body: 'Sports days, tournaments and playing fields.', icon: 'ball', tone: 'bg-rose-600 text-white', image: img('1526232761682-d26e03ac148e', 700) },
  { title: 'Arts & Culture', body: 'Music, art and performance, online and on campus.', icon: 'palette', tone: 'bg-violet-600 text-white', image: img('1525201548942-d8732f6617a0', 700) },
  { title: 'Clubs & Activities', body: 'The Garage: robotics, coding, design and AI.', icon: 'flask', tone: 'bg-emerald-600 text-white', image: img('1531482615713-2afd69097998', 700) },
]

// Upcoming events as listed on the reference site.
export const events = [
  { day: '14', month: 'Nov', title: 'Sports Day at Dubai', when: 'Saturday · All day', image: img('1574629810360-7efbbe195018', 600) },
  { day: '21', month: 'Dec', title: 'Intern School M.U.N', when: '21 – 23 Dec 2026 · All day', image: img('1524178232363-1fb2b075b655', 600) },
  { day: '24', month: 'Dec', title: 'Social Fest', when: 'Thursday · All day', image: img('1609234656388-0ff363383899', 600) },
  { day: '10', month: 'Jan', title: 'Carnival at Bengaluru', when: 'Sunday · All day', image: img('1517486808906-6ca8b3f04846', 600) },
]

// shortcut: placeholder testimonials, replace with verified, consented parent quotes before launch.
export const testimonials = [
  { quote: 'Our child used to find the school day rushed and stressful. Now there is time for learning, family and friends — and we can see the confidence growing.', who: 'Parent of a Grade 6 learner' },
  { quote: 'The teachers are patient and engaging, and we noticed real improvement in reading within a few months. The online format fits our schedule.', who: 'Parent of two primary learners' },
  { quote: 'Technical support is excellent, so we never worry about access. Lessons, homework and online exams are well organised.', who: 'Parent of a middle-school learner' },
]

export const cta = {
  title: 'Ready to Join Our School?',
  body: 'Take the first step — 20 minutes with an academic counsellor, not a salesperson.',
  image: img('1541339907198-e08756dedf3f', 900),
}

// Kept for the Online School page.
export const pathways = {
  indian: {
    name: 'Indian Pathway',
    summary: 'A complete NCF 2023-aligned online school from Nursery to Grade 12, with Senior School delivered through the National Institute of Open Schooling (NIOS).',
    facts: ['Indian curriculum', 'Live classes 5 days a week', 'Up to 24 learners per class'],
  },
  british: {
    name: 'British Pathway',
    summary: 'Cambridge International programmes from Primary through IGCSE, with AS & A Level or Pearson Edexcel International A Levels in the senior years.',
    facts: ['Cambridge IA702', 'Pearson Edexcel 94883', 'Multiple intakes a year'],
  },
  stages: [
    { stage: 'Early Years', indian: 'Nursery, KG1 and KG2; NCF-aligned with an EYFS-informed structure', british: 'KG1/Reception and KG2/Year 1; British Early Years progression', matters: 'Age placement, readiness and transition into Grade 1 or Year 2' },
    { stage: 'Primary', indian: 'Grades 1–5; NCF-informed Indian curriculum', british: 'Cambridge Primary', matters: 'Foundations, languages and likely future location' },
    { stage: 'Middle School', indian: 'Grades 6–8; NCF-informed Indian curriculum', british: 'Cambridge Lower Secondary', matters: 'Conceptual readiness and growing independence' },
    { stage: 'Secondary', indian: 'NIOS Secondary, Grades 9–10', british: 'Cambridge IGCSE, Grades 9–10', matters: 'Qualification type, subjects and exam model' },
    { stage: 'Senior Secondary', indian: 'NIOS Senior Secondary, Grades 11–12', british: 'Cambridge AS & A Level or Pearson Edexcel IAL', matters: 'University eligibility and subject prerequisites' },
  ],
}

export const faqs = [
  {
    q: 'Is 21K School recognised or affiliated?',
    a: 'Recognition depends on the pathway. The British Pathway is affiliated with Cambridge International (IA702) and Pearson Edexcel (94883). The Indian Pathway for Classes 1 to 8 is aligned with India’s National Curriculum Framework, and senior learners prepare for NIOS Secondary and Senior Secondary qualifications. Families outside India should confirm that the chosen qualification meets their country’s or university’s requirements.',
  },
  {
    q: 'Will 21K School provide a marksheet and Transfer Certificate?',
    a: 'The school provides progress records and, where eligible, a Transfer Certificate for stages it administers. Board-level marks and certificates are issued by the examining body — Cambridge International, Pearson Edexcel or NIOS. Families planning a transfer should speak with the School Office first.',
  },
  {
    q: 'What does 21K stand for?',
    a: 'The name reverses “K–12” to “21K”. It reflects another way to think about school: begin with the learner and design the pathway, pace, technology and human support around how that learner can progress.',
  },
  {
    q: 'How does 21K School compare with a physical school?',
    a: 'Both offer structure, teaching, assessment and community. 21K School Online delivers live classes, a defined timetable, facilitator guidance and school activities through a purpose-built online model. Families often choose it for flexibility, continuity across locations, or room to pursue sport, arts or travel.',
  },
  {
    q: 'Is 21K School only for homeschooling families?',
    a: 'No. It is a complete, structured school option. Learners join for many reasons — flexible schedules, international mobility, sport or performing-arts commitments, health considerations, or a preference for personalised online learning.',
  },
  {
    q: 'My child’s school also runs online classes. How is 21K different?',
    a: '21K was designed as an online school, not a physical timetable moved onto video calls. Live teaching, the learning platform, feedback, assessment, progress data and learner support work together as one model.',
  },
]

// Homepage content, adapted from https://www.21kschool.com/us/ (reviewed Nov 2026).
// Photos: Unsplash (https://unsplash.com/license). They are illustrative, not of named learners.
export const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const hero = {
  badges: ['Accredited Online School', 'Indian & Cambridge Pathways', 'Live & Guided Self-Paced'],
  tag: '#AnotherWay',
  title: 'to School',
  intro: 'A global K-12 learning ecosystem, built to make every child succeed.',
  image: img('1596495578065-6e0763fa1178', 1400),
  inset: img('1610484826967-09c5720778c7', 600),
}

export const accreditations = [
  { name: 'Cambridge International', detail: 'Centre IA702', note: 'British pathway' },
  { name: 'Pearson Edexcel', detail: 'Centre 94883', note: 'International A Levels' },
  { name: 'Institute for Habits of Mind', detail: 'Learning Community of Excellence', note: '16 Habits of Mind' },
]

export const stats = [
  { value: 25000, suffix: '+', label: 'Learners' },
  { value: 98, suffix: '%', label: 'Parent satisfaction' },
  { value: 78, suffix: '+', label: 'Countries served' },
  { value: 1, suffix: 'M+', label: 'Hours of teaching' },
]

export const achieversIntro = {
  lead: 'Look closely, and you’ll find the stars carrying the quiet victories, small triumphs and everyday wins that go far beyond the pages of a notebook.',
  body: 'We are home to over 200 celebrated achievers across 78 countries, excelling in more than 100 domains — sports, arts, academics, dance, music and more.',
}

export const achievers = [
  { name: 'Nithila Das', title: 'Fastest girl in India on a bike', domain: 'Motorsports', image: img('1558981806-ec527fa84c39', 1200) },
  { name: 'Manishka Dubey', title: 'Founder @TinkerTechie, TED-Ed speaker and Inventor Challenge winner', domain: 'Robotics & Science', image: img('1581092160562-40aa08e78837', 900) },
  { name: 'Advait Kolarkar', title: 'TOI’s #UNSTOPPABLE 21 Under 21 artist', domain: 'Arts', image: img('1513364776144-60967b0f800f', 900) },
  { name: 'Hiya Manchanda', title: '2 golds and 1 silver in breaststroke at ISSO Nationals (U-17)', domain: 'Swimming', image: img('1530549387789-4c1017266635', 900) },
  { name: 'Hridhay Yeshwaanth Raaj', title: 'Top 20 best-selling author in India at age 7', domain: 'Literature', image: img('1456513080510-7bf3a84b82f8', 900) },
]

export const pedagogy = [
  {
    title: 'Personalised',
    lead: 'A learning path that’s uniquely theirs.',
    body: 'No two learners learn the same way, and no two futures look alike. Learning is shaped around each learner’s strengths, interests, aspirations and pace, with continuous assessment, reflection and regular feedback.',
    pillar: 'Pedagogy grounded in a global framework',
    image: img('1503454537195-1dcabb73ffb9', 900),
  },
  {
    title: 'Flexible',
    lead: 'Learning that fits your child’s life — not the other way around.',
    body: 'Online learning’s greatest strength is freedom: the ability to learn on your own terms, wherever life takes you. That flexibility becomes real pathways for real lives.',
    pillar: 'Human connections',
    image: img('1513258496099-48168024aec0', 900),
  },
  {
    title: 'Accelerated',
    lead: 'Helping every learner move beyond expectations.',
    body: 'Acceleration isn’t rushing through content. Learners who need support get timely intervention, and those ready for more get enrichment that extends beyond the curriculum.',
    pillar: 'Tech & AI integration',
    image: img('1531545514256-b1400bc00f31', 900),
  },
]

export const dimensions = [
  { title: 'Purpose & Values', body: 'Setting personal ethical targets and leading peer mentoring discussions.' },
  { title: 'Health & Wellbeing', body: 'Managing examination pressure through guided stress-management tools.' },
  { title: 'Relationships', body: 'Group projects across international cohorts spanning multiple time zones.' },
  { title: 'Career & Passion', body: 'Direct Q&A sessions with industry leaders and research capstone projects.' },
  { title: 'Financial Understanding', body: 'Budgeting and trade-off simulations within real-world problem scenarios.' },
  { title: 'Impact & Community', body: 'Student-led community initiatives addressing local sustainability challenges.' },
  { title: 'Academic Achievements', body: 'Retrieval practice, virtual laboratory experiments and board preparation.' },
]

export const ecosystem = [
  {
    name: '21K School Online',
    kicker: 'Full-time online school',
    body: 'A complete online schooling experience that combines academic excellence with the flexibility to learn from anywhere in the world — nurturing curiosity, confidence and future-ready skills.',
    image: img('1610484826967-09c5720778c7', 900),
    cta: 'Explore Online School',
    to: '/online-school',
    tone: 'bg-sky',
  },
  {
    name: '21K On Campus',
    kicker: 'Physical school',
    body: 'A thoughtfully designed physical school rooted in the same learner-first philosophy — blending personalised learning, innovation and meaningful human connection.',
    image: img('1577896851231-70ef18881754', 900),
    cta: 'Explore On Campus',
    to: '/on-campus',
    tone: 'bg-sand',
  },
  {
    name: '21K FLOWW',
    kicker: 'Alongside any school',
    body: 'Extra learning for Grades 1 to 12, any curriculum, with a rolling monthly intake — languages, Mastery programmes and Capstones that bring technology and pedagogy together.',
    image: img('1588072432836-e10032774350', 900),
    cta: 'Explore FLOWW',
    to: '/floww',
    tone: 'bg-[#e4efe9]',
  },
  {
    name: '21K Learning Garage',
    kicker: 'Hands-on, ages 5–18',
    body: 'A physical space where learning goes beyond the curriculum — robotics, electronics, design, AI, coding and passion projects that build real-world capability.',
    image: img('1485827404703-89b55fcc595e', 900),
    cta: 'Ask about a session',
    to: '/#contact',
    tone: 'bg-[#f6e3dc]',
  },
]

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

export const culture = [
  { trait: 'Thinkers', line: 'Question, reason and reflect.' },
  { trait: 'Creators', line: 'Turn ideas into things that exist.' },
  { trait: 'Communicators', line: 'Speak, write and listen with clarity.' },
  { trait: 'Problem Solvers', line: 'Break big challenges into next steps.' },
  { trait: 'Collaborators', line: 'Build with peers across time zones.' },
  { trait: 'Leaders', line: 'Take initiative and lift others up.' },
  { trait: 'Explorers', line: 'Follow curiosity beyond the syllabus.' },
  { trait: 'Changemakers', line: 'Act on what matters in their community.' },
]

// shortcut: placeholder testimonials, replace with verified, consented parent quotes before launch.
export const testimonials = [
  { quote: 'Our child used to find the school day rushed and stressful. Now there is time for learning, family and friends — and we can see the confidence growing.', who: 'Parent of a Grade 6 learner', where: 'Placeholder testimonial' },
  { quote: 'The teachers are patient and engaging, and we noticed real improvement in reading within a few months. The online format fits our schedule.', who: 'Parent of two primary learners', where: 'Placeholder testimonial' },
  { quote: 'Technical support is excellent, so we never worry about access. Lessons, homework and online exams are well organised.', who: 'Parent of a middle-school learner', where: 'Placeholder testimonial' },
  { quote: 'Our daughter has become self-motivated. She tries new things and is doing better than ever.', who: 'Parent of a secondary learner', where: 'Placeholder testimonial' },
]

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

export const contact = {
  email: 'admissions@example.com',
  phone: '+00 000 000 0000',
  address: 'Office address placeholder',
}

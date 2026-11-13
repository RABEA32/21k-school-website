// Homepage content — taken verbatim from the original 21K School site, https://www.21kschool.com/us/
// (checked 13 Nov 2026). Layout follows the office design brief; wording, figures, links and
// images are the original's. Images live in /public/original/, downloaded from the same site.

export const ORIGIN = 'https://www.21kschool.com/us'
const o = (path) => `${ORIGIN}${path}`

// Footer "Registered office" block + top bar.
export const contact = {
  address: '21K School, 541, 5th Main, 16th Cross Rd, 2nd Stage, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038, India',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=21K%20School%2C%20541%2C%205th%20Main%2C%2016th%20Cross%20Rd%2C%202nd%20Stage%2C%20Hoysala%20Nagar%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038%2C%20India',
  email: 'info@21kschool.com',
  // Website contact number, approved by the project owner (replaces the original WhatsApp link).
  phone: '+93 74 866 2990',
}

// Top announcement bar.
export const announcements = {
  register: { label: 'Admissions Open - Register Now', to: o('/online-school/book-a-call/') },
  cohorts: 'Next cohorts: Jan 2027 · Jun 2027',
  accredited: 'Accredited: Cambridge IA702 · Pearson Edexcel 94883',
  portals: [
    { label: 'Parent Hub', to: 'https://parenthub.21kschool.in/' },
    { label: 'Refer A Parent', to: 'https://referral.21kschool.com/v2/1/access/' },
    { label: 'Log in', to: 'https://www.21kschool.in/' },
  ],
}

// Hero.
export const hero = {
  badges: ['Accredited Online School', 'Indian & Cambridge Pathways', 'Live & Guided Self-Paced'],
  title: '#AnotherWay',
  accent: 'to School',
  intro: 'A global K-12 learning ecosystem, built to make every child succeed.',
  image: '/original/home-cutout.webp',
  imageAlt: 'A smiling mother and her young daughter holding a tablet together',
  demo: 'Book a Live Class Demo',
  explore: { label: 'Explore Programs', to: o('/online-school/compare-curriculum/') }, // original target; not a page in this redesign
}

// Hero accreditation row (each links to the awarding body's register).
export const accreditations = [
  { name: 'Cambridge International', id: 'IA702', logo: '/original/cambridge.png', verify: 'https://www.cambridgeinternational.org/why-choose-us/find-a-cambridge-school/' },
  { name: 'Pearson Edexcel', id: '94883', logo: '/original/pearson.png', verify: 'https://qualifications.pearson.com/en/support/support-topics/understanding-our-qualifications/find-a-pearson-centre.html' },
]

// "Our learning pedagogy" — three principles and their three foundations.
export const pedagogy = [
  { icon: 'users', label: 'Personalised', line: 'Every child learns differently, every path at 21K School enables that.' },
  { icon: 'globe', label: 'Pedagogy grounded in Global Framework' },
  { icon: 'clock', label: 'Flexible', line: 'Learning that moves with your child’s life, not the other way around.' },
  { icon: 'bulb', label: 'Tech & AI Integration' },
  { icon: 'arrow', label: 'Accelerated', line: 'Built for children who are smart and need an agile pace of learning.' },
  { icon: 'shield', label: 'Human Connections' },
]

// "Built for a global citizen".
export const about = {
  label: 'Built for a global citizen',
  intro: 'Every big idea starts with someone who refuses to accept things as they were. For Yeshwaanth Raaj Parasmal, that idea was simple, and stubborn: education shouldn’t force a child to choose between who they are, and who the world expects them to be.',
  quote: 'We imagined a school without walls, where a child in any part of the world could learn alongside the best minds, mentors, and peers, guided by curiosity instead of curriculum. The 21K School wasn’t built to fit into the future of education, it was built to define it.',
  by: 'Yeshwaanth Raaj Parasmal',
  role: 'Founder & Chief Executive Officer, 21K School',
  image: '/original/about-kids.webp',
  imageAlt: 'Two 21K School learners working together on a notepad',
}

export const stats = [
  { value: 25000, suffix: '+', label: 'Learners', icon: 'smile', tone: 'bg-gold text-navy-dark' },
  { value: 98, suffix: '%', label: 'Parent satisfaction', icon: 'star', tone: 'bg-blue-600 text-white' },
  { value: 78, suffix: '+', label: 'Countries served', icon: 'globe', tone: 'bg-emerald-600 text-white' },
  { value: 1, suffix: ' M+', label: 'Hours of teaching', icon: 'clock', tone: 'bg-rose-600 text-white' },
]

// "One strong community. Many ways to belong." (Programs)
export const ecosystem = {
  title: 'One strong community. Many ways to belong.',
  outro: 'Each one built differently. Each one built for a different kind of child. All built with the same heart.',
  items: [
    { name: '21K School Online', to: '/online-school', image: '/original/family-campus.webp', tone: 'bg-sky-100', body: 'A complete online schooling experience that combines academic excellence with the flexibility to learn from anywhere in the world. Designed for learners who thrive beyond the boundaries of a traditional classroom, it nurtures curiosity, confidence, and future-ready skills.' },
    { name: '21K FLOWW', to: '/floww', image: '/original/family-floww-girl-tablet.webp', tone: 'bg-emerald-100', body: 'An innovative learning ecosystem that empowers schools, educators, and organizations with future-focused educational solutions. FLOWW brings together technology, pedagogy, and meaningful learning experiences to help institutions create engaging, flexible, and impactful education.' },
    { name: '21K Learning Garage', to: '/garage', image: '/original/family-garage-boy-circuit.webp', tone: 'bg-amber-100', body: 'A physical space where learning goes beyond the curriculum. From coding and entrepreneurship to creative arts, life skills, and passion projects, the Learning Garage helps learners discover interests, build real-world capabilities, and explore what excites them.' },
    { name: '21K On Campus', to: '/on-campus', image: '/original/family-campus-boy-laptop.webp', tone: 'bg-violet-100', body: 'A thoughtfully designed physical school experience rooted in the same learner-first philosophy that defines 21K School. Blending personalized learning, innovation, and meaningful human connections, it reimagines what an offline school can be for today’s generation.' },
  ],
}

// "Where every child carries a star" (Our achievers) — first three, in the original's order.
export const achievers = {
  title: 'Where every child carries a star',
  body: 'We are home to over 200 celebrated achievers, across 78 countries, excelling in more than 100 different domains — Sports, Arts, Academics, Dance, Music, and more.',
  link: { label: 'See all learner achievements', to: o('/learners-achievements/') },
  items: [
    { name: 'Nithila Das', title: 'Fastest Girl in India on a bike', domain: 'Sports (Motorsports)', image: '/original/achiever-01.webp' },
    { name: 'Haya Fatima Rizvi', title: 'Outstanding IGCSE Results', domain: 'Academics', image: '/original/achiever-02.webp' },
    { name: 'Manishka Dubey', title: 'Founder @TinkerTechie, TED-Ed Speaker, Inventor Challenge Winner (Colors Infinity TV)', domain: 'Robotics / Science', image: '/original/achiever-03.webp' },
  ],
}

// "Upcoming events & webinars". The original shows no event photos.
export const events = {
  link: { label: 'View all events', to: o('/events/') },
  items: [
    { month: 'Nov', day: '14', title: 'Sports Day at Dubai', when: 'Sat · All day', to: o('/events/#event-sports-day-dubai-nov-2026') },
    { month: 'Dec', day: '21', title: 'Intern School M.U.N', when: 'Mon · All day · 21 Dec – 23 Dec 2026', to: o('/events/#event-inter-school-mun-dec-2026') },
    { month: 'Dec', day: '24', title: 'Social Fest', when: 'Thu · All day', to: o('/events/#event-social-fest-dec-2026') },
    { month: 'Jan', day: '10', title: 'Carnival at Bengaluru', when: 'Sun · All day', to: o('/events/#event-carnival-bangalore-jan-2027') },
  ],
}

// "What our community says" — parent reviews as published, unedited.
export const testimonials = [
  {
    quote: [
      'We are really happy with 21K School and the experience Bryan has had so far. Earlier, school schedules used to be very hectic and stressful for him, but now he is much more comfortable and happy with learning. One thing we really appreciate is that Bryan now gets enough time for other activities, to spend time with family and also enjoy time with his friends, which he didn’t have earlier. We can clearly see a positive change in him. The teachers are supportive, classes are well managed, and the overall learning environment feels stress-free and child friendly. Bryan is more confident now and enjoys learning at his own pace.',
      'Thank you to the entire 21K team for all the support and care.',
    ],
    who: 'Rosy Dcruz, parent of Bryan Nigel Raj, Grade 6',
    where: 'Bengaluru',
  },
  {
    quote: [
      'Joining 21K has made a real difference for my children, especially in class teachers. The teachers were patient and engaging, and we’ve seen noticeable improvement in reading and confidence in just a few months. The online format also works well for our schedule.',
      'We’re happy with the experience so far and grateful for the support.',
    ],
    who: 'Sabina Panwala, parent of Ayaan (Grade 4) and Aaira (Grade 2)',
    where: 'UAE',
  },
  {
    quote: ['Excellent tech support, parents never had to check on access or any other technical issue. Teaching is high level, never feel missed offline school. Syllabus and homework upto mark, nothing more we can ask about. Exam and scoring, exceptional online exam made very easy.'],
    who: 'Nikhil Banatwala, parent of Aarush Nikhil',
    where: 'Czech Republic',
  },
  {
    quote: [
      'As parents. we would like to take this prospect to thank the teachers for their continuous care, support, collaboration and most importantly patience. I highly recommend unlocking potential!',
      'My child became a confident child. Experiencing so many things and doing so much better.',
      'I would recommend this school to anyone who wants their child be self motivated. “THANK YOU once again for time and effort.”',
    ],
    who: 'Harsimran Kaur, parent of Prabroop Kaur',
    where: 'Thailand',
  },
]

// Closing "Talk to an admissions counsellor" block.
export const cta = {
  eyebrow: 'Talk to an admissions counsellor',
  title: 'Find the right path for your child',
  body: 'Tell us a little about your family and an advisor will reach out — no obligation.',
  note: 'No spam · Advisor calls within 2 hours · Your details are safe with us',
  prospectus: { label: 'Download the prospectus', to: o('/download-brochure/') },
  apply: { label: 'Apply now', to: o('/admissions/apply-now/') },
  contactUs: { label: 'Contact Us', to: o('/contact-us/') },
}

// "Quick enquiry" form copy.
export const enquiry = {
  kicker: 'Quick enquiry',
  title: 'Start your child’s admission journey',
  body: 'Share a few details and our counsellor will guide you.',
  consent: 'and to 21K School contacting me by phone, WhatsApp, SMS and email about admissions and programmes.',
  privacy: o('/privacy-policy/'),
  submit: 'Verify & Book a Call',
  note: 'No spam · Advisor calls within 2 hours · Your details are safe with us',
}

// Footer link groups, as on the original.
export const footerGroups = [
  { title: '21K ecosystem', links: [
    { label: 'Online School', to: '/online-school' }, { label: 'On Campus', to: '/on-campus' },
    { label: 'FLOWW', to: '/floww' }, { label: 'The Garage', to: '/garage' },
  ] },
  { title: 'Curriculum', links: [
    { label: 'Cambridge Pathway', to: o('/online-school/curriculum/cambridge/') },
    { label: 'Pearson Edexcel IAL', to: o('/online-school/curriculum/pearson-edexcel/') },
    { label: 'Indian Pathway', to: o('/online-school/curriculum/ncf/') },
    { label: 'NIOS Pathway', to: o('/online-school/curriculum/nios/') },
    { label: 'Compare Curricula', to: o('/online-school/compare-curriculum/') },
  ] },
  { title: 'Admissions', links: [
    { label: 'Apply – Online School', to: '/admission' },
    { label: 'Apply – On Campus', to: o('/on-campus/how-to-apply/') },
    { label: 'Enrol – FLOWW', to: o('/floww/enrol/') },
    { label: 'Book – Garage Session', to: o('/garage/book-a-session/') },
    { label: 'Online School Fees', to: o('/online-school/fees/') },
  ] },
  { title: 'Resources', links: [
    { label: 'Resource Library', to: o('/resources/') }, { label: 'Blog', to: '/blog' },
    { label: 'Press', to: o('/press/') }, { label: 'Learner Achievements', to: o('/learners-achievements/') },
    { label: 'Parent Reviews', to: o('/online-school-reviews/') }, { label: 'FAQs', to: o('/faqs/') },
  ] },
  { title: 'Inside 21K', links: [
    { label: 'Another Way', to: '/inside-21k' }, { label: 'Accreditations', to: o('/affiliations-and-accreditations/') },
    { label: 'Our Teachers', to: o('/our-teachers/') }, { label: 'Leadership', to: o('/leadership-and-governance/') },
    { label: 'Careers', to: o('/careers/') }, { label: 'Contact Us', to: o('/contact-us/') },
  ] },
]

export const footerMeta = {
  apps: { label: 'Download our apps', to: o('/contact-us/#contact-apps') },
  parentHub: { label: 'Parent Hub Login', to: 'https://parenthub.21kschool.in/' },
  digest: { title: 'Monthly parent digest', body: 'Learning insights, learner stories and news from 21K.' },
  copyright: '©2026 All Rights Reserved by 21K School Education Private Limited',
  formerly: '( Formerly Mindreflex Technologies Private Limited )',
  legal: [
    { label: 'Privacy Policy', to: o('/privacy-policy/') },
    { label: 'Terms of Use', to: o('/terms-of-use/') },
    { label: 'Refunds & Cancellations', to: o('/refunds-and-cancellation-policy/') },
    { label: 'Cookie Policy', to: o('/cookie-policy/') },
    { label: 'Intellectual Property', to: o('/intellectual-property/') },
  ],
}

// Kept for the Online School page (from the original homepage's comparison table and FAQ).
export const pathways = {
  stages: [
    { stage: 'Early Years', indian: 'Nursery, KG1, and KG2; NCF-aligned resources with an EYFS-informed structure', british: 'KG1/Reception and KG2/Year 1; British Early Years progression', matters: 'Age placement, learning readiness, and transition into Grade 1 or Year 2' },
    { stage: 'Primary School', indian: 'Grades 1–5; NCF-informed Indian curriculum', british: 'Cambridge Primary', matters: 'Foundations, languages, learning approach, and likely future location' },
    { stage: 'Middle School', indian: 'Grades 6–8; NCF-informed Indian curriculum', british: 'Cambridge Lower Secondary', matters: 'Conceptual readiness, growing independence, and preparation for Grade 9' },
    { stage: 'Secondary', indian: 'NIOS Secondary for Grades 9–10', british: 'Cambridge IGCSE for Grades 9–10', matters: 'Qualification type, subjects, examination model, and future Grade 11 choices' },
    { stage: 'Senior Secondary', indian: 'NIOS Senior Secondary for Grades 11–12', british: 'Cambridge AS & A Level or Pearson Edexcel IAL', matters: 'University eligibility, subject prerequisites, and assessment structure' },
  ],
}

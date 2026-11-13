// Online School page content — verbatim from the original 21K School page,
// https://www.21kschool.com/us/online-school/ (checked 13 Nov 2026).
// Images are the original's, downloaded to /public/original/online-school/.
// Rich text is an array of strings and { label, to } links, rendered in order.
import { ORIGIN } from './home.js'

const o = (path) => `${ORIGIN}${path}`
const A = '/original/online-school'

export const hero = {
  cohorts: 'Next cohorts · Jan 2027 · Jun 2027',
  registrations: [
    { label: 'Registered School No.', value: 'IA702' },
    { label: 'Affiliation No.', value: '94883' },
  ],
  title: 'Online school from Nursery to Grade 12',
  intro: 'Live teaching, recognised Indian and British curriculum pathways, and a school day designed to give your child structure, support and greater flexibility.',
  bookCall: 'Book a call',
  compare: { label: 'Compare curriculum pathways', to: o('/online-school/compare-curriculum/') },
  logos: [
    { src: '/original/cambridge.png', alt: 'Cambridge International School' },
    { src: '/original/pearson.png', alt: 'Pearson Edexcel Approved Online Centre' },
  ],
  verify: 'How to verify these',
  rating: { value: '4.4', label: 'from 636 Google ratings', to: o('/online-school-reviews/') },
  image: `${A}/online-school-cutout.webp`,
  imageAlt: 'A smiling girl holding an open laptop',
}

export const facts = {
  items: [
    { value: 'IA702', label: 'Registered Cambridge International School' },
    { value: '94883', label: 'Approved Pearson Edexcel Online School' },
    { value: 'NIOS', label: 'for Grades 9–12 on the Indian pathway' },
    { value: '25,000+', label: 'learners registered from 78 countries and 46 nationalities, as of 1 September 2026' },
  ],
  summary: '21K School is a registered online Cambridge International School and an approved Pearson Edexcel Online School. Indian-pathway learners follow an NCF-informed programme through Grade 8, with NIOS available for Grades 9–12.',
}

export const press = {
  title: 'As featured in',
  link: { label: 'All press coverage', to: o('/press/') },
  logos: [
    ['times-of-india.svg', 'The Times of India'], ['hindustan-times-trim.jpg', 'Hindustan Times'], ['forbes-india.jpg', 'Forbes India'],
    ['businessline.svg', 'The Hindu BusinessLine'], ['the-print.png', 'ThePrint'], ['new-indian-express.jpg', 'The New Indian Express'],
    ['bw-education.webp', 'BW Education'], ['education-world.png', 'EducationWorld'], ['education-times.png', 'Education Times'], ['brainfeed.png', 'Brainfeed'],
  ].map(([f, alt]) => ({ src: `${A}/press/${f}`, alt })),
}

export const fit = {
  title: 'When online school may be the right fit',
  paragraphs: [
    'Online school can be a strong fit for families who need greater flexibility, continuity through travel or relocation, or access to a curriculum that is not available locally. It may also suit learners balancing school with sport, performing arts or another serious commitment.',
    'At 21K School, flexibility does not mean learning without structure. Learners attend scheduled live classes, complete assignments and projects, receive feedback and take part in a wider school community.',
  ],
  caution: 'Online school is not the right fit for every family. Younger children need an active Learning Coach, and every learner needs a suitable device, reliable internet and a consistent home routine.',
}

export const experience = {
  title: 'A complete school experience, delivered online',
  intro: 'Live classes are the anchor of the school week. Around them sit the platform, the feedback and the community that make it a school.',
  items: [
    { icon: 'users', title: 'Live teaching with active participation', body: 'Our teachers, whom we call facilitators, explain, question, listen and adapt during scheduled live classes. Learners discuss, practise, collaborate and present rather than only watching a screen.' },
    { icon: 'calendar', title: 'One place for the school week', body: 'The learning platform brings together classes, assignments, resources, feedback and progress information so learners and families can keep track of what comes next.' },
    { icon: 'check', title: 'Progress parents can see', body: 'Assessment, facilitator feedback and structured reporting help families understand what the learner has secured, where support may be useful and what should happen next.' },
    { icon: 'globe', title: 'Community beyond classes', body: 'Assemblies, projects, celebrations, peer activities, online events and selected in-person experiences give learners opportunities to participate and build relationships.' },
  ],
}

export const programmes = {
  title: 'Online school programmes, nursery to Grade 12',
  items: [
    { title: 'Online preschool', grades: 'Nursery, KG1 and KG2', icon: 'blocks', tone: 'bg-gold text-navy-dark', body: 'One or two hours of live, active learning each day, with a consistent homeroom facilitator who gets to know your child across the school year.', link: { label: 'Explore Online Preschool', to: o('/online-school/preschool/') } },
    { title: 'Online primary school', grades: 'Grades 1 to 5', icon: 'book', tone: 'bg-blue-600 text-white', body: 'Choose an Indian or British pathway, with around three hours of live, interactive classes each school day—from home.', link: { label: 'Explore Online Primary School', to: o('/online-school/primary-school/') } },
    { title: 'Online middle school', grades: 'Grades 6 to 8', icon: 'users', tone: 'bg-emerald-600 text-white', body: 'Choose an Indian or British pathway, with around four hours of live, interactive classes each school day—from home.', link: { label: 'Explore Online Middle School', to: o('/online-school/middle-school/') } },
    { title: 'Online high school', grades: 'Grades 9 to 12', icon: 'cap', tone: 'bg-violet-600 text-white', body: 'Choose a NIOS, Cambridge International or Pearson Edexcel pathway, supported by live classes, flexible subject choices and structured Board and examination preparation.', link: { label: 'Explore Online High School', to: o('/online-school/high-school/') } },
  ],
}

export const pathways = {
  title: 'Two pathways: Indian or British curriculum',
  items: [
    {
      name: 'Indian pathway', span: 'Nursery to Grade 12', tone: 'bg-emerald-100',
      image: '/original/family-garage-boy-circuit.webp', imageAlt: 'A 21K School learner in a blazer, holding a circuit board he built',
      intro: ['Indian curriculum and NIOS. Read ', { label: 'how the Indian pathway is built, grade by grade', to: o('/online-school/curriculum/ncf/') }, '.'],
      points: ['Pre-Primary: age-appropriate early-years programme', 'Grades 1–8: NCF-informed Indian curriculum', 'Grades 9–10: NIOS Secondary', 'Grades 11–12: NIOS Senior Secondary', 'Live classes, structured assessment and facilitator support'],
      note: 'NIOS certification and examinations follow NIOS requirements. The certificate is issued by NIOS, not by 21K School.',
    },
    {
      name: 'British pathway', span: 'KG 1 to Grade 12', tone: 'bg-sky-100',
      image: '/original/family-campus-boy-laptop.webp', imageAlt: 'A teenage learner holding his laptop',
      intro: ['Cambridge and Pearson Edexcel, two distinct awarding organisations with their own structures. Read ', { label: 'what the British pathway covers at each stage', to: o('/programs/pathway/british/') }, '.'],
      points: ['Cambridge Early Years', 'Cambridge Primary', 'Cambridge Lower Secondary', 'Cambridge IGCSE', 'Cambridge International AS & A Level', 'Pearson Edexcel International Advanced Level for relevant Senior School programmes'],
    },
  ],
  outro: ['Choose a school pathway, Indian or British. You can then extend the experience with ', { label: 'FLOWW', to: '/floww' }, ' and ', { label: '21K Learning Garages', to: o('/garage/') }, '.'],
}

export const boards = {
  title: 'NCF, NIOS or Cambridge: Which board suits your child?',
  hint: 'Scroll the table sideways to compare every column',
  columns: ['NCF-informed (Grades 1–8)', 'NIOS (Grades 9–12)', 'Cambridge (Primary to A Level)'],
  rows: [
    ['Recognition in India', 'The framework every national and state board follows, set by NCERT', 'A national board under the Ministry of Education, Government of India', 'Recognised by Indian universities; check the specific course’s own eligibility rule'],
    ['Recognition abroad', 'Not a leaving certificate', 'Accepted where an Indian board certificate is accepted', 'Recognised by universities in more than 90 countries'],
    ['Subject flexibility', 'Set curriculum for the grade', 'Five subjects to pass, with one or two languages; two extra subjects allowed for a fee', 'Wide subject choice at IGCSE and AS & A Level'],
    ['Exam pattern', 'School assessment only', 'Public examinations twice a year: April–May (Block 1) and October–November (Block 2)', 'Fixed international examination series'],
    ['Board exam grades', 'None', 'Grade 10 (Secondary) and Grade 12 (Senior Secondary)', 'Grade 10 (IGCSE) and Grade 12 (A Level)'],
    ['Best suited to', 'Every learner up to Grade 8', 'A learner who wants an Indian certificate with a flexible exam calendar', 'A learner aiming at an international university, or a family that moves'],
  ],
}

export const registrations = {
  title: 'Our registrations and how to verify them',
  paragraphs: [
    ['21K School is a registered online Cambridge International School, registered school number IA702, and an approved Pearson Edexcel Online School, centre number 94883. Both numbers are printed as text, so you can copy them straight into each organisation’s own finder.'],
    ['Cambridge and Pearson each maintain a public school or centre finder, and the link beside each certificate goes directly to it. The ', { label: 'NIOS certificates page', to: o('/nios-certificates/') }, ' holds the NIOS certificates of recognition and approval.'],
  ],
  cards: [
    { logo: '/original/cambridge.png', logoAlt: 'Cambridge International Education, Cambridge International School', org: 'Cambridge Assessment International Education', label: 'Registered School No.', value: 'IA702', status: 'Registered Cambridge International School',
      doc: { label: 'Certificate of Registration', to: 'https://www.21kschool.com/pages/affiliations-and-accreditation/cambridge-certificate-of-registration.webp' },
      finder: { label: 'Find us on Cambridge International', to: 'https://www.cambridgeinternational.org/why-choose-us/find-a-cambridge-school/?Location=Online' },
      how: 'Search the school finder for "Online" and look for 21K School.' },
    { logo: '/original/pearson.png', logoAlt: 'Pearson Edexcel Approved Online Centre', org: 'Pearson Edexcel', label: 'Affiliation No.', value: '94883', status: 'Approved Pearson Edexcel Online School',
      doc: { label: 'Approved Online Centre mark', to: 'https://www.21kschool.com/figma/accr-pearson.png' },
      finder: { label: 'Find us on Pearson', to: 'https://qualifications.pearson.com/en/support/support-topics/understanding-our-qualifications/find-a-pearson-centre.html' },
      how: 'Use the centre finder and search for centre number 94883.' },
  ],
}

export const schoolDay = {
  title: 'What a 21K School day looks like',
  intro: 'Classes run Monday to Friday. Live classes are the anchor of the school day, not the whole of it: projects, reading, independent work, movement and activities happen away from live sessions.',
  hours: ['Nursery: one hour of live classes per day', 'KG1 and KG2: two hours', 'Primary School: approximately three hours', 'Middle School: approximately four hours', 'Senior School: subject-based timetable across defined operating windows'],
  // Timeline axis on the original runs 9 am to 7 pm (ticks 9, 11, 1, 3, 5, 7); bars use 24h decimal hours.
  examples: [
    { title: 'Grade 5, primary', windows: [{ label: '9:30 am to 12:40 pm', from: 9.5, to: 12.67 }], body: 'About three hours of live classes. The morning batch runs 9:30 am to 12:40 pm IST, with the same span at 11:10 am, 1:40 pm or 3:20 pm where it is offered. Live subject classes with a break between sessions, then set work and reading away from the screen.' },
    { title: 'Grade 9, senior school', windows: [{ label: '9:30 am to 5:40 pm', from: 9.5, to: 17.67 }, { label: '11:10 am to 7:20 pm', from: 11.17, to: 19.33 }, { label: '9:30 am to 5:30 pm', from: 9.5, to: 17.5 }], body: 'A subject-based timetable. The morning window runs 9:30 am to 5:40 pm IST, or 11:10 am to 7:20 pm. NIOS Secondary and Senior Secondary classes run five days a week, 9:30 am to 5:30 pm IST. The window is wider than Primary’s because subject choice widens; a learner is not in live classes for the whole of it.' },
  ],
  note: 'Webcams and audio stay on during class, so facilitators can see and hear how each learner is taking part. Outside live classes, the school day is not designed as screen time.',
}

export const batches = {
  title: 'Batch timings and class size',
  intro: 'Class timings and class-size options vary by grade, pathway and availability. The admissions team will confirm the options available for your child.',
  tableIntro: 'The windows below are in Indian Standard Time:',
  columns: ['Grade band', 'Morning', 'Mid-Morning', 'Afternoon', 'Evening'],
  rows: [
    ['Pre-Primary (Nursery)', '9:30 – 10:30', '11:30 – 12:30', '13:30 – 14:30', '15:30 – 16:30'],
    ['Pre-Primary (KG1 & KG2)', '9:30 – 11:30', '11:30 – 13:30', '14:30 – 16:30', '15:30 – 17:30'],
    ['Primary (Grades 1–5)', '9:30 – 12:40', '11:10 – 14:20', '13:40 – 16:50', '15:20 – 18:30'],
    ['Middle (Grades 6–8)', '9:30 – 13:30', '11:10 – 15:10', '13:40 – 17:40', '15:20 – 19:20'],
    ['Senior School', '9:30 – 17:40', '11:10 – 19:20', '–', '–'],
  ],
  limitsTitle: 'Two limits worth knowing before you pick',
  limits: [
    'All four windows exist for Nursery to Grade 8 only. Senior School runs two, and NIOS Secondary and Senior Secondary classes run 9:30 am to 5:30 pm IST, five days a week.',
    'A batch with fewer than ten learners may be merged with another.',
    'Families in the Gulf, Singapore, the United Kingdom and North America pick the window that lands in their own waking hours; the 9:30 am IST start is early evening in North America and late morning in the Gulf.',
  ],
  sizes: [
    { title: 'Class of 24', value: '24 learners', body: 'Our full-size class, with engaging group dynamics and collaborative learning opportunities.' },
    { title: 'Class of 20', value: '20 learners', body: 'Enhanced attention with a smaller group for more personalised interaction with teachers.' },
  ],
}

export const teachers = {
  title: 'Our teachers',
  intro: 'Our teachers, whom we call facilitators, are selected by the academic leadership team and then reviewed consistently for enhanced learning. We ensure that every facilitator undergoes structured training for effective online instruction.',
  stats: [
    { label: 'Experience of our senior principals', value: '20+ yrs' },
    { label: 'IB, Cambridge, EYFS, US, Indian', value: '5 curricula' },
    { label: 'Teaching diplomas held by our leaders', value: 'Cambridge-certified' },
    { label: 'Indian, Indian Senior & British schools', value: '1 principal per pathway' },
  ],
  hint: 'Drag or scroll to meet the whole crew',
  link: { label: 'Meet the full academic crew', to: o('/our-teachers/') },
  items: [
    {"name": "Aruna Shetty", "group": "All Pathways", "role": "Head of Schools & Senior Principal", "details": ["20+ years in education", "IB, Cambridge (CAIE), American & NIOS", "Cambridge Diploma for Teachers & Trainers (CIDTT)", "Former Associate Principal, IB-PYP / CAIE school, Mumbai"], "photo": "/original/online-school/crew/crew-aruna-shetty-6d4bb97c.jpg", "profile": o('/our-teachers/aruna-shetty/'), "linkedin": "https://www.linkedin.com/in/aruna-shetty-7b9619234/"},
    {"name": "Tanuja Amin", "group": "Indian Pathway", "role": "Principal – Indian School", "details": ["20+ years in education", "Indian, Cambridge & IB curricula", "MA Sociology, University of Mumbai", "Cambridge International Diploma in Teaching & Learning"], "photo": "/original/online-school/crew/crew-tanuja-amin-e7d2674e.jpg", "profile": o('/our-teachers/tanuja-amin/')},
    {"name": "Sheetal Shah", "group": "British Pathway", "role": "Principal – British School", "details": ["20+ years in education", "Cambridge, IB, EYFS & US systems", "Master’s in Education; BBA", "Cambridge & Trinity GESE (ESOL) certified"], "photo": "/original/online-school/crew/crew-sheetal-shah-1aff12cb.jpg", "profile": o('/our-teachers/sheetal-shah/')},
    {"name": "Priya Dwivedi", "group": "Indian Senior School", "role": "Principal – Indian Senior School", "details": ["12+ years in education; with 21K since 2017", "MA Political Science; B.Ed, University of Lucknow", "Former Teach For India volunteer", "TED-Ed Student Talks Program mentor"], "photo": "/original/online-school/crew/crew-priya-dwivedi-e3132e1f.jpg", "profile": o('/our-teachers/priya-dwivedi/')},
    {"name": "Vandana Khera", "group": "Training & Development", "role": "Head - Learning Excellence", "details": ["25+ years in education", "CBSE, IB & ICSE curricula", "PG Diploma, Advertising & Public Relations, KC College of Management Studies, Mumbai", "Teaches Grade 1-12"], "photo": "/original/online-school/crew/crew-vandana-khera-048bff8c.jpg", "profile": o('/our-teachers/vandana-khera/')},
    {"name": "Nidhi Sharma Awasthi", "group": "Indian Pathway", "role": "Academic Coordinator-Middle School", "details": ["24+ years in education", "CBSE curricula", "B.Sc. / Bachelor’s Degree, Agriculture & Animal Husbandry, Pantnagar University", "Teaches Grades 6-8"], "photo": "/original/online-school/crew/crew-nidhi-sharma-awasthi-5af96162.jpg", "profile": o('/our-teachers/nidhi-sharma-awasthi/')},
    {"name": "Aafreen Baig", "group": "British Pathway", "role": "Primary Facilitator", "details": ["8+ years in education", "IB, ICSE & CBSE curricula", "B.E., Electronics and Communication Engineering, RGPV", "Teaches Grade 1"], "photo": "/original/online-school/crew/crew-aafreen-baig-e7833320.jpg", "profile": o('/our-teachers/aafreen-baig/')},
    {"name": "Aarti Bhardwaj", "group": "British Pathway", "role": "Middle School Facilitator - Science", "details": ["10+ years in education", "Cambridge, CBSE & ICSE curricula", "Master’s Degree, Organic Chemistry, Savitribai Phule Pune University", "Teaches Grade 6-8"], "photo": "/original/online-school/crew/crew-aarti-bhardwaj-d8549c64.jpg", "profile": o('/our-teachers/aarti-bhardwaj/')},
    {"name": "Aarti Kandari", "group": "British Pathway", "role": "Language Facilitator-Spanish", "details": ["10+ years in education", "ICSE, IGCSE & CBSE curricula", "M.A., Spanish", "Teaches Grade 6-8 and IGCSE Y1"], "photo": "/original/online-school/crew/crew-aarti-kandari-9873ca9e.jpg", "profile": o('/our-teachers/aarti-kandari/')},
    {"name": "Aashna Agrawal", "group": "Training & Development", "role": "Curriculum Developer - Mathematics", "details": ["10+ years in education", "CBSE curricula", "B.Com.", "Teaches Grades 6–8"], "photo": "/original/online-school/crew/crew-aashna-agrawal-baa5cd3e.jpg", "profile": o('/our-teachers/aashna-agrawal/')},
    {"name": "Abhayashree Hulsogi", "group": "British - Primary School", "role": "Homeroom facilitator", "details": ["11+ years in education", "CBSE, Cambridge/British & IB curricula", "Bachelor’s Degree, Business Management, Bangalore University", "Teaches Grade1 - 5"], "photo": "/original/online-school/crew/crew-abhayashree-hulsogi-836f8514.jpg", "profile": o('/our-teachers/abhayashree-hulsogi/')},
    {"name": "Abhinanda Mitra", "group": "Indian Pathway", "role": "Middle School Facilitator - English", "details": ["7+ years in education", "CBSE & ICSE curricula", "Bachelor of Arts (B.A.), English, University of Calcutta", "Teaches Grade 2 - Grade 7"], "photo": "/original/online-school/crew/crew-abhinanda-mitra-ee0d8ecf.jpg", "profile": o('/our-teachers/abhinanda-mitra/')},
    {"name": "Abhipsa Sahu", "group": "Indian Senior School", "role": "Senior Secondary School Facilitator - Physics and Mathematics", "details": ["10+ years in education", "CBSE, ICSE, NIOS & IB curricula", "M.Sc., Physics", "Teaches Grades 6–8, Grades 9–12"], "photo": "/original/online-school/crew/crew-abhipsa-sahu-efb89742.jpg", "profile": o('/our-teachers/abhipsa-sahu/')},
    {"name": "Adele Macdonald", "group": "British Pathway", "role": "Academic Coordinator - Language Groups", "details": ["11+ years in education", "ICSE, CBSE & Cambridge curricula", "B.Sc., Computer Applications, Loreto College, Kolkata, 2013", "Teaches Grade 4 - Grade 10"], "photo": "/original/online-school/crew/crew-adele-macdonald-ed02ea2a.jpg", "profile": o('/our-teachers/adele-macdonald/')},
    {"name": "Aditya Achawale", "group": "Training & Development", "role": "STEM Educator", "details": ["2+ years in education", "STEM curricula", "B.Tech., Computer Engineering", "Teaches Grade 1- 12"], "photo": "/original/online-school/crew/crew-aditya-achawale-9dd15a08.jpg", "profile": o('/our-teachers/aditya-achawale/')},
    {"name": "Aiswarya A", "group": "Indian Pathway", "role": "Language Facilitator-Malayalam", "details": ["4+ years in education", "CBSE curricula", "Bachelor of Arts (B.A.), Malayalam", "Teaches G 6-8"], "photo": "/original/online-school/crew/crew-a-aiswarya-8a44b7ad.jpg", "profile": o('/our-teachers/a-aiswarya/')},
    {"name": "Akanksha Bhati", "group": "British Pathway", "role": "Home Room Facilitator", "details": ["16+ years in education", "British, Cambridge, IB, ICSE & CBSE curricula", "Bachelor’s Degree, B.Sc.", "Teaches Grade 3 to grade 9"], "photo": "/original/online-school/crew/crew-akanksha-bhati-bf07405c.jpg", "profile": o('/our-teachers/akanksha-bhati/')},
    {"name": "Akshatha Ameen J", "group": "British Pathway", "role": "Language Facilitator - ESOL", "details": ["5+ years in education", "Cambridge/British curricula", "Post Graduate Diploma, Montessori Education", "Teaches Grade 4-6"], "photo": "/original/online-school/crew/crew-akshatha-ameen-j-9d9ad976.jpg", "profile": o('/our-teachers/akshatha-ameen-j/')},  ],
}

// Named Google reviews, unedited (the original states they are not restyled or shortened).
export const reviews = {
  title: 'What parents say',
  intro: ['These are named Google reviews of 21K School, published with an aggregate rating on our own reviews page. We have not restyled them, shortened them or written new ones.'],
  more: ['Read all of them, with the screenshots and the video testimonials, on ', { label: '21K School online reviews', to: o('/online-school-reviews/') }, '.'],
  rating: { value: '4.4 / 5', label: 'Rated 4.4 out of 5, from 636 Google ratings', link: { label: 'Read every review', to: o('/online-school-reviews/') } },
  items: [
    { initials: 'SM', name: 'Sagnik M', stars: 5, quote: 'My son has been studying at 21K School for 3 years now and will continue for the next year as well. Top notch study materials relevant to the skills needed for future, excellent teachers who are always supporting and paying lots of attention to every individual student, flexible timings, less homework, more hands-on projects, minimal exam stress and loads of fun activities. Students usually get a lot of time to spend on things they love to do, be creative and innovative, and more importantly learn to think and question. I would highly recommend 21K School to parents who want their children to become independent, future-smart, broad-minded and learn hands-on skills that really matter in life.' },
    { initials: 'SS', name: 'saurabh shekhar', stars: 5, quote: 'Great concept, much better than most of private schools. Children gets very focused study time. Schools have been able to hire great teachers as they have flexibility of remote working - I found their online teachers much more qualified and experienced than the ones in private schools of Bangalore charging 2-3L. My daughter loved all the teachers and enjoyed learning. Children get extra time which can be used for extracurricular activities. No worry of safety and wasting of commute time.' },
    { initials: 'SB', name: 'Sunil Bm', stars: 5, quote: 'My daughter is studying in 21k online school since KG-2. We are thankful to 21k for providing quality online education at affordable fees and taking extra care in overall child development with focus on academics. The class teachers and supporting staff are excellent. Overall greatly satisfied with 21k schooling experience. I strongly recommend 21K School to everyone who is looking out for online school platform.' },
    { initials: 'TA', name: 'Thomas Alenkunnapuzha', stars: 4, quote: '21K Online School has been a fantastic choice for our family, offering an excellent blend of flexibility and quality education. My daughter, who is in Grade 11, absolutely enjoys her classes and actively participates in the engaging activities and discussions. The curriculum is thoughtfully structured, and the online platform is easy to navigate, making the whole experience seamless for both students and parents.' },
  ],
}

export const awards = {
  title: 'Awards and recognition',
  link: { label: 'See all our awards', to: o('/awards/') },
  items: [
    { year: '2025–26', title: 'Best Online School in India Award', by: 'Trailblazer Award, ET TECH X · HITEX, Hyderabad', body: '21K School received the Trailblazer Award at ET TECH X 2025–26, recognised as the Best Online School in India at HITEX, Hyderabad.', image: `${A}/awards/ettechx-award.jpg`, alt: '21K School receiving the Best Online School in India award at ET TECH X: the Trailblazer trophy and certificate' },
    { year: '2025', title: 'Global Sustainability Awards 2025', by: 'Global Sustainability Awards, SDG Award Ceremony, Delhi', image: `${A}/awards/global-sustainability-awards.webp`, alt: 'Global Sustainability Awards 2025 — awarded to 21K School' },
    { year: '2024', title: 'Best Curriculum School Award', by: 'Star Education Awards', image: `${A}/awards/best-curriculum-school.png`, alt: 'Best Curriculum School Award — awarded to 21K School' },
    { year: '2024', title: '2024 HolonIQ South Asia EdTech 100', by: 'HolonIQ', image: `${A}/awards/holoniq.png`, alt: '2024 HolonIQ South Asia EdTech 100 — awarded to 21K School' },
  ],
}

export const alumni = {
  title: 'Where our learners go after Grade 12',
  intro: '314+ learners have now graduated from 21K and gone on. Six of them, by name and institution:',
  items: [
    { initials: 'DS', name: 'Debarshi Sen', school: 'Rensselaer Polytechnic Institute', city: 'New York', body: 'Known for his academic brilliance and passion for cricket, Debarshi, an alumnus of British Senior School, is currently pursuing Engineering at Rensselaer Polytechnic Institute in New York.' },
    { initials: 'D', name: 'Dhruvika', school: 'National Law School of India University', city: 'Bengaluru', body: 'Known for her keen interest in the field of law, Dhruvika, an alumna of Indian Senior School, is pursuing LLB at the prestigious National Law University in Bengaluru.' },
    { initials: 'NV', name: 'Nitya V', school: 'Indian Institute of Technology', city: 'Hyderabad', body: 'Known for her stellar results in Board and national-level entrance exams, Nitya, an alumna of Indian Senior School, is currently honing her creative flair for design at IIT Hyderabad.' },
    { initials: 'AK', name: 'Amit Khanna', school: 'London Business School', city: 'London', body: 'Known for his academic excellence, Amit, an alumnus of Indian Senior School, has joined the elite London Business School, where he is preparing for a global career in business.' },
    { initials: 'HA', name: 'Hafsa Ashraf', school: 'Sathyabama Institute of Science and Technology', city: 'Chennai', body: 'Known for her enthusiasm in science, Hafsa Ashraf, an alumna of British Senior School, is currently pursuing Aeronautical Engineering at Sathyabama Institute of Science and Technology, Chennai.' },
    { initials: 'MN', name: 'MK Nithyaa', school: 'Vellore Institute of Technology', city: 'Vellore', body: 'An alumna of 21K Indian Senior School, she is currently channelling her artistic sensibilities pursuing a diploma in Architecture at the esteemed Vellore Institute of Technology.' },
  ],
}

// Fees exactly as published on the original US page (Indian rupees, no conversion).
export const fees = {
  title: 'Online school fees in India, 2027–28',
  intro: ['Published, grade by grade, in Indian rupees. Fees for a learner resident in India start at ₹64,800 a year on the Indian pathway and reach ₹2,18,300 for the senior British years. The current ', { label: 'Fees page', to: o('/online-school/fees/') }, ' sets out programme-specific fees, inclusions, payment options and additional charges.'],
  benefit: 'Paying the year in full at admission takes ₹3,000 off tuition for Nursery to KG 2 and ₹5,000 for Grades 1 to 12.',
  instalments: 'Instalment plans are also available.',
  hint: '15 grades — scroll inside the table',
  caption: 'Published annual fees by grade and pathway',
  columns: ['Grade', 'Indian Pathway', 'British Pathway'],
  rows: [
    ['Nursery', '₹64,800', '—'], ['KG 1', '₹70,900', '₹1,03,000'], ['KG 2', '₹75,800', '₹1,13,300'],
    ['Grade 1', '₹98,800', '₹1,45,100'], ['Grade 2', '₹1,03,000', '₹1,45,100'], ['Grade 3', '₹1,07,000', '₹1,50,600'],
    ['Grade 4', '₹1,07,200', '₹1,50,700'], ['Grade 5', '₹1,07,500', '₹1,50,700'], ['Grade 6', '₹1,14,000', '₹1,72,600'],
    ['Grade 7', '₹1,18,600', '₹1,72,600'], ['Grade 8', '₹1,18,800', '₹1,72,600'], ['Grade 9', '₹1,07,900', '₹1,90,900'],
    ['Grade 10', '₹1,15,400', '₹2,06,400'], ['Grade 11', '₹1,28,900', '₹2,18,300'], ['Grade 12', '₹1,32,900', '₹1,88,900'],
  ],
  includes: {
    title: 'What the published fee includes',
    intro: 'Every figure in the table is the annual total of these lines, billed together:',
    items: ['Tuition', 'Learning support', 'Assessment', 'Textbooks (shipping is charged separately)', 'The activity programme', 'The Cambridge Learner Fee, on the British pathway only'],
  },
  excludes: {
    title: 'What it does not include',
    items: [
      'Board registration and examination fees. These are payable directly to the examination centre where your child registers, are set by the board and are revised every year. They are not part of the fee above.',
      'The registration fee and the admission fee paid at enrolment, which are separate from the annual fee.',
      'A third language. Arabic, French, ESOL, Japanese and Spanish can be taken as a second or third language for an additional fee.',
      'Extra NIOS subjects. Two additional subjects may be taken from any group for an additional fee, as per NIOS norms.',
    ],
  },
  outro: 'Paying the year in full at admission earns the Annual Payment Benefit on tuition; instalment plans are also available. Both are shown against every grade in the table.',
}

export const admission = {
  title: 'How admission works',
  steps: [
    { title: 'Enquire and talk it through', body: 'Tell us the grade and pathway you are considering. An admissions advisor will explain the curriculum, the learning model, placement and fees.' },
    { title: 'Register', body: 'Complete the registration form and pay the registration fee to open your Parent Hub account.' },
    { title: 'Grade placement', body: 'Where the grade requires it, your child takes a placement assessment. The admissions team then confirms the grade, pathway, batch and, in Senior School, subjects.' },
    { title: 'Confirm the seat', body: 'Submit the required documents — birth certificate, photographs and, for Grade 2 and above, previous progress reports — with a transfer certificate where there is one, and pay the fee.' },
    { title: 'Onboarding and the first class', body: 'Once the documents are verified, your child is enrolled, receives a learning kit and joins their batch as the academic calendar sets out.' },
  ],
  timeline: {
    title: 'Admissions timeline for 2026–27',
    rows: [
      ['Registration for the 2026–27 session', 'Open now, Nursery to Grade 11. Seats are first-come, first-served, subject to availability'],
      ['Grade placement age rule', 'Decided by your child’s age as of 30 September in the year of entry'],
      ['NIOS Secondary admission, Grade 10', 'Minimum age 14 as of 31 July for the April–May block, or 31 January for the October–November block'],
      ['NIOS Senior Secondary admission, Grade 12', 'Minimum age 15, on the same two dates'],
      ['NIOS examination entry, April–May block', '21 November to 20 December without late fee; to 31 December with ₹100 per subject; to 10 January with a ₹1,500 consolidated fee'],
      ['NIOS examination entry, October–November block', '21 May to 20 June without late fee; to 30 June with ₹100 per subject; to 10 July with a ₹1,500 consolidated fee'],
      ['21K academic year', 'Aligned to the April–May (Block 1) NIOS examinations for Years 10, 11 and 12'],
    ],
    note: 'A Senior Secondary candidate must leave a minimum gap of two years from the year they passed Secondary. Where that gap is short, NIOS allows a maximum of four subjects in the next two examination series.',
  },
}

export const bookCall = {
  title: 'Book a call with our admissions counsellor',
  body: 'The admissions team can answer the questions a brochure cannot: which pathway suits your child, which grade they would join, what the school day would look like and what the year will cost. They will also tell you if online school may not be the right fit for your family.',
  cta: 'Talk to an admissions counsellor',
}

export const faq = {
  title: 'Frequently asked questions',
  ask: 'Ask an admissions counsellor',
  items: [
    { q: 'What is an online school in India?', a: [['An online school provides a complete school programme online: scheduled live classes taught by facilitators, assignments and projects, assessment and feedback, and a wider school community.']] },
    { q: 'What approvals and curriculum pathways does 21K School offer?', a: [
      ['Cambridge. 21K School is a registered online Cambridge International School (IA702), offering Cambridge programmes from Early Years to International AS & A Level on the British pathway.'],
      ['Pearson Edexcel. 21K School is an approved Pearson Edexcel Online School (centre 94883), offering Pearson Edexcel International Advanced Level for relevant Senior School programmes.'],
      ['NCF-informed curriculum. Indian-pathway learners in Grades 1–8 follow an NCF-informed curriculum. 21K School is not affiliated with CBSE.'],
      ['NIOS. Indian-pathway learners in Grades 9–12 prepare for the NIOS Secondary and Senior Secondary examinations. NIOS certification and examinations follow NIOS requirements.'],
    ] },
    { q: 'Is an online school’s certificate valid in India?', a: [['It depends on the awarding body. At 21K School the Grade 10 and Grade 12 certificates come from NIOS on the Indian pathway, and from Cambridge or Pearson Edexcel on the British pathway, not from 21K School itself.']] },
    { q: 'How do I choose between the Indian and British pathways?', a: [['Neither pathway is universally better. The right choice depends on the learner’s previous schooling, age, preferred subjects, assessment style, future location and possible university destination. An admissions counsellor can talk it through with you.']] },
    { q: 'How does 21K School work?', a: [['Learners attend scheduled live classes, Monday to Friday, taught by facilitators. Live class time grows with age: one hour a day for Nursery, two hours for KG, approximately three hours for Primary School and approximately four hours for Middle School, while Senior School follows a subject-based timetable. Assignments, projects, reading and independent work happen away from live sessions, and the learning platform keeps classes, resources, feedback and progress in one place.']] },
    { q: 'How much does 21K School cost?', a: [['Fees vary by grade, pathway, class-size option and, in Senior School, subject choices. Visit the current ', { label: 'Fees page', to: o('/online-school/fees/') }, ' for programme-specific fees, inclusions, payment options and additional charges.']] },
    { q: 'How do I pay the fees?', a: [['Pay only through the authorised 21K School payment portal, Parent Hub or an official payment link from 21K School; the payment partner shown at checkout can vary. Interest-free instalment options are available according to the applicable fee schedule, and cash or direct bank transfers are not accepted. The ', { label: 'Payment options page', to: o('/payment-options/') }, ' explains each method and what to do if a payment is not confirmed.']] },
    { q: 'How do I enrol my child?', a: [['Book a call with the admissions team, then register, complete grade placement where the grade requires it, submit the documents and confirm the seat. The steps are set out under How admission works on this page.']] },
    { q: 'What does my child need at home?', a: [['A suitable device, reliable internet, a quiet place to learn and a consistent home routine. Younger children need an active Learning Coach, usually a parent or carer.']] },
    { q: 'Do I have to sit with my child?', a: [['Not always. How much support a learner needs depends on their age, independence and learning needs. Younger children need an active Learning Coach during the school day.']] },
    { q: 'How does 21K School support different learners?', a: [['Facilitators adapt their teaching during live classes, and learners who need it can receive additional academic help. Tell the admissions team about your child’s needs before you enrol, so they can confirm what support is available for that grade and pathway.']] },
    { q: 'Can my child switch from a regular school mid-year?', a: [['Often, yes. It depends on the grade, previous records, curriculum and readiness, and the admissions team will guide the transition.']] },
    { q: 'Will my child have friends?', a: [['Yes. Learners get to know each other through live classes, group work, projects, clubs, assemblies, online events and selected in-person experiences.']] },
    { q: 'How many hours a day will my child be in live classes?', a: [['Nursery learners have one hour of live classes a day, KG1 and KG2 two hours, Primary School approximately three hours and Middle School approximately four hours. Senior School follows a subject-based timetable.']] },
    { q: 'Are classes recorded?', a: [['Recordings may be available for revision, subject to programme and school policy.']] },
    { q: 'Can we choose our class timing?', a: [['Class timings and class-size options vary by grade, pathway and availability. The admissions team will confirm the options available for your child.']] },
    { q: 'Which grades can we register for right now?', a: [['21K School offers programmes from Nursery to Grade 12. What is open at any time depends on the grade and pathway, so the admissions team will confirm the options for your child.']] },
    { q: 'Can NRI and expatriate families enrol?', a: [['Yes. Families living outside India can enrol on either pathway. Class windows are in Indian Standard Time, and the admissions team will help you choose one that suits your time zone.']] },
    { q: 'What if we want a transfer certificate later?', a: [['The process depends on the programme and your circumstances. The school team will help with the procedure and the paperwork.']] },
    { q: 'Do you teach CBSE?', a: [['No. 21K School is not affiliated with CBSE. The Indian pathway follows an NCF-informed curriculum to Grade 8, with NIOS for Grades 9–12; the British pathway follows Cambridge and Pearson Edexcel programmes.']] },
  ],
}

// The original US page introduces a city list but publishes no city links, so only the
// sentence that stands on its own is shown (approved decision: do not imply a list).
export const acrossIndia = {
  title: 'Online school across India',
  body: 'We also teach families across Kerala, Karnataka, Maharashtra, Tamil Nadu, Telangana, Delhi NCR, Gujarat, West Bengal, Madhya Pradesh and Uttar Pradesh. If your city is not listed, the admission process, the fee and the timetable are exactly the same.',
  lead: 'Families join us from all over India.',
}

export const reading = {
  title: 'More to read',
  items: [
    { label: 'How much does online school cost, and how to plan for it', to: o('/blog/how-much-does-online-school-cost/') },
    { label: 'How to choose an online school: 11 factors parents weigh', to: o('/blog/how-to-choose-online-schools/') },
    { label: '15 frequently asked questions about online school', to: o('/blog/common-questions-about-online-schooling/') },
    { label: 'How many hours a day does an online school run?', to: o('/blog/how-many-hours-a-day-online-schools/') },
  ],
  more: { label: 'Read more on our blog', to: o('/blog/') },
}

import { useMemo, useState } from 'react'
import { Search, ArrowRight } from 'lucide-react'
import { PageHero, Section, Img, Btn, ext } from '../components/ui.jsx'
import { blogImg } from '../data/images.js'
import usePageMeta from '../usePageMeta.js'

const CATS = ['AI in Education', 'Activities', 'Admissions', 'CAMBRIDGE', 'CISCE', 'Classroom', 'Curriculum Guide', 'Education', 'Education Trends', 'Examination', 'Experiment', 'Featured', 'Flexible Learning', 'GCSE', 'Homeschooling', 'IGCSE', 'Indian', 'Inspiration', 'Language', 'Learning', 'NIOS', 'Online Learning', 'Online School', 'Parenting', 'Preschool', 'Recession', 'School Statistics', 'Skills', 'Social Emotional Learning', 'Special Education', 'Student Wellbeing', 'Teaching', 'Technology', 'Time Management', 'Uncategorized', 'Universities']

const WRITERS = ['21k school Team', 'Ankita Singha', 'Annapurna S', 'Anshu Kumari', 'Kumar Shivam', 'Maitrayee Kumari', 'Naira Hatkar', 'Rahul Pal', 'Ruby Rana', 'Shradha Raj', 'Simran Dhall', 'Sutripti Sourabh', 'jhalak sharma', 'poulomi ganguly']

const LATEST = { slug: 'active-learning', cat: 'Learning', date: 'September 18, 2026', title: 'Active Learning: Components, Benefits & Strategies!', img: 'active-learning-components-benefits-strategies-3', text: 'Active learning encourages students to participate, discuss, and solve problems while improving understanding, engagement, memory, and critical thinking skills.' }

const POSTS = [
  { slug: 'what-is-essential-repeat-in-cbse', cat: 'CBSE', date: 'Sep 17, 2026', title: 'What is the Essential Repeat in CBSE: A Detailed Guide!', img: 'what-is-the-essential-repeat-in-cbse-a-detailed-guide', text: 'Imagine appearing for board exams and getting an Essential Repeat, or ER, in your CBSE results. This often happens to students. Do you know…' },
  { slug: 'bilingual-education', cat: 'Activities', date: 'Sep 16, 2026', title: 'Understanding Bilingual Education: Approaches, Benefits and Examples', img: 'understanding-bilingual-education-approaches-benefits-and-examples', text: 'Bilingual education uses two languages in learning and can support communication, cultural awareness, and confidence among students' },
  { slug: 'what-is-microlearning', cat: 'Learning', date: 'Sep 16, 2026', title: 'What is Microlearning: Meaning, Types, Benefits and Examples!', img: 'what-is-microlearningmeaning-types-benefits-and-examples', text: 'Microlearning breaks lessons into short, focused activities to help students learn, practise, revise, and remember concepts more easily.' },
  { slug: 'iit-admission-criteria', cat: 'Examination', date: 'Sep 16, 2026', title: 'IIT Eligibility and Admission: Complete Guide for Students', img: 'iit-eligibility-and-admission-complete-guide-for-students', text: 'Learn about IIT admission criteria, including JEE Main, JEE Advanced, Class 12 marks, eligibility, category-wise requirements, JoSAA…' },
  { slug: 'distinction-percentage-in-cbse', cat: 'CBSE', date: 'Sep 15, 2026', title: 'Distinction Percentage in CBSE Class 10: Marks Required & Grading', img: 'distinction-percentage-in-cbse-class-10-marks-required-grading', text: 'Find out the distinction percentage in CBSE Class 10, minimum marks required, grading system, and how to calculate your overall percentage' },
  { slug: 'what-is-cbse-compartment-exam', cat: 'Uncategorized', date: 'Sep 14, 2026', title: 'What is CBSE Compartment Exam? Class 10 & 12 Guide for 2026', img: 'what-is-cbse-compartment-exam-class-10-12-guide-for-2026', text: 'What is the CBSE Compartment Exam? Know Class 10 and 12 eligibility, 2026 dates, passing marks, application process, and preparation tips' },
  { slug: 'what-is-kindergarten', cat: 'Online School', date: 'Sep 11, 2026', title: 'What is Kindergarten? Meaning, Importance, Stages, Admission', img: 'what-is-kindergarten-meaning-importance-stages-admission', text: 'What is kindergarten? A guide for parents for admission and starting the early learning journey. Know its importance, stages and key…' },
  { slug: 'why-is-reading-important', cat: 'Skills', date: 'Sep 11, 2026', title: 'Why Is Reading Important in Every Day Life for Personal Growth', img: 'why-is-reading-important-in-every-day-life-for-personal-growth', text: 'Find out why reading is important in everyday life. Learn how books and reading help improve concentration, imagination, and success' },
  { slug: 'what-are-extracurricular-activities', cat: 'Activities', date: 'Sep 11, 2026', title: 'What Are Extracurricular Activities? A Guide for Students', img: 'what-are-extracurricular-activities-a-guide-for-students', text: 'What are extracurricular activities? Learn about their types, examples, benefits, age-wise activities, and how they support students’…' },
]

const slugify = (c) => c.toLowerCase().replace(/ /g, '-')
const url = (slug) => ext(`/blog/${slug}/`)

export default function Blog() {
  usePageMeta(
    'Blog | 21K School',
    'Guides, curriculum deep-dives, and parent stories from the 21K School community.',
  )
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')

  const shown = useMemo(() => {
    const s = q.trim().toLowerCase()
    return POSTS.filter((p) =>
      (cat === 'All' || p.cat.toLowerCase() === cat.toLowerCase()) &&
      (!s || (p.title + p.text).toLowerCase().includes(s)))
  }, [q, cat])

  return (
    <>
      <PageHero
        eyebrow="Resources · Newsroom"
        title="Blog &" accent="News"
        text="Guides, curriculum deep-dives, and parent stories from the 21K School community."
        actions={<Btn href={ext('/blog/')}>Browse all articles</Btn>}
      />

      <Section>
        <div className="blog-tools">
          <label className="search">
            <Search size={18} />
            <input type="search" placeholder="Search articles" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search articles" />
          </label>
          <div className="chips" role="tablist">
            {['All', ...CATS].map((c) => (
              <button key={c} className={`chip ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
        </div>

        {cat === 'All' && !q && (
          <a className="card featured hover" href={url(LATEST.slug)} target="_blank" rel="noreferrer">
            <Img src={blogImg(LATEST.img)} alt={LATEST.title} />
            <div>
              <span className="tag">Latest article · {LATEST.cat}</span>
              <h2>{LATEST.title}</h2>
              <p>{LATEST.text}</p>
              <small className="muted">{LATEST.date}</small>
              <span className="more">Read article <ArrowRight size={16} /></span>
            </div>
          </a>
        )}

        <h2 className="mt">All articles</h2>
        {shown.length === 0 ? (
          <p className="muted">
            No matching articles on this page.{' '}
            {cat !== 'All' && <a className="link" href={ext(`/blog/category/${slugify(cat)}/`)} target="_blank" rel="noreferrer">See all “{cat}” articles →</a>}
          </p>
        ) : (
          <div className="grid">
            {shown.map((p) => (
              <a key={p.slug} className="card post hover" href={url(p.slug)} target="_blank" rel="noreferrer">
                <Img src={blogImg(p.img)} alt={p.title} />
                <div className="post-body">
                  <span className="tag">{p.cat}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <small className="muted">{p.date}</small>
                </div>
              </a>
            ))}
          </div>
        )}
        <p className="center mt"><Btn href={ext('/blog/?page=2')} variant="outline">More articles</Btn></p>
      </Section>

      <Section tint eyebrow="Authors" title="Meet our writers" intro="Get to know the voices behind our stories.">
        <div className="chips wrap">
          {WRITERS.map((w) => (
            <a key={w} className="chip" href={ext(`/author/${slugify(w)}/`)} target="_blank" rel="noreferrer">{w}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
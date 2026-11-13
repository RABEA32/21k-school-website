import { useState } from 'react'
import { PageHero, Section, Faq, CTA, Btn, Enquiry, Img, ext } from '../components/ui.jsx'
import { IMG } from '../data/images.js'
import usePageMeta from '../usePageMeta.js'

const STEPS = [
  { n: 1, t: 'Talk to an admissions counsellor', short: 'Talk to us', act: 'Discuss your child’s grade, learning goals, and schedule needs.', dur: '1 Day (20-min call)',
    sub: 'A short call about your child’s grade, curriculum and reasons for considering online school.',
    body: ['Start by scheduling a consultation with an admissions counsellor. Your counsellor will take time to understand your child’s age, existing grade, current curriculum, geographic location, and reasons for exploring online schooling.', 'During this conversation, your counsellor will outline relevant grade levels, available time slots, and fee structures.'],
    cta: ['Book a call', '/online-school/book-a-call/'], img: IMG.applyCall, alt: 'A smiling woman at her desk with a laptop' },
  { n: 2, t: 'Choose the Indian or British pathway', short: 'Choose a pathway', act: 'Compare Indian and British pathways side by side.', dur: '1 Day',
    sub: 'Compare the pathways and four offered curriculums based on prior learning, subjects and future plans.',
    body: ['Our admissions team helps you compare the Indian pathway (aligned with the National Curriculum Framework and NIOS) and the British pathway (registered Cambridge International School Centre IA702 and approved Pearson Edexcel Centre 94883).', 'Your choice should consider your child’s prior learning history, future university aspirations, subject interests, and regional recognition needs.'],
    cta: ['Compare Curriculum', '/online-school/compare-curriculum/'] },
  { n: 3, t: 'Apply and share your documents', short: 'Apply + documents', act: 'Upload age proof, identity records, and prior mark sheets.', dur: '1 Day',
    sub: 'Identity, age and academic records, depending on grade and pathway.',
    body: ['Complete the online application form and upload the required identity, age, and academic records.', 'Required documents typically include a birth certificate or passport for age verification, along with previous report cards or transfer certificates for academic continuity. Documents are submitted through our encrypted, secure online upload portal to protect your family’s data privacy.'],
    cta: ['What You’ll Need', '/online-school/what-you-will-need/'], img: IMG.applyDocs, alt: 'A smiling teenage learner writing in her notebook' },
  { n: 4, t: 'Academic review for Grades 9–12', short: 'Academic review', act: 'Senior academic conversation regarding subject prerequisites.', dur: '1–2 Days',
    sub: 'A conversation about previous results, subjects and pathway, before board registration.',
    body: ['For High School enrolments (Grades 9 to 12), an academic advisor conducts a transcript review and a structured academic conversation. This review confirms that your child meets subject prerequisites for official Board registration (such as Cambridge IGCSE/A Levels, Pearson Edexcel, or NIOS).', 'Direct admission into Grade 10 or Grade 12 is not normally offered due to formal Board registration schedules and continuous assessment cycles.'] },
  { n: 5, t: 'Confirm your place and pay fees', short: 'Confirm admission', act: 'Receive formal admission offer and complete fee payment.', dur: '1 Day',
    sub: 'Fees are confirmed only after eligibility and fit are reviewed.',
    body: ['Once academic eligibility and pathway alignment are confirmed, you will receive a formal enrolment offer with complete fee details.'] },
  { n: 6, t: 'Get ready for your child’s first day', short: 'Onboarding', act: 'Receive Portal logins, orientation guide, and timetable.', dur: '1–2 Days',
    sub: 'Onboarding covers the learning platform, timetable, resources and support.',
    body: ['After enrolment is complete, our onboarding team provides your family with login credentials for the 21K Learning Portal.', 'Onboarding includes an orientation session to introduce your child to the platform, verify hardware and internet settings, issue live-class timetables, and introduce your dedicated facilitator and support team. Classes start across our four annual cohorts in April, June, September, and January, with availability subject to grade capacity.'] },
]

const FEES = [
  ['Core Tuition Fee', 'Covers live interactive instruction, core digital course materials, and regular progress reports.'],
  ['Included Services', 'Access to class recordings, virtual assemblies, student clubs, and ongoing counsellor support.'],
  ['Optional Extras', 'External examination fees (e.g., Cambridge or Pearson Edexcel Board exams), optional Learning Garage workshops, and physical field trips.'],
]

// Academic session 2027-28 (ISO dates so they compare as strings)
const GRADES = [
  ['Nursery', '2024-07-01', '2024-09-01', '~3 yrs'], ['KG 1', '2023-07-01', '2024-06-30', '~4 yrs'],
  ['KG 2', '2022-07-01', '2023-06-30', '~5 yrs'], ['Grade 1', '2021-07-01', '2022-06-30', '~6 yrs'],
  ['Grade 2', '2020-07-01', '2021-06-30', '~7 yrs'], ['Grade 3', '2019-07-01', '2020-06-30', '~8 yrs'],
  ['Grade 4', '2018-07-01', '2019-06-30', '~9 yrs'], ['Grade 5', '2017-07-01', '2018-06-30', '~10 yrs'],
  ['Grade 6', '2016-07-01', '2017-06-30', '~11 yrs'], ['Grade 7', '2015-07-01', '2016-06-30', '~12 yrs'],
  ['Grade 8', '2014-07-01', '2015-06-30', '~13 yrs'], ['Grade 9', '2013-07-01', '2014-06-30', '~14 yrs'],
  ['Grade 10', '2012-07-01', '2013-06-30', '~15 yrs'], ['Grade 11', '2011-07-01', '2012-06-30', '~16 yrs'],
  ['Grade 12', '2010-07-01', '2011-06-30', '~17 yrs'],
]
const fmt = (iso) => new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

const FAQS = [
  ['How long does the process take?', 'Most applications are completed in 2 to 3 days once all required documents are submitted. During the peak admissions window from April through June, processing may take up to 7 days due to higher volume.'],
  ['Can we apply mid-year?', 'Yes, where places are available. Because 21K School operates four quarterly enrolment cohorts (April, June, September, and January), families can join at multiple points during the year, provided academic board rules for that grade permit.'],
  ['What if we are applying from outside India?', 'Yes. The admissions process is identical wherever you live. As of 1 September 2026, 21K School supports over 25,000 learners across 78 countries and 46 nationalities. Live classes are scheduled across multiple global time zones, including IST, GST, and GMT.'],
  ['When do we pay?', 'Fee payment is confirmed after the learner’s eligibility and programme fit have been reviewed. Refer to the live Fees page for current amounts, inclusions, terms and applicable conditions. All payments are made through our authorised payment gateways. Cash, Bank Deposits and Cheques are not accepted.'],
  ['When and how do we pay the school fees?', 'Fee payment occurs in Step 5, after your child’s eligibility and pathway fit have been formally verified. Payments are processed digitally through authorized payment gateways. Cash, bank deposits, and physical cheques are not accepted.'],
  ['Is there an entrance test for general admission?', '21K School does not require pass-or-fail entrance examinations for general entry. For middle and senior school grades, we conduct informal readiness interactions or academic transcript reviews to place your child in the appropriate subject level.'],
]

function Eligibility() {
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [res, setRes] = useState(null)
  const [show, setShow] = useState(false)
  const check = (e) => {
    e.preventDefault()
    const g = GRADES.find(([, from, to]) => dob >= from && dob <= to)
    setRes(g ? { ok: true, g: g[0] } : { ok: false })
  }
  return (
    <div className="split">
      <div className="card">
        <div className="tag">Admissions Open: 2027-28</div>
        <form onSubmit={check}>
          <label>Learner’s Name (optional)<input value={name} onChange={(e) => setName(e.target.value)} /></label>
          <label>Date of Birth *<input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} /></label>
          <button className="btn btn-primary" type="submit">Check Eligibility</button>
        </form>
        <div className="result" aria-live="polite">
          {!res && <p className="muted">Enter a date of birth and select Check Eligibility. Age is calculated as of July 2027.</p>}
          {res?.ok && <p className="ok">{name || 'Your child'} is eligible for <b>{res.g}</b> in 2027-28.</p>}
          {res && !res.ok && <p className="warn">That date of birth falls outside the 2027-28 grade chart. Please talk to an admissions counsellor.</p>}
        </div>
        <button type="button" className="link" onClick={() => setShow(!show)}>{show ? 'Hide Grade-Age Chart' : 'View Full Grade-Age Chart'}</button>
      </div>
      {show && (
        <div className="tbl">
          <table>
            <caption>Grade-age chart for the Academic Session 2027-28</caption>
            <thead><tr><th>Grade</th><th>DOB From</th><th>DOB To</th><th>Age</th></tr></thead>
            <tbody>{GRADES.map(([g, a, b, age]) => <tr key={g}><td>{g}</td><td>{fmt(a)}</td><td>{fmt(b)}</td><td>{age}</td></tr>)}</tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default function Admission() {
  usePageMeta(
    'How to Apply to Online School: 6 Steps | 21K School',
    'Understand how to apply to 21K School, from the first conversation and documents to academic review and enrolment.',
  )
  return (
    <>
      <PageHero
        eyebrow="Admissions · Online School"
        title="How to Apply to" accent="21K School in Six Steps"
        text="From your first call to your child’s first day, with what happens at each step."
        actions={<><Btn href={ext('/admissions/apply-now/')}>Apply now</Btn><Btn href={ext('/online-school/book-a-call/')} variant="ghost">Book a call</Btn></>}
        img={IMG.applyHero} imgAlt="A girl applying on a laptop with her father beside her"
      />

      <Section>
        <p className="prose">Applying to 21K School is designed to help both your family and our academic team make a responsible educational decision. The admissions process confirms the appropriate grade, pathway, timetable, and support structure before your child begins classes.</p>
        <p className="prose">To accommodate diverse global calendars, classes start across four enrolment cohorts each year: April, June, September, and January. Families can choose any cohort that fits their schedule.</p>
      </Section>

      <Section tint eyebrow="Overview" title="Six steps from first call to first day"
        intro="Most applications take 2 to 3 days to complete. Six clear steps take you from the first conversation to your child’s first day at 21K School.">
        <div className="tbl">
          <table>
            <thead><tr><th>Step</th><th>Key activity at this stage</th><th>Typical duration</th></tr></thead>
            <tbody>
              {STEPS.map((s) => <tr key={s.n}><td><b>{s.n}.</b> {s.short}</td><td>{s.act}</td><td>{s.dur}</td></tr>)}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <ol className="steps">
          {STEPS.map((s) => (
            <li key={s.n} className="step">
              <span className="num">{s.n}</span>
              <div className="step-body">
                <h2>Step {s.n}: {s.t}</h2>
                <p className="muted">{s.sub}</p>
                {s.body.map((p) => <p key={p}>{p}</p>)}
                {s.n === 5 && (
                  <div className="grid three">
                    {FEES.map(([t, d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>)}
                  </div>
                )}
                {s.n === 5 && <p>All fee payments are made strictly through our official, authorized online payment gateways. Cash, bank deposits, and physical cheques are not accepted. Refer to our live Fees page for current schedules.</p>}
                {s.n === 5 && (
                  <blockquote>
                    “We had a lot of questions when we first considered an online school, but the admissions team made each step clear. From understanding the right pathway for our child to completing the documentation on the parent hub, we always knew what we needed to do next. Whenever we had a question, there was someone to guide us. The whole process felt much simpler than we had expected.”
                    <cite>Prerna, Parent of Nirvaan, Grade 4, Bangalore</cite>
                  </blockquote>
                )}
                {s.cta && <Btn href={ext(s.cta[1])} variant="outline">{s.cta[0]}</Btn>}
              </div>
              {s.img && <Img className="rounded step-img" src={s.img} alt={s.alt} />}
            </li>
          ))}
        </ol>
      </Section>

      <Section tint eyebrow="Eligibility" title="Grade eligibility calculator" intro="Where every learner finds their path.">
        <Eligibility />
      </Section>

      <Section eyebrow="FAQ" title="Questions parents ask about applying">
        <div className="split">
          <Faq items={FAQS} />
          <Enquiry title="Start your child’s admission journey" sub="Share a few details and our counsellor will guide you." label="Verify & Book a Call" />
        </div>
      </Section>

      <CTA title="Your next step" text="Ready to apply, or still have questions? Start your application or talk to our admissions team.">
        <Btn href={ext('/admissions/apply-now/')}>Apply Now</Btn>
        <Btn href={ext('/online-school/book-a-call/')} variant="ghost">Talk to an Admissions Counsellor</Btn>
      </CTA>
    </>
  )
}
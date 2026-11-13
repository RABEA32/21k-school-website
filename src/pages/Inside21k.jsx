import { PageHero, Strip, Split, Section, Faq, CTA, Btn, Img, ext } from '../components/ui.jsx'
import { IMG } from '../data/images.js'
import usePageMeta from '../usePageMeta.js'

const TALK = ['Talk to an admissions counsellor', '/inside-21k/book-a-call/']

// Each block: title, paragraphs, optional image, optional callout
const BLOCKS = [
  { t: 'Why #AnotherWay is needed', p: ['Traditional schooling was built around constraints: one location, one timetable, one standard route and one definition of success. Those structures can work for some children. They can also leave others waiting, rushing, conforming or compromising important parts of their lives.', 'Online education should not simply reproduce those constraints on a screen. It should use technology to make excellent teaching more accessible, learning more responsive and school more compatible with childhood.'] },
  { t: 'A complete school—not a collection of online classes', img: IMG.learner23, alt: 'A learner cheering with both arms raised in front of a brick wall',
    p: ['21K School brings together curriculum, live teaching, assessment, learner support, community and recognised progression. Facilitators know what learners are working towards. Families receive a timetable, resources, feedback, reports and clear channels for support.', 'Assemblies, projects, celebrations, clubs, online events, selected in-person experiences and peer collaboration add the shared experiences that make a school community. The result is structured enough to build continuity and flexible enough to recognise that meaningful learning also happens beyond scheduled classes.'] },
  { t: 'One ecosystem, more ways to learn', img: IMG.learner45, alt: 'A learner inline speed skating with a coach watching behind',
    p: ['Online School is the flagship schooling pathway. FLOWW, The Garage and 21K Campus extend what the ecosystem can offer through flexible programmes, hands-on experiences and place-based learning.', 'A child may need one part of the ecosystem today and another later. The idea is not to force families into a single format, but to create connected choices around the learner.'],
    callout: 'Online School, FLOWW, The Garage or Campus? Find the right fit.' },
  { t: 'Indian or international. One standard.',
    p: ['Families can choose pathways aligned with Indian or international progression. The current ecosystem includes the Indian curriculum informed by national frameworks, NIOS, Cambridge and Pearson Edexcel routes across relevant grades.', 'Each pathway has distinct subjects, assessment structures and progression rules. What remains consistent is the expectation of serious teaching, active learning, thoughtful support and transparent guidance.'] },
  { t: 'Personalisation with integrity', img: IMG.girl, alt: 'A curious, smiling girl',
    p: ['Personalisation is often reduced to letting a child click through content alone. At 21K School, it begins with understanding the learner: present knowledge, pace, interests, aspirations, strengths and areas where support is needed.', 'Facilitators, assessment evidence, learning resources and support systems work together to help learners move forward. Personalisation does not mean lowering expectations. It means creating a more intelligent route towards meaningful expectations.'] },
  { t: 'The freedom to learn without losing structure',
    p: ['Flexibility matters when a child is an athlete, artist, performer, traveller, accelerated learner, internationally mobile learner or simply someone who learns better outside a conventional campus. It also matters to families who cannot access the quality or curriculum they want locally.', 'Class timings and multiple pathways create options, while the school calendar, live classes, assignments and progress systems maintain rhythm. Freedom works best when children know what is expected and have adults who notice whether they are progressing.'],
    callout: 'Want flexibility without losing structure? See how a week works.' },
  { t: 'Learning that develops the whole child',
    p: ['Marks matter, but they do not tell the whole story. Children also need to communicate, collaborate, manage setbacks, make ethical decisions, care for their wellbeing, understand money, explore possible futures and contribute to their communities.', '21K School organises this wider purpose through Seven Dimensions of Success, learner attributes and Habits of Mind. These are woven into lessons, projects, leadership, reflection, arts, sport, community engagement and enrichment rather than added as occasional motivational activities.'] },
  { t: 'Teachers who facilitate thinking', img: IMG.group, alt: 'A smiling woman wearing a headset at her desk',
    p: ['Our teachers, whom we call facilitators, do more than deliver information. They ask questions, create participation, observe how learners think and use feedback to move learning forward.', 'Facilitators are selected for qualifications and experience, but also for the human qualities online teaching demands: clarity, energy, empathy, adaptability and the ability to make a learner feel present. Continuous professional learning helps them strengthen subject knowledge, pedagogy, child development and online engagement.'] },
  { t: 'A community without borders', img: IMG.outing, alt: 'Learners and adults on an outing outside the Nehru Science Centre',
    p: ['More than 25,000 learners have registered with 21K School, with families represented across 78 countries and 46 nationalities. That scale is not valuable merely because it is large. It matters because a learner can encounter perspectives, experiences and friendships beyond a single neighbourhood.', 'Assemblies, projects, celebrations, cohort activities and events help children participate in a real community. Selected in-person events, Learning Garages and trips extend connection beyond the screen where available.'],
    callout: 'Join families from 78 countries. Start with a call.' },
  { t: 'Progress that can be seen',
    p: ['Trust grows when parents can see how learning is being supported. Assessment at 21K School includes ongoing classroom evidence, assignments, projects, facilitator observations and formal assessments appropriate to the stage and pathway.', 'Feedback is intended to identify what a learner understands, what needs attention and what should happen next. Reports and parent conversations turn evidence into a shared plan rather than leaving families with a number and no direction.'] },
  { t: 'Recognition and progression',
    p: ['The pathway matters because children need credible progression. 21K School is a registered online Cambridge International School and an approved Pearson Edexcel Online School. NIOS qualifications are awarded independently by the National Institute of Open Schooling.', 'Final Board examinations follow the relevant Board rules, with external assessment and certification where applicable. Families receive guidance on registration, examination centres, subject choices and transition to further study.'] },
  { t: 'What #AnotherWay asks of families',
    p: ['Online school gives families new freedom, but it also changes some responsibilities. Younger children require an active Learning Coach. Older learners need routines, a suitable learning space, reliable technology and increasing ownership of their work.', 'Parents do not have to become teachers. They do need to remain connected, communicate concerns and help protect the conditions in which learning can happen.'],
    callout: 'Is online school right for your family? Get an honest fit check.' },
  { t: 'When 21K may be the right fit',
    p: ['21K may suit a family seeking recognised schooling with greater flexibility; access to a curriculum unavailable locally; an alternative to unsatisfactory physical-school outcomes; continuity through travel or relocation; or a learning environment better aligned with the child’s needs and aspirations.', 'It may not suit a family seeking full-day physical supervision, daily campus facilities or a model in which the school can replace all adult support at home. A responsible decision includes understanding both the possibilities and the practical requirements.'] },
]

const FAQS = [
  ['Is 21K School a complete school or supplementary programme?', 'Online School is designed as a complete schooling pathway. Separate enrichment and selected-subject options are also available where stated.'],
  ['Will my child spend the whole day on a screen?', 'No. Live classes form one part of learning. Independent work, reading, projects, physical activity, home-based experiences and breaks are part of an age-appropriate day.'],
  ['Will my child have friends?', 'Learners meet regularly in classes, assemblies, projects and events. Connection is intentionally designed, with selected in-person opportunities available in some locations.'],
  ['How will I know whether my child is progressing?', 'Families receive assessment evidence, feedback and reports, with channels to speak to the school. The detail varies by stage and pathway.'],
  ['Can online school prepare a child for university?', 'Yes, where the learner completes an appropriate recognised pathway and meets university entry requirements. Senior learners receive subject, career and application guidance.'],
  ['How do we decide between curricula?', 'Consider the child’s current schooling, learning preferences, future location, university plans and subject needs. Our team can help you compare the pathways.'],
  ['What happens if my child needs extra support?', 'Learning and learner-support systems identify needs and guide next steps. The available intervention depends on the child, grade and programme.'],
  ['Can my child pursue sport, arts or another serious interest?', 'Flexibility can make it easier to protect time for demanding interests while maintaining a complete education.'],
]

export default function Inside21K() {
  usePageMeta(
    '#AnotherWay to School: A Complete Online School | 21K School',
    'Discover another way to school: a modern, flexible and human-centred K–12 learning ecosystem built around your child.',
  )
  return (
    <>
      <PageHero
        eyebrow="Inside 21K · Who we are"
        title="#AnotherWay" accent="to School"
        text="Every parent wants to make a responsible decision for their child. 21K School is a global K–12 learning ecosystem designed to give children strong academics, purposeful relationships and room to grow—without asking every learner to fit one place, pace or path."
        actions={<Btn href={ext(TALK[1])}>Book a call</Btn>}
        img={IMG.anotherHero} imgAlt="A girl in headphones waving to her live online class on a laptop"
      />
      <Strip items={[['25,000+', 'Learners'], ['78', 'Countries'], ['46', 'Nationalities'], ['2', 'Accreditations']]} />

      <Section>
        <p className="prose">Many families reach a point when the familiar school model no longer feels right. The child may be capable but disengaged, busy but not learning deeply, or limited by the quality available nearby. The family may need flexibility that a fixed campus timetable cannot provide. 21K School exists for that moment.</p>
        <p className="prose">Book a call to explore whether another way could be right for your child.</p>
        <div className="card brochure">
          <Img src={IMG.brochure} alt="Cover of the 21K School Legacy Brochure" />
          <div>
            <h3>21K School Legacy Brochure</h3>
            <p className="muted">PDF · 5.5 MB</p>
            <Btn href="https://www.21kschool.com/downloads/21k-school-legacy-brochure.pdf" variant="outline">Download</Btn>
          </div>
        </div>
      </Section>

      {BLOCKS.map((b, i) => (
        <Split key={b.t} title={b.t} tint={i % 2 === 0} flip={i % 4 === 1 || i % 4 === 2}
          img={b.img ? b.img : undefined} alt={b.alt}>
          {b.p.map((x) => <p key={x}>{x}</p>)}
          {b.callout && <p><b>{b.callout}</b></p>}
          {b.callout && <Btn href={ext(TALK[1])} variant="outline">{TALK[0]}</Btn>}
        </Split>
      ))}

      <Section eyebrow="FAQ" title="Questions parents ask"><Faq items={FAQS} /></Section>

      <CTA title="Your next step" text="Book a call to talk through your child’s circumstances.">
        <Btn href={ext(TALK[1])}>Talk to an Admissions Counsellor</Btn>
      </CTA>
    </>
  )
}
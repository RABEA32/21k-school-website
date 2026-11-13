import { Cog, Gamepad2, CircuitBoard, BrainCircuit, Lightbulb, Clock, CalendarDays, Wallet, Compass, MapPin, ShieldCheck } from 'lucide-react'
import { PageHero, Strip, Section, Split, Faq, CTA, Btn, Enquiry, Img, ext } from '../components/ui.jsx'
import { IMG } from '../data/images.js'
import usePageMeta from '../usePageMeta.js'

const PATHWAYS = [
  [Cog, 'Robotics + Design', 'Learners combine mechanical construction, coding and visual design to turn an idea into a working model.', '/garage/robotics-plus-design/'],
  [Gamepad2, 'Coding + Gaming', 'Learners build games and digital projects that make computational thinking visible, creative and rewarding.', '/garage/coding-plus-gaming/'],
  [CircuitBoard, 'Electronics', 'Learners move from simple circuits to sensor-based systems, microcontrollers and carefully supervised prototyping.', '/garage/electronics/'],
  [BrainCircuit, 'AI + IoT', 'Learners explore how data, intelligent models, sensors and connected devices can work together in interactive systems.', '/garage/artificial-intelligence-plus-iot/'],
  [Lightbulb, 'Capstone + Tinkering', 'Open-ended exploration and structured capstones give ready learners space to combine skills, test choices and present original work.', '/garage/capstone-plus-tinkering/'],
]

const LEVELS = [['Starter', '6 sessions', 'Foundations'], ['Explorer', '12 sessions', 'Intermediate application'], ['Builder', '24 sessions', 'More advanced, independent work']]

const AGES = [
  ['Ages 5 to 8', 'First builds', 'Younger learners use visible, age-appropriate projects to connect curiosity with early design, logic, movement and cause-and-effect thinking.', '/garage/ages-5-8/'],
  ['Ages 8 to 12', 'Making & coding', 'Learners begin linking mechanics, code, design and electronics through projects with visible results and increasing independence.', '/garage/ages-8-12/'],
  ['Ages 12 to 18', 'Build & compete', 'Older learners can deepen one pathway or combine several disciplines in work that requires planning, testing, judgement and presentation.', '/garage/ages-12-18/'],
]

const INFO = [
  [CalendarDays, 'Dates and slots', 'Sessions run year-round on available centre schedules, and families can book up to one month in advance.', '/garage/dates-and-slots/'],
  [Clock, 'Session timings', 'Learning Garage centres operate Tuesday to Sunday, from 11:00 am to 7:00 pm, with live slots shown during booking.', '/garage/session-timings/'],
  [Wallet, 'Pricing', 'Fees are the same across Learning Garage centres and pathways, with separate rates for 21K and non-21K learners.', '/garage/pricing/'],
  [Compass, 'Modules by age', 'Three overlapping age guides help families see what learning may look like now and what it can grow into. Every learner still begins with an interest-and-readiness conversation before a pathway, module and level are recommended.', '/garage/modules-by-age/'],
]

const CENTRES = [
  ['Bengaluru — Halasuru', 'The Halasuru centre brings the complete Learning Garage pathway range to families in and around central Bengaluru.', '/garage/our-centres/bengaluru-halasuru/'],
  ['Pune — Viman Nagar', 'The Viman Nagar centre is being prepared to deliver the complete Learning Garage pathway range.', '/garage/our-centres/pune-viman-nagar/'],
  ['Hyderabad — Banjara Hills', 'The Hyderabad centre is located in Banjara Hills. Its opening status and booking availability are being confirmed.', '/garage/our-centres/hyderabad-banjara-hills/'],
  ['Delhi — Lajpat Nagar', 'The Lajpat Nagar centre offers in-person, readiness-based STEM sessions for learners aged 5–18.', '/garage/our-centres/delhi-lajpat-nagar/'],
  ['Puducherry — 21K campus', 'The planned Puducherry Garage will connect the school day with hands-on STEM learning and public session bookings.', '/garage/our-centres/pondicherry/'],
]

const FAQS = [
  ['Who can join Learning Garage?', 'Any learner aged 5–18 may enquire, whether or not they attend 21K School. The age bands on the website are guidance. The team recommends a pathway and level after speaking with the learner and parent.'],
  ['What happens in a 90-minute session?', 'Learners receive a short concept introduction, work through a guided hands-on activity and test or demonstrate what they have made. The exact balance of instruction and independent work changes with the learner’s readiness and the tools involved.'],
  ['Can one pass cover different interests or centres?', 'Yes. A learner may use unused sessions across interests and Learning Garage centres within the pass validity period, subject to available slots and the suitability of the selected module.'],
  ['What should my child bring?', 'The Garage provides standard kits and project materials. Learners joining Coding, Gaming, AI or some Design sessions may need to bring a laptop. The booking confirmation will state the requirement.'],
]

export default function Garage() {
  usePageMeta(
    '21K Learning Garage | Hands-on STEM learning in India',
    'Explore in-person robotics, design, coding, electronics and AI + IoT sessions for learners aged 5–18 at 21K Learning Garage. Explore the next steps.',
  )
  return (
    <>
      <PageHero
        eyebrow="Programs · 21K Learning Garage"
        title="Imagine, Build and" accent="Belong at 21K Learning Garage"
        text="A physical learning space where learners aged 5–18 use real tools, kits and code to turn ideas into working projects."
        actions={<><Btn href={ext('/garage/book-a-session/')}>Book a Session</Btn><Btn href={ext('/garage/modules-by-age/')} variant="ghost">Modules by Age</Btn></>}
        note="We welcome learners from all schools — you don’t need to be a 21K School learner to book a Garage session."
        img={IMG.garageHero} imgAlt="A proud boy in safety goggles holding a small robot he built"
      />
      <Strip items={[['5–18', 'Learner ages'], ['5', 'Pathways'], ['90', 'Minutes a session'], ['5', 'Centres']]} />

      <Split eyebrow="The Garage" title="A place for learning with your hands" img={IMG.garageTeam} alt="A mentor guides three learners building a robot">
        <p>The Garage adds a physical, project-based space to the 21K learning ecosystem.</p>
        <p>Learners build, test, debug and demonstrate. A session may involve programming a robot, modelling a part for 3D printing, wiring a circuit, creating a game or connecting a sensor to an intelligent response. The work is practical, but the thinking behind it is equally important.</p>
        <p>The Garage is open to 21K learners and children from other schools. Programmes are delivered in person at standalone centres. The curriculum is organised into five pathways: Robotics + Design, Coding + Gaming, Electronics, AI + IoT, and Capstone + Tinkering.</p>
      </Split>

      <Section tint eyebrow="Five pathways" title="Choose what to build">
        <div className="grid">
          {PATHWAYS.map(([Icon, t, d, p]) => (
            <a key={t} className="card hover" href={ext(p)} target="_blank" rel="noreferrer">
              <span className="icon"><Icon size={22} /></span><h3>{t}</h3><p>{d}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section eyebrow="Placement" title="Start from readiness, not a rigid age label"
        intro="Age bands help families browse, while placement follows interest, prior exposure and demonstrated readiness.">
        <p className="prose">A parent and learner first speak with the Garage team. That conversation helps the team understand what the learner has tried before, what they want to make and whether Starter, Explorer or Builder is the right entry point. Projects and tools are chosen to suit the learner’s current understanding within the curriculum.</p>
        <div className="grid three">
          {LEVELS.map(([n, s, d]) => <div key={n} className="card level"><h3>{n}</h3><b>{s}</b><p>{d}</p></div>)}
        </div>
        <div className="grid three mt">
          {AGES.map(([t, s, d, p]) => (
            <a key={t} className="card hover" href={ext(p)} target="_blank" rel="noreferrer">
              <span className="tag">{s}</span><h3>{t}</h3><p>{d}</p>
            </a>
          ))}
        </div>
        <p className="center mt"><b>Let your child build, code and test real projects.</b></p>
        <p className="center"><Btn href={ext('/garage/book-a-session/')}>Book a Session</Btn></p>
      </Section>

      <Split tint flip eyebrow="Booking" title="Flexible sessions without a semester-long commitment" img={IMG.garageSpace} alt="Inside a Learning Garage: open tables, shelves and a bright floor">
        <p>Families choose a centre, interest and available slot, then book one session or a learning pass.</p>
        <p>Each session lasts 90 minutes, and a learner may attend up to two sessions in a day. Passes can be used across interests and centres within their validity. Equipment, standard project materials and certificates are included in the applicable session or pass fee.</p>
        <p>Certificates are issued by 21K Learning Garage after the required sessions and project presentation for the chosen level. They record the learner’s work and level of completion. They are not presented as an external qualification.</p>
      </Split>

      <Section>
        <div className="grid">
          {INFO.map(([Icon, t, d, p]) => (
            <a key={t} className="card hover" href={ext(p)} target="_blank" rel="noreferrer">
              <span className="icon"><Icon size={22} /></span><h3>{t}</h3><p>{d}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section id="centres" tint eyebrow="Locations" title="Our centres">
        <div className="grid">
          {CENTRES.map(([t, d, p]) => (
            <a key={t} className="card hover" href={ext(p)} target="_blank" rel="noreferrer">
              <span className="icon"><MapPin size={22} /></span><h3>{t}</h3><p>{d}</p>
            </a>
          ))}
          <a className="card hover" href={ext('/garage/inside-the-garage/')} target="_blank" rel="noreferrer">
            <span className="icon"><Cog size={22} /></span><h3>Inside the Garage</h3>
            <p>Learners move from an idea to a working demonstration using shared tools, adaptable build spaces and instructor guidance.</p>
          </a>
          <a className="card hover" href={ext('/garage/safety-and-supervision/')} target="_blank" rel="noreferrer">
            <span className="icon"><ShieldCheck size={22} /></span><h3>Safety and supervision</h3>
            <p>Learners use age- and readiness-appropriate equipment, while higher-risk work remains facilitator-operated or closely supervised.</p>
          </a>
        </div>
      </Section>

      <Section eyebrow="Gallery" title="Inside the Learning Garage" intro="See the space and a session before you visit.">
        <video className="rounded video" controls preload="none" src="https://www.21kschool.com/image-assets/video/learning-garage-tour.mp4" />
        <p className="muted center">Learners build and test robot cars with their mentors at a Learning Garage centre. One minute, music only.</p>
        <div className="gallery">
          {IMG.gallery.map((g) => <Img key={g.src} src={g.src} alt={g.alt} />)}
        </div>
      </Section>

      <Section tint eyebrow="FAQ" title="Questions parents ask" intro="Direct answers to common questions before you book.">
        <div className="split">
          <Faq items={FAQS} />
          <Enquiry title="Ask us about the Garage" sub="Book a free callback with our team." label="Verify & Talk to Garage Team" />
        </div>
      </Section>

      <CTA title="Your next step" text="Book a session to begin the eligibility conversation, or explore Modules by age to see where your child may start.">
        <Btn href={ext('/garage/book-a-session/')}>Book a Session</Btn>
        <Btn href="#centres" variant="ghost">Visit Our Centres</Btn>
        <Btn href={ext('/garage/modules-by-age/')} variant="ghost">Modules by Age</Btn>
      </CTA>
    </>
  )
}
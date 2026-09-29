import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, Heart, ShieldCheck, GraduationCap, Stethoscope,
  Users, HandHeart, BookOpen, Menu, X, Sparkles, Quote
} from 'lucide-react';
import './styles.css';

const stories = [
  {
    tag: 'Education',
    number: '01',
    title: 'A laptop that opened a door to engineering education',
    stat: '₹39,000',
    statLabel: 'laptop support',
    text: 'Gift provided a Dell laptop valued at ₹39,000 to a girl from a financially disadvantaged background who was pursuing a B.E. degree at an engineering college.',
    image: '/images/education-laptop.svg'
  },
  {
    tag: 'Women & Livelihood',
    number: '02',
    title: 'Practical support for 100 women',
    stat: '100',
    statLabel: 'women supported',
    text: 'In a documented 2020 initiative, 100 unmarried and widowed women around age 30 received advanced sewing machines and electric irons, with additional household and food support for participating families and children.',
    image: '/images/women-sewing.svg'
  },
  {
    tag: 'Education',
    number: '03',
    title: 'Keeping children connected to school',
    stat: '100',
    statLabel: 'students',
    text: 'Educational stationery and provisions, including notebooks and pencil boxes, were provided to 100 students from Grade 1 through Grade 12.',
    image: '/images/education-supplies.svg'
  },
  {
    tag: 'Education',
    number: '04',
    title: 'Helping three Bangalore families continue school',
    stat: '₹1,09,500',
    statLabel: 'education fees',
    text: 'Gift supported school fees for seven children across three families in Bangalore, covering students from Grade 3 through Grade 7.',
    image: '/images/family-education.svg'
  },
  {
    tag: 'Healthcare',
    number: '05',
    title: 'Standing with a family through medical hardship',
    stat: 'Ongoing',
    statLabel: 'family support',
    text: 'A family in Tirunelveli received medical provisions and treatment-related support, including transportation and facilities for care in Chennai, alongside long-term educational support for their daughter.',
    image: '/images/medical-family.svg'
  },
  {
    tag: 'Healthcare',
    number: '06',
    title: 'Help when treatment could not wait',
    stat: '₹1 lakh',
    statLabel: 'documented support',
    text: 'Gift documented support of ₹1,500 per month toward one family’s medical treatment and ₹1 lakh toward delivery and related expenses for a pregnant woman.',
    image: '/images/medical-family.svg'
  },
  {
    tag: 'Community Care',
    number: '07',
    title: 'Food support for a school community',
    stat: '300+',
    statLabel: 'students & parents',
    text: 'Gift provided food for 300 students and their parents at a blind school in Tirunelveli and also visited a school serving children with hearing and speech disabilities.',
    image: '/images/education-supplies.svg'
  },
  {
    tag: 'COVID-19 Response',
    number: '08',
    title: 'Supporting frontline workers',
    stat: '50',
    statLabel: 'helpers supported',
    text: 'During the COVID-19 period, Gift provided sanitizer, masks and herbal drinks to 50 helpers associated with an electricity board.',
    image: '/images/frontline-support.svg'
  }
];

const futureVision = [
  {
    icon: HandHeart,
    image: '/images/women-center.svg',
    label: 'WOMEN',
    title: 'A Safe Place for Every Woman',
    text: 'A future network of women-centered rural care spaces where women can seek help privately and without shame — with menstrual care, breastfeeding space, counseling, basic diagnosis, maternity support and a secure environment.'
  },
  {
    icon: Stethoscope,
    image: '/images/mission-hospital.svg',
    label: 'HEALTHCARE',
    title: 'Gift Mission Hospital',
    text: 'A long-term vision for a high-tech multispecialty mission hospital where care is free for all, supported by advanced diagnostics, critical care, digital systems, telemedicine and compassionate clinical services.'
  },
  {
    icon: GraduationCap,
    image: '/images/child-pathway.svg',
    label: 'EDUCATION',
    title: 'Every Child Deserves a Chance',
    text: 'A long-term education pathway for children from economically disadvantaged and rural communities — supporting not only immediate needs, but the journey toward higher education, independence and the ability to give back.'
  }
];

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Gift Charitable Trust home">
      <div className="brand-symbol"><span>G</span><Heart size={15} fill="currentColor" /></div>
      <div className="brand-wordmark">
        <strong>Gift</strong>
        <small>CHARITABLE TRUST</small>
      </div>
    </a>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <div className="site">
      <header className="nav">
        <Logo />
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <a href="#story" onClick={close}>Our Story</a>
          <a href="#work" onClick={close}>Our Work</a>
          <a href="#impact" onClick={close}>Stories of Impact</a>
          <a href="#vision" onClick={close}>Our Vision</a>
          <a href="#contact" onClick={close}>Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Be Part of the Journey <ArrowRight size={15}/></a>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Open navigation">
          {open ? <X/> : <Menu/>}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span /> ESTABLISHED IN SANKARANKOVIL · 2013</div>
              <h1>A Gift Today.<br/><em>A Better Tomorrow.</em></h1>
              <p className="hero-lead">
                Gift Charitable Trust connects generosity with meaningful change — supporting people,
                charitable organizations and community initiatives today, while holding a bigger vision for tomorrow.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#impact">Explore Our Impact <ArrowRight size={17}/></a>
                <a className="button outline" href="#vision">See Our Vision</a>
              </div>
            </div>
            <aside className="hero-panel">
              <div className="hero-image"><img src="/images/education-laptop.svg" alt="Student studying with a laptop" /></div>
              <div className="panel-icon"><Heart fill="currentColor" size={24}/></div>
              <div className="panel-label">OUR BELIEF</div>
              <h2>Good work deserves good support.</h2>
              <p>We don't have to do everything ourselves to make a difference.</p>
              <div className="panel-rule"/>
              <span>COLLECT · CONTRIBUTE · CONNECT · CARE</span>
            </aside>
          </div>
          <div className="hero-bottom">
            <span>Gift Charitable Trust</span>
            <span>Compassion in action</span>
          </div>
        </section>

        <section className="intro" id="story">
          <div className="section-kicker">OUR STORY</div>
          <div className="intro-grid">
            <h2>Started with a simple belief: <em>help should reach people.</em></h2>
            <div>
              <p>Gift Charitable Trust was established in Sankarankovil in 2013 with a purpose of supporting people who need care and attention around them.</p>
              <p>Over the years, documented work has included education support, medical assistance, food and basic-needs support, women’s empowerment initiatives, and support for charitable organizations and community efforts.</p>
              <p className="muted">Our approach has evolved. The old “1 Rupee a day” initiative belongs to an earlier chapter and is not a current program. What remains is the same commitment to turn compassion into action.</p>
            </div>
          </div>
          <div className="trust-strip">
            <div><strong>2013</strong><span>Trust established</span></div>
            <div><strong>TN/2019/0236516</strong><span>DARPAN Unique ID</span></div>
            <div><strong>Tamil Nadu</strong><span>Documented operating area</span></div>
          </div>
        </section>

        <section className="work" id="work">
          <div className="section-head">
            <div>
              <div className="section-kicker">OUR WORK</div>
              <h2>Support where it<br/>can matter most.</h2>
            </div>
            <p>Gift is not built around a single type of beneficiary or a single kind of intervention. We bring support to genuine needs and, where possible, strengthen the people and organizations already doing the work.</p>
          </div>
          <div className="work-grid">
            {[
              [HandHeart, 'Community Support', 'Food, clothing, essential provisions and practical help for people and families facing difficult circumstances.', '/images/food-community.svg'],
              [GraduationCap, 'Education', 'School materials, fees and longer-term educational support for children who may otherwise struggle to continue.', '/images/education-supplies.svg'],
              [Stethoscope, 'Medical Support', 'Financial and practical assistance for treatment, transportation, medical provisions and urgent family needs.', '/images/medical-family.svg'],
              [Users, 'Women & Families', 'Support for women, widows, children who have lost parents and families navigating financial hardship.', '/images/women-sewing.svg'],
              [ShieldCheck, 'Support to Organizations', 'Contributions to charitable trusts, care centers and community initiatives whose work aligns with genuine need.', '/images/family-education.svg'],
              [Heart, 'Dignity First', 'A simple principle behind every effort: people should be able to receive help without losing their dignity.', '/images/family-education.svg']
            ].map(([Icon,title,text,image]) => (
              <article className="work-card" key={title}>
                <img className="work-image" src={image} alt={title} />
                <div className="work-card-body"><Icon size={22}/><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="numbers">
          <div className="number-intro">
            <div className="section-kicker">DOCUMENTED HIGHLIGHTS</div>
            <h2>A few numbers.<br/><em>Many human stories.</em></h2>
            <p>These are examples drawn from Gift’s documented past activities. They are not presented as a complete measure of the Trust’s work.</p>
          </div>
          <div className="number-grid">
            <div><strong>100</strong><span>women supported in a documented 2020 empowerment initiative</span></div>
            <div><strong>₹1.09L</strong><span>education fees documented for seven children in three Bangalore families</span></div>
            <div><strong>₹39K</strong><span>Dell laptop support for an engineering student</span></div>
            <div><strong>300+</strong><span>students and parents supported with food at a Tirunelveli blind school</span></div>
          </div>
        </section>

        <section className="impact" id="impact">
          <div className="section-head">
            <div>
              <div className="section-kicker">STORIES OF IMPACT</div>
              <h2>Real people.<br/>Real needs. Real support.</h2>
            </div>
            <p>Beneficiary names are intentionally hidden on this website to protect privacy. The stories below preserve the documented facts while removing identifying names.</p>
          </div>
          <div className="story-grid">
            {stories.map((s) => (
              <article className="story-card" key={s.number}>
                <img className="story-image" src={s.image || '/images/story-3.svg'} alt="" />
                <div className="story-top">
                  <span className="story-number">{s.number}</span>
                  <span className="tag">{s.tag}</span>
                </div>
                <div className="story-stat"><strong>{s.stat}</strong><span>{s.statLabel}</span></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="vision" id="vision">
          <div className="vision-intro">
            <div className="section-kicker">OUR VISION FOR TOMORROW</div>
            <h2>Some dreams take time.<br/><em>We are building toward them.</em></h2>
            <p>Not everything we dream about exists today. We want to be transparent about that. These are long-term aspirations — a roadmap for what Gift hopes to make possible as the Trust grows.</p>
          </div>
          <div className="dream-grid">
            {futureVision.map(({icon: Icon, label, title, text}, i) => (
              <article className="dream-card" key={title}>
                <img className="dream-image" src={image} alt={title} />
                <div className="dream-meta"><span>0{i+1}</span><b>{label}</b></div>
                <Icon size={28}/>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="future-pill">FUTURE VISION</span>
              </article>
            ))}
          </div>
          <div className="vision-note"><Sparkles size={18}/><span>Today: support. Tomorrow: grow support. One day: build institutions that can serve for generations.</span></div>
        </section>

        <section className="privacy">
          <div className="privacy-icon"><ShieldCheck size={22}/></div>
          <div><div className="section-kicker">RESPECTING PRIVACY</div><h2>People are more important than publicity.</h2><p>We intentionally anonymize beneficiary names in our public stories. We believe meaningful help should never require someone to become a public story.</p></div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-copy">
            <div className="section-kicker">GET INVOLVED</div>
            <h2>Be part of the next chapter.</h2>
            <p>If you would like to support Gift, partner on an initiative, or explore how your contribution can reach a genuine need, we'd love to hear from you.</p>
            <a className="button light" href="mailto:info@gift.ngo">Start a Conversation <ArrowRight size={17}/></a>
          </div>
          <div className="contact-card">
            <Quote size={25}/>
            <p>“A gift can be small. What it becomes when it reaches the right place can be much bigger.”</p>
            <span>— The spirit behind Gift</span>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><Logo/><p>Compassion in action.</p></div>
        <div className="footer-nav">
          <a href="#story">Our Story</a><a href="#work">Our Work</a><a href="#impact">Impact</a><a href="#vision">Vision</a><a href="#contact">Contact</a>
        </div>
        <div className="footer-legal"><span>Gift Charitable Trust · Sankarankovil, Tamil Nadu</span><span>© {new Date().getFullYear()} Gift Charitable Trust</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

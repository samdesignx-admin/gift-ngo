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
    image: '/images/hero-student.webp'
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
    <a className="brand" href="/" aria-label="Gift Charitable Trust home">
      <img className="brand-logo" src="/images/Gift%20Logo%20New.png" alt="Gift Charitable Trust" />
    </a>
  );
}

function StoryCard({ s, compact = false }) {
  return (
    <article className={compact ? "feed-card" : "story-card"}>
      <img className={compact ? "feed-image" : "story-image"} src={s.image} alt="" />
      <div className="story-card-content">
        <div className="story-top">
          <span className="story-number">{s.number}</span>
          <span className="tag">{s.tag}</span>
        </div>
        <div className="feed-meta">{s.meta || 'Gift Charitable Trust'}</div>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
        {compact && <span className="read-story">Read story <ArrowRight size={14}/></span>}
      </div>
    </article>
  );
}

function StoriesPage() {
  return (
    <div className="site">
      <header className="nav">
        <Logo />
        <nav className="nav-links page-nav">
          <a href="/">Home</a>
          <a href="/#story">Our Story</a>
          <a href="/#work">Our Work</a>
          <a href="/#vision">Our Vision</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/#contact">Be Part of the Journey <ArrowRight size={15}/></a>
      </header>
      <main className="stories-page">
        <section className="stories-hero">
          <div className="section-kicker">STORIES OF IMPACT</div>
          <h1>Small acts of support.<br/><em>Human stories behind them.</em></h1>
          <p>These stories are drawn from Gift's documented work. Beneficiary names are intentionally hidden to protect privacy, while the documented facts and figures are retained.</p>
        </section>
        <section className="all-stories">
          {stories.map((s) => <StoryCard key={s.number} s={s} />)}
        </section>
      </main>
      <footer>
        <div className="footer-brand"><Logo/><p>Compassion in action.</p></div>
        <div className="footer-nav"><a href="/">Home</a><a href="/#story">Our Story</a><a href="/#work">Our Work</a><a href="/#vision">Vision</a><a href="/#contact">Contact</a></div>
        <div className="footer-legal"><span>Gift Charitable Trust · Sankarankovil, Tamil Nadu</span><span>© {new Date().getFullYear()} Gift Charitable Trust</span></div>
      </footer>
    </div>
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
          <a href="/stories" onClick={close}>Stories of Impact</a>
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
                <a className="button primary" href="#impact">Read Stories of Impact <ArrowRight size={17}/></a>
                <a className="button outline" href="#vision">See Our Vision</a>
              </div>
            </div>
            <aside className="hero-panel">
              <div className="hero-image"><img src="data:image/webp;base64,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" alt="Student studying with a laptop" /></div>
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
            <div className="section-kicker">THE BIGGER PICTURE</div>
            <h2>Years of giving.<br/><em>Many ways to help.</em></h2>
            <p>Gift's work has taken different forms over time. These figures bring documented activity together without turning individual acts of support into a project report.</p>
          </div>
          <div className="number-grid collective">
            <div><strong>13</strong><span>years since Gift Charitable Trust was established in 2013</span></div>
            <div><strong>100+</strong><span>students reached through documented education support</span></div>
            <div><strong>100+</strong><span>women reached through documented women-focused support</span></div>
            <div><strong>300+</strong><span>students and parents reached through a documented community-care effort</span></div>
          </div>
          <p className="numbers-note">Figures shown are based on documented support activities and may overlap; they are not a count of unique beneficiaries.</p>
        </section>

        <section className="impact" id="impact">
          <div className="section-head">
            <div>
              <div className="section-kicker">STORIES OF IMPACT</div>
              <h2>Stories worth sharing:<br/><em>one human moment at a time.</em></h2>
            </div>
            <p>Four stories are featured here on the homepage. The full collection lives on our Stories of Impact page. Beneficiary names remain hidden to protect privacy.</p>
          </div>
          <div className="featured-feed">
            {stories.slice(0, 4).map((s) => <StoryCard key={s.number} s={s} compact />)}
          </div>
          <div className="stories-more"><a className="button outline-dark" href="/stories">View All Stories <ArrowRight size={16}/></a></div>
        </section>

        <section className="vision" id="vision">
          <div className="vision-intro">
            <div className="section-kicker">OUR VISION FOR TOMORROW</div>
            <h2>Some dreams take time.<br/><em>We are building toward them.</em></h2>
            <p>Not everything we dream about exists today. We want to be transparent about that. These are long-term aspirations — a roadmap for what Gift hopes to make possible as the Trust grows.</p>
          </div>
          <div className="dream-grid">
            {futureVision.map(({icon: Icon, image, label, title, text}, i) => (
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
          <a href="#story">Our Story</a><a href="#work">Our Work</a><a href="/stories">Impact</a><a href="#vision">Vision</a><a href="#contact">Contact</a>
        </div>
        <div className="footer-legal"><span>Gift Charitable Trust · Sankarankovil, Tamil Nadu</span><span>© {new Date().getFullYear()} Gift Charitable Trust</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  window.location.pathname === '/stories' ? <StoriesPage /> : <App />
);

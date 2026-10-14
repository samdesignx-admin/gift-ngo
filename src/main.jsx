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
    image: '/images/hero-student.png'
  },
  {
    tag: 'Women & Livelihood',
    number: '02',
    title: 'Practical support for 100 women',
    stat: '100',
    statLabel: 'women supported',
    text: 'In a documented 2020 initiative, 100 unmarried and widowed women around age 30 received advanced sewing machines and electric irons, with additional household and food support for participating families and children.',
    image: '/images/women-sewing.png'
  },
  {
    tag: 'Education',
    number: '03',
    title: 'Keeping children connected to school',
    stat: '100',
    statLabel: 'students',
    text: 'Educational stationery and provisions, including notebooks and pencil boxes, were provided to 100 students from Grade 1 through Grade 12.',
    image: '/images/community-meal.png'
  },
  {
    tag: 'Education',
    number: '04',
    title: 'Helping three Bangalore families continue school',
    stat: '₹1,09,500',
    statLabel: 'education fees',
    text: 'Gift supported school fees for seven children across three families in Bangalore, covering students from Grade 3 through Grade 7.',
    image: '/images/family-education.png'
  },
  {
    tag: 'Healthcare',
    number: '05',
    title: 'Standing with a family through medical hardship',
    stat: 'Ongoing',
    statLabel: 'family support',
    text: 'A family in Tirunelveli received medical provisions and treatment-related support, including transportation and facilities for care in Chennai, alongside long-term educational support for their daughter.',
    image: '/images/healthcare-family.png'
  },
  {
    tag: 'Healthcare',
    number: '06',
    title: 'Help when treatment could not wait',
    stat: '₹1 lakh',
    statLabel: 'documented support',
    text: 'Gift documented support of ₹1,500 per month toward one family’s medical treatment and ₹1 lakh toward delivery and related expenses for a pregnant woman.',
    image: '/images/healthcare-family.png'
  },
  {
    tag: 'Community Care',
    number: '07',
    title: 'Food support for a school community',
    stat: '300+',
    statLabel: 'students & parents',
    text: 'Gift provided food for 300 students and their parents at a blind school in Tirunelveli and also visited a school serving children with hearing and speech disabilities.',
    image: '/images/community-meal.png'
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
    image: '/images/women-sewing.png',
    label: 'WOMEN',
    title: 'A Safe Place for Every Woman',
    text: 'A future network of women-centered rural care spaces where women can seek help privately and without shame — with menstrual care, breastfeeding space, counseling, basic diagnosis, maternity support and a secure environment.'
  },
  {
    icon: Stethoscope,
    image: '/images/future-campus.png',
    label: 'HEALTHCARE',
    title: 'Gift Mission Hospital',
    text: 'A long-term vision for a high-tech multispecialty mission hospital where care is free for all, supported by advanced diagnostics, critical care, digital systems, telemedicine and compassionate clinical services.'
  },
  {
    icon: GraduationCap,
    image: '/images/family-education.png',
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

function storySlug(title) {
  return title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function StoryCard({ s, compact = false }) {
  return (
    <article className={compact ? "feed-card" : "story-card"}>
      <a className="story-card-image-link" href={`/stories/${storySlug(s.title)}`} aria-label={`Read ${s.title}`}>
        <img className={compact ? "feed-image" : "story-image"} src={s.image} alt="" />
      </a>
      <div className="story-card-content">
        <div className="story-top">
          <span className="story-number">{s.number}</span>
          <span className="tag">{s.tag}</span>
        </div>
        <div className="feed-meta">{s.meta || 'Gift Charitable Trust'}</div>
        <h3><a className="story-title-link" href={`/stories/${storySlug(s.title)}`}>{s.title}</a></h3>
        <p>{s.text}</p>
        <a className="read-story" href={`/stories/${storySlug(s.title)}`}>Read story <ArrowRight size={14}/></a>
      </div>
    </article>
  );
}

function StoryDetailPage({ story }) {
  const related = stories.filter((item) => item.number !== story.number && item.tag === story.tag).slice(0, 2);
  return (
    <div className="site">
      <header className="nav">
        <Logo />
        <nav className="nav-links page-nav">
          <a href="/">Home</a><a href="/#story">Our Story</a><a href="/#work">Our Work</a><a href="/stories">Stories of Impact</a><a href="/#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/#contact">Be Part of the Journey <ArrowRight size={15}/></a>
      </header>
      <main className="story-detail-page">
        <div className="story-detail-wrap">
          <a className="story-back" href="/stories">← All stories</a>
          <div className="section-kicker">{story.tag} · STORY {story.number}</div>
          <h1>{story.title}</h1>
          <p className="story-detail-intro">{story.text}</p>
          <img className="story-detail-image" src={story.image} alt="" />
          <div className="story-detail-copy">
            <p>{story.text}</p>
            <aside className="story-detail-note"><ShieldCheck size={20}/><span>Beneficiary identities are intentionally kept private. This story shares the documented initiative without revealing personal details.</span></aside>
            <a className="button outline-dark" href="/stories">Explore all stories <ArrowRight size={16}/></a>
          </div>
          {related.length > 0 && <section className="story-related"><div className="section-kicker">MORE STORIES</div><h2>More from {story.tag}</h2><div className="featured-feed">{related.map((item) => <StoryCard key={item.number} s={item} compact />)}</div></section>}
        </div>
      </main>
      <footer>
        <div className="footer-brand"><Logo/><p>Compassion in action.</p></div>
        <div className="footer-nav"><a href="/">Home</a><a href="/stories">Stories of Impact</a><a href="/#vision">Vision</a><a href="/#contact">Contact</a></div>
        <div className="footer-legal"><span>Gift Charitable Trust · Sankarankovil, Tamil Nadu</span><span>© {new Date().getFullYear()} Gift Charitable Trust</span></div>
      </footer>
    </div>
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
              <div className="hero-image"><img src="/images/hero-student.png" alt="A student looking ahead on a school campus" /></div>
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
              [HandHeart, 'Community Support', 'Food, clothing, essential provisions and practical help for people and families facing difficult circumstances.', '/images/community-meal.png'],
              [GraduationCap, 'Education', 'School materials, fees and longer-term educational support for children who may otherwise struggle to continue.', '/images/hero-student.png'],
              [Stethoscope, 'Medical Support', 'Financial and practical assistance for treatment, transportation, medical provisions and urgent family needs.', '/images/healthcare-family.png'],
              [Users, 'Women & Families', 'Support for women, widows, children who have lost parents and families navigating financial hardship.', '/images/women-sewing.png'],
              [ShieldCheck, 'Support to Organizations', 'Contributions to charitable trusts, care centers and community initiatives whose work aligns with genuine need.', '/images/frontline-support.svg'],
              [Heart, 'Dignity First', 'A simple principle behind every effort: people should be able to receive help without losing their dignity.', '/images/family-education.png']
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

const storyPath = window.location.pathname.replace(/\/$/, '');
const storyMatch = storyPath.match(/^\/stories\/([^/]+)$/);
const selectedStory = storyMatch ? stories.find((story) => storySlug(story.title) === storyMatch[1]) : null;

createRoot(document.getElementById('root')).render(
  storyPath === '/stories'
    ? <StoriesPage />
    : selectedStory
      ? <StoryDetailPage story={selectedStory} />
      : <App />
);

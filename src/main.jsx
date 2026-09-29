import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Heart, ShieldCheck, GraduationCap, Stethoscope, Users, Menu, X } from 'lucide-react';
import './styles.css';

const impactStories = [
  { tag:'Education', title:'A Laptop to Help a Student Keep Moving Forward', text:'Supporting a student pursuing engineering education with an essential learning resource.' },
  { tag:'Women & Families', title:'Creating Opportunity, One Woman at a Time', text:'Supporting women and children through practical resources and community assistance.' },
  { tag:'Education', title:'Helping Children Continue Their Education', text:'Providing educational materials to students from economically disadvantaged families.' },
  { tag:'Healthcare', title:'Supporting a Family Through a Medical Crisis', text:'Providing medical and financial assistance when a family faced serious challenges.' }
];

const dreams = [
  { icon:Heart, title:'A Safe Place for Every Woman', text:'Women-centered care spaces in rural communities, designed around dignity, privacy, maternal support and access to care.' },
  { icon:Stethoscope, title:'Healthcare Without Barriers', text:'A future multispecialty mission hospital where quality healthcare is provided free of charge.' },
  { icon:GraduationCap, title:'Every Child Deserves a Chance', text:'Long-term education support for deserving children from economically disadvantaged and rural communities.' }
];

function App(){
  const [open,setOpen]=React.useState(false);
  return <div className="site">
    <header className="nav">
      <a className="brand" href="#top" aria-label="Gift Charitable Trust home">
        <div className="brand-mark"><span>G</span><Heart size={19} fill="currentColor"/></div>
        <div><strong>Gift</strong><small>CHARITABLE TRUST</small></div>
      </a>
      <nav className={open?'nav-links open':'nav-links'}>
        <a href="#about" onClick={()=>setOpen(false)}>Our Story</a>
        <a href="#impact" onClick={()=>setOpen(false)}>Stories of Impact</a>
        <a href="#vision" onClick={()=>setOpen(false)}>Our Vision</a>
        <a href="#involved" onClick={()=>setOpen(false)}>Get Involved</a>
      </nav>
      <a className="nav-cta" href="#involved">Support the Mission <ArrowRight size={16}/></a>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-glow"/>
        <div className="hero-copy">
          <div className="eyebrow"><span/> GIFT CHARITABLE TRUST · EST. 2013</div>
          <h1>A Gift Today.<br/><em>A Better Tomorrow.</em></h1>
          <p>Connecting generosity with meaningful change — supporting charitable work today while building a vision for healthcare, education and dignity tomorrow.</p>
          <div className="actions">
            <a className="button primary" href="#impact">See Our Impact <ArrowRight size={18}/></a>
            <a className="button ghost" href="#vision">Explore Our Vision</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="heart-ring"><Heart fill="currentColor"/></div>
          <p>We believe good work can go further when we support it together.</p>
          <div className="hero-line"/>
          <span>Collect · Contribute · Connect · Care</span>
        </div>
      </section>

      <section className="statement" id="about">
        <div className="section-kicker">WHY GIFT EXISTS</div>
        <h2>We don't have to do everything ourselves to make a difference.</h2>
        <p>Gift Charitable Trust mobilizes contributions and supports charitable trusts, NGOs, community initiatives and people facing genuine needs. Our work has evolved over time, but the purpose remains: to turn compassion into action.</p>
      </section>

      <section className="how">
        <div className="section-head"><div><div className="section-kicker">OUR APPROACH</div><h2>Good work deserves good support.</h2></div><p>Sometimes the most powerful thing we can do is stand behind people and organizations already serving their communities.</p></div>
        <div className="steps">
          {[
            ['01','Listen','Identify genuine needs and opportunities where support can make a difference.'],
            ['02','Give','Bring together contributions from people who want to help.'],
            ['03','Support','Contribute resources to charitable organizations and initiatives.'],
            ['04','Amplify','Help meaningful work reach further.']
          ].map(([n,t,d])=><article className="step" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section className="impact" id="impact">
        <div className="section-head"><div><div className="section-kicker">STORIES OF IMPACT</div><h2>Real support.<br/>Meaningful change.</h2></div><p>Stories from Gift's documented work. Beneficiary names are intentionally hidden to protect privacy.</p></div>
        <div className="story-grid">{impactStories.map((s,i)=><article className="story" key={s.title}><div className="story-image"><span>{String(i+1).padStart(2,'0')}</span><Heart size={25}/></div><div className="story-body"><span className="tag">{s.tag}</span><h3>{s.title}</h3><p>{s.text}</p><a href="#involved">Read the story <ArrowRight size={15}/></a></div></article>)}</div>
      </section>

      <section className="vision" id="vision">
        <div className="vision-intro"><div className="section-kicker">OUR VISION FOR TOMORROW</div><h2>Some dreams take time.</h2><p>Today, we support. Tomorrow, we aspire to build institutions that can serve communities for generations.</p></div>
        <div className="dreams">{dreams.map(({icon:Icon,title,text},i)=><article className="dream" key={title}><div className="dream-number">0{i+1}</div><Icon size={26}/><h3>{title}</h3><p>{text}</p><span className="dream-arrow"><ArrowRight/></span></article>)}</div>
        <div className="vision-bottom"><strong>Our belief</strong><span>Where circumstances shouldn't decide the future.</span></div>
      </section>

      <section className="join" id="involved">
        <div className="join-copy"><div className="section-kicker">BE PART OF THE JOURNEY</div><h2>Every gift becomes part of something bigger.</h2><p>A contribution may seem small on its own. Together, generosity can support a child’s education, help a family through a medical crisis, strengthen a charitable initiative — and help bring a much bigger dream closer.</p><a className="button light" href="mailto:info@gift.ngo">Get in Touch <ArrowRight size={18}/></a></div>
        <div className="join-orbit"><div><Heart fill="currentColor" size={42}/><span>Give<br/>Hope</span></div></div>
      </section>
    </main>

    <footer><div><strong>Gift</strong><span>CHARITABLE TRUST</span></div><p>Connecting generosity with meaningful change.</p><div className="footer-links"><a href="#about">Our Story</a><a href="#impact">Impact</a><a href="#vision">Vision</a><a href="#involved">Contact</a></div></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
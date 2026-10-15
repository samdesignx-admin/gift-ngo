import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, Heart, ShieldCheck, GraduationCap, Stethoscope,
  Users, HandHeart, BookOpen, Menu, X, Sparkles, Quote, IndianRupee, HeartHandshake, CheckCircle2
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

const storyDetails = {
  "01": {
    "kicker": "Education · Digital access",
    "lead": "A single device can make a meaningful difference when a student is working toward a degree but lacks the tools needed to study.",
    "sections": [
      [
        "The challenge",
        "Students from rural and financially disadvantaged backgrounds can have clear ambitions for higher education and still face practical barriers: tuition costs, study materials and access to technology."
      ],
      [
        "The support",
        "Gift Charitable Trust documented providing a Dell laptop valued at ₹39,000 to a young woman from a financially disadvantaged background who was pursuing a Bachelor of Engineering degree."
      ],
      [
        "Why access matters",
        "A laptop can support research, assignments, digital learning and the everyday work of an engineering course. The documented contribution focused on one practical need that could help the student continue her studies."
      ],
      [
        "A wider commitment",
        "This story reflects Gift’s belief that educational support should respond to real barriers. Alongside individual assistance, the Trust has documented support for school fees, stationery and essential learning provisions."
      ]
    ],
    "close": "Gift’s role was to provide the documented laptop support. The student’s identity is withheld to protect her privacy."
  },
  "02": {
    "kicker": "Women & livelihoods · 2020 initiative",
    "lead": "Livelihood support can offer women a practical tool to build skills, explore income opportunities and strengthen their independence.",
    "sections": [
      [
        "The need",
        "Gift developed a women’s empowerment initiative for women and girl children facing day-to-day hardship in Sivagiri and Sankarankovil, in Tamil Nadu’s Tenkasi district."
      ],
      [
        "The initiative",
        "On 18 February 2020, the Trust documented a programme supporting 100 unmarried and widowed women, around 30 years of age, with advanced sewing machines and electric irons. The programme also included kitchen items such as cooking vessels, grinders and mixers, as well as food and other provisions for girl children who had lost their parents."
      ],
      [
        "Making the equipment useful",
        "A team of five volunteers travelled to identify women and families experiencing hardship. Volunteers helped distribute the machines and, where needed, install them at recipients’ homes—an important practical step beyond handing over equipment."
      ],
      [
        "A community effort",
        "The event took place at Hamsa Heritage, Sahana Hall, Sankarankovil. Community guests and supporters attended to encourage the women and children. The Trust acknowledged the volunteers whose time helped make the initiative possible."
      ],
      [
        "The longer view",
        "The initiative was built around dignity, confidence and the possibility of greater financial independence. This is a documented programme from 2020, not a claim that the same scheme is currently running."
      ]
    ],
    "close": "Figures and details are drawn from Gift’s historical report. Individual beneficiaries’ names are not displayed."
  },
  "03": {
    "kicker": "Education · School essentials",
    "lead": "For a child, having basic school supplies can help make the school day more manageable and support participation in learning.",
    "sections": [
      [
        "The everyday barriers",
        "Notebooks, pencil boxes and other learning materials are recurring expenses, and those costs can weigh heavily on families already managing basic household needs."
      ],
      [
        "What Gift provided",
        "Gift documented providing educational stationery—including notebooks, pencil boxes and other provisions—to 100 students from Grade 1 through Grade 12."
      ],
      [
        "Support beyond the classroom",
        "The Trust’s historical report also records distributing clothes and blankets to 100 women, providing masks and sanitizers to 300 rural basic workers, offering food and beverages to 300 workers, and providing equipment such as cooking vessels and small vehicles to widows seeking to sustain small businesses."
      ],
      [
        "Why practical help counts",
        "These forms of assistance addressed immediate needs while helping students and families maintain stability. They reflect a practical approach: listen to what people need, then direct support toward useful essentials."
      ],
      [
        "A continuing priority",
        "Gift’s documented work includes educational provisions for students in rural and urban communities, as well as efforts to help families who struggle with school-related costs."
      ]
    ],
    "close": "These figures describe activities recorded in historical reports, not current-year totals."
  },
  "04": {
    "kicker": "Education · School fee assistance",
    "lead": "When school fees become unaffordable, children’s education can be put at risk. Targeted fee support can help families keep learning on track.",
    "sections": [
      [
        "The families",
        "Gift documented education assistance for three families in Bangalore whose children attended Mohre Public School and Sapthagiri Vidyalaya. The report described the pressure on families trying to meet school expenses while managing other necessities."
      ],
      [
        "How the support was allocated",
        "The recorded support totalled ₹1,09,500 for seven children from Grade 3 through Grade 7: ₹34,000 for two daughters in one family, ₹45,000 for three children in another family, and ₹30,500 for two children in the third family."
      ],
      [
        "Keeping education within reach",
        "School fees are a direct and time-sensitive cost. By contributing toward them, Gift aimed to help these families continue their children’s schooling instead of having educational costs become an additional source of hardship."
      ],
      [
        "Part of a wider effort",
        "The Trust’s source material also describes educational stationery and other provisions for students, reflecting a focus on both school costs and the supplies needed to participate in learning."
      ],
      [
        "Privacy and dignity",
        "The original report included family and student names. They are intentionally omitted from this public story to respect the children’s privacy."
      ]
    ],
    "close": "The ₹1,09,500 total and allocation breakdown come from Gift’s historical education-support report."
  },
  "05": {
    "kicker": "Healthcare · Family support",
    "lead": "Medical hardship affects more than the person receiving treatment. It can also place pressure on a family’s transport, finances and ability to plan for the future.",
    "sections": [
      [
        "Support around a difficult period",
        "Gift’s historical material describes helping a family in the Tirunelveli area with medical provisions and treatment-related needs. The support also included practical assistance associated with accessing care in Chennai."
      ],
      [
        "Looking beyond one immediate need",
        "The account describes support that extended over time, including educational assistance for the family’s daughter. This reflects how health and household stability are connected: when a family faces medical costs, children’s needs do not disappear."
      ],
      [
        "A practical, partner-aware approach",
        "Gift collects support and contributes to people and charitable organizations addressing genuine needs. It does not operate a residential care facility or claim to provide clinical treatment itself."
      ],
      [
        "What this story represents",
        "This is an account of assistance described in the Trust’s historical materials, not a medical case report. Personal identities and private medical details are withheld."
      ]
    ],
    "close": "Gift’s documented role was supportive and financial; treatment and clinical care were provided through healthcare services."
  },
  "06": {
    "kicker": "Healthcare · Emergency assistance",
    "lead": "When a medical expense cannot be postponed, timely financial help can ease some of the pressure on a family.",
    "sections": [
      [
        "Monthly treatment assistance",
        "Gift’s historical report describes providing ₹1,500 per month toward one family’s medical treatment. The recurring contribution was intended to help with an ongoing expense rather than a single one-time need."
      ],
      [
        "Help with delivery expenses",
        "The same report documents ₹1 lakh in assistance toward delivery and related expenses for a pregnant woman. The support was intended to help the family manage costs around childbirth."
      ],
      [
        "Care with dignity",
        "Medical circumstances are deeply personal. This public story keeps names and identifying details private and does not disclose clinical information that is not necessary to understand the assistance."
      ],
      [
        "Part of a broader mission",
        "The report also describes community activities including distributing food and sweets to children and families, and providing masks, sanitizers and basic provisions during the COVID-19 crisis."
      ]
    ],
    "close": "These are historical figures documented by Gift Charitable Trust, not a current open programme or promise of medical funding."
  },
  "07": {
    "kicker": "Community care · Food and inclusion",
    "lead": "A shared meal can be a simple act of care—and a way to recognize children and families who are too often overlooked.",
    "sections": [
      [
        "A visit focused on inclusion",
        "Gift documented a visit to a school serving children with hearing and speech disabilities to understand needs and offer provisions. The report recognized the role such schools can play through education, skills development and supportive services."
      ],
      [
        "Food for students and families",
        "The Trust documented providing food for 300 students and their parents at a blind school in Tirunelveli. The activity brought practical assistance to a school community that included children with visual disabilities and their families."
      ],
      [
        "Relief when communities are hit hard",
        "Gift’s historical material also records support for people affected by the Chennai floods, including food, blankets, clothing and other provisions. These activities shared a common purpose: respond to urgent basic needs when people are vulnerable."
      ],
      [
        "Partnership makes the work possible",
        "Gift contributes support and works alongside community organizations, rather than claiming to operate the schools or provide specialist services itself."
      ],
      [
        "Respect and access",
        "The story focuses on the community and the assistance provided, not on portraying disability as a limitation or identifying individual children."
      ]
    ],
    "close": "These school activities and figures are drawn from historical reports; partner institutions delivered their own education and support services."
  },
  "08": {
    "kicker": "Community care · COVID-19 response",
    "lead": "During a public-health emergency, basic protective supplies and food can help support the people who keep essential services running.",
    "sections": [
      [
        "The context",
        "Gift’s historical reports describe the economic strain and shortages many families and rural workers experienced during COVID-19. Loss of income and limited access to essentials made day-to-day life more difficult."
      ],
      [
        "Protective supplies for workers",
        "One documented initiative provided face masks and sanitizers to 300 basic workers living in rural areas. Another report describes distributing sanitizer, masks and herbal drinks to 50 helpers associated with an electricity board."
      ],
      [
        "Food and essentials",
        "The Trust also recorded providing food and beverages to 300 basic workers, along with clothes and blankets for women in need. These activities addressed immediate, practical needs during a period of uncertainty."
      ],
      [
        "A collective response",
        "The reports describe community support as a shared effort made possible through volunteers, donors and people willing to contribute. Small, useful items were one way to offer care and solidarity."
      ],
      [
        "A historical record",
        "These figures describe past COVID-era activities and are not presented as a current distribution programme."
      ]
    ],
    "close": "This story summarizes activities recorded in Gift’s historical reports and does not imply the COVID-era initiative is still active."
  }
};

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
          <a href="/">Home</a><a href="/#story">Our Story</a><a href="/#work">Our Work</a><a href="/stories">Stories of Impact</a><a href="/#contact">Contact</a><a href="/donate">Donate</a><a href="/donate">Donate</a>
        </nav>
        <a className="nav-cta" href="/donate">Donate <Heart size={15}/></a>
      </header>
      <main className="story-detail-page">
        <div className="story-detail-wrap">
          <a className="story-back" href="/stories">← All stories</a>
          <div className="section-kicker">{(storyDetails[story.number] && storyDetails[story.number].kicker) || story.tag} · STORY {story.number}</div>
          <h1>{story.title}</h1>
          <p className="story-detail-intro">{(storyDetails[story.number] && storyDetails[story.number].lead) || story.text}</p>
          <img className="story-detail-image" src={story.image} alt="" />
          <div className="story-detail-copy">
            {(storyDetails[story.number]?.sections || [["The story", story.text]]).map(([heading, paragraph]) => <section className="story-chapter" key={heading}><h2>{heading}</h2><p>{paragraph}</p></section>)}
            <aside className="story-detail-note"><ShieldCheck size={20}/><span>{storyDetails[story.number]?.close || "Beneficiary identities are intentionally kept private."}</span></aside>
            <a className="button outline-dark" href="/stories">Explore all stories <ArrowRight size={16}/></a>
          </div>         {related.length > 0 && <section className="story-related"><div className="section-kicker">MORE STORIES</div><h2>More from {story.tag}</h2><div className="featured-feed">{related.map((item) => <StoryCard key={item.number} s={item} compact />)}</div></section>}
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
        <a className="nav-cta" href="/donate">Donate <Heart size={15}/></a>
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


function DonatePage() {
 const [amount,setAmount]=React.useState('1000'),[custom,setCustom]=React.useState(''),[campaign,setCampaign]=React.useState('general'),[frequency,setFrequency]=React.useState('once'),[name,setName]=React.useState(''),[email,setEmail]=React.useState(''),[phone,setPhone]=React.useState(''),[anonymous,setAnonymous]=React.useState(false),[busy,setBusy]=React.useState(false),[processing,setProcessing]=React.useState(false),[message,setMessage]=React.useState('');
 const rupees=Number(amount==='custom'?custom:amount);
 const causes={general:'Where the need is greatest',education:'Education & school support',healthcare:'Medical & family support',women:'Women & livelihoods',community:'Food & community care'};
 async function donate(e){e.preventDefault();setMessage('');if(!Number.isSafeInteger(rupees)||rupees<100||rupees>10000000){setMessage('Please enter a donation between ₹100 and ₹1,00,00,000.');return;}if(!name.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setMessage('Please enter your name and a valid email address.');return;}setBusy(true);try{
 const endpoint=frequency==='once'?'/api/razorpay/order':'/api/razorpay/subscription';
 const r=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({amount:rupees,campaign,frequency,donor:{name:name.trim(),email:email.trim(),phone:phone.trim()},anonymous})});const d=await r.json();if(!r.ok)throw new Error(d.error||'Unable to start checkout.');
 if(!window.Razorpay)throw new Error('Secure checkout did not load. Refresh the page and try again.');
 const options={key:d.keyId,amount:d.amount,currency:d.currency||'INR',name:'Gift Charitable Trust',description:causes[campaign],order_id:d.orderId,subscription_id:d.subscriptionId,prefill:{name,email,contact:phone},notes:{campaign,anonymous:anonymous?'yes':'no',frequency},theme:{color:'#d92f3a'},handler:async result=>{setProcessing(true);setMessage('');try{const vr=await fetch('/api/razorpay/verify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...result,amount:rupees,campaign,frequency,donor:{name,email},anonymous})});const v=await vr.json();if(!vr.ok||!v.verified)throw new Error(v.error||'Verification is pending. Contact care@gift.ngo before retrying.');const receipt={...v,amount:v.amount??rupees,campaign:v.campaign||campaign,frequency,anonymous:v.anonymous??anonymous,donor:{...(v.donor||{}),name:v.donor?.name||name.trim(),email:v.donor?.email||email.trim(),phone:phone.trim()},verifiedAt:new Date().toISOString()};sessionStorage.setItem('giftDonationReceipt',JSON.stringify(receipt));window.location.assign('/donation-success');}catch(err){setProcessing(false);setMessage(err.message||'Payment verification is pending. Please contact care@gift.ngo.');}},modal:{ondismiss:()=>setMessage('Checkout closed. No confirmation was recorded on this page.')}};
 const checkout=new window.Razorpay(options);checkout.on('payment.failed',ev=>setMessage(ev.error?.description||'Payment was not completed. Please try again.'));checkout.open();
 }catch(err){setMessage(err.message||'Something went wrong. Please try again.');}finally{setBusy(false);}}
 if(processing)return <div className="site legal-site"><main className="receipt-main"><div className="receipt-card processing-card"><div className="payment-spinner" role="status" aria-label="Verifying payment"></div><div className="section-kicker">SECURE PAYMENT</div><h1>Confirming your donation</h1><p className="receipt-lead">Razorpay has returned your payment result. We’re securely verifying it and preparing your receipt. Please keep this page open.</p><p className="receipt-help">This usually takes a few seconds. Need help? <a href="mailto:care@gift.ngo">care@gift.ngo</a></p></div></main></div>;
  return <div className="site donate-site"><header className="nav donate-nav"><Logo/><div className="donate-nav-actions"><a className="nav-cta" href="#donation-widget">Donate <Heart size={15}/></a><details className="site-menu"><summary aria-label="Open site navigation" title="Open site navigation"><span></span><span></span><span></span></summary><nav className="site-menu-panel" aria-label="Primary and secondary navigation"><strong>Explore Gift</strong><a href="/">Home</a><a href="/#story">Our Story</a><a href="/#work">Our Work</a><a href="/#vision">Our Vision</a><a href="/stories">Stories of Impact</a><a href="/donate">Donate</a><a href="/donation-policy">Donation & Refund Policy</a><a href="/tax-and-receipts">Tax & Receipts</a><a href="/privacy-policy">Privacy Policy</a><a href="/terms-and-conditions">Terms & Conditions</a><a href="/#contact">Contact</a><a href="mailto:care@gift.ngo">Email care@gift.ngo</a></nav></details></div></header>
 <main className="donate-main"><section id="donation-widget" className="donation-layout donation-layout-top"><form className="donation-form" onSubmit={donate}><div className="form-eyebrow"><Heart fill="currentColor" size={18}/> MAKE A DONATION</div><h2>Choose your contribution</h2><label className="form-label">Donation frequency</label><div className="frequency-options"><button type="button" className={frequency==='once'?'selected':''} onClick={()=>setFrequency('once')}>One-time</button><button type="button" className={frequency==='monthly'?'selected':''} onClick={()=>setFrequency('monthly')}>Monthly</button><button type="button" className={frequency==='yearly'?'selected':''} onClick={()=>setFrequency('yearly')}>Yearly</button></div>{frequency!=='once'&&<p className="recurring-note">Recurring payments must be enabled on Gift's Razorpay account. If the feature is not enabled, checkout will explain what is missing.</p>}<label className="form-label" htmlFor="donation-campaign">Choose a cause</label><select id="donation-campaign" value={campaign} onChange={e=>setCampaign(e.target.value)}>{Object.entries(causes).map(([v,l])=><option value={v} key={v}>{l}</option>)}</select><label className="form-label">Donation amount (INR)</label><div className="amount-options">{['500','1000','2500','5000'].map(v=><button type="button" key={v} className={amount===v?'selected':''} onClick={()=>setAmount(v)}>₹{Number(v).toLocaleString('en-IN')}</button>)}<button type="button" className={amount==='custom'?'selected':''} onClick={()=>setAmount('custom')}>Custom</button></div>{amount==='custom'&&<input aria-label="Custom donation amount in rupees" type="number" min="100" max="10000000" step="1" placeholder="Enter amount (minimum ₹100)" value={custom} onChange={e=>setCustom(e.target.value)} required/>}<div className="form-two"><label><span className="form-label">Your name</span><input autoComplete="name" value={name} onChange={e=>setName(e.target.value)} required placeholder="Full name"/></label><label><span className="form-label">Email address</span><input type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@example.com"/></label></div><label className="form-label">Phone number <span className="optional-label">(optional)</span></label><input type="tel" autoComplete="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Include country code if outside India"/><label className="anonymous-check"><input type="checkbox" checked={anonymous} onChange={e=>setAnonymous(e.target.checked)}/><span>Keep my name off public donor acknowledgements.</span></label><button className="button primary donate-submit" type="submit" disabled={busy}>{busy?'Preparing secure checkout…':<>Continue securely · ₹{Number.isFinite(rupees)?rupees.toLocaleString('en-IN'):'—'} <ArrowRight size={17}/></>}</button><p className="payment-disclaimer"><ShieldCheck size={15}/> Payments are processed by Razorpay. Do not enter card or bank details on this page.</p>{message&&<div className="donation-message" role="status">{message}</div>}</form><div className="donation-context donation-intro"><div className="section-kicker">GIVE WITH PURPOSE</div><h1>Your generosity can help<br/><em>make tomorrow brighter.</em></h1><p>Support Gift Charitable Trust’s community work in education, healthcare, women’s livelihoods and essential care. Choose a cause or let us direct your gift to the greatest need.</p><div className="donate-trust"><span><ShieldCheck size={17}/> Secure Razorpay checkout</span><span><HeartHandshake size={17}/> Every contribution matters</span></div><img className="donation-intro-image" src="/images/community-meal.png" alt="Community members sharing a meal"/><div className="donation-cause"><span className="cause-icon"><GraduationCap/></span><div><h3>Education</h3><p>Help support school materials, fees and learning opportunities.</p></div></div><div className="donation-cause"><span className="cause-icon"><Stethoscope/></span><div><h3>Medical & family support</h3><p>Contribute toward practical help for families facing hardship.</p></div></div><div className="donation-cause"><span className="cause-icon"><Users/></span><div><h3>Women & community care</h3><p>Support livelihood initiatives and essential community provisions.</p></div></div><p className="donation-transparency">Campaigns describe intended areas of support. Contributions are managed by Gift Charitable Trust and allocated according to the selected purpose and actual needs. Contact us if you need more information before donating.</p></div>
 </section><section className="donate-bottom"><CheckCircle2/><div><h2>Giving should be clear and respectful.</h2><p>We protect beneficiary privacy and aim to use contributions responsibly. For questions about donations, receipts or campaign allocation, contact <a href="mailto:care@gift.ngo">care@gift.ngo</a>.</p></div></section><footer><div className="footer-brand"><Logo/><p>Compassion in action.</p></div><div className="footer-nav"><a href="/">Home</a><a href="/stories">Stories of Impact</a><a href="/#work">Our Work</a><a href="mailto:care@gift.ngo">Contact</a></div><div className="footer-legal"><span>Gift Charitable Trust · Sankarankovil, Tamil Nadu</span><span>© {new Date().getFullYear()} Gift Charitable Trust</span></div></footer><script src="https://checkout.razorpay.com/v1/checkout.js" async></script></div>;
}


function DonationSuccessPage() {
 const [receipt,setReceipt]=React.useState(null);
 React.useEffect(()=>{try{const v=sessionStorage.getItem('giftDonationReceipt');if(v)setReceipt(JSON.parse(v));}catch{}},[]);
 const causes={general:'Where the need is greatest',education:'Education & school support',healthcare:'Medical & family support',women:'Women & livelihoods',community:'Food & community care'};
 function downloadReceipt(){if(!receipt)return;const esc=v=>String(v??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));const date=receipt.paymentDate?new Date(receipt.paymentDate*1000).toLocaleString('en-IN'):new Date(receipt.verifiedAt||Date.now()).toLocaleString('en-IN');const html='<!doctype html><html><head><meta charset="utf-8"><title>Donation receipt - Gift Charitable Trust</title><style>body{font:16px Arial,sans-serif;color:#222;max-width:760px;margin:36px auto;padding:24px;line-height:1.55}.top{border-bottom:4px solid #d92f3a;padding-bottom:18px}.muted,small{color:#666}.row{display:flex;justify-content:space-between;gap:20px;border-bottom:1px solid #ddd;padding:12px 0}.amount{font-size:28px;font-weight:bold;color:#c92d38}.notice{background:#fff4e5;padding:16px;border-left:4px solid #d92f3a;margin-top:22px}</style></head><body><div class="top"><h1>Gift Charitable Trust</h1><p class="muted">Donation receipt & acknowledgement · Sankarankovil, Tamil Nadu, India</p></div><h2>Thank you for your generosity</h2><p>This receipt records a donation confirmed through Razorpay. Please retain it for your records.</p><p class="amount">₹'+Number(receipt.amount||0).toLocaleString('en-IN')+'</p><div class="row"><b>Donor</b><span>'+esc(receipt.donor?.name)+'</span></div><div class="row"><b>Email</b><span>'+esc(receipt.donor?.email)+'</span></div><div class="row"><b>Purpose</b><span>'+esc(causes[receipt.campaign]||receipt.campaign)+'</span></div><div class="row"><b>Frequency</b><span>'+esc(receipt.frequency==='once'?'One-time':receipt.frequency)+'</span></div><div class="row"><b>Payment ID</b><span>'+esc(receipt.paymentId||'')+'</span></div><div class="row"><b>Payment date</b><span>'+esc(date)+'</span></div><div class="row"><b>Status</b><span>Verified'+(receipt.captured?' and captured':'')+'</span></div><div class="notice"><h3>Section 80G Tax Exemption</h3><p>Gift Charitable Trust holds valid approval under Section 80G of the Income-tax Act, 1961. Approval details: PAN <b>AABTG8906C</b>; URN <b>AABTG8906CF20213</b>; approval document number <b>AABTG8906CF2021301</b>.</p><p>Eligible donors may claim a deduction for their donations, subject to applicable income-tax laws, prescribed limits and their individual tax circumstances, including the tax regime applicable to them. The deduction available, if any, depends on the donor’s eligibility and applicable tax provisions.</p></div><p>Donation questions: <b>care@gift.ngo</b></p><small>This acknowledgement is not a substitute for statutory tax documentation required by law.</small></body></html>';const url=URL.createObjectURL(new Blob([html],{type:'text/html;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='Gift-Donation-Receipt-'+(receipt.paymentId||'donation')+'.html';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);}
 if(!receipt)return <div className="site legal-site"><header className="nav"><Logo/><a className="nav-cta" href="/donate">Donate <Heart size={15}/></a></header><main className="receipt-main"><div className="receipt-card"><ShieldCheck size={38}/><h1>Donation details unavailable</h1><p>This page displays receipt details immediately after a verified donation in this browser. If your payment succeeded, contact <a href="mailto:care@gift.ngo">care@gift.ngo</a> with your Razorpay payment reference.</p><a className="button primary" href="/donate">Return to donations</a></div></main></div>;
 return <div className="site legal-site"><header className="nav"><Logo/><nav className="nav-links page-nav"><a href="/">Home</a><a href="/stories">Stories of Impact</a><a href="/donate">Donate</a></nav><a className="nav-cta" href="/donate">Donate <Heart size={15}/></a></header><main className="receipt-main"><div className="receipt-card"><div className="receipt-check"><CheckCircle2 size={42}/></div><div className="section-kicker">PAYMENT CONFIRMED</div><h1>Thank you for your generosity.</h1><p className="receipt-lead">Your donation to Gift Charitable Trust has been verified. Keep this acknowledgement for your records.</p><div className="receipt-amount">₹{Number(receipt.amount||0).toLocaleString('en-IN')}</div><div className="receipt-details"><div><span>Donor</span><strong>{receipt.donor?.name}</strong></div><div><span>Email</span><strong>{receipt.donor?.email}</strong></div><div><span>Purpose</span><strong>{causes[receipt.campaign]||receipt.campaign}</strong></div><div><span>Frequency</span><strong>{receipt.frequency==='once'?'One-time':receipt.frequency}</strong></div><div><span>Payment reference</span><strong>{receipt.paymentId||receipt.subscriptionId||'Verified'}</strong></div><div><span>Payment date</span><strong>{receipt.paymentDate?new Date(receipt.paymentDate*1000).toLocaleString('en-IN'):new Date(receipt.verifiedAt||Date.now()).toLocaleString('en-IN')}</strong></div><div><span>Status</span><strong>Verified{receipt.captured?' & captured':''}</strong></div></div><div className="receipt-tax"><h2>Section 80G Tax Exemption</h2><p>Gift Charitable Trust holds valid approval under Section 80G of the Income-tax Act, 1961.</p><p>Eligible donors may claim a deduction for their donations, subject to applicable income-tax laws, prescribed limits and their individual tax circumstances, including the tax regime applicable to them. The deduction available, if any, depends on the donor’s eligibility and applicable tax provisions.</p><p>This receipt acknowledges your contribution. Please retain it for your records.</p></div><button className="button primary receipt-download" onClick={downloadReceipt}>Download donation receipt <ArrowRight size={17}/></button><p className="receipt-help">Need help? <a href="mailto:care@gift.ngo">care@gift.ngo</a></p><a href="/" className="receipt-home">Return to Gift Charitable Trust</a></div></main><footer><div className="footer-brand"><Logo/><p>Compassion in action.</p></div><div className="footer-nav"><a href="/">Home</a><a href="/donate">Donate</a><a href="/donation-policy">Donation & Refund Policy</a><a href="/tax-and-receipts">Receipts & Tax</a><a href="mailto:care@gift.ngo">Contact</a></div><div className="footer-legal"><span>Gift Charitable Trust · Sankarankovil, Tamil Nadu</span><span>© {new Date().getFullYear()} Gift Charitable Trust</span></div></footer></div>;
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
          <a href="/donate" onClick={close}>Donate</a>
          <a href="/donate" onClick={close}>Donate</a>
        </nav>
        <a className="nav-cta" href="/donate">Donate <Heart size={15}/></a>
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
                <a className="button primary" href="/donate">Support Our Work <Heart size={17}/></a>
                <a className="button outline" href="#impact">Read Stories of Impact <ArrowRight size={17}/></a>
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
            <a className="button light" href="/donate">Make a Donation <Heart size={17}/></a>
            <a className="contact-email" href="mailto:care@gift.ngo">Or contact us at care@gift.ngo</a>
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
          <a href="#story">Our Story</a><a href="#work">Our Work</a><a href="/stories">Impact</a><a href="#vision">Vision</a><a href="/donate">Donate</a><a href="/privacy-policy">Privacy</a><a href="/terms">Terms</a><a href="/donation-policy">Donations & Refunds</a><a href="#contact">Contact</a>
        </div>
        <div className="footer-legal"><span>Gift Charitable Trust · Sankarankovil, Tamil Nadu</span><span>© {new Date().getFullYear()} Gift Charitable Trust</span></div>
      </footer>
    </div>
  );
}


const legalPages = {
  '/privacy-policy': {
    title: 'Privacy Policy', updated: '14 October 2026',
    intro: 'Gift Charitable Trust respects the privacy of people who visit this website, contact us or choose to make a donation.',
    sections: [
      ['Information we may collect', 'When you contact us or make a donation, we may collect information you choose to provide, such as your name, email address, phone number, donation amount, selected cause and donation reference. Basic technical information may also be processed to keep the website secure and functioning.'],
      ['How information is used', 'We use submitted information to process and acknowledge donations, respond to enquiries, maintain financial and statutory records, prevent misuse, communicate about a transaction and meet applicable legal obligations. We do not promise that information will never be shared; limited information may be shared with payment providers, hosting and technical service providers, professional advisers or authorities where necessary and lawful.'],
      ['Payment information', 'Payments are handled through Razorpay checkout. Gift.ngo does not ask you to enter card or bank credentials directly into this website. Payment providers process payment information under their own terms and privacy practices.'],
      ['Public acknowledgements', 'If you select the option to keep your name off public donor acknowledgements, we will respect that preference for public acknowledgements. It does not mean we can omit information required for accounting, payment processing or legal compliance.'],
      ['Retention and security', 'We retain records for as long as reasonably needed for the purposes described above, including applicable accounting and legal requirements. We use reasonable safeguards, but no internet transmission or storage system can be guaranteed completely secure.'],
      ['Your choices and contact', 'You may contact care@gift.ngo to ask about personal information you submitted or to request a correction, subject to applicable legal and recordkeeping requirements. We may need to verify your identity before acting on a request.']
    ]
  },
  '/terms': {
    title: 'Website Terms of Use', updated: '14 October 2026',
    intro: 'These terms apply to your use of gift.ngo and its donation and information pages. By using the website, you agree to use it lawfully and responsibly.',
    sections: [
      ['About the website', 'Gift.ngo shares information about Gift Charitable Trust, its charitable activities and ways to support its work. Website content is general information and may be updated as activities and priorities change.'],
      ['Donations', 'A donation is voluntary. Please review the amount, frequency and selected cause before proceeding to payment. A submitted payment request is not proof that a payment succeeded; the transaction must be confirmed by the payment provider.'],
      ['Use of funds', 'A selected cause communicates the donor’s intended area of support. Subject to applicable law and any specific written commitment accepted by the Trust, donations are administered by Gift Charitable Trust for charitable purposes and may be directed to related needs, delivery costs or urgent priorities when appropriate. Contact us before donating if you need clarification about a particular restriction.'],
      ['Acceptable use', 'You must not misuse the website, attempt unauthorised access, interfere with its operation, submit false information or use the website for unlawful activity.'],
      ['Third-party services', 'Payment processing and other external services may be subject to separate terms and privacy notices. Gift Charitable Trust is not responsible for third-party websites or services outside its control.'],
      ['Changes and contact', 'We may update these terms by publishing a revised version on this page. Questions can be sent to care@gift.ngo. These terms are subject to applicable laws of India, with the competent courts having jurisdiction as determined by applicable law.']
    ]
  },
  '/donation-policy': {
    title: 'Donation, Cancellation & Refund Policy', updated: '14 October 2026',
    intro: 'Please read this policy before completing a donation to Gift Charitable Trust.',
    sections: [
      ['Voluntary contributions', 'Donations are voluntary contributions toward the charitable work of Gift Charitable Trust. Please check the amount, cause and frequency carefully before authorising payment.'],
      ['Payment confirmation', 'A donation is treated as received only after the payment provider confirms successful payment and the Trust can reconcile the transaction. If money has been debited but no confirmation is shown, please contact us with the transaction reference and date. Do not send full card numbers, PINs or passwords.'],
      ['No refunds', 'All donations made to Gift Charitable Trust are final and non-refundable. Once a donation has been completed, it cannot be cancelled or refunded, including donations made in error or duplicate donations. Please carefully verify the donation amount, selected cause and frequency before confirming payment. If you experience a payment error, an amount is debited without confirmation, or you need help identifying a transaction, contact care@gift.ngo with the transaction reference, amount and date. We will help investigate payment errors and coordinate with the payment provider where appropriate; this does not constitute a promise of a refund. Never send full card numbers, PINs or passwords by email.'],
      ['Failed or pending transactions', 'If a transaction fails or remains pending, check your bank or payment-provider status first. Any reversal for a failed transaction is handled according to the bank and payment provider’s processes. Please contact us if the amount remains debited without a successful donation confirmation.'],
      ['Receipts and records', 'We aim to provide donation acknowledgements when the payment is confirmed and the required donor details are available. Please keep your payment confirmation for reference. An acknowledgement is not, by itself, a guarantee of tax deductibility.'],
      ['Contact', 'For donation questions or refund requests, email care@gift.ngo and include the payment reference. Please do not email card or bank authentication details.']
    ]
  },
  '/recurring-donations': {
    title: 'Recurring Donations Policy', updated: '14 October 2026',
    intro: 'This page explains the intended terms for monthly or yearly donations made through the website, where recurring payments are enabled for Gift Charitable Trust’s Razorpay account.',
    sections: [
      ['Authorisation and frequency', 'When you choose a recurring donation, review the amount and interval shown at checkout and authorise the subscription through the payment provider. The subscription is subject to successful setup and the provider’s applicable terms.'],
      ['Charges and payment status', 'A recurring contribution may be charged at the selected interval while the subscription remains active and payment authorisation remains valid. The payment provider may notify you about authentication, failures or other subscription events. A subscription request is not confirmation that recurring payments are active; please rely on the provider’s confirmation.'],
      ['Changing or cancelling', 'To request cancellation or assistance with a recurring donation, contact care@gift.ngo and include the email used for the donation and any subscription reference. You may also use available subscription controls provided by Razorpay or your payment method. Requests should be made before the next scheduled charge; timing may depend on the provider’s processing rules. We will confirm when we can verify the cancellation.'],
      ['Failed payments and refunds', 'If a scheduled payment fails, the provider may retry or suspend the subscription under its rules. A completed recurring donation is subject to the Donation, Cancellation & Refund Policy. If you believe a charge is incorrect or unauthorised, contact us promptly and contact your payment provider where appropriate.'],
      ['Availability', 'Recurring donations are offered only when enabled and available for the Trust’s account. If checkout indicates that the feature is unavailable, the subscription has not been successfully established.']
    ]
  },
  '/tax-and-receipts': {
    title: 'Donation Receipts & Tax Information', updated: '14 October 2026',
    intro: 'Gift Charitable Trust holds valid approval under Section 80G of the Income-tax Act, 1961. Eligible donors may claim deductions subject to applicable law and their individual tax circumstances.',
    sections: [
      ['Receipts', 'Please provide accurate contact details so a donation acknowledgement can be associated with your payment. If you need help locating an acknowledgement, contact care@gift.ngo with your payment reference, date and amount.'],
      ['Section 80G deductions', 'Gift Charitable Trust holds valid approval under Section 80G of the Income-tax Act, 1961. Eligible donors may claim a deduction for donations, subject to applicable income-tax laws, prescribed limits and the donor’s individual tax circumstances, including the tax regime applicable to them. The deduction available, if any, depends on the donor’s eligibility and applicable tax provisions.'],
      ['Required certificates and reporting', 'Where applicable and legally required, eligible institutions may have reporting and certificate obligations. The Trust will provide tax-related documentation only where it is authorised and required to do so. A payment receipt or acknowledgement alone does not establish eligibility for a deduction.'],
      ['International donors', 'Donors outside India should not assume that a contribution is tax-deductible in their country of residence. Please seek independent tax advice for your circumstances. Cross-border contributions may also be subject to additional legal restrictions and payment-provider availability.'],
      ['Contact', 'For help locating a donation acknowledgement or correcting donor details, contact care@gift.ngo with your payment reference, date and amount.']
    ]
  }
};
function LegalPage({page}) {
 const data=legalPages[page] || legalPages['/terms'];
 return <div className="site legal-site"><header className="nav"><Logo/><nav className="nav-links page-nav"><a href="/">Home</a><a href="/#work">Our Work</a><a href="/stories">Impact</a><a href="/donate">Donate</a><a href="/#contact">Contact</a></nav><a className="nav-cta" href="/donate">Donate <Heart size={15}/></a></header><main className="legal-main"><div className="section-kicker">GIFT CHARITABLE TRUST · POLICIES</div><h1>{data.title}</h1><p className="legal-updated">Last updated: {data.updated}</p><p className="legal-intro">{data.intro}</p>{data.sections.map(([heading,body])=><section className="legal-section" key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<div className="legal-contact"><strong>Gift Charitable Trust</strong><p>Sankarankovil, Tamil Nadu, India</p><a href="mailto:care@gift.ngo">care@gift.ngo</a></div><a className="button primary" href="/donate">Make a donation <ArrowRight size={17}/></a></main><footer><div className="footer-brand"><Logo/><p>Compassion in action.</p></div><div className="footer-nav"><a href="/">Home</a><a href="/donate">Donate</a><a href="/privacy-policy">Privacy Policy</a><a href="/terms">Terms of Use</a><a href="/donation-policy">Donation & Refund Policy</a><a href="/recurring-donations">Recurring Donations</a><a href="/tax-and-receipts">Receipts & Tax</a></div><div className="footer-legal"><span>Gift Charitable Trust · Sankarankovil, Tamil Nadu</span><span>© {new Date().getFullYear()} Gift Charitable Trust</span></div></footer></div>;
}

const storyPath = window.location.pathname.replace(/\/$/, '');
const storyMatch = storyPath.match(/^\/stories\/([^/]+)$/);
const selectedStory = storyMatch ? stories.find((story) => storySlug(story.title) === storyMatch[1]) : null;

createRoot(document.getElementById('root')).render(
  storyPath === '/donate'
    ? <DonatePage />
    : storyPath === '/donation-success'
    ? <DonationSuccessPage />
    : legalPages[storyPath]
    ? <LegalPage page={storyPath} />
    : storyPath === '/stories'
    ? <StoriesPage />
    : selectedStory
      ? <StoryDetailPage story={selectedStory} />
      : <App />
);

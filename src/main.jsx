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
          <a href="/">Home</a><a href="/#story">Our Story</a><a href="/#work">Our Work</a><a href="/stories">Stories of Impact</a><a href="/#contact">Contact</a><a href="/donate">Donate</a>
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


function DonatePage() {
  const [amount, setAmount] = React.useState('1000');
  const [customAmount, setCustomAmount] = React.useState('');
  const [campaign, setCampaign] = React.useState('general');
  const [frequency, setFrequency] = React.useState('once');
  const [donor, setDonor] = React.useState({name:'',email:'',phone:''});
  const [anonymous, setAnonymous] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const actualAmount = Number(amount === 'custom' ? customAmount : amount);
  const campaigns = {
    general: 'Where the need is greatest',
    education: 'Education & school support',
    healthcare: 'Medical & family support',
    women: 'Women & livelihoods',
    community: 'Food & community care'
  };
  async function donate(e) {
    e.preventDefault(); setMessage('');
    if (!Number.isFinite(actualAmount) || actualAmount < 100 || actualAmount > 10000000) {
      setMessage('Please enter a donation between ₹100 and ₹1,00,00,000.'); return;
    }
    if (!donor.name.trim() || !/^\S+@\S+\.\S+$/.test(donor.email)) {
      setMessage('Please enter your name and a valid email address.'); return;
    }
    setBusy(true);
    try {
      const endpoint = frequency === 'once' ? '/api/razorpay/order' : '/api/razorpay/subscription';
      const payload = { amount: actualAmount, campaign, campaignName: campaigns[campaign], donor: { name: donor.name.trim(), email: donor.email.trim(), phone: donor.phone.trim() }, anonymous };
      const response = await fetch(endpoint, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'We could not start checkout. Please try again.');
      if (!window.Razorpay) throw new Error('Secure checkout did not load. Please refresh and try again.');
      const options = {
        key: data.keyId, amount: data.amount, currency: data.currency || 'INR',
        name: 'Gift Charitable Trust', description: campaigns[campaign],
        order_id: data.orderId, subscription_id: data.subscriptionId,
        prefill: { name: donor.name, email: donor.email, contact: donor.phone },
        notes: { campaign, anonymous: anonymous ? 'yes' : 'no', donation_frequency: frequency },
        theme: { color:'#d92f3a' },
        handler: async (result) => {
          try {
            const check = await fetch('/api/razorpay/verify', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...result,amount:actualAmount,campaign,campaignName:campaigns[campaign],frequency,donor:{name:donor.name.trim(),email:donor.email.trim()},anonymous})});
            const verified = await check.json();
            if (!check.ok || !verified.verified) throw new Error(verified.error || 'Payment verification is pending. Please contact us before retrying.');
            setMessage('Thank you. Your payment has been verified. Reference: ' + (verified.paymentId || verified.subscriptionId || 'received') + '. A confirmation will be sent to the email provided if email notifications are configured.');
          } catch (err) { setMessage(err.message || 'Payment received by checkout; verification is pending. Please contact info@gift.ngo.'); }
        },
        modal: { ondismiss: () => setMessage('Checkout closed. No confirmation was recorded on this page.') }
      };
      const checkout = new window.Razorpay(options);
      checkout.on('payment.failed', (event) => setMessage(event.error?.description || 'Payment was not completed. Please try again.'));
      checkout.open();
    } catch (err) { setMessage(err.message || 'Something went wrong. Please try again.'); }
    finally { setBusy(false); }
  }
  return <div className="site donate-site">
    <header className="nav"><Logo/><nav className="nav-links page-nav"><a href="/">Home</a><a href="/#work">Our Work</a><a href="/stories">Stories of Impact</a><a href="/#vision">Our Vision</a><a href="/#contact">Contact</a></nav><a className="nav-cta" href="/donate">Donate <Heart size={15}/></a></header>
    <main className="donate-main">
      <section className="donate-hero"><div className="donate-hero-copy"><div className="section-kicker">GIVE WITH PURPOSE</div><h1>Your generosity can help<br/><em>make tomorrow brighter.</em></h1><p>Support Gift Charitable Trust's community work in education, healthcare, women’s livelihoods and essential care. Choose where your gift should go, or let us direct it to the greatest need.</p><div className="donate-trust"><span><ShieldCheck size={17}/> Secure Razorpay checkout</span><span><HeartHandshake size={17}/> Every contribution matters</span></div></div><div className="donate-hero-image"><img src="/images/community-meal.png" alt="Community members sharing a meal" /></div></section>
      <section className="donation-layout"><div className="donation-context"><div className="section-kicker">CHOOSE YOUR IMPACT</div><h2>One act of giving.<br/><em>Many ways to care.</em></h2><div className="donation-cause"><span className="cause-icon"><GraduationCap/></span><div><h3>Education</h3><p>Help support school materials, fees and learning opportunities.</p></div></div><div className="donation-cause"><span className="cause-icon"><Stethoscope/></span><div><h3>Medical & family support</h3><p>Contribute toward practical help for families facing hardship.</p></div></div><div className="donation-cause"><span className="cause-icon"><Users/></span><div><h3>Women & community care</h3><p>Support livelihood initiatives and essential community provisions.</p></div></div><p className="donation-transparency">Campaigns on this page describe intended areas of support. Contributions are managed by Gift Charitable Trust and allocated according to the selected purpose and actual needs. Please contact us if you need more information before donating.</p></div>
      <form className="donation-form" onSubmit={donate}><div className="form-eyebrow"><Heart fill="currentColor" size={18}/> MAKE A DONATION</div><h2>Choose your contribution</h2><label className="form-label">Donation frequency</label><div className="frequency-options"><button type="button" className={frequency==='once'?'selected':''} onClick={()=>setFrequency('once')}>One-time</button><button type="button" className={frequency==='monthly'?'selected':''} onClick={()=>setFrequency('monthly')}>Monthly</button><button type="button" className={frequency==='yearly'?'selected':''} onClick={()=>setFrequency('yearly')}>Yearly</button></div>{frequency!=='once'&&<p className="recurring-note">Recurring donations require recurring payments to be enabled on Gift's Razorpay account. If setup is incomplete, checkout will explain what is missing.</p>}<label className="form-label" htmlFor="campaign">Choose a cause</label><select id="campaign" value={campaign} onChange={e=>setCampaign(e.target.value)}>{Object.entries(campaigns).map(([value,label])=><option value={value} key={value}>{label}</option>)}</select><label className="form-label">Donation amount (INR)</label><div className="amount-options">{['500','1000','2500','5000'].map(v=><button type="button" key={v} className={amount===v?'selected':''} onClick={()=>setAmount(v)}>₹{Number(v).toLocaleString('en-IN')}</button>)}<button type="button" className={amount==='custom'?'selected':''} onClick={()=>setAmount('custom')}>Custom</button></div>{amount==='custom'&&<input aria-label="Custom donation amount in rupees" type="number" min="100" max="10000000" step="1" placeholder="Enter amount (minimum ₹100)" value={customAmount} onChange={e=>setCustomAmount(e.target.value)} required/>}<div className="form-two"><label><span className="form-label">Your name</span><input autoComplete="name" value={donor.name} onChange={e=>setDonor({...donor,name:e.target.value})} required placeholder="Full name"/></label><label><span className="form-label">Email address</span><input type="email" autoComplete="email" value={donor.email} onChange={e=>setDonor({...donor,email:e.target.value})} required placeholder="you@example.com"/></label></div><label className="form-label">Phone number <span className="optional-label">(optional)</span></label><input type="tel" autoComplete="tel" value={donor.phone} onChange={e=>setDonor({...donor,phone:e.target.value})} placeholder="Include country code if outside India"/><label className="anonymous-check"><input type="checkbox" checked={anonymous} onChange={e=>setAnonymous(e.target.checked)}/><span>Keep my name off public donor acknowledgements.</span></label><button className="button primary donate-submit" type="submit" disabled={busy}>{busy?'Preparing secure checkout…':<>Continue securely · ₹{Number.isFinite(actualAmount)?actualAmount.toLocaleString('en-IN'):'—'} <ArrowRight size={17}/></>}</button><p className="payment-disclaimer"><ShieldCheck size={15}/> Payments are processed by Razorpay. Do not enter card or bank details on this page.</p>{message&&<div className="donation-message" role="status">{message}</div>}</form></section>
      <section className="donate-bottom"><CheckCircle2/><div><h2>Giving should be clear and respectful.</h2><p>We protect beneficiary privacy and aim to use contributions responsibly. For questions about donations, receipts or campaign allocation, contact <a href="mailto:info@gift.ngo">info@gift.ngo</a>.</p></div></section>
    </main>
    <footer><div className="footer-brand"><Logo/><p>Compassion in action.</p></div><div className="footer-nav"><a href="/">Home</a><a href="/stories">Stories of Impact</a><a href="/#work">Our Work</a><a href="mailto:info@gift.ngo">Contact</a></div><div className="footer-legal"><span>Gift Charitable Trust · Sankarankovil, Tamil Nadu</span><span>© {new Date().getFullYear()} Gift Charitable Trust</span></div></footer>
    <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
  </div>;
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
            <a className="contact-email" href="mailto:info@gift.ngo">Or contact us at info@gift.ngo</a>
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
          <a href="#story">Our Story</a><a href="#work">Our Work</a><a href="/stories">Impact</a><a href="#vision">Vision</a><a href="/donate">Donate</a><a href="#contact">Contact</a>
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
  storyPath === '/donate'
    ? <DonatePage />
    : storyPath === '/stories'
    ? <StoriesPage />
    : selectedStory
      ? <StoryDetailPage story={selectedStory} />
      : <App />
);

// English site content. Rich fields (with <strong>) are HTML strings rendered
// via the <Rich> helper. Faithful to the finalized prototype copy.
export const en = {
  lang: 'en',
  langCode: 'EN',
  otherLangHref: '/de',
  otherLangLabel: 'DE',

  nav: {
    brand: 'Julian Zarges',
    links: [
      { id: 'profile', label: 'Profile' },
      { id: 'work', label: 'Experience' },
      { id: 'expertise', label: 'Expertise' },
      { id: 'contact', label: 'Contact' },
    ],
    cta: 'Request CV',
  },

  hero: {
    eyebrow: 'Operations Leadership & Industrial Transformation',
    name: 'Julian Zarges',
    lead: 'I build, integrate and realign industrial systems — then anchor every improvement as the new standard.',
    location: 'Markgröningen, Germany',
    years: '~15 years in industry',
    ctaPrimary: 'Request my CV',
    ctaEmail: 'Email me',
    ctaLinkedin: 'LinkedIn',
  },

  metrics: [
    { count: 100, prefix: '€', suffix: 'M+', decimals: 0, display: '€100M+', label: 'Validated potential · lead plant' },
    { count: 35, suffix: '', decimals: 0, display: '35', label: 'Plants within governance reach' },
    { count: 150, suffix: '+', decimals: 0, display: '150+', label: 'Organization led to independence' },
    { count: 3.6, suffix: 'M', decimals: 1, display: '3.6M', label: 'Units / year, scaled from zero' },
  ],

  profile: {
    eyebrow: 'Profile',
    paragraphs: [
      "I'm an operations and transformation leader with full cost and result ownership (P&L) — from running a value stream in China to steering structural cost transformation across plants today. Repeatedly I've been handed systems that had to be built, integrated, or realigned — and brought each into independent, working execution.",
      "My principle is a simple loop: solve the problem at its root, then return the solution to the standard — from the shop floor to governance across 35 plants. I'm seeking leadership and result responsibility in operations, manufacturing, or industrial transformation, and consciously orienting beyond core automotive toward regulated, precision-driven industries — medical technology, defense, aerospace, energy, semiconductors, industrial manufacturing — where operational steering and governance meet.",
    ],
  },

  experience: {
    eyebrow: 'Professional Experience',
    intro: 'Three times I’ve been handed a system that had to be built, integrated, or realigned — a greenfield value stream in China, a divisional post-merger integration, a four-plant cost transformation. Each one I brought to independent, working execution.',
    jobs: [
      {
        date: '05/2025 – Present',
        location: 'Schwäbisch Gmünd / Markgröningen',
        title: 'Project Lead — Horizon Plant Cost Transformation Program',
        company: 'Robert Bosch GmbH · Automotive Steering · reporting to the divisional management board',
        bullets: [
          'Steer a cross-plant cost transformation across four sites — <strong>target −30 % value-added cost per unit</strong>; validated potential of <strong>€100–150M (lead plant)</strong> and €25–50M, consolidated into group-wide value-creation governance (VCP).',
          'Established a clear implementation structure and transitioned the lead plant into stable, independent execution after handover.',
          'Rightsizing with judgment: structural cost reduction while preserving capability and retaining the workforce — targets met without loss of substance or engagement.',
        ],
      },
      {
        date: '09/2022 – 04/2025',
        location: 'Stuttgart',
        title: 'Technical Assistant — Office of the Executive Vice President&nbsp;<span style="letter-spacing:-0.3px">Manufacturing, Industrialization and Digitalization</span>',
        company: 'Robert Bosch GmbH · reporting directly to the EVP, two divisions',
        bullets: [
          'Strategic advisor to divisional leadership for manufacturing, industrialization and digitalization; prepared cross-divisional governance decisions for <strong>35 global plants</strong>.',
          'Post-merger integration Vehicle Motion: designed and steered the realignment of accountability and reporting across two merged organizations into a single operating and governance model.',
        ],
      },
      {
        date: '04/2019 – 09/2022',
        location: 'Suzhou, China',
        title: 'Senior Manager (Expatriate) — Value Stream IPB',
        company: 'Bosch Automotive · Suzhou',
        bullets: [
          'Ran a greenfield value stream with <strong>full cost &amp; result ownership (P&amp;L)</strong> — built and led a <strong>150+</strong> organization to independence; scaled from zero to <strong>3.6M units/year</strong> at <strong>~90 % OEE</strong> (~€96M CapEx scope), owning and exceeding every SQCP target.',
          'Self-initiated Industry 4.0 maintenance platform became a Bosch group standard — <strong>−70 % downtime-analysis time</strong>.',
        ],
      },
      {
        date: '08/2015 – 03/2019',
        location: 'Blaichach',
        title: 'Project Lead Final Assembly / Manufacturing Planner',
        company: 'Robert Bosch GmbH · Blaichach',
        bullets: [
          'Designed and implemented the first IPB final assembly line — all SOP targets met.',
          'Owned production release and series ramp-up within international simultaneous-engineering teams; designed fully automated line concepts to global standards.',
        ],
      },
    ],
    earlier: {
      date: '2010 – 2012',
      location: 'Hannover · Affalterbach',
      title: 'Earlier Positions',
      body: '<strong style="color:#2c3742">Benecke-Kaliko (Continental), Hannover</strong> — task-force lead, process optimization, six sigma&nbsp; · <strong style="color:#2c3742">Mercedes-AMG, Affalterbach</strong> — vehicle release, SLS Roadster, through to CEO sign-off.',
    },
  },

  expertise: {
    eyebrow: 'Core Competencies',
    cards: [
      { title: 'Responsibility & Scope', body: 'CapEx ~€96M · Multi-site program steering (4 plants) · Governance across 35 plants · Post-merger integration' },
      { title: 'Strategic', body: 'Site & footprint strategy · Launch & change management · Cost & efficiency programs · Industry 4.0' },
      { title: 'Leadership', body: 'Cross-functional teams (150+) · Organizational development · Executive governance · Stakeholder management' },
      { title: 'Governance & Standards', body: 'IATF 16949 discipline transferable to ISO 13485 · VDI member · Mentor, Careerbuddy (5+ high potentials)' },
    ],
  },

  education: {
    eyebrow: 'Education',
    items: [
      { date: 'until 12/2026', title: 'Executive MBA', note: '(in progress)', school: 'Quantic School of Business & Technology · Global Strategy & Leadership' },
      { date: '2015', title: 'M.Sc. Mechanical Engineering', school: 'TU Braunschweig · thesis at Robert Bosch GmbH Corporate Research, Renningen' },
      { date: '2013 – 2014', title: 'Exchange semester — University of Waterloo, Canada', school: 'Full DAAD-ISAP scholarship' },
      { date: '2012', title: 'B.Sc. Mechanical Engineering', school: 'TU Braunschweig' },
    ],
  },

  languages: {
    eyebrow: 'Languages',
    items: [
      { name: 'German', level: 'Native', pct: 100 },
      { name: 'English', level: 'Fluent', pct: 92 },
      { name: 'Chinese', level: 'HSK 2', pct: 34 },
    ],
  },

  contact: {
    eyebrow: "Let's talk",
    heading: 'Ready for the next leadership step.',
    para: 'Open to roles with direct leadership and result responsibility — in operations, manufacturing, industrialization or transformation. My focus is on regulated, precision-driven industries where governance and operational excellence come together: defense and aerospace, medical technology, energy, semiconductors and demanding industrial manufacturing — as well as automotive. What matters to me is the principle, not the sector.',
    email: 'julian@zarges.pro',
    phone: '+49 174 7511438',
    linkedinUrl: 'https://www.linkedin.com/in/julian-zarges/',
    linkedinLabel: 'linkedin.com/in/julian-zarges',
  },

  form: {
    title: 'Request my full CV',
    intro: "For data-protection reasons I share my full CV on request. Leave your details and the reason for reaching out — I'll get back to you shortly with the right documents.",
    name: 'Your name',
    company: 'Company',
    email: 'Contact email',
    role: 'Role / reason for reaching out',
    message: 'Message (optional)',
    submit: 'Request CV →',
    sending: 'Sending…',
    errRequired: 'Please complete name, company, email and reason.',
    errEmail: 'Please enter a valid email address.',
    errSend: 'Could not send automatically — opening your email app instead…',
    privacy: 'Your details are used only to respond to your request.',
    thanks: 'Thank you',
    successMsg: "Your request has been received. I'll get back to you shortly with the right documents.",
  },

  footer: {
    copyright: '© 2026 Julian Zarges',
    right: 'Markgröningen, Germany · zarges.pro · ',
    impressum: 'Impressum & Privacy',
  },
}

/**
 * ============================================================
 *  SITE CONTENT — edit this file to change the website.
 * ============================================================
 *  Every word, number, link and image path on the site lives here.
 *  You never need to touch the components to change text.
 *
 *  How to edit safely:
 *   - Only change text between the quotes: 'like this'
 *   - Keep the commas at the end of lines.
 *   - If a line has an apostrophe inside, use "double quotes" around it,
 *     e.g. "I'm ShahRukh".
 *   - Anything starting with [NEEDS: ...] or [ADD ...] is a placeholder (hidden on the site) still waiting
 *     for real information. Never replace it with a made-up number.
 *   - Write for a business owner or an HR manager, not for a marketer.
 *     Plain words, no jargon.
 * ============================================================
 */

export const site = {
  // ---------- Basics ----------
  name: 'ShahRukh Sulehry',
  role: 'Senior Performance Marketing Specialist',
  location: 'Dubai, UAE',
  url: 'https://shahrukhsulehry.com',

  // ---------- Contact (used by every button on the site) ----------
  contact: {
    whatsappNumber: '971507630090', // digits only, no + or spaces
    whatsappMessage: "Hi ShahRukh, I found you through your website.",
    phoneDisplay: '+971 50 763 0090',
    phoneLink: '+971507630090',
    email: 'hello@shahrukhsulehry.com',
    bookingUrl: '', // [NEEDS: Cal.com link]. While empty, "Book a call" opens WhatsApp instead.
    linkedin: 'https://www.linkedin.com/in/shahrukh-sulehry-2900b232b/',
    instagram: 'https://www.instagram.com/i_shahrukhsulehry',
    cvUrl: '/ShahRukh-Sulehry-CV.pdf', // the PDF in the /public folder
  },

  // ---------- Contact form (Web3Forms) ----------
  form: {
    // [NEEDS: Web3Forms access key] (free at web3forms.com, sent to your Gmail)
    web3formsKey: '',
    successMessage: "Thanks, I've got it. I'll reply within one working day.",
  },

  // ---------- Tracking ----------
  tracking: {
    gtmId: 'GTM-KBZ8QNFP',
  },

  // ---------- SEO (what Google and LinkedIn previews show) ----------
  seo: {
    title: 'ShahRukh Sulehry | Performance Marketing Specialist, Dubai',
    description:
      'Dubai performance marketer for real estate, e-commerce and lead generation. Google, Meta, LinkedIn and TikTok ads, with tracking that proves which leads and sales are real.',
  },

  // ---------- Top navigation ----------
  nav: [
    { label: 'Services', href: '/#services' },
    { label: 'Work', href: '/#work' },
    { label: 'Real estate', href: '/real-estate' },
    { label: 'Experience', href: '/#experience' },
    { label: 'FAQ', href: '/#faq' },
  ],

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Performance Marketing · Dubai · working with teams in the UAE and abroad',
    availability: 'Real estate · E-commerce · Lead generation · Tracking',
    headline: 'Ads that bring qualified leads and sales.',
    sub: "I'm ShahRukh, a performance marketer in Dubai with 5+ years of running ads on Google, Meta, LinkedIn and TikTok, on budgets up to AED 100K a month. I set up the tracking that proves which ads brought each lead and sale.",
    ctaWhatsapp: 'WhatsApp me',
    ctaBook: 'Book a 20-min call',
    ctaCv: 'View my CV',
    photo: '/images/shahrukh.webp',
    photoAlt: 'ShahRukh Sulehry, performance marketing specialist in Dubai',
    photoChip: 'Every lead tracked, every dirham counted',
  },

  // ---------- 2. Proof strip under the hero: one result per kind of proof ----------
  // slug = the case study it links to (must match a slug in caseStudies below)
  proof: [
    { figure: '25\u2060–\u206035%', label: 'serious leads, up from under 1%', tag: 'Lead quality · Real estate', slug: 'mgi-prime-lead-quality' },
    { figure: '2.3 → 6.1', label: 'return on ad spend in under 3 months', tag: 'Revenue · E-commerce', slug: 'bevita-ecommerce-roas' },
    { figure: '19% cheaper', label: 'leads, with 40% more quality leads', tag: 'Efficiency · Home services', slug: 'home-maintenance-google-ads' },
  ],

  // ---------- 2b. Big statement (words light up as you scroll) ----------
  statement: {
    text: "Most businesses don't need more clicks. They need more of the right people getting in touch. That's what I set up, measure and grow.",
  },

  // ---------- 3. The problem ----------
  problem: {
    label: '01 / The problem',
    heading: 'Sound familiar?',
    items: [
      { title: 'Lots of leads, no buyers.', body: 'Your ads bring in names and numbers, but nobody picks up or nobody is serious.' },
      { title: "You can't tell what's working.", body: 'Every platform shows a different number, so you never know which ad actually brought the customer.' },
      { title: 'More budget, same results.', body: "You keep spending more each month, but the phone doesn't ring more." },
    ],
    closing: "Most of the time it's not your market. It's how the ads are set up. That's the first thing I fix.",
  },

  // ---------- What I do: pills shown in the hero under the introduction ----------
  expertise: {
    // Clickable pills. icon = one of: trend, monitor, sparkles, video, palette, search, target
    areas: [
      { label: 'Performance Marketing', icon: 'trend', body: 'Google, Meta, LinkedIn and TikTok ads that bring serious leads and sales, measured from click to customer.', points: ['Lead generation and sales campaigns', 'Budgets from local tests to AED 100K+ a month', 'Weekly optimisation and testing'] },
      { label: 'Websites', icon: 'monitor', body: 'Landing pages and websites built to turn visitors into calls, WhatsApp messages and enquiries.', points: ['WordPress and Shopify', 'Fast, clear landing pages for each campaign', 'Forms and tracking set up properly'] },
      { label: 'CRM & AI', icon: 'sparkles', body: 'Every new lead goes into your CRM and gets an automatic WhatsApp or email reply, so nobody waits.', points: ['Zapier connections between ads, forms and CRM', 'WhatsApp and email nurturing', 'AI tools to qualify and sort leads faster'] },
      { label: 'SEO', icon: 'search', body: 'Get found on Google without paying for every click.', points: ['Keyword research and on-page fixes', 'Technical checks and site speed', 'Grew website traffic 38% in 4 months at Qemat'] },
      { label: 'Strategy', icon: 'target', body: 'A plan before any spend: who to target, where to advertise, how to split the budget and what to measure.', points: ['Market and competitor review', 'Budget and channel plan', 'Reports that owners and directors read'] },
    ],
  },

  // ---------- 4. Services: three ways to work together ----------
  services: {
    label: '02 / Services',
    heading: 'Three ways to work with me',
    intro: 'Start with an audit, get a full setup, or hand me the monthly running. Prices depend on your platforms and budget, and you get a clear quote before anything starts.',
    packages: [
      {
        title: 'Ads & tracking audit',
        for: "You're spending on ads but can't tell what's working.",
        includes: [
          'A review of your ad accounts, website and tracking',
          'Where money is being wasted, in plain words',
          'A step-by-step plan to fix it, in order of impact',
        ],
        starts: 'A 20-minute call, then view-only access to your accounts.',
        ask: "Hi ShahRukh, I'd like an audit of my ads and tracking.",
      },
      {
        title: 'Setup: tracking and campaigns',
        for: 'You want ads built properly from day one.',
        includes: [
          'Tracking for calls, forms, WhatsApp and sales',
          'Campaigns built around people ready to buy',
          'Landing page fixes so more visitors get in touch',
          'A live dashboard you can check any time',
        ],
        starts: 'After the audit or a call. Usually live in 1–2 weeks.',
        ask: "Hi ShahRukh, I'd like help setting up my tracking and campaigns.",
      },
      {
        title: 'Monthly management',
        for: 'You want someone to run and improve your ads every week.',
        includes: [
          'Weekly changes to budgets, keywords and audiences',
          'New ads tested against the old ones',
          'A simple monthly report: leads, serious leads, cost of each',
          'Direct WhatsApp access to me',
        ],
        starts: 'Once tracking is in place, so every dirham is measured.',
        ask: "Hi ShahRukh, I'd like to talk about monthly management of my ads.",
      },
    ],
    askCta: 'Ask about this',
    helpCard: { title: 'Not sure what you need?', body: "Tell me about your business and I'll suggest where to start.", cta: 'Ask me on WhatsApp' },
  },

  // ---------- 4b. How I work (plain words, with the technical name underneath) ----------
  toolkit: {
    label: '03 / How I work',
    heading: 'How I work',
    intro: 'The same five steps on every account. A software engineering degree means I build the tracking myself, not just the ads.',
    items: [
      { title: 'Audit', body: 'I check your ad accounts, website and tracking first, to see where money is being lost.', tech: 'Ad account, GA4 and website review' },
      { title: 'Tracking', body: 'Every call, form, WhatsApp message and sale is measured, and it still works when iPhones block tracking.', tech: 'Meta Conversions API · Google Tag Manager · GA4' },
      { title: 'Structure', body: 'Campaigns organised around people ready to buy, with the right searches and audiences, so budget is not wasted.', tech: 'Google Search · Performance Max · DV360 · Meta · LinkedIn · TikTok' },
      { title: 'Creative', body: 'Clear ads and landing pages, tested against each other, plus fast WhatsApp replies so new leads hear back in minutes.', tech: 'Ad and landing page testing · WhatsApp and email automation · Zapier' },
      { title: 'Reporting', body: 'Live dashboards showing what each lead cost and how many were serious, built for owners and directors.', tech: 'Looker Studio · reported to Chairman and VP level' },
    ],
    first30: {
      heading: 'My first 30 days on your account',
      items: [
        { when: 'Week 1', what: 'Access and audit. I review your accounts, website and tracking, and share what I found.' },
        { when: 'Week 2', what: 'Tracking fixed. Every lead and sale is measured before any budget goes up.' },
        { when: 'Weeks 3–4', what: 'Campaigns rebuilt around serious buyers, with the first ad tests live.' },
        { when: 'Day 30', what: 'Your first report: what each lead cost, how many were serious, and the plan for month two.' },
      ],
    },
  },

  // ---------- 5. Work (case studies) ----------
  // To add a new case study: copy one block in `caseStudies` at the bottom of
  // this file, change the text, and it appears here automatically.
  work: {
    label: '04 / Work',
    heading: 'Selected work',
    intro: 'Real projects, explained step by step. Agency client names are kept private.',
    cta: 'Read the case study',
    // Filter tabs. Each case study's `sector` must match one of these (tabs with no case study are hidden).
    filters: ['All', 'Real estate', 'E-commerce', 'Services', 'Events'],
  },

  // ---------- 6. Who I help ----------
  sectors: {
    label: '07 / Who I help',
    heading: 'Businesses I work with',
    intro: 'Businesses that need leads or sales they can measure. Each card links to real work in that sector.',
    // link = a case study slug, or a page path like '/real-estate'. Leave '' for no link.
    items: [
      { title: 'Real estate', body: 'Brokers and developers. At MGI Prime I took serious leads from under 1% to 25–35%. Top 5 broker status with Vincitore at Qemat Al Ebdaa.', link: '/real-estate' },
      { title: 'Online stores', body: 'E-commerce brands that want more sales. BeVita.Pk went from 2.3 to 6.1 return on ad spend.', link: 'bevita-ecommerce-roas' },
      { title: 'Service businesses', body: 'Renovation, maintenance and other local service companies. Leads 19% cheaper for a home maintenance company.', link: 'home-maintenance-google-ads' },
      { title: 'Events & launches', body: 'Conferences and launches that need sign-ups across several platforms, including a major international summit.', link: 'global-summit-campaign' },
      { title: 'B2B & export', body: 'Manufacturers and suppliers looking for wholesale buyers in the UK, Canada and Europe.', link: '' },
    ],
    otherCard: { title: 'Something else?', body: "Tell me what you sell and I'll say honestly whether I can help.", cta: 'Ask me on WhatsApp' },
    linkCta: 'See the work',
  },

  // ---------- 7. How we start ----------
  steps: {
    label: '08 / How we start',
    heading: 'Three simple steps',
    items: [
      { title: 'Message me on WhatsApp.', body: "Tell me what you sell and what's not working. It takes a minute." },
      { title: 'A 20-minute call.', body: 'I ask about your business, your current ads and your goals.' },
      { title: 'A clear plan before you pay.', body: "You see where I'd advertise, how I'd split the budget and what I'd fix first." },
    ],
    cta: 'Start on WhatsApp',
  },

  // ---------- 8. My promise ----------
  deal: {
    label: '09 / My promise',
    heading: 'My promise to you',
    items: [
      { title: 'Your accounts stay yours.', body: 'Every ad account and report is in your name. Always.' },
      { title: 'Measure first, then spend.', body: "I don't increase a budget until we can see what it brings back." },
      { title: 'Honest numbers.', body: 'Enquiries, serious enquiries and cost per enquiry. No fancy numbers that mean nothing.' },
    ],
  },

  // ---------- 9. Tools ----------
  tools: {
    label: '10 / Tools I use',
    heading: 'Tools I use',
    intro: 'The platforms I run ads on, the tracking that measures every lead, and the follow-up that turns clicks into customers.',
    groups: [
      { title: 'Advertising', body: 'Where the ads run.', items: ['Google Ads', 'Performance Max', 'Meta (Facebook & Instagram)', 'LinkedIn Ads', 'TikTok Ads', 'DV360'] },
      { title: 'Tracking & reports', body: 'How every lead and sale is measured.', items: ['Google Analytics 4', 'Google Tag Manager', 'Meta Conversions API', 'Looker Studio'] },
      { title: 'Lead nurturing & CRM', body: 'Automatic WhatsApp and email messages keep new leads warm. Zapier connects the ads, forms and CRM, so every lead lands in the CRM and gets a reply in minutes, with no copy-pasting.', items: ['WhatsApp automation', 'Email automation', 'Zapier (CRM automation)'] },
    ],
  },


  // ---------- 10. Experience (matches the CV exactly) ----------
  experience: {
    label: '05 / Experience',
    heading: 'Experience',
    roles: [
      { company: 'A Bunch of Creatives FZE', place: 'Dubai', title: 'Senior Performance Marketing Specialist', dates: 'Jun 2026 – Present', highlight: 'Run paid campaigns for several business units and clients (real estate, a creative studio, a global event and a consumer brand), with tracking set up across every account.' },
      { company: 'Freelance', place: 'Dubai & remote', title: 'Performance Marketing', dates: '2023 – Present', highlight: 'Selected projects for real estate brokers, an e-commerce brand (BeVita.Pk) and a home maintenance company: ads, tracking and landing pages.' },
      { company: 'MGI Prime Real Estate', place: 'Dubai', title: 'Senior Performance Marketing Specialist', dates: 'May 2025 – Mar 2026', highlight: 'Took serious leads from under 1% to a steady 25–35%. Managed AED 70–100K a month across Google, Meta, DV360 and LinkedIn, with Looker Studio dashboards reporting to the Chairman and VP.' },
      { company: 'Qemat Al Ebdaa Real Estate', place: 'Dubai', title: 'Digital Marketing Manager', dates: 'Mar 2023 – May 2025', highlight: 'Built the digital marketing function from zero. Reached Top 5 broker status with Vincitore, held a 20–30% lead qualification rate, and grew website traffic 38% in 4 months.' },
      { company: 'Fighter Group of Companies', place: 'Sialkot', title: 'Digital Marketing Manager – B2B', dates: 'Feb 2022 – Mar 2023', highlight: 'Found wholesale buyers in the UK, Canada and Europe for an export manufacturer, through Google Ads, LinkedIn and email.' },
      { company: 'Capslock Software House', place: 'Lahore', title: 'Digital Marketing Manager – Growth & SEO', dates: 'May 2021 – Feb 2022', highlight: 'Ran Google, LinkedIn and Meta campaigns for SaaS and e-commerce clients, plus landing pages and SEO.' },
      { company: 'Intrazix', place: 'Lahore', title: 'Digital Marketing Specialist', dates: 'Dec 2019 – Apr 2021', highlight: 'Managed Google and Meta campaigns and SEO for client websites on WordPress and Shopify.' },
    ],
    certsHeading: 'Certifications',
    certs: [
      'Google Ads Search — Google Skillshop, 2025',
      'Fundamentals of Digital Marketing — Google Skillshop, 2022',
      'Advertising with Meta — Coursera, 2021',
      'Digital Marketing — HubSpot, 2020',
    ],
    education: 'BSc Software Engineering — Superior University, 2016–2020',
    cvLink: 'Download full CV (PDF)',
  },

  // ---------- 11. Testimonials ----------
  // Text kept from the current site, typos fixed.
  testimonials: {
    label: '06 / Clients',
    heading: 'What clients say',
    // sector = small tag on each card. caseStudy = a case study slug to link to (leave '' if none matches).
    items: [
      { quote: "ShahRukh helped me scale up my real estate leads using Meta Ads for Damac and Danube off-plan projects. I started getting high-quality inquiries from clients not only in India but also from the Indian community in the USA, Canada and the UAE. His strategies are precise, and he's always proactive with optimizations. Highly dependable and results-driven!", name: 'Amit Raj', role: 'Off-Plan Specialist' , sector: 'Real estate', caseStudy: '' },
      { quote: 'ShahRukh managed Meta Ads campaigns for me targeting off-plan properties in Dubai. Thanks to his expertise, I started receiving high-quality leads from Arabic-speaking clients in the UAE, Syria and other Middle Eastern countries. He understands how to connect with our audience and delivers results consistently. Very professional and knowledgeable!', name: 'Fadi Al-Khatib', role: 'Real Estate Broker' , sector: 'Real estate', caseStudy: '' },
      { quote: 'We partnered with ShahRukh to manage our Google Ads campaigns for off-plan projects by Emaar, Damac, Vincitore and Danube. Beyond just ads, he optimized our landing pages and implemented effective CRO strategies, which significantly improved our conversion rates. His expertise in targeting, keyword optimization and user experience helped us attract highly qualified leads from diverse markets. ShahRukh is a professional, data-driven asset to any real estate marketing team.', name: 'Syed Imran Siddiqui', role: 'CEO, Real Estate Brokerage' , sector: 'Real estate', caseStudy: '' },
      { quote: 'ShahRukh expertly managed our lead generation campaigns, helping us connect with the right audience in the Muscat market. His strategic approach and continuous optimization brought us a steady flow of high-quality leads. Working with him has been smooth and professional, exactly what we needed to grow our business.', name: 'Kaleem', role: 'Co-Founder, MITC Muscat' , sector: 'Lead generation', caseStudy: '' },
      { quote: 'ShahRukh managed our Google Ads campaigns with great expertise. His targeted approach helped us attract the right customers looking for renovation and maintenance services. Thanks to his ongoing optimization, we saw a steady increase in inquiries. Communication was clear and professional throughout.', name: 'Muhammad Asif', role: 'Owner, Asif Renovation & Maintenance' , sector: 'Services', caseStudy: '' },
      // [NEEDS: new testimonial]
      // When you have it, copy one line above, paste it here and change the text.
    ],
  },

  // ---------- 12. FAQ ----------
  faq: {
    label: '11 / FAQ',
    heading: 'Questions people ask first',
    items: [
      { q: 'Do you take on projects?', a: 'Yes, I take on selected freelance and consulting projects. Message me with what you have in mind.' },
      { q: 'Do you work with smaller businesses?', a: "Yes, if the budget fits the goal. I'll tell you honestly what makes sense before you spend anything." },
      { q: 'What does it cost?', a: 'It depends on how many platforms you need and how big your ad budget is. After a 20-minute call you get a clear price before anything starts.' },
      { q: 'How much should I spend on ads?', a: "It depends on your business and your area. I've managed budgets from small local campaigns up to AED 100K+ a month, and I'll tell you honestly if your budget is too small for the goal." },
      { q: 'Who owns the ad accounts?', a: 'You do. Everything is set up in your name, and you can remove my access at any time.' },
      { q: 'How soon will I see results?', a: 'Setup takes the first 1–2 weeks. Most accounts need 4–6 weeks of real data before results are steady.' },
    ],
  },

  // ---------- 13. Final CTA + contact ----------
  contactSection: {
    label: '12 / Contact',
    heading: "Let's talk about your business.",
    body: 'Pick the option that fits. I reply within one working day.',
    formHeading: 'Or send a message',
    project: { label: 'Have a project?', body: 'Tell me what you sell and where you are stuck.', cta: 'WhatsApp me' },
    employer: { label: 'Recruiter or employer?', body: 'My full CV, and email for anything formal.', cta: 'View my CV' },
  },

  // ---------- Real estate page (/real-estate), for brokerages and developers ----------
  realEstate: {
    seoTitle: 'Real Estate Performance Marketing in Dubai | ShahRukh Sulehry',
    seoDescription: '3+ years marketing Dubai off-plan and brokerage projects: lead qualification from under 1% to 25–35% at MGI Prime, and Top 5 broker status with Vincitore at Qemat Al Ebdaa.',
    label: 'Real estate',
    heading: 'Marketing for Dubai brokerages and developers',
    intro: '3+ years in Dubai real estate, in-house at two brokerages and for brokers directly. Off-plan launches, lead quality and fast follow-up are what I know best.',
    caseSlug: 'mgi-prime-lead-quality',
    rolesHeading: 'In-house real estate roles',
    roles: ['MGI Prime Real Estate', 'Qemat Al Ebdaa Real Estate'],
    testimonialsHeading: 'What brokers say',
    cta: 'Talk about your next launch',
  },

  // ---------- Footer ----------
  footer: {
    tagline: 'Performance Marketing · Dubai, UAE',
  },
} as const

// ============================================================
//  CASE STUDIES — each one gets its own page at /work/<slug>
//  To add one: copy the whole { ... } block, paste it below,
//  change the slug and the text.
// ============================================================
export type CaseStudy = {
  slug: string
  client: string
  title: string
  summary: string
  industry: string
  sector: 'Real estate' | 'E-commerce' | 'Services' | 'Events' // used by the Work filter tabs
  platforms: string
  year: string
  highlight: string
  seoTitle: string
  seoDescription: string
  meta: string
  results: { metric: string; figure: string }[]
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[]
  cta: string
}

export const caseStudies: CaseStudy[] = [
  {
    // Written by ShahRukh, 2026-11-23. His own full-time role, so the company is named.
    slug: 'mgi-prime-lead-quality',
    client: 'MGI Prime Real Estate (full-time role)',
    title: 'From 1 in 200 serious buyers to 25\u2060–\u206035% qualified leads', // \u2060 keeps 25–35% on one line
    summary: 'At MGI Prime, the leads coming in rarely turned into buyers. I changed what the ads were asked to find, fixed the tracking, and connected follow-up to the CRM.',
    industry: 'Real estate',
    sector: 'Real estate',
    platforms: 'Meta, Google Ads, WhatsApp, CRM',
    year: '2025–2026',
    highlight: 'Lead qualification from under 1% to a steady 25–35%',
    seoTitle: 'MGI Prime Lead Quality Case Study | ShahRukh Sulehry',
    seoDescription: 'How I took lead qualification at a Dubai real estate brokerage from about 1 serious buyer in 200 leads to 25–35%, by changing the campaign goal, the tracking and the follow-up.',
    meta: 'MGI Prime Real Estate · Dubai · May 2025 – Mar 2026 · Full-time, Senior Performance Marketing Specialist',
    results: [
      { metric: 'Lead qualification', figure: 'Under 1% to 25–35%' },
      { metric: 'Monthly ad spend', figure: 'AED 70–100K' },
      { metric: 'Sales team feedback', figure: 'Better leads within days of the change' },
    ],
    sections: [
      {
        heading: 'The situation',
        paragraphs: [
          "Leads were coming in through WhatsApp campaigns on Meta's engagement objective. Placements were left on automatic, Audience Network included, and there was no Conversions API. About 1 in 200 leads was a serious buyer.",
        ],
      },
      {
        heading: 'What I changed',
        bullets: [
          "Moved Meta from the engagement objective to the Leads objective, with lead forms of 2–4 questions built campaign by campaign for each project and audience.",
          'Set placements deliberately and removed Audience Network.',
          'Launched Google Ads and Meta campaigns that send people to dedicated landing pages.',
          'Set up the Conversions API and changed the optimisation goal to qualified leads, so the ads learned from the leads sales wanted, not every form fill.',
          'Connected WhatsApp (Interakt) and email follow-up to the CRM, so every lead was answered quickly and tracked through to the sales team.',
          'Built Looker Studio dashboards showing cost per lead and qualified leads, reported to Chairman and VP level.',
        ],
      },
      {
        heading: 'The result',
        paragraphs: [
          'Within days, the sales team started getting better leads. Qualification rose from under 1% to a steady 25–35%, on AED 70–100K a month across Google, Meta, DV360 and LinkedIn.',
        ],
      },
      {
        heading: 'Why it mattered',
        paragraphs: [
          'The fix was not more budget. It was changing what the ads were asked to find and giving them a signal that separates a serious buyer from a form fill. I start every account by checking those two things.',
        ],
      },
    ],
    cta: 'Want this audit on your leads?',
  },
  {
    // Written by ShahRukh, 2026-11-23. Freelance client.
    slug: 'bevita-ecommerce-roas',
    client: 'BeVita.Pk',
    title: 'From 2.3 to 6.1 ROAS in under 3 months',
    summary: 'An online store selling imported international health and wellness brands in Pakistan. I started with awareness, explaining why people need the products, and ROAS rose from 2.3 to 6.1.',
    industry: 'E-commerce, health and wellness',
    sector: 'E-commerce',
    platforms: 'Meta, TikTok',
    year: '2023–2024',
    highlight: 'ROAS from 2.3 to 6.1 in under 3 months',
    seoTitle: 'BeVita.Pk E-commerce Case Study | ShahRukh Sulehry',
    seoDescription: 'How ROAS for an imported health and wellness store in Pakistan rose from 2.3 to 6.1 in under 3 months on Meta and TikTok, by explaining the products before selling them.',
    meta: 'BeVita.Pk · Pakistan · 2023–2024 · Freelance, 10 months',
    results: [
      { metric: 'ROAS (sales for every 1 spent on ads)', figure: '2.3 to 6.1' },
      { metric: 'Timeframe', figure: 'Under 3 months' },
      { metric: 'Worked together', figure: '10 months' },
    ],
    sections: [
      {
        heading: 'The situation',
        paragraphs: [
          'BeVita.Pk sells imported international brands of multivitamins, protein, zinc and other wellness products in Pakistan. When I started, ROAS was 2.3. These are products people need to understand before they buy: what they do and why they need them.',
        ],
      },
      {
        heading: 'What I did',
        bullets: [
          'Started with awareness on Meta and TikTok: ads and content that explain why people need each product, before asking for the sale.',
        ],
      },
      {
        heading: 'The result',
        paragraphs: ['ROAS rose from 2.3 to 6.1 in under 3 months.'],
      },
      {
        heading: 'Why it mattered',
        paragraphs: [
          'For products people need explained, selling harder is not the fix. Explaining first means the sales ads reach buyers who already understand why they need the product.',
        ],
      },
    ],
    cta: 'Selling products that need explaining?',
  },
  {
    slug: 'home-maintenance-google-ads',
    client: 'Home maintenance company',
    title: '19% cheaper leads and 40% more quality leads in about a month',
    summary:
      'A home maintenance company was running Google Ads to an average website with no GA4, broken tracking, and budget wasted on broad match keywords. I fixed the keywords, the tracking and the website.',
    industry: 'Home services',
    sector: 'Services',
    platforms: 'Google Ads, GA4, Google Tag Manager',
    year: '2026',
    highlight: '19% cheaper leads and 40% more quality leads within about a month',
    seoTitle: 'Home Maintenance Google Ads Case Study | ShahRukh Sulehry',
    seoDescription:
      'How fixing keywords, tracking and the website made leads 19% cheaper and 40% better for a home maintenance company within about a month.',
    meta: 'Home maintenance company · 2026 · Freelance',
    results: [
      { metric: 'Cost per lead', figure: '19% cheaper' },
      { metric: 'Quality leads', figure: '40% more' },
      { metric: 'Timeframe', figure: 'Within about a month' },
    ],
    sections: [
      {
        heading: 'The situation',
        paragraphs: [
          'Google Ads were sending people to an average website. GA4 had never been set up, tracking was broken, and a lot of the budget was going to broad match keywords.',
        ],
      },
      {
        heading: 'What I changed',
        bullets: [
          'Set up GA4 properly, since there was none.',
          'Fixed the tracking with a proper Google Tag Manager setup.',
          'Replaced broad match with keyword research based on search volume, then phrase and exact match.',
          'Turned the website into a conversion-focused one, with the changes aimed at getting more calls and enquiries.',
        ],
      },
      {
        heading: 'The result',
        paragraphs: ['Within about a month, leads were 19% cheaper and the number of quality leads was up 40%.'],
      },
      {
        heading: 'Why it mattered',
        paragraphs: [
          'I changed what the ads searched for and made sure every lead was measured, so the numbers could be trusted.',
        ],
      },
    ],
    cta: 'Is your Google Ads budget going to the wrong searches?',
  },
  {
    // Client name kept private on purpose. Never add the client's name, budget or sign-up numbers.
    slug: 'global-summit-campaign',
    client: 'Major international summit',
    title: 'Global event campaign',
    summary: 'Multi-platform ads for a major international summit, reaching four different audiences over a three-month run-up.',
    industry: 'Events',
    sector: 'Events',
    platforms: 'Meta, LinkedIn, Google, TikTok and more',
    year: '2026',
    highlight: 'Audited the whole setup early so the budget went where it should',
    seoTitle: 'Global Event Campaign Case Study | ShahRukh Sulehry',
    seoDescription: 'How a multi-platform ad campaign for a major international summit was planned, run and reported.',
    meta: 'Global event · Middle East · 2026',
    results: [
      { metric: 'Platforms', figure: 'Meta, LinkedIn, Google, TikTok and more' },
      { metric: 'Audiences', figure: 'Visitors, delegates, students and officials' },
      { metric: 'My role', figure: 'Planning, daily management and reporting' },
    ],
    sections: [
      {
        heading: 'The brief',
        paragraphs: [
          'A major international summit needed sign-ups from four different audiences, plus awareness for its awards, exhibitors and speakers, over a three-month run-up.',
        ],
      },
      {
        heading: 'What I did',
        bullets: [
          'Planned a separate campaign for each audience and each goal, so every message reached the right people.',
          'Ran the campaigns day to day across several platforms at once.',
          'Checked the full setup early, from ad to sign-up page to tracking, and corrected issues before they cost money.',
        ],
      },
      {
        heading: 'Reporting',
        bullets: [
          'Clear reports for every platform, in a format the team could use straight away.',
          'Platform numbers checked against the event’s own records, so the reporting could be trusted.',
        ],
      },
      {
        heading: 'Why it matters',
        paragraphs: [
          'Large, multi-audience campaigns go wrong quietly. I handle them end to end, from setup to the final report.',
        ],
      },
    ],
    cta: 'Running an event or a launch?',
  },
]

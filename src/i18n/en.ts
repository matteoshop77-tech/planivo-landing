export const en = {
  nav: {
    login: 'Log in',
    cta: 'Start for free',
  },
  hero: {
    badge: '15-day free trial · No credit card required',
    title: 'Shift management,\nsimplified.',
    subtitle: 'PLANIVO helps hotels, restaurants and retail businesses schedule shifts, track attendance and manage their team — all in one place.',
    cta_primary: 'Start for free',
    cta_secondary: 'See how it works',
  },
  social_proof: {
    label: 'Trusted by teams across hospitality and retail',
    stats: [
      { value: '500+', label: 'Companies' },
      { value: '12,000+', label: 'Employees managed' },
      { value: '3', label: 'Industries served' },
    ],
  },
  how_it_works: {
    title: 'Up and running in minutes',
    steps: [
      { title: 'Create your organization', description: 'Sign up and set up your workspace in under 2 minutes.' },
      { title: 'Add your team', description: 'Invite employees and assign roles with granular permissions.' },
      { title: 'Manage shifts', description: 'Plan schedules, send notifications and track attendance in real time.' },
    ],
  },
  features: {
    title: 'Everything your team needs',
    subtitle: 'Built for businesses with 30 to 200 employees in hospitality and retail.',
    items: [
      { title: 'Shift planning', description: 'Create, assign and edit shifts with a clean drag-and-drop calendar.' },
      { title: 'Attendance tracking', description: 'NFC and GPS check-in and check-out, fraud-resistant.' },
      { title: 'Push notifications', description: 'Instant alerts for shift changes, approvals and reminders.' },
      { title: 'Leave management', description: 'Employees request time off, managers approve in one click.' },
      { title: 'Reports & analytics', description: 'Track hours, costs and attendance across your entire team.' },
      { title: 'Custom roles', description: 'Granular permissions across 11 modules for every team member.' },
    ],
  },
  pricing: {
    title: 'Simple, transparent pricing',
    subtitle: 'Start for free. Upgrade when you need to. No hidden fees.',
    monthly: 'Monthly',
    annual: 'Annual',
    save: 'Save 20%',
    cta: 'Get started',
    popular: 'Most popular',
    plans: [
      {
        name: 'Free',
        price_monthly: '€0',
        price_annual: '€0',
        description: 'For small teams getting started.',
        users: 'Up to 10 users',
        features: ['Shift planning', 'Push notifications', 'Basic reports'],
      },
      {
        name: 'Starter',
        price_monthly: '€49',
        price_annual: '€39',
        description: 'For growing teams.',
        users: 'Up to 30 users',
        features: ['Everything in Free', 'Attendance tracking', 'Leave management', 'Email support'],
      },
      {
        name: 'Pro',
        price_monthly: '€99',
        price_annual: '€79',
        description: 'For established businesses.',
        users: 'Up to 100 users',
        features: ['Everything in Starter', 'Custom roles', 'Advanced analytics', 'Priority support'],
        popular: true,
      },
      {
        name: 'Business',
        price_monthly: '€199',
        price_annual: '€159',
        description: 'For large operations.',
        users: 'Unlimited users',
        features: ['Everything in Pro', 'Dedicated onboarding', 'SLA guarantee', 'Phone support'],
      },
    ],
  },
  industries: {
    title: 'Built for your industry',
    items: [
      { name: 'Hotels', description: 'Manage front desk, housekeeping and F&B shifts across multiple floors and departments.' },
      { name: 'Restaurants', description: 'Coordinate kitchen, service and delivery staff with real-time schedule updates.' },
      { name: 'Retail', description: 'Plan floor coverage, track part-time staff and handle seasonal peaks with ease.' },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'Do I need a credit card to start the trial?', a: 'No. The 15-day free trial requires no credit card. You only provide payment details when you choose to upgrade.' },
      { q: 'Can I change my plan later?', a: 'Yes. You can upgrade or downgrade your plan at any time from your account settings.' },
      { q: 'How is my data protected?', a: 'All data is encrypted in transit and at rest. Each organization is fully isolated — no data is ever shared between accounts.' },
      { q: 'Is there a mobile app?', a: 'PLANIVO works as a Progressive Web App (PWA) — installable on any smartphone from the browser, no app store required.' },
      { q: 'What kind of support is available?', a: 'Free and Starter plans include email support. Pro includes priority support. Business includes phone support and a dedicated onboarding specialist.' },
      { q: 'Can I cancel at any time?', a: 'Yes. There are no long-term commitments. You can cancel your subscription at any time from your account settings.' },
    ],
  },
  cta_final: {
    title: 'Ready to simplify your shifts?',
    subtitle: 'Join hundreds of businesses already using PLANIVO.',
    cta: 'Start for free — no credit card needed',
  },
  footer: {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact',
    rights: '© 2026 PLANIVO. All rights reserved.',
  },
}

export type Translations = typeof en
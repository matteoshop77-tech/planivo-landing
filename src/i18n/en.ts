export const en = {
  nav: {
    login: 'Log in',
    cta: 'Start for free',
  },
  hero: {
    badge: '15-day free trial · No credit card required',
    title: 'Stop chasing\nyour staff.',
    subtitle: 'Send a task and know when it\'s done. Post an announcement and see who read it. Assign a shift and your employee gets it on their phone in seconds. Zero WhatsApp, zero chaos.',
    cta_primary: 'Start for free',
    cta_secondary: 'See how it works',
  },
  social_proof: {
    label: 'Built for hotels, restaurants and retail — 30 to 200 employees',
    stats: [],
  },
  how_it_works: {
    title: 'Up and running in minutes',
    steps: [
      { title: 'Create your organization', description: 'Sign up and set up your workspace in under 2 minutes. No IT required.' },
      { title: 'Invite your team', description: 'Send an invite link. Every employee installs the app and is ready to go.' },
      { title: 'You\'re in control', description: 'Assign tasks, publish shifts, send announcements. Everyone gets notified instantly.' },
    ],
  },
  features: {
    title: 'Everything in one place',
    subtitle: 'Stop juggling WhatsApp, Excel and email. PLANIVO replaces them all.',
    items: [
      { title: 'Shift planning', description: 'Create and publish weekly shifts. Every employee gets an instant notification on their phone.' },
      { title: 'Task management', description: 'Assign tasks to any team member. Track progress and know exactly when they\'re done.' },
      { title: 'Announcements', description: 'Send important updates to your whole team or a specific department. See who has read and confirmed.' },
      { title: 'Team chat', description: 'Group chats by department, direct messages, read receipts. Everything in one app.' },
      { title: 'Documents', description: 'Send contracts, licenses and authorizations directly to each employee\'s profile.' },
      { title: 'Attendance tracking', description: 'NFC and GPS check-in and check-out. Know who is on site, in real time.' },
    ],
  },
  pricing: {
    title: 'Simple, transparent pricing',
    subtitle: 'Start for free. Upgrade when your team grows. No hidden fees.',
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
        features: ['Shift planning', 'Task management', 'Team chat'],
      },
      {
        name: 'Starter',
        price_monthly: '€49',
        price_annual: '€39',
        description: 'For growing teams.',
        users: 'Up to 30 users',
        features: ['Everything in Free', 'Announcements', 'Documents', 'Attendance tracking'],
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
      { name: 'Hotels', description: 'Coordinate front desk, housekeeping and F&B across departments. Everyone knows their shift, their tasks, their responsibilities.' },
      { name: 'Restaurants', description: 'Kitchen, service, delivery — each department gets their own chat, their own tasks, their own schedule. No more confusion.' },
      { name: 'Retail', description: 'Manage floor coverage, seasonal staff and part-time workers. Send updates instantly and know they\'ve been received.' },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'Do I need a credit card to start the trial?', a: 'No. The 15-day free trial requires no credit card. You only provide payment details when you choose to upgrade.' },
      { q: 'Can I change my plan later?', a: 'Yes. You can upgrade or downgrade your plan at any time from your account settings.' },
      { q: 'How is my data protected?', a: 'All data is encrypted in transit and at rest. Each organization is fully isolated — no data is ever shared between accounts.' },
      { q: 'Is there a mobile app?', a: 'PLANIVO works as a Progressive Web App (PWA) — installable on any smartphone directly from the browser. No app store required.' },
      { q: 'What kind of support is available?', a: 'Free and Starter plans include email support. Pro includes priority support. Business includes phone support and a dedicated onboarding specialist.' },
      { q: 'Can I cancel at any time?', a: 'Yes. There are no long-term commitments. You can cancel your subscription at any time from your account settings.' },
    ],
  },
  cta_final: {
    title: 'Stop chasing your staff.',
    subtitle: 'Start your free trial today. No credit card, no commitment.',
    cta: 'Start for free — it takes 2 minutes',
  },
  footer: {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact',
    rights: '© 2026 PLANIVO. All rights reserved.',
  },
}

export type Translations = typeof en
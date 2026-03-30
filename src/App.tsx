import { useState } from 'react'
import { getTranslations } from './i18n'
import type { Language } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import SocialProof from './components/sections/SocialProof'
import HowItWorks from './components/sections/HowItWorks'
import Features from './components/sections/Features'
import FeatureShowcase from './components/sections/FeatureShowcase'
import Pricing from './components/sections/Pricing'
import Industries from './components/sections/Industries'
import FAQ from './components/sections/FAQ'
import CTAFinal from './components/sections/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  const [lang] = useState<Language>('en')
  const t = getTranslations(lang)

  return (
    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <Navbar t={t} />
      <main>
        <Hero t={t} />
        <SocialProof t={t} />
        <HowItWorks t={t} />

        <FeatureShowcase
          screen="shifts"
          subtitle="Shift planning"
          title="Plan your week in minutes, not hours."
          description="Drag, assign and publish shifts for your entire team. Every employee gets an instant notification — no more WhatsApp chaos."
          points={[
            'Weekly view with color-coded staff',
            'Instant push notifications on shift changes',
            'Edit or delete shifts with one click',
          ]}
          background="#ffffff"
        />

        <FeatureShowcase
          screen="chat"
          subtitle="Team communication"
          title="Your whole team, always connected."
          description="Group chats by department, direct messages, read receipts. Everything in one place — not scattered across a dozen apps."
          points={[
            'Department group chats',
            'Direct messages between staff',
            'Read receipts so nothing gets missed',
          ]}
          reverse={true}
          background="#eef0f4"
        />

        <FeatureShowcase
          screen="team"
          subtitle="People management"
          title="Your entire team, under control."
          description="See every employee at a glance — roles, departments, contracts, hourly rates. Invite new members in seconds."
          points={[
            'Full staff directory with roles and departments',
            'Granular permissions across 11 modules',
            'Invite new members via email link',
          ]}
          background="#ffffff"
        />

        <Features t={t} />
        <Pricing t={t} />
        <Industries t={t} />
        <FAQ t={t} />
        <CTAFinal t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
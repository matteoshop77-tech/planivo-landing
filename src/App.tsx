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
          title="Publish shifts in seconds. Your team gets notified instantly."
          description="No more photos of paper schedules sent on WhatsApp. Create the week's shifts, publish them, and every employee receives a notification on their phone. They know when they work. You know they know."
          points={[
            'Weekly view with color-coded staff',
            'Instant push notification on every shift change',
            'Employees can see their schedule anytime, anywhere',
          ]}
          background="#ffffff"
        />

        <FeatureShowcase
          screen="chat"
          subtitle="Team communication"
          title="Reach anyone on your team in one click."
          description="A task for Mario, an announcement for the kitchen, a document for the new hire — everything lands directly on their phone. No more 'I didn't see it'. Read receipts show you exactly who has and hasn't read your message."
          points={[
            'Department group chats with read receipts',
            'Direct messages between any team members',
            'Announcements with confirmed read tracking',
          ]}
          reverse={true}
          background="#eef0f4"
        />

        <FeatureShowcase
          screen="team"
          subtitle="People management"
          title="Your whole team, always under control."
          description="See every employee at a glance — their role, department, contract, hourly rate. Approve new members, manage permissions, send documents directly to their profile. Everything in one place, nothing lost."
          points={[
            'Full staff directory with roles and departments',
            'Send contracts and documents to each employee',
            'Granular permissions across 11 modules',
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
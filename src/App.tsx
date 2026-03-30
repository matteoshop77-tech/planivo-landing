import { useState } from 'react'
import { getTranslations } from './i18n'
import type { Language } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import SocialProof from './components/sections/SocialProof'
import HowItWorks from './components/sections/HowItWorks'
import Features from './components/sections/Features'
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
import type { Translations } from '../../i18n/en'
import AppMockup from '../AppMockup'

interface HeroProps {
  t: Translations
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="pt-28 pb-0 px-6 overflow-hidden" style={{ background: 'linear-gradient(160deg, #eef0f4 0%, #e8edf5 50%, #ffffff 100%)' }}>
      <div className="max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-full mb-8" style={{ boxShadow: '0 2px 12px rgba(37,99,235,0.12)' }}>
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block animate-pulse"></span>
          {t.hero.badge}
        </div>

        {/* Titolo */}
        <h1 className="font-bold text-slate-900 leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(42px, 6vw, 72px)' }}>
          {t.hero.title.split('\n').map((line, i) => (
            <span key={i}>
              {i === 0 ? line : (
                <>
                  <br />
                  <span style={{ background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {line}
                  </span>
                </>
              )}
            </span>
          ))}
        </h1>

        {/* Sottotitolo */}
        <p className="text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>
          {t.hero.subtitle}
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
          <a
            href="https://app.planivoapp.com/register"
            className="bg-blue-600 text-white font-bold px-10 py-4 rounded-2xl hover:bg-blue-700 transition-all text-base"
            style={{ boxShadow: '0 6px 24px rgba(37,99,235,0.4)', letterSpacing: '-0.2px' }}
          >
            {t.hero.cta_primary} →
          </a>
          <a
            href="#how-it-works"
            className="text-slate-600 font-semibold px-8 py-4 rounded-2xl border-2 border-slate-200 hover:border-slate-300 hover:bg-white transition-all text-base bg-white/60"
          >
            {t.hero.cta_secondary}
          </a>
        </div>

        {/* Trust line */}
        <div className="flex items-center justify-center gap-6 mb-12 flex-wrap">
          {['No credit card required', 'Cancel anytime', '15-day free trial'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-400 font-medium">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" fill="#dcfce7"/>
                <path d="M4 7l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Mockup — emerge dal basso */}
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        <div style={{ transform: 'perspective(1200px) rotateX(4deg)', transformOrigin: 'top center' }}>
          <AppMockup screen="dashboard" />
        </div>
      </div>
    </section>
  )
}
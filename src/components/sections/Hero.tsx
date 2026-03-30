import type { Translations } from '../../i18n/en'

interface HeroProps {
  t: Translations
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-6" style={{ background: 'linear-gradient(180deg, #eef0f4 0%, #ffffff 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
          {t.hero.badge}
        </div>
        <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
          {t.hero.title.split('\n').map((line, i) => (
            <span key={i}>
              {i === 0 ? line : <><br /><span className="text-blue-600">{line}</span></>}
            </span>
          ))}
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="https://app.planivoapp.com/register" className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-base" style={{ boxShadow: '0 4px 14px 0 rgba(37,99,235,0.35)' }}>
            {t.hero.cta_primary}
          </a>
          <a href="#how-it-works" className="text-slate-700 font-medium px-8 py-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-base bg-white">
            {t.hero.cta_secondary}
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-16">
        <div className="rounded-2xl border border-slate-200 overflow-hidden" style={{ boxShadow: '0 20px 60px 0 rgba(0,0,0,0.12)' }}>
          <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="flex-1 mx-4 bg-white rounded text-xs text-slate-400 px-3 py-1 text-center">
              app.planivoapp.com
            </div>
          </div>
          <div className="bg-slate-50 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto mb-4" style={{ boxShadow: '0 8px 24px rgba(37,99,235,0.3)' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="4" width="11" height="11" rx="2.5" fill="white"/>
                  <rect x="17" y="4" width="11" height="11" rx="2.5" fill="white" opacity="0.7"/>
                  <rect x="4" y="17" width="11" height="11" rx="2.5" fill="white" opacity="0.7"/>
                  <rect x="17" y="17" width="11" height="11" rx="2.5" fill="white" opacity="0.4"/>
                </svg>
              </div>
              <p className="text-slate-400 text-sm">App screenshot placeholder</p>
              <p className="text-slate-300 text-xs mt-1">Sostituire con screenshot reale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
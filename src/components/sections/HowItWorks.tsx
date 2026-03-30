import type { Translations } from '../../i18n/en'
interface HowItWorksProps {
  t: Translations
}

export default function HowItWorks({ t }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-24 px-6" style={{ background: '#eef0f4' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {t.how_it_works.title}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8 relative">
          <div className="absolute top-10 left-1/3 right-1/3 h-0.5 bg-blue-100 hidden md:block"></div>

          {t.how_it_works.steps.map((step, i) => (
            <div key={i} className="text-center relative">
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto mb-6" style={{ boxShadow: '0 4px 16px 0 rgba(0,0,0,0.08)' }}>
                <span className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
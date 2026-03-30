import { useState } from 'react'
import type { Translations } from '../../i18n/en'

interface PricingProps {
  t: Translations
}

export default function Pricing({ t }: PricingProps) {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="py-24 px-6" style={{ background: '#eef0f4' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-slate-500 mb-8">
            {t.pricing.subtitle}
          </p>
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-1">
            <button onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${!annual ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-700'}`}>
              {t.pricing.monthly}
            </button>
            <button onClick={() => setAnnual(true)} className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${annual ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-700'}`}>
              {t.pricing.annual}
              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${annual ? 'bg-blue-500 text-white' : 'bg-green-100 text-green-700'}`}>
                {t.pricing.save}
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.pricing.plans.map((plan, i) => (
            <div key={i} className={`rounded-2xl p-6 flex flex-col ${plan.popular ? 'bg-blue-600 text-white' : 'bg-white border border-slate-100'}`} style={{ boxShadow: plan.popular ? '0 8px 32px 0 rgba(37,99,235,0.3)' : '0 2px 8px 0 rgba(0,0,0,0.05)' }}>
              <div className="mb-6">
                {plan.popular && (
                  <span className="inline-block text-xs font-semibold bg-blue-500 text-white px-3 py-1 rounded-full mb-3">
                    {t.pricing.popular}
                  </span>
                )}
                <h3 className={`text-lg font-bold mb-1 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-200' : 'text-slate-400'}`}>
                  {plan.description}
                </p>
                <div className={`text-3xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {annual ? plan.price_annual : plan.price_monthly}
                  <span className={`text-sm font-normal ml-1 ${plan.popular ? 'text-blue-200' : 'text-slate-400'}`}>/mo</span>
                </div>
                <p className={`text-xs ${plan.popular ? 'text-blue-200' : 'text-slate-400'}`}>
                  {plan.users}
                </p>
              </div>
              <ul className="flex-1 space-y-2 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill={plan.popular ? 'rgba(255,255,255,0.2)' : '#eff6ff'}/>
                      <path d="M5 8l2 2 4-4" stroke={plan.popular ? 'white' : '#2563eb'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={plan.popular ? 'text-blue-100' : 'text-slate-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="https://app.planivoapp.com/register" className={`block text-center py-3 rounded-xl text-sm font-semibold transition-colors ${plan.popular ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                {t.pricing.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
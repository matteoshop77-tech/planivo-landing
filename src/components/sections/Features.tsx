import type { Translations } from '../../i18n/en'
interface FeaturesProps {
  t: Translations
}

const icons = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#2563eb" strokeWidth="1.5"/><path d="M3 9h18" stroke="#2563eb" strokeWidth="1.5"/><path d="M8 2v4M16 2v4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/><rect x="7" y="13" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="11" y="13" width="3" height="3" rx="0.5" fill="#2563eb" opacity="0.5"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#2563eb" strokeWidth="1.5"/><path d="M12 8v4l3 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="2" fill="#2563eb"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/><path d="M13.73 21a2 2 0 01-3.46 0" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#2563eb" strokeWidth="1.5"/><path d="M8 12h8M12 8v8" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3" stroke="#2563eb" strokeWidth="1.5"/><circle cx="15" cy="7" r="3" stroke="#2563eb" strokeWidth="1.5"/><path d="M3 20c0-4 2.686-7 6-7M15 13c3.314 0 6 3 6 7" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/></svg>,
]

export default function Features({ t }: FeaturesProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {t.features.title}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {t.features.items.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-blue-100 hover:shadow-md transition-all"
              style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.05)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                {icons[i]}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import type { Translations } from '../../i18n/en'
interface IndustriesProps {
  t: Translations
}

const icons = [
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="10" width="24" height="18" rx="2" stroke="#2563eb" strokeWidth="1.5"/><path d="M10 10V7a6 6 0 0112 0v3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/><rect x="13" y="18" width="6" height="10" rx="1" fill="#2563eb" opacity="0.3"/><path d="M4 16h24" stroke="#2563eb" strokeWidth="1.5"/></svg>,
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 26V12l10-6 10 6v14" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="12" y="18" width="8" height="8" rx="1" fill="#2563eb" opacity="0.3"/><path d="M12 18h8v8h-8z" stroke="#2563eb" strokeWidth="1.5"/><circle cx="16" cy="10" r="2" fill="#2563eb" opacity="0.5"/></svg>,
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="8" width="24" height="18" rx="2" stroke="#2563eb" strokeWidth="1.5"/><path d="M4 14h24" stroke="#2563eb" strokeWidth="1.5"/><path d="M10 8V6M22 8V6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/><circle cx="16" cy="20" r="3" fill="#2563eb" opacity="0.3" stroke="#2563eb" strokeWidth="1.5"/></svg>,
]

export default function Industries({ t }: IndustriesProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {t.industries.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {t.industries.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-100 p-8 text-center hover:border-blue-100 transition-all"
              style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.05)' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-6">
                {icons[i]}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {item.name}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
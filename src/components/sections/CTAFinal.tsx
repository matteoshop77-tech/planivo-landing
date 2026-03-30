import type { Translations } from '../../i18n/en'

interface CTAFinalProps {
  t: Translations
}

export default function CTAFinal({ t }: CTAFinalProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="rounded-3xl bg-blue-600 px-12 py-16" style={{ boxShadow: '0 20px 60px 0 rgba(37,99,235,0.3)' }}>
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.cta_final.title}
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            {t.cta_final.subtitle}
          </p>
          <a href="https://app.planivoapp.com/register" className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-base" style={{ boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)' }}>
            {t.cta_final.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
import type { Translations } from '../../i18n/en'
interface SocialProofProps {
  t: Translations
}

export default function SocialProof({ t }: SocialProofProps) {
  return (
    <section className="py-16 px-6 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
          {t.social_proof.label}
        </p>
      </div>
    </section>
  )
}
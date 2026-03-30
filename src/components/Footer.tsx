import type { Translations } from '../i18n/en'

interface FooterProps {
  t: Translations
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-slate-900 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="6" height="6" rx="1.5" fill="white"/>
              <rect x="10" y="2" width="6" height="6" rx="1.5" fill="white" opacity="0.7"/>
              <rect x="2" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.7"/>
              <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.4"/>
            </svg>
          </div>
          <span className="font-semibold text-white text-base tracking-tight">PLANIVO</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="/privacy" className="hover:text-white transition-colors">{t.footer.privacy}</a>
          <a href="/terms" className="hover:text-white transition-colors">{t.footer.terms}</a>
          <a href="mailto:hello@planivoapp.com" className="hover:text-white transition-colors">{t.footer.contact}</a>
        </div>

        <p className="text-sm text-slate-500">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
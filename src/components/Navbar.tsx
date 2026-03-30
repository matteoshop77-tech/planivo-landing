import { useState } from 'react'
import type { Translations } from '../i18n/en'

interface NavbarProps {
  t: Translations
}

export default function Navbar({ t }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200" style={{ boxShadow: '0 1px 3px 0 rgba(0,0,0,0.08)' }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="6" height="6" rx="1.5" fill="white"/>
              <rect x="10" y="2" width="6" height="6" rx="1.5" fill="white" opacity="0.7"/>
              <rect x="2" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.7"/>
              <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.4"/>
            </svg>
          </div>
          <span className="font-semibold text-slate-900 text-lg tracking-tight">PLANIVO</span>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <a href="https://app.planivoapp.com/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            {t.nav.login}
          </a>
          <a href="https://app.planivoapp.com/register" className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            {t.nav.cta}
          </a>
        </div>

        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-slate-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-slate-700 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-slate-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-3">
          <a
            href="https://app.planivoapp.com/login"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.login}
          </a>
          <a
            href="https://app.planivoapp.com/register"
            className="text-sm font-medium bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </nav>
  )
}
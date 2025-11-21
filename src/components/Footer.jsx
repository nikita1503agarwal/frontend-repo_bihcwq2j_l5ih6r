import React from 'react'
import { useLang } from './LanguageProvider'

export default function Footer() {
  const { t, lang } = useLang()
  return (
    <footer className="relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-slate-600">{t.footer.company}</div>
        <div className="flex items-center gap-4 text-slate-600">
          <a href="#features">{lang === 'ar' ? 'المميزات' : 'Features'}</a>
          <a href="#pricing">{lang === 'ar' ? 'التسعير' : 'Pricing'}</a>
          <a href="#integrations">{lang === 'ar' ? 'التكاملات' : 'Integrations'}</a>
          <a href="#contact">{lang === 'ar' ? 'تواصل' : 'Contact'}</a>
        </div>
        <div className="text-slate-500 text-sm">© {new Date().getFullYear()} {t.footer.rights}</div>
      </div>
    </footer>
  )
}

import React from 'react'
import { useLang } from './LanguageProvider'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const { lang, setLang, t } = useLang()

  const switchLang = () => setLang(lang === 'ar' ? 'en' : 'ar')

  return (
    <div className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5f259f] via-[#007BFF] to-[#7dd3fc] shadow-[0_0_20px_rgba(95,37,159,0.5)]" />
            <span className="font-semibold tracking-tight text-slate-900">Yesr</span>
          </a>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-slate-700">
            {[
              { key: 'home', href: '#home' },
              { key: 'features', href: '#features' },
              { key: 'pricing', href: '#pricing' },
              { key: 'integrations', href: '#integrations' },
              { key: 'contact', href: '#contact' }
            ].map((item) => (
              <a key={item.key} href={item.href} className="relative py-2 group">
                <span className="transition-colors group-hover:text-slate-900">
                  {t.nav[item.key]}
                </span>
                <motion.span layoutId="nav-underline" className="absolute left-0 right-0 -bottom-1 h-[2px] origin-left bg-gradient-to-r from-[#5f259f] via-[#007BFF] to-[#7dd3fc] scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            ))}

            <button onClick={switchLang} className="px-3 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:shadow-[0_0_20px_rgba(0,123,255,0.25)] hover:border-[#007BFF] transition">
              {lang === 'ar' ? 'EN' : 'AR'}
            </button>
          </div>

          {/* Mobile */}
          <button className="md:hidden p-2 rounded-lg border border-slate-300 text-slate-600">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

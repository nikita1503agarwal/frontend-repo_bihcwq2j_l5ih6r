import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { useLang } from './LanguageProvider'

export default function Hero() {
  const { t, lang } = useLang()

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 opacity-60 pointer-events-none" style={{
        background: 'radial-gradient(1200px 600px at 80% 20%, rgba(95,37,159,0.20), transparent), radial-gradient(1200px 600px at 20% 80%, rgba(0,123,255,0.15), transparent)'
      }} />

      {/* Spline 3D aura */}
      <div className="relative max-w-7xl mx-auto h-[520px] sm:h-[640px] md:h-[720px]">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="pointer-events-auto w-full max-w-7xl mx-auto px-6">
          <div className={`max-w-2xl ${lang === 'ar' ? 'text-right ms-auto' : ''}`}>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#5f259f] via-[#007BFF] to-[#7dd3fc]">
              {t.hero.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 text-slate-600 text-lg sm:text-xl">
              {t.hero.subtitle}
            </motion.p>
            <div className={`mt-8 flex gap-4 ${lang === 'ar' ? 'justify-end' : ''}`}>
              <a href="#pricing" className="px-5 py-3 rounded-full bg-gradient-to-r from-[#5f259f] via-[#007BFF] to-[#7dd3fc] text-white shadow-[0_10px_30px_rgba(95,37,159,0.35)] hover:shadow-[0_10px_35px_rgba(0,123,255,0.45)] transition">
                {t.hero.ctaPrimary}
              </a>
              <a href="#demo" className="px-5 py-3 rounded-full border border-slate-300 bg-white/70 hover:bg-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

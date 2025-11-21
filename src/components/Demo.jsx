import React from 'react'
import { motion } from 'framer-motion'
import { useLang } from './LanguageProvider'

function TypingDots() {
  return (
    <div className="flex items-center gap-1">
      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '120ms' }} />
      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '240ms' }} />
    </div>
  )
}

export default function Demo() {
  const { t, lang } = useLang()

  return (
    <section id="demo" className="relative py-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl font-bold text-slate-900 ${lang === 'ar' ? 'text-right' : ''}`}>{t.demo.heading}</h2>
        <p className={`mt-2 text-slate-600 ${lang === 'ar' ? 'text-right' : ''}`}>{t.demo.sub}</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          {/* Video */}
          <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Yesr Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          {/* Chat mockup */}
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6">
            <div className="h-[360px] overflow-y-auto space-y-3">
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 bg-slate-100 text-slate-800 ${lang === 'ar' ? 'ms-auto text-right' : ''}`}>
                {lang === 'ar' ? 'مرحبا! أحتاج مساعدة بخصوص الطلب.' : 'Hello! I need help with my order.'}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 bg-gradient-to-r from-[#5f259f]/90 to-[#007BFF]/90 text-white ${lang === 'ar' ? 'me-auto text-right' : ''}`}>
                {lang === 'ar' ? 'مرحباً 👋 أنا يُسر. كيف أساعدك؟' : 'Hi 👋 I am Yesr. How can I assist you?'}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 bg-slate-100 text-slate-800 ${lang === 'ar' ? 'ms-auto text-right' : ''}`}>
                {lang === 'ar' ? 'ما هي تكلفة تكامل إنستغرام؟' : 'What is the price for Instagram integration?'}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 bg-white border border-slate-200 ${lang === 'ar' ? 'me-auto text-right' : ''}`}>
                <div className="flex items-center gap-2 text-slate-500"><TypingDots /><span>{lang === 'ar' ? 'يكتب...' : 'typing...'}</span></div>
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 bg-gradient-to-r from-[#5f259f]/90 to-[#007BFF]/90 text-white ${lang === 'ar' ? 'me-auto text-right' : ''}`}>
                {lang === 'ar' ? 'تكامل إنستغرام: 120 ر.س شهرياً. هل ترغب بإضافته؟' : 'Instagram integration: 120 SAR/month. Would you like to add it?'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

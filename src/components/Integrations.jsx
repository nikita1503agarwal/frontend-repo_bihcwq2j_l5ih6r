import React from 'react'
import { motion } from 'framer-motion'
import { Whatsapp, Instagram, Send, Globe } from 'lucide-react'
import { useLang } from './LanguageProvider'

const cards = [
  { icon: Whatsapp, key: 0 },
  { icon: Send, key: 1 },
  { icon: Instagram, key: 2 },
  { icon: Globe, key: 3 }
]

export default function Integrations() {
  const { t, lang } = useLang()

  return (
    <section id="integrations" className="relative py-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl font-bold text-slate-900 ${lang === 'ar' ? 'text-right' : ''}`}>{t.integrations.heading}</h2>
        <p className={`mt-2 text-slate-600 ${lang === 'ar' ? 'text-right' : ''}`}>{t.integrations.note}</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.integrations.items.map((item, i) => {
            const Icon = cards[i].icon
            return (
              <motion.div key={i} whileHover={{ rotateX: 6, rotateY: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group perspective-1000 relative rounded-2xl border border-slate-200 bg-white/80 p-6 hover:shadow-2xl transition overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#5f259f]/10 via-[#007BFF]/10 to-[#7dd3fc]/10 transition" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#5f259f]/10 to-[#007BFF]/10 text-[#5f259f]">
                    <Icon />
                  </div>
                  <h3 className={`mt-4 font-semibold text-slate-900 ${lang === 'ar' ? 'text-right' : ''}`}>{item.title}</h3>
                  <p className={`text-slate-600 text-sm ${lang === 'ar' ? 'text-right' : ''}`}>{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

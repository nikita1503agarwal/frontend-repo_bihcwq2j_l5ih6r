import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, MessageCircle, BarChart3, Workflow, Globe2, Timer } from 'lucide-react'
import { useLang } from './LanguageProvider'

const icons = [Timer, MessageCircle, Workflow, Globe2, BarChart3, Cpu]

export default function Features() {
  const { t, lang } = useLang()

  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(800px 400px at 10% 10%, rgba(95,37,159,0.08), transparent), radial-gradient(1000px 500px at 90% 40%, rgba(0,123,255,0.08), transparent)'
      }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl font-bold text-slate-900 ${lang === 'ar' ? 'text-right' : ''}`}>{t.features.heading}</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-slate-200 bg-white/80 p-6 hover:shadow-xl hover:-translate-y-1 transition overflow-hidden">
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#5f259f]/10 via-[#007BFF]/10 to-[#7dd3fc]/10 blur-2xl transition" />
                <div className="relative flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#5f259f]/10 to-[#007BFF]/10 text-[#5f259f]">
                    <Icon size={22} />
                  </div>
                  <div className={`flex-1 ${lang === 'ar' ? 'text-right' : ''}`}>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

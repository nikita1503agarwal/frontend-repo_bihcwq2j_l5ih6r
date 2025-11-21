import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from './LanguageProvider'

export default function Pricing() {
  const { t, lang } = useLang()
  const [addons, setAddons] = useState({ telegram: false, instagram: false, widget: false, install: false })

  // base pricing values
  const prices = {
    whatsappSetup: 1500, // one-time
    hostingMonthly: 40,
    automationFrom: 200,
    install: 50,
    telegram: 100,
    instagram: 120,
    widget: 80
  }

  const totals = useMemo(() => {
    const oneTime = prices.whatsappSetup + (addons.install ? prices.install : 0)
    const monthly = prices.hostingMonthly + prices.automationFrom + (addons.telegram ? prices.telegram : 0) + (addons.instagram ? prices.instagram : 0) + (addons.widget ? prices.widget : 0)
    return { oneTime, monthly }
  }, [addons])

  const toggle = (key) => setAddons(prev => ({ ...prev, [key]: !prev[key] }))

  const labelDir = lang === 'ar' ? 'text-right' : ''

  return (
    <section id="pricing" className="relative py-20 bg-white">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(1000px 500px at 0% 50%, rgba(95,37,159,0.06), transparent), radial-gradient(1000px 500px at 100% 0%, rgba(0,123,255,0.06), transparent)'
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl font-bold text-slate-900 ${labelDir}`}>{t.pricing.heading}</h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          {/* Base plan description */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h3 className={`text-xl font-semibold text-slate-900 ${labelDir}`}>{t.pricing.base}</h3>
            <ul className={`mt-4 space-y-2 text-slate-700 ${labelDir}`}>
              <li>• {t.pricing.lineItems.whatsapp}</li>
              <li>• {t.pricing.lineItems.hosting}</li>
              <li>• {t.pricing.lineItems.automation}</li>
              <li>• {t.pricing.lineItems.install}</li>
            </ul>

            <div className={`mt-6 ${labelDir}`}>
              <p className="text-sm text-slate-500">{t.pricing.addons}</p>
              <div className={`mt-3 grid sm:grid-cols-2 gap-3 ${labelDir}`}>
                <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer hover:border-[#007BFF] transition">
                  <input type="checkbox" checked={addons.telegram} onChange={() => toggle('telegram')} />
                  <span>{lang === 'ar' ? 'بوت تيليجرام (+100 ر.س)' : 'Telegram Bot (+100 SAR)'}</span>
                </label>
                <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer hover:border-[#007BFF] transition">
                  <input type="checkbox" checked={addons.instagram} onChange={() => toggle('instagram')} />
                  <span>{lang === 'ar' ? 'تكامل إنستغرام (+120 ر.س)' : 'Instagram Integration (+120 SAR)'}</span>
                </label>
                <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer hover:border-[#007BFF] transition">
                  <input type="checkbox" checked={addons.widget} onChange={() => toggle('widget')} />
                  <span>{lang === 'ar' ? 'ودجت الموقع (+80 ر.س)' : 'Website Widget (+80 SAR)'}</span>
                </label>
                <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer hover:border-[#007BFF] transition">
                  <input type="checkbox" checked={addons.install} onChange={() => toggle('install')} />
                  <span>{lang === 'ar' ? 'التركيب (+50 ر.س مرّة واحدة)' : 'Installation (+50 SAR one-time)'}</span>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Dynamic total */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="relative rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#5f259f]/10 via-[#007BFF]/10 to-[#7dd3fc]/10 blur-2xl" />
            <div className="relative">
              <h3 className={`text-xl font-semibold text-slate-900 ${labelDir}`}>{t.pricing.total}</h3>
              <div className={`mt-6 grid sm:grid-cols-2 gap-4 ${labelDir}`}>
                <div className="rounded-2xl p-5 bg-white/70 border border-slate-200">
                  <div className="text-sm text-slate-500">{lang === 'ar' ? 'دفعة' : 'One-time'}</div>
                  <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#5f259f] via-[#007BFF] to-[#7dd3fc]">{totals.oneTime} SAR</div>
                </div>
                <div className="rounded-2xl p-5 bg-white/70 border border-slate-200">
                  <div className="text-sm text-slate-500">{lang === 'ar' ? 'شهرياً' : 'Per month'}</div>
                  <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#5f259f] via-[#007BFF] to-[#7dd3fc]">{totals.monthly} SAR</div>
                </div>
              </div>
              <a href="#contact" className="mt-8 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#5f259f] via-[#007BFF] to-[#7dd3fc] text-white hover:shadow-[0_10px_35px_rgba(0,123,255,0.4)] transition">
                {lang === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

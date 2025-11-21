import React from 'react'
import { useLang } from './LanguageProvider'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function Contact() {
  const { t, lang } = useLang()

  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl font-bold text-slate-900 ${lang === 'ar' ? 'text-right' : ''}`}>{t.contact.heading}</h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <form className="rounded-2xl border border-slate-200 bg-white/80 p-6 space-y-4">
            <div>
              <label className="block text-sm text-slate-600">{t.contact.name}</label>
              <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]" placeholder={t.contact.name} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600">{t.contact.email}</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]" placeholder={t.contact.email} />
              </div>
              <div>
                <label className="block text-sm text-slate-600">{t.contact.business}</label>
                <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]" placeholder={t.contact.business} />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-600">{t.contact.message}</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]" placeholder={t.contact.message} />
            </div>
            <button type="button" className="px-6 py-3 rounded-full bg-gradient-to-r from-[#5f259f] via-[#007BFF] to-[#7dd3fc] text-white hover:shadow-[0_10px_35px_rgba(0,123,255,0.4)] transition">{t.contact.send}</button>
          </form>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 flex flex-col justify-between">
            <div>
              <p className="text-slate-600">{lang === 'ar' ? 'تواصل سريع عبر واتساب:' : 'Quick contact via WhatsApp:'}</p>
              <a href="https://wa.me/966000000000" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 hover:border-[#007BFF] hover:shadow-[0_10px_25px_rgba(0,123,255,0.25)] transition">
                <Phone size={18} /><span>{t.contact.whatsapp}</span>
              </a>
            </div>

            {/* Floating mini-bot */}
            <div className="mt-8 self-end">
              <div className="relative w-56 rounded-2xl border border-slate-200 p-4 bg-white/70 shadow-sm">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#5f259f]/10 via-[#007BFF]/10 to-[#7dd3fc]/10 blur-xl" />
                <div className="relative text-sm text-slate-700">
                  <div className="font-semibold">Yesr</div>
                  <div className="mt-2 rounded-xl bg-slate-100 px-3 py-2">{lang === 'ar' ? 'مرحباً! أنا هنا للمساعدة 🤖' : 'Hi! I am here to help 🤖'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

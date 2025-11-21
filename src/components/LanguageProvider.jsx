import React, { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar')

  const t = useMemo(() => ({
    ar: {
      nav: { home: 'الرئيسية', features: 'المميزات', pricing: 'التسعير', integrations: 'التكاملات', contact: 'تواصل' },
      hero: {
        title: 'يُسر – مساعدك الذكي لتبسيط تدفق أعمالك.',
        subtitle: 'أتمتة خدمة العملاء عبر واتساب، إنستغرام، تيليجرام، وموقعك الإلكتروني.',
        ctaPrimary: 'ابدأ الآن',
        ctaSecondary: 'شاهد التجربة'
      },
      features: {
        heading: 'لماذا يُسر؟',
        items: [
          { title: 'دعم على مدار الساعة', desc: 'ذكاء اصطناعي يرد فوراً على استفسارات عملائك.' },
          { title: 'توليد العملاء المحتملين', desc: 'حوّل المحادثات إلى عملاء حقيقيين.' },
          { title: 'أتمتة سير العمل', desc: 'قلّل العمل اليدوي إلى بضع نقرات.' },
          { title: 'منصات متعددة', desc: 'واتساب، تيليجرام، إنستغرام، والمواقع.' },
          { title: 'لوحة تحليلات', desc: 'تتبّع العملاء والردود والمبيعات.' },
          { title: 'ثنائي اللغة', desc: 'العربية والإنجليزية.' }
        ]
      },
      integrations: {
        heading: 'التكاملات',
        items: [
          { title: 'واتساب (Business API)', desc: 'طلبات، حجوزات، أسئلة شائعة.' },
          { title: 'بوت تيليجرام', desc: 'تفاعل مع المجتمعات.' },
          { title: 'إنستغرام (Meta)', desc: 'الرد على الرسائل والتعليقات.' },
          { title: 'ودجت الموقع', desc: 'مساعد ذكي على موقعك.' }
        ],
        note: 'التسعير يتكيّف ديناميكياً مع الإضافات.'
      },
      pricing: {
        heading: 'التسعير',
        base: 'الخطة الأساسية',
        lineItems: {
          whatsapp: 'بوت واتساب (يُسر) – 1500 ر.س (مرّة واحدة)',
          hosting: 'الاستضافة – 40 ر.س / شهرياً',
          automation: 'الأتمتة – ابتداءً من 200 ر.س',
          install: 'التركيب (اختياري) – 50 ر.س'
        },
        addons: 'إضافات اختيارية',
        total: 'الإجمالي',
        perMonth: 'شهرياً',
        oneTime: 'مرّة واحدة'
      },
      demo: {
        heading: 'شاهد التجربة',
        sub: 'مشهد توضيحي لكيفية تجاوب يُسر مع محادثات العملاء.'
      },
      contact: {
        heading: 'تواصل معنا',
        name: 'الاسم', email: 'البريد الإلكتروني', business: 'النشاط التجاري', message: 'الرسالة',
        send: 'إرسال', whatsapp: 'تواصل واتساب'
      },
      footer: {
        company: 'Joyina | Yesr.io', rights: 'جميع الحقوق محفوظة'
      }
    },
    en: {
      nav: { home: 'Home', features: 'Features', pricing: 'Pricing', integrations: 'Integrations', contact: 'Contact' },
      hero: {
        title: 'Yesr – Your Smart AI Assistant for Smoother Business Flow.',
        subtitle: 'Automating customer service across WhatsApp, Instagram, Telegram, and your website.',
        ctaPrimary: 'Get Started',
        ctaSecondary: 'Watch Demo'
      },
      features: {
        heading: 'Why Yesr?',
        items: [
          { title: '24/7 Support', desc: 'AI replies instantly to your customers.' },
          { title: 'Lead Generation', desc: 'Convert chats into real clients.' },
          { title: 'Workflow Automation', desc: 'Reduce manual work to a few clicks.' },
          { title: 'Multi-Platform', desc: 'WhatsApp, Telegram, Instagram, and Websites.' },
          { title: 'Analytics Dashboard', desc: 'Track leads, responses, and sales.' },
          { title: 'Bilingual Support', desc: 'Arabic & English.' }
        ]
      },
      integrations: {
        heading: 'Integrations',
        items: [
          { title: 'WhatsApp (Business API)', desc: 'Orders, bookings, FAQs.' },
          { title: 'Telegram Bot', desc: 'Engage communities.' },
          { title: 'Instagram (Meta)', desc: 'Reply to DMs & comments.' },
          { title: 'Website Widget', desc: 'Smart assistant on your site.' }
        ],
        note: 'Pricing adjusts dynamically based on add-ons.'
      },
      pricing: {
        heading: 'Pricing',
        base: 'Base Plan',
        lineItems: {
          whatsapp: 'WhatsApp Bot (Yesr) – 1500 SAR (one-time)',
          hosting: 'Hosting – 40 SAR / month',
          automation: 'Automation – from 200 SAR',
          install: 'Installation (optional) – 50 SAR'
        },
        addons: 'Add-ons',
        total: 'Total',
        perMonth: 'per month',
        oneTime: 'one-time'
      },
      demo: {
        heading: 'Watch Demo',
        sub: 'A glimpse of Yesr responding to customer chats.'
      },
      contact: {
        heading: 'Contact Us',
        name: 'Name', email: 'Email', business: 'Business', message: 'Message',
        send: 'Send', whatsapp: 'WhatsApp'
      },
      footer: {
        company: 'Joyina | Yesr.io', rights: 'All rights reserved'
      }
    }
  })[lang], [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  return useContext(LanguageContext)
}

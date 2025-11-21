import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import Demo from './components/Demo'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './components/LanguageProvider'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <Hero />
        <Features />
        <Integrations />
        <Pricing />
        <Demo />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App

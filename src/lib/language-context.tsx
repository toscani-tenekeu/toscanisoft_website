'use client'

import { createContext, useContext, useState } from 'react'

type Language = 'fr' | 'en'

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

const translations: Translations = {
  fr: {
    services: 'Services',
    products: 'Produits',
    contact: 'Contact',
    getStarted: 'Commencer',
    ourServices: 'Nos Services',
    ourProducts: 'Nos Produits',
    solutions: 'Solutions complètes pour vos besoins numériques',
    innovativeSolutions: 'Solutions innovantes pour les défis modernes',
    learnMore: 'En savoir plus',
    footerRights: 'Tous droits réservés',
    switchTheme: 'Changer le thème',
  },
  en: {
    services: 'Services',
    products: 'Products',
    contact: 'Contact',
    getStarted: 'Get Started',
    ourServices: 'Our Services',
    ourProducts: 'Our Products',
    solutions: 'Comprehensive solutions for your digital needs',
    innovativeSolutions: 'Innovative solutions for modern challenges',
    learnMore: 'Learn more',
    footerRights: 'All rights reserved',
    switchTheme: 'Switch theme',
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  const t = (key: string) => translations[language][key] || key

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}


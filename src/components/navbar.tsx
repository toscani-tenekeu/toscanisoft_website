'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import SettingsToggles from '@/components/settings-toggles'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary dark:text-white">Toscanisoft</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white">
              {t('services')}
            </Link>
            <Link href="#products" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white">
              {t('products')}
            </Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white">
              {t('contact')}
            </Link>
            <SettingsToggles />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <SettingsToggles />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#services"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {t('services')}
            </Link>
            <Link
              href="#products"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {t('products')}
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}


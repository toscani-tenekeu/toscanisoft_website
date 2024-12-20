'use client'

import { useLanguage } from '@/lib/language-context'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary dark:bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Toscanisoft</h3>
            <p className="text-sm text-gray-300">
              L&apos;innovation technologique à votre portée
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('services')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Développement d&apos;applications</li>
              <li>Création de sites internet</li>
              <li>Conception de logos</li>
              <li>Hébergement web</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('products')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>IntelliLearn</li>
              <li>Night Hoster</li>
              <li>Englify</li>
              <li>Conceptor</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>contact@toscanisoft.com</li>
              <li>+1 234 567 890</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {currentYear} Toscanisoft. {t('footerRights')}.</p>
        </div>
      </div>
    </footer>
  )
}


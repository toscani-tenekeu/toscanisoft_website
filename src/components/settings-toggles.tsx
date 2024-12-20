'use client'

import { Moon, Sun } from 'lucide-react'
import Button from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'
import { useLanguage } from '@/lib/language-context'

export default function SettingsToggles() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label={t('switchTheme')}
      >
        {theme === 'light' ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>
      <Button
        variant="ghost"
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        className="w-12"
      >
        {language.toUpperCase()}
      </Button>
    </div>
  )
}


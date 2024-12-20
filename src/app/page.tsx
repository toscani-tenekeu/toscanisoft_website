import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Products from '@/components/products'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/language-context'

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <main className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <Hero />
          <Services />
          <Products />
          <Footer />
        </main>
      </LanguageProvider>
    </ThemeProvider>
  )
}


'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Дома' },
  { href: '/about/', label: 'За нас' },
  { href: '/projects/', label: 'Проекти' },
  { href: '/contact/', label: 'Контакт' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '/mk/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-highlight/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            aria-label="Ксанаду Арт - Дома"
          >
            <Image
              src="/images/logo.png"
              alt="Ксанаду Арт"
              width={200}
              height={72}
              className="h-14 w-auto lg:h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Главна навигација">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary-dark'
                    : 'text-text-secondary hover:text-primary-dark'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <Globe className="w-4 h-4 text-text-muted" aria-hidden="true" />
              <Link
                href="/"
                className={`text-sm font-medium px-2 py-1 rounded ${
                  pathname.startsWith('/en/') === false
                    ? 'bg-highlight text-primary-dark'
                    : 'text-text-secondary hover:text-primary-dark'
                }`}
                aria-label="Македонски"
              >
                MK
              </Link>
              <span className="text-text-muted">|</span>
              <Link
                href="/en/"
                className={`text-sm font-medium px-2 py-1 rounded ${
                  pathname.startsWith('/en/')
                    ? 'bg-highlight text-primary-dark'
                    : 'text-text-secondary hover:text-primary-dark'
                }`}
                aria-label="English"
              >
                EN
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg hover:bg-highlight/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Затвори мени' : 'Отвори мени'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-primary-dark" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-primary-dark" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu" 
          className="lg:hidden bg-white border-t border-highlight/50 animate-fade-in"
        >
          <nav className="px-4 py-4 space-y-2" aria-label="Мобилна навигација">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-highlight text-primary-dark'
                    : 'text-text-secondary hover:bg-highlight/50 hover:text-primary-dark'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher - Mobile */}
            <div className="pt-4 mt-4 border-t border-highlight/50">
              <p className="px-4 text-sm text-text-muted mb-2">Избери јазик:</p>
              <div className="flex gap-2 px-4">
                <Link
                  href="/"
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    pathname.startsWith('/en/') === false
                      ? 'bg-primary-dark text-white'
                      : 'bg-highlight text-text-secondary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Македонски
                </Link>
                <Link
                  href="/en/"
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    pathname.startsWith('/en/')
                      ? 'bg-primary-dark text-white'
                      : 'bg-highlight text-text-secondary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  English
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

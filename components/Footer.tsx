import Link from 'next/link'
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Дома' },
  { href: '/about/', label: 'За нас' },
  { href: '/projects/', label: 'Проекти' },
  { href: '/contact/', label: 'Контакт' },
]

const socialLinks = [
  { href: 'https://facebook.com/xanaduart', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com/xanaduart', icon: Instagram, label: 'Instagram' },
  { href: 'https://youtube.com/xanaduart', icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">X</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl">Ксанаду Арт</h3>
                <p className="text-white/70 text-sm">Уметничка НВО</p>
              </div>
            </div>
            <p className="text-white/80 max-w-md mb-6 leading-relaxed">
              Непрофитна, неполитичка и неденоминациска организација основана во 2020 година 
              во Охрид, Македонија. Нашата мисија е да ги зајакнеме и поврземе младите луѓе 
              преку уметнички медиуми.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Брзи линкови</h4>
            <nav aria-label="Футер навигација">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Контакт</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@xanaduart.mk"
                  className="text-white/80 hover:text-accent transition-colors flex items-start gap-3"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>info@xanaduart.mk</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+38970123456"
                  className="text-white/80 hover:text-accent transition-colors flex items-start gap-3"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>+389 70 123 456</span>
                </a>
              </li>
              <li>
                <div className="text-white/80 flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <address className="not-italic">
                    ул. Кирил и Методиј бр. 1<br />
                    6000 Охрид, Македонија
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>
              &copy; {new Date().getFullYear()} Ксанаду Арт. Сите права задржани.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy/" className="hover:text-accent transition-colors">
                Политика за приватност
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/terms/" className="hover:text-accent transition-colors">
                Услови за користење
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

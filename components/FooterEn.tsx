import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Facebook } from 'lucide-react'

const quickLinks = [
  { href: '/en/', label: 'Home' },
  { href: '/en/about/', label: 'About' },
  { href: '/en/projects/', label: 'Projects' },
  { href: '/en/contact/', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://www.facebook.com/xanaduartngo', icon: Facebook, label: 'Facebook' },
]

export default function FooterEn() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Xanadu Art"
                width={220}
                height={80}
                className="h-16 w-auto lg:h-20 object-contain"
              />
            </div>
            <p className="text-white/80 max-w-md mb-6 leading-relaxed">
              A non-profit, non-political, non-denominational association founded in 2020 
              in Ohrid, Macedonia. Our mission is to empower and connect young people 
              through artistic mediums.
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
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
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
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:xanadu_ohrid@yahoo.com"
                  className="text-white/80 hover:text-accent transition-colors flex items-start gap-3"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>xanadu_ohrid@yahoo.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+38975308447"
                  className="text-white/80 hover:text-accent transition-colors flex items-start gap-3"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>+389 75 308 447</span>
                </a>
              </li>
              <li>
                <div className="text-white/80 flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <address className="not-italic">
                    &quot;Petar Chaulev&quot; 52<br />
                    6000 Ohrid, Macedonia
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
              &copy; {new Date().getFullYear()} Xanadu Art. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/en/privacy/" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/en/terms/" className="hover:text-accent transition-colors">
    Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeaderEn from '@/components/HeaderEn'
import FooterEn from '@/components/FooterEn'

export default function LocaleShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() || '/'
  const isEn = pathname === '/en' || pathname.startsWith('/en/')

  const ShellHeader = isEn ? HeaderEn : Header
  const ShellFooter = isEn ? FooterEn : Footer
  const skipText = isEn ? 'Skip to main content' : 'Прескокни до главна содржина'

  return (
    <>
      <a href="#main-content" className="skip-link">
        {skipText}
      </a>
      <ShellHeader />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <ShellFooter />
    </>
  )
}


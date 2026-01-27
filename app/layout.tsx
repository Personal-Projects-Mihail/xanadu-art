import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ксанаду Арт | Уметничка НВО - Охрид, Македонија',
  description: 'Ксанаду Арт е непрофитна, неполитичка и неденоминациска организација основана во 2020 година во Охрид, Македонија. Нашата мисија е да ги зајакнеме и поврземе младите луѓе преку уметнички медиуми.',
  keywords: ['Ксанаду Арт', 'NVО', 'уметност', 'култура', 'млади', 'Охрид', 'Македонија', 'театар', 'музика', 'танц', 'Еразмус+'],
  authors: [{ name: 'Xanadu Art NGO' }],
  creator: 'Xanadu Art NGO',
  publisher: 'Xanadu Art NGO',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://xanaduart.mk/',
    languages: {
      'mk': 'https://xanaduart.mk/',
      'en': 'https://xanaduart.mk/en/',
      'x-default': 'https://xanaduart.mk/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'mk_MK',
    url: 'https://xanaduart.mk/',
    siteName: 'Ксанаду Арт',
    title: 'Ксанаду Арт | Уметничка НВО - Охрид, Македонија',
    description: 'Непрофитна организација посветена на зајакнување на младите преку уметност, култура и образование.',
    images: [
      {
        url: 'https://xanaduart.mk/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ксанаду Арт - Уметничка НВО',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ксанаду Арт | Уметничка НВО - Охрид, Македонија',
    description: 'Непрофитна организација посветена на зајакнување на младите преку уметност, култура и образование.',
    images: ['https://xanaduart.mk/images/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mk">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#540863" />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Прескокни до главна содржина
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

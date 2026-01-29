import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Xanadu Art | Art NGO - Ohrid, Macedonia',
  description: 'Xanadu Art is a non-profit, non-political, non-denominational association founded in 2020 in Ohrid, Macedonia. Our mission is to empower and connect young people through artistic mediums.',
  keywords: ['Xanadu Art', 'NGO', 'art', 'culture', 'youth', 'Ohrid', 'Macedonia', 'theater', 'music', 'dance', 'Erasmus+'],
  authors: [{ name: 'Xanadu Art NGO' }],
  creator: 'Xanadu Art NGO',
  publisher: 'Xanadu Art NGO',
  robots: 'index, follow',
  icons: { icon: '/favicon.ico' },
  alternates: {
    canonical: 'https://xanaduart.mk/en/',
    languages: {
      'mk': 'https://xanaduart.mk/',
      'en': 'https://xanaduart.mk/en/',
      'x-default': 'https://xanaduart.mk/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xanaduart.mk/en/',
    siteName: 'Xanadu Art',
    title: 'Xanadu Art | Art NGO - Ohrid, Macedonia',
    description: 'Non-profit organization dedicated to empowering youth through art, culture, and education.',
    images: [
      {
        url: 'https://xanaduart.mk/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Xanadu Art - Art NGO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xanadu Art | Art NGO - Ohrid, Macedonia',
    description: 'Non-profit organization dedicated to empowering youth through art, culture, and education.',
    images: ['https://xanaduart.mk/images/og-image.jpg'],
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

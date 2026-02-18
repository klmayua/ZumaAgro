import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import SiteFooter from './components/SiteFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Zuma Agro Allied Integrated Limited',
    template: '%s | Zuma Agro'
  },
  description: 'Transforming Agriculture Through Strategic Integration - A nationwide agro-industrial platform addressing Nigeria\'s food security through integrated ranching, livestock, grains, and export operations.',
  keywords: [
    'agriculture',
    'Nigeria',
    'livestock',
    'ranching',
    'food security',
    'agro-industrial',
    'cattle',
    'grains',
    'export',
    'sustainable farming',
    'investment',
    'ESG'
  ],
  authors: [{ name: 'Zuma Agro Allied Integrated Limited' }],
  creator: 'Zuma Agro',
  publisher: 'Zuma Agro Allied Integrated Limited',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://zumaagro.com',
    siteName: 'Zuma Agro Allied Integrated Limited',
    title: 'Zuma Agro - Transforming Agriculture Through Strategic Integration',
    description: 'A nationwide agro-industrial platform addressing Nigeria\'s food security through integrated ranching and sustainable agriculture.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zuma Agro - Integrated Agriculture Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zuma Agro Allied Integrated Limited',
    description: 'Transforming Agriculture Through Strategic Integration',
    images: ['/og-image.jpg'],
    creator: '@zumaagro',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://zumaagro.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow" role="main">
            {children}
          </main>
          <SiteFooter />
        </div>
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-corporate-navy focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
      </body>
    </html>
  )
}

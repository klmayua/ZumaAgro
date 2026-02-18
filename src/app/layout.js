import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zuma Agro Allied Integrated Limited',
  description: 'Transforming Agriculture Through Strategic Integration',
}

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* Navigation */}
          <header className="bg-white shadow-md">
            <div className="container mx-auto px-4">
              <nav className="flex items-center justify-between py-4">
                <Link href="/" className="text-2xl font-bold text-corporate-navy">
                  ZUMA<span className="text-forest-green">AGRO</span>
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  <Link href="/" className="text-corporate-navy hover:text-forest-green font-medium transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="text-corporate-navy hover:text-forest-green font-medium transition-colors">
                    About
                  </Link>
                  <Link href="/operations" className="text-corporate-navy hover:text-forest-green font-medium transition-colors">
                    Operations
                  </Link>
                  <Link href="/sustainability" className="text-corporate-navy hover:text-forest-green font-medium transition-colors">
                    Sustainability
                  </Link>
                  <Link href="/investors" className="text-corporate-navy hover:text-forest-green font-medium transition-colors">
                    Investors
                  </Link>
                  <Link href="/contact" className="text-corporate-navy hover:text-forest-green font-medium transition-colors">
                    Contact
                  </Link>
                </div>
                
                {/* Mobile menu button */}
                <button 
                  className="md:hidden text-corporate-navy"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </nav>
              
              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="md:hidden py-4 border-t border-gray-200">
                  <div className="flex flex-col space-y-4">
                    <Link href="/" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                      Home
                    </Link>
                    <Link href="/about" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                      About
                    </Link>
                    <Link href="/operations" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                      Operations
                    </Link>
                    <Link href="/sustainability" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                      Sustainability
                    </Link>
                    <Link href="/investors" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                      Investors
                    </Link>
                    <Link href="/contact" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                      Contact
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </header>
          
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
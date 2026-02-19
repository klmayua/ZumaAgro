"use client";

import Link from 'next/link';
import SearchBar from './SearchBar';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md" role="banner">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4" role="navigation" aria-label="Main navigation">
          <Link href="/" className="flex-shrink-0" aria-label="Zuma Agro Home">
            <img src="/logo.png" alt="Zuma Agro" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6" role="menubar">
            <Link href="/" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" role="menuitem">
              Home
            </Link>
            <Link href="/about" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" role="menuitem">
              About
            </Link>
            <Link href="/operations" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" role="menuitem">
              Operations
            </Link>
            <Link href="/model" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" role="menuitem">
              Model
            </Link>
            <Link href="/markets" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" role="menuitem">
              Markets
            </Link>
            <Link href="/sustainability" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" role="menuitem">
              Sustainability
            </Link>
            <Link href="/investors" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" role="menuitem">
              Investors
            </Link>
            <Link href="/media" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" role="menuitem">
              Media
            </Link>
            <Link href="/careers" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" role="menuitem">
              Careers
            </Link>
            <Link href="/contact" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" role="menuitem">
              Contact
            </Link>
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <SearchBar />

            {/* Mobile menu button */}
            <button
              className="md:hidden text-corporate-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/operations" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Operations
              </Link>
              <Link href="/model" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Model
              </Link>
              <Link href="/markets" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Markets
              </Link>
              <Link href="/sustainability" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Sustainability
              </Link>
              <Link href="/investors" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Investors
              </Link>
              <Link href="/media" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Media
              </Link>
              <Link href="/careers" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Careers
              </Link>
              <Link href="/contact" className="text-corporate-navy hover:text-forest-green font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

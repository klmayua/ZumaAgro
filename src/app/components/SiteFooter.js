"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function SiteFooter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        if (!data.alreadySubscribed) {
          setEmail('');
        }
      } else {
        setStatus({ type: 'error', message: data.error });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to subscribe. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-corporate-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="Zuma Agro" className="h-12 w-auto mb-4 opacity-70" />
            <p className="text-gray-300">
              Transforming Agriculture Through Strategic Integration
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-sun-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-sun-gold transition-colors">About Us</Link></li>
              <li><Link href="/operations" className="text-gray-300 hover:text-sun-gold transition-colors">Operations</Link></li>
              <li><Link href="/markets" className="text-gray-300 hover:text-sun-gold transition-colors">Markets</Link></li>
              <li><Link href="/sustainability" className="text-gray-300 hover:text-sun-gold transition-colors">Sustainability</Link></li>
              <li><Link href="/investors" className="text-gray-300 hover:text-sun-gold transition-colors">Investors</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-sun-gold transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Operations</h4>
            <ul className="space-y-2">
              <li><Link href="/operations#livestock" className="text-gray-300 hover:text-sun-gold transition-colors">Livestock Division</Link></li>
              <li><Link href="/operations#grains" className="text-gray-300 hover:text-sun-gold transition-colors">Grains Division</Link></li>
              <li><Link href="/operations#apiculture" className="text-gray-300 hover:text-sun-gold transition-colors">Bee Farming</Link></li>
              <li><Link href="/model" className="text-gray-300 hover:text-sun-gold transition-colors">Integrated Processing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Investors</h4>
            <ul className="space-y-2">
              <li><Link href="/investors#thesis" className="text-gray-300 hover:text-sun-gold transition-colors">Investment Thesis</Link></li>
              <li><Link href="/downloads" className="text-gray-300 hover:text-sun-gold transition-colors">Financial Reports</Link></li>
              <li><Link href="/investors#governance" className="text-gray-300 hover:text-sun-gold transition-colors">Governance</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-sun-gold transition-colors">Investor Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-300">
              <p>Plot 1234, Agricultural Business District</p>
              <p>Central Business Area, Abuja, Nigeria</p>
              <p className="mt-2">Email: info@zumaagro.com</p>
              <p>Phone: +234 XXX XXX XXXX</p>
              <p className="mt-2">Emergency: [Security Contact]</p>
            </address>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-sun-gold text-2xl transition-colors" aria-label="LinkedIn">💼</a>
              <a href="#" className="text-gray-300 hover:text-sun-gold text-2xl transition-colors" aria-label="Twitter">📱</a>
              <a href="#" className="text-gray-300 hover:text-sun-gold text-2xl transition-colors" aria-label="YouTube">▶️</a>
              <a href="#" className="text-gray-300 hover:text-sun-gold text-2xl transition-colors" aria-label="Instagram">📸</a>
            </div>
          </div>
          <div>
            <h5 className="text-md font-semibold mb-2">Newsletter</h5>
            <form onSubmit={handleNewsletterSubscribe} className="flex flex-col gap-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  disabled={isSubmitting}
                  className="px-3 py-2 text-gray-800 rounded-l focus:outline-none w-full disabled:bg-gray-200"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-sun-gold hover:bg-forest-green text-corporate-navy font-bold py-2 px-4 rounded-r transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '...' : '✓'}
                </button>
              </div>
              {status && (
                <p className={`text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 Zuma Agro Allied Integrated Limited. All Rights Reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="hover:text-sun-gold mx-2 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-sun-gold mx-2 transition-colors">Terms of Use</Link>
            <Link href="/downloads" className="hover:text-sun-gold mx-2 transition-colors">ESG Reports</Link>
            <Link href="/contact" className="hover:text-sun-gold mx-2 transition-colors">Supplier Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-forest-green">404</h1>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Illustration */}
        <div className="mb-8">
          <svg
            className="w-48 h-48 mx-auto text-sun-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-forest-green hover:bg-meadow-green text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            ← Back to Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-corporate-navy text-corporate-navy hover:bg-corporate-navy hover:text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-forest-green hover:underline">
              About Us
            </Link>
            <Link href="/operations" className="text-forest-green hover:underline">
              Operations
            </Link>
            <Link href="/investors" className="text-forest-green hover:underline">
              Investors
            </Link>
            <Link href="/careers" className="text-forest-green hover:underline">
              Careers
            </Link>
            <Link href="/downloads" className="text-forest-green hover:underline">
              Downloads
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

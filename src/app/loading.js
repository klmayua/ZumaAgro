"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 border-4 border-forest-green/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-forest-green border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-4 bg-sun-gold rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-corporate-navy mb-2">Loading</h2>
        <p className="text-gray-600">Please wait while we prepare the page...</p>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-forest-green to-meadow-green rounded-full animate-pulse w-2/3"></div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-12 text-sm text-gray-500">
          <p>🌾 Transforming Agriculture Through Strategic Integration</p>
        </div>
      </div>
    </div>
  );
}

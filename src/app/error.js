"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-4">
          Something Went Wrong
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We're sorry, but an unexpected error occurred. Please try again.
        </p>

        {/* Error Details (in development) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm font-mono text-red-800 break-all">
              {error.message || "Unknown error"}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={reset}
            className="bg-forest-green hover:bg-meadow-green text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border-2 border-corporate-navy text-corporate-navy hover:bg-corporate-navy hover:text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Go Home
          </Link>
        </div>

        {/* Support Contact */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Still having issues?</p>
          <p className="text-sm text-gray-600">
            Contact support at{" "}
            <a href="mailto:support@zumaagro.com" className="text-forest-green hover:underline">
              support@zumaagro.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

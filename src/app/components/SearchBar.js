"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Mock search data - in a real app, this would come from an API
  const searchData = [
    { id: 1, title: "About Zuma Agro", url: "/about", type: "Page" },
    { id: 2, title: "Our Leadership Team", url: "/about", type: "Page" },
    { id: 3, title: "Integrated Ranch Model", url: "/model", type: "Page" },
    { id: 4, title: "Sustainability Initiatives", url: "/sustainability", type: "Page" },
    { id: 5, title: "Investment Opportunities", url: "/investors", type: "Page" },
    { id: 6, title: "Career Opportunities", url: "/careers", type: "Page" },
    { id: 7, title: "Contact Us", url: "/contact", type: "Page" },
    { id: 8, title: "News: Partnership Announcement", url: "/media", type: "News" },
    { id: 9, title: "Event: Investor Roadshow", url: "/media", type: "Event" },
    { id: 10, title: "Corporate Overview PDF", url: "/downloads", type: "Document" },
    { id: 11, title: "Sustainability Report", url: "/downloads", type: "Document" },
    { id: 12, title: "Investment Thesis", url: "/downloads", type: "Document" }
  ];

  useEffect(() => {
    if (query.length > 2) {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults.slice(0, 8)); // Limit to 8 results
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // In a real app, this would navigate to a search results page
      console.log('Searching for:', query);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Search Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Open search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Search Box */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              {/* Search Form */}
              <form onSubmit={handleSearch} className="p-4 border-b border-gray-200">
                <div className="relative">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Zuma Agro..."
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold focus:border-transparent"
                    autoFocus
                  />
                  <button 
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </form>

              {/* Search Results */}
              {query.length > 2 && (
                <div className="max-h-96 overflow-y-auto">
                  {results.length > 0 ? (
                    <div className="divide-y divide-gray-100">
                      {results.map((result) => (
                        <Link
                          key={result.id}
                          href={result.url}
                          onClick={() => setIsOpen(false)}
                          className="block p-4 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium text-corporate-navy">{result.title}</h3>
                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                              {result.type}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-600">No results found for "{query}"</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Try different keywords or browse our{" "}
                        <Link href="/sitemap" className="text-forest-green hover:underline">
                          site map
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Popular Searches */}
              {query.length <= 2 && (
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-3">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Investment', 'Careers', 'Sustainability', 'Contact'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
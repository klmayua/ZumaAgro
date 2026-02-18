"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Downloads() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock document data
  const documents = [
    {
      id: 1,
      title: "Corporate Overview",
      category: "corporate",
      type: "PDF",
      size: "2.4 MB",
      date: "2026-03-15",
      description: "Comprehensive overview of Zuma Agro's vision, mission, and strategic positioning",
      link: "/downloads/corporate-overview.pdf"
    },
    {
      id: 2,
      title: "Investment Thesis",
      category: "investors",
      type: "PDF",
      size: "1.8 MB",
      date: "2026-03-10",
      description: "Detailed investment proposition and financial projections",
      link: "/downloads/investment-thesis.pdf"
    },
    {
      id: 3,
      title: "Sustainability Report 2026",
      category: "esg",
      type: "PDF",
      size: "5.2 MB",
      date: "2026-03-05",
      description: "Annual environmental, social, and governance performance report",
      link: "/downloads/sustainability-2026.pdf"
    },
    {
      id: 4,
      title: "Integrated Ranch Model",
      category: "operations",
      type: "PDF",
      size: "3.7 MB",
      date: "2026-02-28",
      description: "Technical documentation of our 9-phase implementation framework",
      link: "/downloads/integrated-ranch-model.pdf"
    },
    {
      id: 5,
      title: "Technology Platform Overview",
      category: "technology",
      type: "PDF",
      size: "2.1 MB",
      date: "2026-02-20",
      description: "Overview of digital systems and platforms used across operations",
      link: "/downloads/technology-platform.pdf"
    },
    {
      id: 6,
      title: "Partnership Framework",
      category: "corporate",
      type: "PDF",
      size: "1.5 MB",
      date: "2026-02-15",
      description: "Details on military and institutional partnership structures",
      link: "/downloads/partnership-framework.pdf"
    },
    {
      id: 7,
      title: "Financial Highlights 2025",
      category: "investors",
      type: "PDF",
      size: "845 KB",
      date: "2026-01-30",
      description: "Key financial metrics and performance indicators for 2025",
      link: "/downloads/financial-highlights-2025.pdf"
    },
    {
      id: 8,
      title: "Community Impact Report",
      category: "esg",
      type: "PDF",
      size: "3.9 MB",
      date: "2026-01-15",
      description: "Assessment of social impact and community development initiatives",
      link: "/downloads/community-impact.pdf"
    },
    {
      id: 9,
      title: "Brand Guidelines",
      category: "media",
      type: "PDF",
      size: "4.2 MB",
      date: "2026-01-10",
      description: "Official brand standards and visual identity guidelines",
      link: "/downloads/brand-guidelines.pdf"
    },
    {
      id: 10,
      title: "Executive Bios",
      category: "media",
      type: "PDF",
      size: "1.2 MB",
      date: "2025-12-20",
      description: "Biographies and photos of senior leadership team",
      link: "/downloads/executive-bios.pdf"
    },
    {
      id: 11,
      title: "Logo Package",
      category: "media",
      type: "ZIP",
      size: "15.7 MB",
      date: "2025-12-15",
      description: "High-resolution logos in multiple formats and color variations",
      link: "/downloads/logo-package.zip"
    },
    {
      id: 12,
      title: "Annual Report 2025",
      category: "investors",
      type: "PDF",
      size: "6.8 MB",
      date: "2025-12-01",
      description: "Comprehensive annual report covering operations and financials",
      link: "/downloads/annual-report-2025.pdf"
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Documents' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'investors', name: 'Investors' },
    { id: 'esg', name: 'Sustainability & ESG' },
    { id: 'operations', name: 'Operations' },
    { id: 'technology', name: 'Technology' },
    { id: 'media', name: 'Media & Press' }
  ];

  // Filter documents based on search query and category
  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray">
      {/* Header Section */}
      <section className="bg-corporate-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resource Library</h1>
          <p className="text-xl max-w-3xl mx-auto text-meadow-green">
            Access our comprehensive collection of corporate documents, reports, and resources
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search and Filter */}
            <div className="mb-12">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="w-full px-6 py-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-sun-gold focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-3 top-3 bg-corporate-navy text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedCategory === category.id
                        ? 'bg-corporate-navy text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Document Count */}
            <div className="mb-8">
              <p className="text-gray-600">
                Showing {filteredDocuments.length} of {documents.length} documents
              </p>
            </div>
            
            {/* Document Grid */}
            {filteredDocuments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocuments.map((doc) => (
                  <div key={doc.id} className="bg-light-gray rounded-xl p-6 shadow-custom hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="bg-corporate-navy text-white rounded-lg p-3 mr-4">
                        {doc.type === 'PDF' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                          doc.category === 'corporate' ? 'bg-blue-100 text-blue-800' :
                          doc.category === 'investors' ? 'bg-purple-100 text-purple-800' :
                          doc.category === 'esg' ? 'bg-green-100 text-green-800' :
                          doc.category === 'operations' ? 'bg-orange-100 text-orange-800' :
                          doc.category === 'technology' ? 'bg-teal-100 text-teal-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {categories.find(cat => cat.id === doc.category)?.name}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-corporate-navy">{doc.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{doc.description}</p>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                      <div>
                        <span className="text-sm text-gray-500">{doc.type} • {doc.size}</span>
                        <br />
                        <span className="text-sm text-gray-500">Updated: {doc.date}</span>
                      </div>
                      <Link 
                        href={doc.link} 
                        className="bg-corporate-navy hover:bg-forest-green text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center"
                      >
                        Download
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-corporate-navy mb-2">No documents found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any documents matching your search criteria.
                </p>
                <button 
                  className="bg-corporate-navy hover:bg-forest-green text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Request Document Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-navy">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Request specific documents or information from our team
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-custom">
              <form className="text-left">
                <div className="mb-6">
                  <label className="block mb-2 font-medium text-corporate-navy">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium text-corporate-navy">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium text-corporate-navy">Document Request</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                    placeholder="Please describe the document or information you're requesting..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-corporate-navy hover:bg-forest-green text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
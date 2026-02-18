"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function MediaCenter() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for news articles
  const newsArticles = [
    {
      id: 1,
      title: "Zuma Agro Announces Partnership with Nigerian Army for Integrated Ranch Development",
      date: "March 15, 2026",
      excerpt: "New collaboration will facilitate secure land access and operational discipline across multiple ranch locations.",
      category: "partnerships",
      image: "/images/news1.jpg"
    },
    {
      id: 2,
      title: "Groundbreaking Ceremony Held for Kaduna Integrated Ranch",
      date: "February 28, 2026",
      excerpt: "Official commencement of construction marks beginning of Phase 1 implementation.",
      category: "operations",
      image: "/images/news2.jpg"
    },
    {
      id: 3,
      title: "Zuma Agro Wins Award for Sustainable Agricultural Innovation",
      date: "February 10, 2026",
      excerpt: "Recognition from Ministry of Agriculture for contributions to food security and environmental stewardship.",
      category: "awards",
      image: "/images/news3.jpg"
    },
    {
      id: 4,
      title: "New Cattle Breeding Program Shows 25% Increase in Yield Efficiency",
      date: "January 22, 2026",
      excerpt: "Genetic improvements and feeding optimization contribute to enhanced productivity metrics.",
      category: "research",
      image: "/images/news4.jpg"
    }
  ];

  // Mock data for events
  const events = [
    {
      id: 1,
      title: "Investor Roadshow - Lagos",
      date: "April 5, 2026",
      time: "09:00 AM - 12:00 PM",
      location: "Eko Hotel & Suites, Victoria Island",
      description: "Presentation of investment opportunities and financial projections to institutional investors."
    },
    {
      id: 2,
      title: "Community Engagement Forum - Kaduna",
      date: "April 18, 2026",
      time: "02:00 PM - 05:00 PM",
      location: "Kaduna Ranch Facility",
      description: "Dialogue with local community leaders and stakeholders on development initiatives."
    },
    {
      id: 3,
      title: "Technology Showcase Webinar",
      date: "May 2, 2026",
      time: "10:00 AM - 11:30 AM (WAT)",
      location: "Online Event",
      description: "Demonstration of digital platforms and innovations in agricultural management systems."
    }
  ];

  // Mock data for press resources
  const pressResources = [
    {
      id: 1,
      title: "Corporate Fact Sheet",
      type: "PDF",
      size: "2.4 MB",
      link: "/downloads/fact-sheet.pdf"
    },
    {
      id: 2,
      title: "Executive Bios",
      type: "PDF",
      size: "1.8 MB",
      link: "/downloads/executive-bios.pdf"
    },
    {
      id: 3,
      title: "Brand Guidelines",
      type: "PDF",
      size: "3.2 MB",
      link: "/downloads/brand-guidelines.pdf"
    },
    {
      id: 4,
      title: "Investment Presentation",
      type: "PDF",
      size: "5.1 MB",
      link: "/downloads/investment-presentation.pdf"
    },
    {
      id: 5,
      title: "Logo Package",
      type: "ZIP",
      size: "15.7 MB",
      link: "/downloads/logo-package.zip"
    }
  ];

  // Filter news articles based on active tab and search query
  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = activeTab === 'all' || article.category === activeTab;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray">
      {/* Header Section */}
      <section className="bg-corporate-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Center</h1>
          <p className="text-xl max-w-3xl mx-auto text-meadow-green">
            Latest news, events, and resources from Zuma Agro
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search news, events, and resources..."
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
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            <button
              className={`px-6 py-3 font-medium text-lg ${activeTab === 'all' ? 'text-corporate-navy border-b-2 border-corporate-navy' : 'text-gray-500 hover:text-corporate-navy'}`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg ${activeTab === 'news' ? 'text-corporate-navy border-b-2 border-corporate-navy' : 'text-gray-500 hover:text-corporate-navy'}`}
              onClick={() => setActiveTab('news')}
            >
              News
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg ${activeTab === 'events' ? 'text-corporate-navy border-b-2 border-corporate-navy' : 'text-gray-500 hover:text-corporate-navy'}`}
              onClick={() => setActiveTab('events')}
            >
              Events
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg ${activeTab === 'press' ? 'text-corporate-navy border-b-2 border-corporate-navy' : 'text-gray-500 hover:text-corporate-navy'}`}
              onClick={() => setActiveTab('press')}
            >
              Press Resources
            </button>
          </div>

          {/* News Section */}
          {(activeTab === 'all' || activeTab === 'news') && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-corporate-navy">
                Latest News
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <div key={article.id} className="bg-light-gray rounded-xl overflow-hidden shadow-custom hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-gray-200 border-2 border-dashed rounded-t-xl w-full h-48" />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-sun-gold">{article.date}</span>
                        <span className="px-2 py-1 bg-forest-green text-white text-xs rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-corporate-navy">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <Link href={`/news/${article.id}`} className="text-forest-green font-semibold hover:text-sun-gold transition-colors">
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events Section */}
          {(activeTab === 'all' || activeTab === 'events') && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-corporate-navy">
                Upcoming Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                  <div key={event.id} className="bg-light-gray rounded-xl p-6 shadow-custom hover:shadow-lg transition-shadow duration-300 border-l-4 border-sun-gold">
                    <div className="flex items-center mb-4">
                      <div className="bg-corporate-navy text-white rounded-lg p-3 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-corporate-navy">{event.title}</h3>
                        <p className="text-forest-green font-medium">{event.date}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700">{event.description}</p>
                    <button className="mt-4 w-full bg-corporate-navy hover:bg-forest-green text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                      Add to Calendar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Press Resources Section */}
          {(activeTab === 'all' || activeTab === 'press') && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-12 text-corporate-navy">
                Press Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {pressResources.map((resource) => (
                  <div key={resource.id} className="bg-light-gray rounded-xl p-6 shadow-custom hover:shadow-lg transition-shadow duration-300 flex items-center">
                    <div className="bg-corporate-navy text-white rounded-lg p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-corporate-navy">{resource.title}</h3>
                      <div className="flex justify-between mt-2">
                        <span className="text-sm text-gray-600">{resource.type} • {resource.size}</span>
                        <Link href={resource.link} className="text-forest-green hover:text-sun-gold transition-colors">
                          Download
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-forest-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Media Inquiries</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For press requests, interview arrangements, or media kit information
          </p>
          <div className="bg-corporate-navy p-8 rounded-xl max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Press Contact</h3>
                <p>Name: Sarah Johnson</p>
                <p>Email: press@zumaagro.com</p>
                <p>Phone: +234 XXX XXX XXXX</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Office Hours</h3>
                <p>Monday - Friday</p>
                <p>9:00 AM - 5:00 PM WAT</p>
                <p> excludes public holidays</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
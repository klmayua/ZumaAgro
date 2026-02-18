import { NextResponse } from 'next/server';

/**
 * Search API Handler
 * 
 * Provides site-wide search functionality.
 * In production, integrate with Algolia or similar service.
 */

// Mock search data - replace with real data source
const searchData = [
  { id: 1, title: "About Zuma Agro", url: "/about", type: "Page", category: "corporate" },
  { id: 2, title: "Our Leadership Team", url: "/about#leadership", type: "Page", category: "corporate" },
  { id: 3, title: "Strategic Partnerships", url: "/about#partnerships", type: "Page", category: "corporate" },
  { id: 4, title: "Integrated Ranch Model", url: "/model", type: "Page", category: "operations" },
  { id: 5, title: "9-Phase Framework", url: "/model#phases", type: "Page", category: "operations" },
  { id: 6, title: "Sustainability Initiatives", url: "/sustainability", type: "Page", category: "esg" },
  { id: 7, title: "Environmental Stewardship", url: "/sustainability#environment", type: "Page", category: "esg" },
  { id: 8, title: "Social Responsibility", url: "/sustainability#social", type: "Page", category: "esg" },
  { id: 9, title: "Investment Opportunities", url: "/investors", type: "Page", category: "investors" },
  { id: 10, title: "Financial Reports", url: "/investors#financials", type: "Page", category: "investors" },
  { id: 11, title: "Career Opportunities", url: "/careers", type: "Page", category: "careers" },
  { id: 12, title: "Company Culture", url: "/careers#culture", type: "Page", category: "careers" },
  { id: 13, title: "Contact Us", url: "/contact", type: "Page", category: "corporate" },
  { id: 14, title: "News: Partnership Announcement", url: "/media#news", type: "News", category: "media" },
  { id: 15, title: "Event: Investor Roadshow", url: "/media#events", type: "Event", category: "media" },
  { id: 16, title: "Corporate Overview PDF", url: "/downloads", type: "Document", category: "corporate" },
  { id: 17, title: "Sustainability Report", url: "/downloads", type: "Document", category: "esg" },
  { id: 18, title: "Investment Thesis", url: "/downloads", type: "Document", category: "investors" },
  { id: 19, title: "Livestock Operations", url: "/operations#livestock", type: "Page", category: "operations" },
  { id: 20, title: "Grains Division", url: "/operations#grains", type: "Page", category: "operations" },
  { id: 21, title: "Apiculture (Bee Farming)", url: "/operations#apiculture", type: "Page", category: "operations" }
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const type = searchParams.get('type') || '';
    const limit = parseInt(searchParams.get('limit') || '10');

    if (!query || query.length < 2) {
      return NextResponse.json({
        results: [],
        query: '',
        total: 0
      });
    }

    const normalizedQuery = query.toLowerCase();

    // Filter results
    let results = searchData.filter(item => {
      const matchesQuery = 
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.url.toLowerCase().includes(normalizedQuery);
      
      const matchesType = !type || item.type.toLowerCase() === type.toLowerCase();
      
      return matchesQuery && matchesType;
    });

    // Sort by relevance (title matches first)
    results = results.sort((a, b) => {
      const aTitleMatch = a.title.toLowerCase().startsWith(normalizedQuery);
      const bTitleMatch = b.title.toLowerCase().startsWith(normalizedQuery);
      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      return 0;
    });

    // Limit results
    results = results.slice(0, limit);

    return NextResponse.json({
      results,
      query,
      total: results.length,
      suggestions: getSuggestions(normalizedQuery)
    });
  } catch (error) {
    console.error('Search API Error:', error);
    return NextResponse.json(
      { error: 'Search failed. Please try again.' },
      { status: 500 }
    );
  }
}

function getSuggestions(query) {
  const allSuggestions = [
    'about', 'investors', 'sustainability', 'careers', 
    'contact', 'operations', 'model', 'downloads'
  ];
  return allSuggestions.filter(s => s.includes(query)).slice(0, 3);
}

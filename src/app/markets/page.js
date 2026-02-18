"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Markets() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeRegion, setActiveRegion] = useState('domestic');

  // Product catalog data
  const products = [
    {
      id: 1,
      category: 'beef',
      name: 'Premium Beef Cuts',
      description: 'Export-grade chilled and frozen beef cuts',
      specs: ['Halal certified', 'Vacuum packed', 'Cold chain maintained'],
      markets: ['domestic', 'gcc', 'mena']
    },
    {
      id: 2,
      category: 'beef',
      name: 'Processed Meat Products',
      description: 'Value-added meat products for retail and food service',
      specs: ['Ready-to-cook', 'Extended shelf life', 'Custom packaging'],
      markets: ['domestic', 'gcc']
    },
    {
      id: 3,
      category: 'beef',
      name: 'By-Products (Hides & Offal)',
      description: 'Quality hides and edible offal for processing',
      specs: ['Grade A hides', 'Properly cured', 'Export ready'],
      markets: ['domestic', 'gcc', 'mena']
    },
    {
      id: 4,
      category: 'grains',
      name: 'Human Consumption Maize',
      description: 'Premium grade maize for food processing',
      specs: ['Moisture < 13%', 'Cleaned & sorted', 'Aflatoxin free'],
      markets: ['domestic', 'africa']
    },
    {
      id: 5,
      category: 'grains',
      name: 'Animal Feed Formulations',
      description: 'Custom feed blends for livestock and poultry',
      specs: ['Nutritionally balanced', 'Pelleted or mash', 'Bulk or bagged'],
      markets: ['domestic']
    },
    {
      id: 6,
      category: 'grains',
      name: 'Sorghum',
      description: 'Drought-resistant sorghum for food and feed',
      specs: ['High protein content', 'Clean & dry', 'Multiple grades'],
      markets: ['domestic', 'africa']
    },
    {
      id: 7,
      category: 'honey',
      name: 'Pure Honey (Graded)',
      description: '100% natural honey from our apiaries',
      specs: ['Raw & unfiltered', 'Multiple grades', 'Traceable origin'],
      markets: ['domestic', 'gcc', 'mena']
    },
    {
      id: 8,
      category: 'honey',
      name: 'Beeswax Products',
      description: 'Refined beeswax for cosmetics and pharmaceuticals',
      specs: ['Yellow refined', 'Impurity free', 'Bulk or packaged'],
      markets: ['domestic', 'gcc']
    },
    {
      id: 9,
      category: 'honey',
      name: 'Specialty Honey Varieties',
      description: 'Single-origin honey based on floral source',
      specs: ['Limited production', 'Premium quality', 'Gift packaging'],
      markets: ['domestic', 'gcc']
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const regions = [
    { id: 'domestic', name: 'Nigeria (Domestic)', flag: '🇳🇬', volume: '60%', description: 'Primary market focus' },
    { id: 'gcc', name: 'GCC Countries', flag: '🇸🇦', volume: '25%', description: 'Halal export market' },
    { id: 'mena', name: 'MENA Region', flag: '🇦🇪', volume: '10%', description: 'Expanding market' },
    { id: 'africa', name: 'Regional Africa', flag: '🌍', volume: '5%', description: 'Future opportunity' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray">
      {/* Header Section */}
      <section className="bg-corporate-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Markets & Export</h1>
          <p className="text-xl max-w-3xl mx-auto text-meadow-green">
            Serving Domestic and International Markets with Quality Agricultural Products
          </p>
        </div>
      </section>

      {/* Market Focus Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
            Market Focus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {regions.map((region) => (
              <div
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`cursor-pointer p-6 rounded-xl shadow-custom border-2 transition-all duration-300 ${
                  activeRegion === region.id
                    ? 'border-forest-green bg-light-gray'
                    : 'border-transparent bg-white hover:border-meadow-green'
                }`}
              >
                <div className="text-5xl mb-4 text-center">{region.flag}</div>
                <h3 className="text-lg font-bold text-center mb-2 text-corporate-navy">
                  {region.name}
                </h3>
                <div className="text-center mb-3">
                  <span className="text-2xl font-bold text-sun-gold">{region.volume}</span>
                  <span className="text-gray-600 text-sm block">of exports</span>
                </div>
                <p className="text-gray-600 text-sm text-center">{region.description}</p>
              </div>
            ))}
          </div>

          {/* Export Markets Map Placeholder */}
          <div className="bg-light-gray rounded-xl p-8 text-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">Interactive Export Markets Map</span>
            </div>
            <p className="text-gray-600">
              Distribution network across Nigeria and export destinations
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-corporate-navy">
            Product Catalog
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Quality agricultural products meeting international standards
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', name: 'All Products' },
              { id: 'beef', name: 'Beef Products' },
              { id: 'grains', name: 'Grains & Feed' },
              { id: 'honey', name: 'Bee Products' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-forest-green text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-custom overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-forest-green text-white p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <span className="text-2xl">
                      {product.category === 'beef' && '🥩'}
                      {product.category === 'grains' && '🌾'}
                      {product.category === 'honey' && '🍯'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  
                  <h4 className="font-bold text-corporate-navy mb-2">Specifications:</h4>
                  <ul className="space-y-1 mb-4">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-sun-gold mr-2">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t">
                    {product.markets.map((market) => (
                      <span
                        key={market}
                        className="px-2 py-1 bg-light-gray text-gray-600 text-xs rounded-full"
                      >
                        {market === 'domestic' && '🇳🇬 Domestic'}
                        {market === 'gcc' && '🇸🇦 GCC'}
                        {market === 'mena' && '🇦🇪 MENA'}
                        {market === 'africa' && '🌍 Africa'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
            Quality Assurance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-light-gray p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-forest-green">Certifications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Halal Certification</li>
                <li>ISO 22000 (Food Safety)</li>
                <li>HACCP Compliant</li>
                <li>Export Licenses</li>
              </ul>
            </div>

            <div className="bg-light-gray p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-3 text-forest-green">Testing & Analysis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>In-house laboratory</li>
                <li>Microbiological testing</li>
                <li>Residue analysis</li>
                <li>Quality grading</li>
              </ul>
            </div>

            <div className="bg-light-gray p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3 text-forest-green">Traceability</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Full supply chain tracking</li>
                <li>Batch identification</li>
                <li>Origin verification</li>
                <li>Cold chain monitoring</li>
              </ul>
            </div>
          </div>

          {/* Quality Process */}
          <div className="bg-forest-green text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Our Quality Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: 1, name: 'Sourcing', icon: '📥' },
                { step: 2, name: 'Inspection', icon: '🔍' },
                { step: 3, name: 'Processing', icon: '⚙️' },
                { step: 4, name: 'Testing', icon: '🧪' },
                { step: 5, name: 'Certification', icon: '✅' }
              ].map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="font-bold">{item.name}</div>
                  {index < 4 && (
                    <div className="hidden md:block absolute text-2xl text-meadow-green">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Export Documentation Section */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
            Export Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-forest-green">Documentation</h3>
              <div className="bg-white p-6 rounded-xl shadow-custom">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-sun-gold text-xl mr-3">✓</span>
                    <div>
                      <strong className="text-corporate-navy">Certificate of Origin</strong>
                      <p className="text-gray-600 text-sm">Verifies product origin for customs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold text-xl mr-3">✓</span>
                    <div>
                      <strong className="text-corporate-navy">Health Certificate</strong>
                      <p className="text-gray-600 text-sm">Veterinary certification for animal products</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold text-xl mr-3">✓</span>
                    <div>
                      <strong className="text-corporate-navy">Halal Certificate</strong>
                      <p className="text-gray-600 text-sm">Islamic dietary compliance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold text-xl mr-3">✓</span>
                    <div>
                      <strong className="text-corporate-navy">Phytosanitary Certificate</strong>
                      <p className="text-gray-600 text-sm">Plant health certification</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold text-xl mr-3">✓</span>
                    <div>
                      <strong className="text-corporate-navy">Bill of Lading</strong>
                      <p className="text-gray-600 text-sm">Shipping documentation</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-forest-green">Logistics</h3>
              <div className="bg-white p-6 rounded-xl shadow-custom">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-sun-gold text-xl mr-3">🚛</span>
                    <div>
                      <strong className="text-corporate-navy">Cold Chain Management</strong>
                      <p className="text-gray-600 text-sm">Temperature-controlled transport</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold text-xl mr-3">📦</span>
                    <div>
                      <strong className="text-corporate-navy">Packaging Options</strong>
                      <p className="text-gray-600 text-sm">Vacuum, MAP, bulk, retail-ready</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold text-xl mr-3">✈️</span>
                    <div>
                      <strong className="text-corporate-navy">Air & Sea Freight</strong>
                      <p className="text-gray-600 text-sm">Flexible shipping options</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold text-xl mr-3">🏢</span>
                    <div>
                      <strong className="text-corporate-navy">Warehousing</strong>
                      <p className="text-gray-600 text-sm">Cold storage facilities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold text-xl mr-3">📊</span>
                    <div>
                      <strong className="text-corporate-navy">Inventory Management</strong>
                      <p className="text-gray-600 text-sm">Real-time tracking systems</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-corporate-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Distribution Partner
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in distributing Zuma Agro products in your market?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-sun-gold hover:bg-earth-brown text-corporate-navy font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Contact Sales Team
            </Link>
            <Link
              href="/downloads"
              className="border-2 border-white hover:bg-white hover:text-corporate-navy text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Download Product Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

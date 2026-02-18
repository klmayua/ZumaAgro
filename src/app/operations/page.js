"use client";

import Link from 'next/link';

export default function Operations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray">
      {/* Header Section */}
      <section className="bg-corporate-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Operations Hub</h1>
          <p className="text-xl max-w-3xl mx-auto text-meadow-green">
            Integrated Production, Processing, and Market Delivery Ecosystems
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-navy">
              Nationwide Integrated Ranch System
            </h2>
            <p className="text-lg text-gray-700">
              Our operating model is a network of Integrated Ranches, each configured based on 
              agro-ecological suitability, security considerations, and market demand. Every ranch 
              functions as a controlled production ecosystem within which priority value chains are 
              embedded, mechanised, digitised, and commercially coordinated.
            </p>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-light-gray rounded-xl shadow-custom p-8 mb-16 text-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-gray-500">Interactive Map of Nigeria showing ranch locations</span>
            </div>
            <p className="text-gray-600">
              Interactive map showing Zuma Agro Integrated Ranch locations across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Livestock Division */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
              Livestock Division
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-forest-green">Cattle Operations</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Breeding Program: Genetics, herd improvement metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Feeding Systems: Feedlot vs. pasture, nutrition science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Health Management: Veterinary protocols, disease prevention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Sustainability: Grazing rotation, methane reduction</span>
                  </li>
                </ul>
                
                <h3 className="text-2xl font-bold mb-4 text-forest-green mt-8">Technology Integration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Animal identification and traceability systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Health monitoring and biosecurity technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Feed optimisation and performance analytics</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-forest-green">Goat Farming</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Specialized breeds for Nigerian market</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Integration with cattle operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Value chain development</span>
                  </li>
                </ul>
                
                <h3 className="text-2xl font-bold mb-4 text-forest-green mt-8">Biosecurity Center</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Virtual tour of quarantine facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Disease surveillance and prevention protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Vaccination program management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grains Division */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
              Grains Division
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-forest-green">Maize Production</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Hybrid varieties table with yield comparisons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Seasonal planting calendar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Irrigation technology showcase</span>
                  </li>
                </ul>
                
                <h3 className="text-2xl font-bold mb-4 text-forest-green mt-8">Feed Mill Operations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Production capacity dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Quality control laboratory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Custom formulation capabilities</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-forest-green">Sorghum Farming</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Drought-resistant features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Dual-purpose (human/animal) focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold font-bold mr-2">•</span>
                    <span>Research collaboration highlights</span>
                  </li>
                </ul>
                
                <div className="bg-light-gray p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-forest-green">Technology Applications</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-sun-gold mr-2">→</span>
                      <span>Precision planting and harvesting equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sun-gold mr-2">→</span>
                      <span>Soil and yield analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sun-gold mr-2">→</span>
                      <span>Silo storage and moisture-control systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sun-gold mr-2">→</span>
                      <span>Digital aggregation and inventory tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apiculture Division */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-navy">
              Apiculture Division
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
              Apiculture is embedded as a high-value, low-footprint complementary value chain, 
              enhancing biodiversity, crop productivity, and income diversification within the ranch system.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-custom">
                <h3 className="text-xl font-bold mb-4 text-forest-green">Apiary Management</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Hive monitoring and management tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Colony health metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Pollination services for crops</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-custom">
                <h3 className="text-xl font-bold mb-4 text-forest-green">Honey Production</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Extraction process video</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Quality grading system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Specialty varieties (based on forage)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-custom">
                <h3 className="text-xl font-bold mb-4 text-forest-green">Ecosystem Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Biodiversity impact measurements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Crop yield improvement data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-16 md:py-24 bg-corporate-navy text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Technology Integration
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-forest-green p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Digital Platforms</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-sun-gold mr-2">•</span>
                  <span>Operational dashboards and management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sun-gold mr-2">•</span>
                  <span>Stakeholder and partner portals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sun-gold mr-2">•</span>
                  <span>Data-driven production monitoring</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-forest-green p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Advanced Analytics</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-sun-gold mr-2">•</span>
                  <span>Traceability, compliance, and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sun-gold mr-2">•</span>
                  <span>Satellite monitoring and AI-enabled analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sun-gold mr-2">•</span>
                  <span>Predictive maintenance systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
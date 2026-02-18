"use client";

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray">
      {/* Header Section */}
      <section className="bg-corporate-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zuma Agro</h1>
          <p className="text-xl max-w-3xl mx-auto text-meadow-green">
            Transforming Agriculture Through Strategic Integration
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-corporate-navy">
              Our Story & Vision
            </h2>
            
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-forest-green">Mission & Vision</h3>
              <p className="text-lg mb-6 text-gray-700">
                Zuma Agro Allied Integrated Ltd. is conceived as a national agro-industrial execution 
                platform designed to resolve Nigeria's structural agricultural constraints at scale. Our 
                mission is to design, develop, and operate secured, integrated, multi-commodity 
                agricultural hubs that function as production, processing, and market-delivery ecosystems.
              </p>
              <p className="text-lg text-gray-700">
                We envision becoming a reference institution for large-scale, secure, and technology-enabled 
                agricultural development in Nigeria and comparable frontier markets.
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-forest-green">Strategic Imperative</h3>
              <p className="text-lg mb-6 text-gray-700">
                Nigeria's agricultural challenge is not a lack of land, labour, or demand. It is a 
                <strong className="text-corporate-navy"> structural execution failure</strong> driven by 
                insecurity, fragmented production, weak land control, limited scale, and the absence of 
                institutionally credible platforms capable of absorbing long-term capital and delivering 
                predictable output.
              </p>
              <p className="text-lg text-gray-700">
                Zuma Agro operationalises the insight that secure land, disciplined institutions, and 
                market-anchored production are the non-negotiable foundations of modern agriculture.
              </p>
            </div>

            <div className="bg-light-gray p-8 rounded-xl shadow-custom">
              <h3 className="text-2xl font-bold mb-6 text-forest-green">Core Mandate</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-sun-gold text-2xl mr-3">•</span>
                  <span>
                    <strong>Domestic Supply Stabilisation:</strong> Reliable production and supply of key 
                    food and protein commodities to the Nigerian market, particularly in segments 
                    characterised by persistent deficits and volatility.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sun-gold text-2xl mr-3">•</span>
                  <span>
                    <strong>Export Enablement:</strong> Participation in export markets where it 
                    reinforces domestic system strength, generates foreign exchange earnings, improves 
                    quality standards, and strengthens overall commercial viability.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
            Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                position: "Chief Executive Officer",
                bio: "20+ years in agribusiness and agricultural development across Africa."
              },
              {
                name: "Jane Smith",
                position: "Chief Operating Officer",
                bio: "Expert in integrated agricultural systems and supply chain management."
              },
              {
                name: "Robert Johnson",
                position: "Chief Financial Officer",
                bio: "Former investment banker with focus on agricultural finance and development capital."
              },
              {
                name: "Mary Wilson",
                position: "Head of Sustainability",
                bio: "Environmental scientist with expertise in climate-resilient agriculture."
              },
              {
                name: "David Brown",
                position: "Head of Technology",
                bio: "Digital transformation specialist in agribusiness operations."
              },
              {
                name: "Sarah Davis",
                position: "Head of Partnerships",
                bio: "Strategic partnerships expert with government and international organizations."
              }
            ].map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-custom text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-corporate-navy">{leader.name}</h3>
                <p className="text-sun-gold font-semibold mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
            Strategic Partnerships
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-forest-green">Nigerian Army Collaboration</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our formal partnership with the Nigerian Army and paramilitary institutions provides access 
                to secured, institutionally controlled land assets across the federation. This partnership:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sun-gold font-bold mr-2">•</span>
                  <span>Resolves land access and tenure uncertainty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sun-gold font-bold mr-2">•</span>
                  <span>Embeds physical security and operational discipline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sun-gold font-bold mr-2">•</span>
                  <span>Enables long-term planning and capital deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sun-gold font-bold mr-2">•</span>
                  <span>Converts underutilised institutional land into productive national assets</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Nigerian Army", logo: "🛡️" },
                { name: "Federal Ministry of Agriculture", logo: "🌾" },
                { name: "International Fund for Agricultural Development", logo: "🌐" },
                { name: "World Bank", logo: "🏦" }
              ].map((partner, index) => (
                <div key={index} className="bg-light-gray p-6 rounded-xl text-center shadow-custom">
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <p className="font-semibold text-corporate-navy">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-forest-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Learning More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our comprehensive investor materials and corporate documentation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/investors" 
              className="bg-sun-gold hover:bg-earth-brown text-corporate-navy font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
            >
              Investor Relations
            </Link>
            <Link 
              href="/downloads" 
              className="border-2 border-white hover:bg-white hover:text-corporate-navy text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
            >
              Download Corporate Materials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
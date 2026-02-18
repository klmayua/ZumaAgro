"use client";

import Link from 'next/link';

export default function Investors() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray">
      {/* Header Section */}
      <section className="bg-corporate-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Investor Relations</h1>
          <p className="text-xl max-w-3xl mx-auto text-meadow-green">
           透明治理、可持续增长和长期价值创造
          </p>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
              Investment Thesis
            </h2>
            
            <div className="grid grid-cols-1 gap-12">
              <div className="bg-light-gray p-8 rounded-xl shadow-custom">
                <h3 className="text-2xl font-bold mb-6 text-forest-green">Market Opportunity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-sun-gold">Nigeria's Agricultural Potential</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Largest livestock population in West Africa</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Chronic protein deficit driving import dependency</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Growing middle class increasing food demand</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-sun-gold">Export Market Access</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Halal-compliant supply to GCC markets</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Competitive advantage through integrated model</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Traceability and compliance advantages</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-forest-green text-white p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Competitive Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-sun-gold font-bold mr-2">•</span>
                      <span>Secured land access through military partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sun-gold font-bold mr-2">•</span>
                      <span>Integrated production, processing, and logistics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sun-gold font-bold mr-2">•</span>
                      <span>Market-anchored production with offtake agreements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sun-gold font-bold mr-2">•</span>
                      <span>Institutional governance enhancing bankability</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-sun-gold text-corporate-navy p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Financial Projections</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Year 3 Revenue Projection</span>
                        <span className="font-bold">₦50B+</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2.5">
                        <div className="bg-corporate-navy h-2.5 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>EBITDA Margin Target</span>
                        <span className="font-bold">25-30%</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2.5">
                        <div className="bg-corporate-navy h-2.5 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>IRR Target</span>
                        <span className="font-bold">15-20%</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2.5">
                        <div className="bg-corporate-navy h-2.5 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
              Corporate Governance
            </h2>
            
            <div className="grid grid-cols-1 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-custom">
                <h3 className="text-2xl font-bold mb-6 text-forest-green">Board Composition</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                    <h4 className="font-bold text-lg">Independent Directors</h4>
                    <p className="text-gray-600">50% of board</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                    <h4 className="font-bold text-lg">Investor Representatives</h4>
                    <p className="text-gray-600">30% of board</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                    <h4 className="font-bold text-lg">Military Observers</h4>
                    <p className="text-gray-600">20% of board</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-custom">
                  <h3 className="text-2xl font-bold mb-4 text-forest-green">Governance Structure</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-sun-gold font-bold mr-2">•</span>
                      <span>Clear separation of military ownership and commercial operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sun-gold font-bold mr-2">•</span>
                      <span>Reserved matters framework limiting military involvement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sun-gold font-bold mr-2">•</span>
                      <span>Transparent reporting aligned with international standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sun-gold font-bold mr-2">•</span>
                      <span>Regular independent audits and assessments</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-custom">
                  <h3 className="text-2xl font-bold mb-4 text-forest-green">Risk Management</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-sun-gold font-bold mr-2">•</span>
                      <span>Land tenure and security risk mitigation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sun-gold font-bold mr-2">•</span>
                      <span>Market and price risk diversification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sun-gold font-bold mr-2">•</span>
                      <span>FX exposure management through export orientation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sun-gold font-bold mr-2">•</span>
                      <span>Operational risk through institutional partnerships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
              Financial Information
            </h2>
            
            <div className="grid grid-cols-1 gap-12">
              <div className="bg-light-gray p-8 rounded-xl shadow-custom">
                <h3 className="text-2xl font-bold mb-6 text-forest-green">Capital Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-sun-gold">Equity Capital</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Strategic agribusiness investors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Sovereign and quasi-sovereign funds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Impact and ESG-aligned investors</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-sun-gold">Debt Financing</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Development finance institutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Export credit agencies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Commercial banks with DFI risk participation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-corporate-navy text-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold mb-2">₦25B+</div>
                  <div className="text-lg">Capital Raised (Planned)</div>
                </div>
                <div className="bg-forest-green text-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold mb-2">15-20%</div>
                  <div className="text-lg">Target IRR</div>
                </div>
                <div className="bg-sun-gold text-corporate-navy p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold mb-2">₦50B+</div>
                  <div className="text-lg">Year 3 Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Resources */}
      <section className="py-16 md:py-24 bg-forest-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Investor Resources
            </h2>
            <p className="text-xl mb-12">
              Access key documents and information for current and prospective investors
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-corporate-navy p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Public Materials</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/downloads/investment-these.pdf" className="block p-4 bg-earth-brown rounded-lg hover:bg-sun-gold transition duration-300">
                      <div className="font-bold text-lg">Investment Thesis</div>
                      <div className="text-sm opacity-80">PDF, 2.4 MB</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/downloads/corporate-presentation.pdf" className="block p-4 bg-earth-brown rounded-lg hover:bg-sun-gold transition duration-300">
                      <div className="font-bold text-lg">Corporate Presentation</div>
                      <div className="text-sm opacity-80">PDF, 5.1 MB</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/downloads/financial-highlights.pdf" className="block p-4 bg-earth-brown rounded-lg hover:bg-sun-gold transition duration-300">
                      <div className="font-bold text-lg">Financial Highlights</div>
                      <div className="text-sm opacity-80">PDF, 1.8 MB</div>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-corporate-navy p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Contact Investor Relations</h3>
                <div className="space-y-4 text-left">
                  <div className="p-4 bg-earth-brown rounded-lg">
                    <div className="font-bold">Director of Investor Relations</div>
                    <div className="opacity-80">investors@zumaagro.com</div>
                    <div className="opacity-80">+234 XXX XXX XXXX</div>
                  </div>
                  <div className="p-4 bg-earth-brown rounded-lg">
                    <div className="font-bold">Investor Portal Access</div>
                    <div className="opacity-80">Registered investors can access detailed financials and reports through our secure portal.</div>
                    <button className="mt-3 bg-sun-gold text-corporate-navy font-bold py-2 px-4 rounded-full">
                      Login to Portal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray">
      {/* Header Section */}
      <section className="bg-corporate-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainability & ESG</h1>
          <p className="text-xl max-w-3xl mx-auto text-meadow-green">
            Environmental Stewardship, Social Responsibility, and Governance Excellence
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-navy">
              Our Sustainability Framework
            </h2>
            <p className="text-lg text-gray-700">
              Zuma Agro's approach to sustainability is embedded as a core operating principle rather 
              than a peripheral consideration. Our three-pillar framework encompasses environmental 
              stewardship, social responsibility, and governance excellence to create lasting positive 
              impact across all our operations.
            </p>
          </div>

          {/* Three Pillar Framework */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Environmental Stewardship",
                color: "forest-green",
                icon: "🌱",
                description: "Conservation and responsible resource management"
              },
              {
                title: "Social Responsibility",
                color: "sun-gold",
                icon: "🤝",
                description: "Community engagement and inclusive growth"
              },
              {
                title: "Governance Excellence",
                color: "corporate-navy",
                icon: "🏛️",
                description: "Transparent and accountable leadership"
              }
            ].map((pillar, index) => (
              <div 
                key={index} 
                className={`bg-${pillar.color} text-white p-8 rounded-xl shadow-custom text-center`}
              >
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Stewardship */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
              Environmental Stewardship
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-forest-green">Water Management</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-sun-gold text-2xl mr-3">•</span>
                    <div>
                      <h4 className="font-bold">Conservation Metrics</h4>
                      <p className="text-gray-600">Monitoring and optimizing water usage across all operations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold text-2xl mr-3">•</span>
                    <div>
                      <h4 className="font-bold">Recycling Systems</h4>
                      <p className="text-gray-600">Implementing closed-loop water systems where feasible</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold text-2xl mr-3">•</span>
                    <div>
                      <h4 className="font-bold">Rainwater Harvesting</h4>
                      <p className="text-gray-600">Capturing and storing seasonal precipitation</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-forest-green">Waste Valorization</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-sun-gold text-2xl mr-3">•</span>
                    <div>
                      <h4 className="font-bold">Manure-to-Energy</h4>
                      <p className="text-gray-600">Converting organic waste into biogas for operational use</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold text-2xl mr-3">•</span>
                    <div>
                      <h4 className="font-bold">By-product Utilization</h4>
                      <p className="text-gray-600">Maximizing value from agricultural residuals</p>
                    </div>
                  </li>
                </ul>
                
                <h3 className="text-2xl font-bold mt-8 mb-6 text-forest-green">Carbon Accounting</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-sun-gold text-2xl mr-3">•</span>
                    <div>
                      <h4 className="font-bold">Footprint Calculator</h4>
                      <p className="text-gray-600">Measuring emissions across all operational scopes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sun-gold text-2xl mr-3">•</span>
                    <div>
                      <h4 className="font-bold">Reduction Targets</h4>
                      <p className="text-gray-600">Science-based goals aligned with climate commitments</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biodiversity Conservation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
              Biodiversity Conservation
            </h2>
            
            <div className="bg-light-gray rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-forest-green">Wildlife Corridors</h3>
              <p className="text-lg text-gray-700 mb-6">
                We actively preserve and create wildlife corridors within and around our ranch properties 
                to maintain habitat connectivity and support native species migration patterns.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">🦌</div>
                  <p>Mammal Habitat Preservation</p>
                </li>
                <li className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">🦅</div>
                  <p>Bird Migration Support</p>
                </li>
                <li className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">🦋</div>
                  <p>Pollinator Garden Networks</p>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-forest-green text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Pollinator Habitats</h3>
                <p className="mb-4">
                  Our apiculture operations complement biodiversity conservation through managed bee 
                  populations that enhance pollination across crops and wild flora.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Native plant species restoration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Seasonal flowering calendars</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Pesticide-free zones establishment</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-earth-brown text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Soil Health Initiative</h3>
                <p className="mb-4">
                  Regenerative agriculture practices that improve soil carbon sequestration and fertility 
                  while enhancing crop productivity.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Composting and organic amendments</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Cover cropping systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>No-till farming practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
              Social Responsibility
            </h2>
            
            <div className="grid grid-cols-1 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-forest-green">Community Investment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-sun-gold">Programs</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Educational scholarships for local students</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Healthcare clinic support and mobile units</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Infrastructure development (roads, water systems)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-sun-gold">Impact Metrics</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Number of beneficiaries tracked quarterly</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Community satisfaction surveys conducted annually</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Long-term development outcome measurements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-forest-green">Employment & Workforce Development</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-custom">
                    <h4 className="text-xl font-bold mb-3 text-sun-gold">Statistics</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b pb-2">
                        <span>Total Employees:</span>
                        <span className="font-bold">500+</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Local Employment Rate:</span>
                        <span className="font-bold">85%</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Women in Workforce:</span>
                        <span className="font-bold">35%</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Youth Employment:</span>
                        <span className="font-bold">40%</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-custom">
                    <h4 className="text-xl font-bold mb-3 text-sun-gold">Training Academy</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Technical skills development programs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Agricultural best practices certification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-corporate-navy font-bold mr-2">•</span>
                        <span>Leadership and management training</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-forest-green">Local Sourcing & Economic Integration</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl text-center shadow-custom">
                    <div className="text-4xl mb-3">🛒</div>
                    <h4 className="text-xl font-bold mb-2">Supplier Development</h4>
                    <p className="text-gray-600">
                      Supporting local businesses through procurement partnerships
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl text-center shadow-custom">
                    <div className="text-4xl mb-3">🚛</div>
                    <h4 className="text-xl font-bold mb-2">Transport Services</h4>
                    <p className="text-gray-600">
                      Contracting with local transport providers
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl text-center shadow-custom">
                    <div className="text-4xl mb-3">🔧</div>
                    <h4 className="text-xl font-bold mb-2">Maintenance Contracts</h4>
                    <p className="text-gray-600">
                      Engaging local artisans and service providers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human Capital Integration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
              Human Capital Integration
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-forest-green">Military Personnel Integration</h3>
                <p className="mb-6 text-gray-700">
                  Our partnership with the Nigerian Army extends beyond land access to meaningful 
                  economic integration for serving and retired personnel.
                </p>
                
                <div className="bg-light-gray p-6 rounded-xl mb-6">
                  <h4 className="text-xl font-bold mb-3 text-sun-gold">Serving Personnel</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-corporate-navy font-bold mr-2">•</span>
                      <span>Security and perimeter protection roles</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-corporate-navy font-bold mr-2">•</span>
                      <span>Intelligence support for threat assessment</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-corporate-navy font-bold mr-2">•</span>
                      <span>Coordination with local security commands</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-light-gray p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-sun-gold">Retired Personnel</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-corporate-navy font-bold mr-2">•</span>
                      <span>Security management positions</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-corporate-navy font-bold mr-2">•</span>
                      <span>Logistics coordination roles</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-corporate-navy font-bold mr-2">•</span>
                      <span>Compliance and protocol functions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-forest-green">Conflict Prevention</h3>
                <p className="mb-6 text-gray-700">
                  We proactively address community relations to prevent conflicts and build sustainable 
                  partnerships with host communities.
                </p>
                
                <div className="bg-light-gray p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-sun-gold">Engagement Protocols</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-corporate-navy font-bold mr-2">•</span>
                      <span>Early and continuous traditional authority engagement</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-corporate-navy font-bold mr-2">•</span>
                      <span>Respect for customary norms and dispute resolution</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-corporate-navy font-bold mr-2">•</span>
                      <span>Clear land-use boundaries and access restrictions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-light-gray p-6 rounded-xl mt-6">
                  <h4 className="text-xl font-bold mb-3 text-sun-gold">Pastoralist Transition</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-corporate-navy font-bold mr-2">•</span>
                      <span>Structured transition programs for willing pastoralists</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-corporate-navy font-bold mr-2">•</span>
                      <span>Employment and training opportunities</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-corporate-navy font-bold mr-2">•</span>
                      <span>Controlled aggregation under ranch supervision</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Excellence */}
      <section className="py-16 md:py-24 bg-corporate-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Governance Excellence
            </h2>
            
            <div className="grid grid-cols-1 gap-12">
              <div className="bg-forest-green p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Board Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-sun-gold">Composition</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-white font-bold mr-2">•</span>
                        <span>Independent directors with agribusiness expertise</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white font-bold mr-2">•</span>
                        <span>Military representation as non-executive observers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white font-bold mr-2">•</span>
                        <span>Investor-appointed directors with commercial focus</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-sun-gold">Decision Rights</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-white font-bold mr-2">•</span>
                        <span>Military veto limited to land and security matters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white font-bold mr-2">•</span>
                        <span>Commercial decisions remain civilian-led</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white font-bold mr-2">•</span>
                        <span>Clearly enumerated reserved matters framework</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-earth-brown p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Transparency</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-sun-gold mr-2">•</span>
                      <span>Big-4 level audits</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-sun-gold mr-2">•</span>
                      <span>Public ESG reporting</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-sun-gold mr-2">•</span>
                      <span>Zero tolerance for informal governance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-earth-brown p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Ethics</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-sun-gold mr-2">•</span>
                      <span>Comprehensive code of conduct</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-sun-gold mr-2">•</span>
                      <span>Whistleblower protection system</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-sun-gold mr-2">•</span>
                      <span>Regular ethics training programs</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-earth-brown p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Risk Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-sun-gold mr-2">•</span>
                      <span>Enterprise risk framework</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-sun-gold mr-2">•</span>
                      <span>Mitigation strategy development</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-sun-gold mr-2">•</span>
                      <span>Continuous monitoring protocols</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Reporting Hub */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-navy">
              ESG Reporting Hub
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Access our comprehensive sustainability reports and data-driven insights
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-light-gray p-8 rounded-xl shadow-custom">
                <h3 className="text-2xl font-bold mb-4 text-forest-green">Annual ESG Report</h3>
                <p className="mb-6 text-gray-600">
                  Our comprehensive annual report detailing environmental, social, and governance 
                  performance against established metrics and goals.
                </p>
                <button className="bg-corporate-navy hover:bg-forest-green text-white font-bold py-2 px-6 rounded-full transition duration-300">
                  Download Report (PDF)
                </button>
              </div>
              
              <div className="bg-light-gray p-8 rounded-xl shadow-custom">
                <h3 className="text-2xl font-bold mb-4 text-forest-green">Interactive Data Explorer</h3>
                <p className="mb-6 text-gray-600">
                    Explore our sustainability data through interactive visualizations and filterable 
                    datasets across all operational dimensions.
                  </p>
                  <button className="bg-corporate-navy hover:bg-forest-green text-white font-bold py-2 px-6 rounded-full transition duration-300">
                    Access Dashboard
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-light-gray p-8 rounded-xl shadow-custom text-center">
                  <h3 className="text-2xl font-bold mb-4 text-forest-green">SDG Alignment</h3>
                  <div className="bg-white p-4 rounded-lg inline-block mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <p className="text-gray-600">
                    Mapping our initiatives to United Nations Sustainable Development Goals
                  </p>
                </div>
                
                <div className="bg-light-gray p-8 rounded-xl shadow-custom text-center">
                  <h3 className="text-2xl font-bold mb-4 text-forest-green">Compliance Standards</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-3 rounded-lg">
                      <span className="text-xl">📊</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <span className="text-xl">🌍</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <span className="text-xl">✅</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Adherence to IFRS, GRI, and IFC performance standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
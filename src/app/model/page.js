"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function IntegratedModel() {
  const [activePhase, setActivePhase] = useState(1);
  const [showReportModal, setShowReportModal] = useState(false);

  // Phase data based on the documentation
  const phases = [
    {
      id: 1,
      title: "Strategic Foundation and Reality Testing",
      category: "STRATEGIC FOUNDATION",
      description: "Defines the strategic rationale, validates assumptions, and clarifies the problem being solved. Establishes why an integrated ranching model on military-linked land is viable, necessary, and distinct.",
      objectives: [
        "Establish strategic clarity and alignment among core stakeholders",
        "Stress-test assumptions before capital deployment"
      ],
      focusAreas: [
        "National food security and security-linked land use rationale",
        "Civil-military optics, political risk, and conflict dynamics",
        "Integrated value-chain feasibility (not ranching alone)"
      ],
      deliverables: [
        "Strategic feasibility assessment",
        "Risk and constraint register",
        "Go / no-go decision framework"
      ],
      status: "completed"
    },
    {
      id: 2,
      title: "Market Validation and Integrated Business Design",
      category: "STRATEGIC FOUNDATION",
      description: "Translates strategy into a commercially coherent model. Validates domestic and export demand, defines the integrated value chain, and positions the enterprise as the coordinating hub for offtakers.",
      objectives: [
        "Confirm commercial viability across domestic and export markets",
        "Define the full integrated business model"
      ],
      focusAreas: [
        "Domestic demand vs export logic (GCC/MENA)",
        "Offtaker requirements: halal, traceability, cold-chain, volumes",
        "Role of the company as an aggregator and international interface"
      ],
      deliverables: [
        "Integrated value-chain design",
        "Market and pricing validation",
        "Offtaker and partner engagement strategy"
      ],
      status: "completed"
    },
    {
      id: 3,
      title: "Institutional Partnerships and Legal Structuring",
      category: "STRATEGIC FOUNDATION",
      description: "Formalises relationships with the Nigerian Army, other security agencies, government stakeholders, and private partners. Legal, contractual, and governance structures are designed to protect all parties.",
      objectives: [
        "Secure institutional legitimacy and operational autonomy",
        "Protect investor and partner interests"
      ],
      focusAreas: [
        "JV / SPV structures with the Army and para-military entities",
        "Legal separation of security oversight and commercial management",
        "Offshore and cross-border structuring (where applicable)"
      ],
      deliverables: [
        "Corporate and legal architecture",
        "Governance framework and board structure",
        "Investor protection mechanisms"
      ],
      status: "in-progress"
    },
    {
      id: 4,
      title: "Land Development and Core Infrastructure Deployment",
      category: "DEVELOPMENT",
      description: "Converts secured land into operational assets. Covers land preparation, fencing, water systems, power, access roads, housing, and biosecure ranch infrastructure.",
      objectives: [
        "Make land operationally productive and secure",
        "Establish bio-secure, scalable infrastructure"
      ],
      focusAreas: [
        "Ranch layout and zoning",
        "Utilities, housing, and internal logistics",
        "Environmental and water management systems"
      ],
      deliverables: [
        "Fully prepared ranch sites",
        "Operational infrastructure assets",
        "Biosecurity and access control systems"
      ],
      status: "upcoming"
    },
    {
      id: 5,
      title: "Integrated Production and Processing Activation",
      category: "DEVELOPMENT",
      description: "Activates livestock operations alongside processing capabilities. Ranching, abattoirs, meat processing, dairy handling, and by-product utilisation are aligned for quality and efficiency.",
      objectives: [
        "Activate end-to-end production",
        "Maximise value addition locally"
      ],
      focusAreas: [
        "Breeding, fattening, and herd management",
        "Processing capacity and quality control",
        "Hide, skin, and waste valorisation"
      ],
      deliverables: [
        "Live production systems",
        "Operational processing facilities",
        "Traceable product outputs"
      ],
      status: "upcoming"
    },
    {
      id: 6,
      title: "Logistics, Distribution, and Market Access",
      category: "DEVELOPMENT",
      description: "Connects production to buyers. Cold-chain systems, transport, warehousing, and export logistics are integrated to serve institutional buyers and export destinations reliably.",
      objectives: [
        "Ensure consistent market access",
        "Protect product quality and margins"
      ],
      focusAreas: [
        "Cold-chain logistics and transport",
        "Export documentation and compliance",
        "Domestic distribution channels"
      ],
      deliverables: [
        "Functional logistics network",
        "Export-ready distribution pathways",
        "Reliable revenue flows"
      ],
      status: "upcoming"
    },
    {
      id: 7,
      title: "Human Capital, Operations, and Technology Enablement",
      category: "OPTIMIZATION",
      description: "Builds the operating engine. Covers workforce recruitment, training, SOPs, KPIs, and digital systems for monitoring, traceability, and performance management.",
      objectives: [
        "Build operational excellence",
        "Institutionalise discipline and repeatability"
      ],
      focusAreas: [
        "Talent sourcing and training pipelines",
        "SOPs, KPIs, and operational governance",
        "Digital tracking and performance systems"
      ],
      deliverables: [
        "Skilled operational workforce",
        "Standardised operating systems",
        "Technology-enabled visibility"
      ],
      status: "upcoming"
    },
    {
      id: 8,
      title: "Financial Sustainability and Capital Strategy",
      category: "OPTIMIZATION",
      description: "Consolidates financial performance and funding strategy. Capital structures, FX exposure, cost controls, and investor return profiles are optimised for stability.",
      objectives: [
        "Ensure long-term financial viability",
        "Attract and retain serious capital"
      ],
      focusAreas: [
        "CAPEX/OPEX optimisation",
        "FX risk and funding structures",
        "Investor return and exit logic"
      ],
      deliverables: [
        "Sustainable financial model",
        "Funding and capital stack strategy",
        "Scalable investment framework"
      ],
      status: "upcoming"
    },
    {
      id: 9,
      title: "Governance, Risk Management, and Institutional Longevity",
      category: "OPTIMIZATION",
      description: "Embeds governance, compliance, ESG integration, and enterprise risk management. Ensures the organisation survives leadership changes and political transitions.",
      objectives: [
        "Institutionalise permanence and credibility",
        "Protect the enterprise over decades"
      ],
      focusAreas: [
        "Board governance and decision rights",
        "Risk management and compliance systems",
        "ESG integration and social license"
      ],
      deliverables: [
        "Robust governance framework",
        "Enterprise risk management system",
        "Long-term scale and replication logic"
      ],
      status: "upcoming"
    }
  ];

  const currentPhase = phases.find(phase => phase.id === activePhase);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray">
      {/* Header Section */}
      <section className="bg-corporate-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Integrated Model</h1>
          <p className="text-xl max-w-3xl mx-auto text-meadow-green">
            Our comprehensive 9-phase framework for sustainable agro-industrial development
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-navy">
              Strategic Execution Framework
            </h2>
            <p className="text-lg text-gray-700">
              The Zuma Agro integrated ranch system is delivered through nine sequenced phases, 
              each designed to de-risk the next and convert land and intent into a durable institution progressively.
            </p>
          </div>

          {/* Interactive Phase Visualization */}
          <div className="bg-light-gray rounded-xl p-8 mb-16 shadow-custom">
            <h3 className="text-2xl font-bold text-center mb-8 text-corporate-navy">
              9-Phase Implementation Model
            </h3>
            
            {/* Phase Categories */}
            <div className="relative">
              {/* Connecting Lines */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-forest-green transform -translate-x-1/2 z-0 hidden md:block"></div>
              
              <div className="space-y-12">
                {phases.map((phase, index) => (
                  <div 
                    key={phase.id} 
                    className={`relative flex flex-col md:flex-row items-center cursor-pointer transition-all duration-300 ${
                      activePhase === phase.id ? 'bg-white rounded-xl p-4 shadow-lg' : ''
                    }`}
                    onClick={() => setActivePhase(phase.id)}
                  >
                    {/* Phase Number Circle */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 mb-4 md:mb-0 md:mr-8 ${
                      phase.status === 'completed' ? 'bg-forest-green' : 
                      phase.status === 'in-progress' ? 'bg-sun-gold' : 'bg-gray-400'
                    }`}>
                      {phase.id}
                    </div>
                    
                    {/* Phase Info */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${
                            phase.category.includes('STRATEGIC') ? 'bg-blue-100 text-blue-800' :
                            phase.category.includes('DEVELOPMENT') ? 'bg-purple-100 text-purple-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {phase.category}
                          </span>
                          <h3 className="text-xl font-bold text-corporate-navy">{phase.title}</h3>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                            phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                            phase.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {phase.status === 'completed' ? 'Completed' :
                             phase.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2 hidden md:block">{phase.description.substring(0, 100)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Phase Information */}
          {currentPhase && (
            <div className="bg-white rounded-xl shadow-custom p-8 mb-16 border-t-4 border-sun-gold">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${
                    currentPhase.category.includes('STRATEGIC') ? 'bg-blue-100 text-blue-800' :
                    currentPhase.category.includes('DEVELOPMENT') ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {currentPhase.category}
                  </span>
                  <h2 className="text-3xl font-bold text-corporate-navy mt-2">
                    Phase {currentPhase.id}: {currentPhase.title}
                  </h2>
                </div>
                <button 
                  onClick={() => setShowReportModal(true)}
                  className="bg-corporate-navy hover:bg-forest-green text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  View Report
                </button>
              </div>
              
              <p className="text-lg text-gray-700 mb-8">{currentPhase.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-light-gray p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-forest-green">Objectives</h3>
                  <ul className="space-y-3">
                    {currentPhase.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-sun-gold font-bold mr-2">•</span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-light-gray p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-forest-green">Focus Areas</h3>
                  <ul className="space-y-3">
                    {currentPhase.focusAreas.map((area, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-sun-gold font-bold mr-2">•</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-light-gray p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-forest-green">Deliverables</h3>
                  <ul className="space-y-3">
                    {currentPhase.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-sun-gold font-bold mr-2">•</span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Value Chain Integration */}
          <div className="bg-forest-green text-white rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Value Chain Integration
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-8 text-center">
                Our integrated approach connects multiple agricultural value chains within a single ecosystem
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { name: "Cattle", icon: "🐄" },
                  { name: "Goats", icon: "🐐" },
                  { name: "Grains", icon: "🌽" },
                  { name: "Coffee", icon: "☕" },
                  { name: "Bees", icon: "🐝" }
                ].map((item, index) => (
                  <div key={index} className="bg-corporate-navy p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-corporate-navy p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Integration Benefits</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Resource sharing across value chains</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Waste-to-value circular systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Shared infrastructure and logistics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sun-gold mr-2">•</span>
                    <span>Risk diversification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-xl shadow-custom p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-corporate-navy">
              Technology Integration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-light-gray p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">📡</div>
                <h3 className="text-xl font-bold mb-3 text-forest-green">Traceability Systems</h3>
                <p className="text-gray-600">
                  End-to-end tracking from farm to market with RFID and blockchain verification
                </p>
              </div>
              <div className="bg-light-gray p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">🚜</div>
                <h3 className="text-xl font-bold mb-3 text-forest-green">Farm Management</h3>
                <p className="text-gray-600">
                  Digital platforms for livestock, crop, and resource management
                </p>
              </div>
              <div className="bg-light-gray p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3 text-forest-green">Data Analytics</h3>
                <p className="text-gray-600">
                  AI-powered insights for optimization and predictive maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-corporate-navy">
                  Phase {currentPhase?.id} Report
                </h3>
                <button 
                  onClick={() => setShowReportModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="prose max-w-none">
                <h4 className="text-xl font-bold mb-3">Executive Summary</h4>
                <p className="mb-4">
                  This comprehensive report details the execution framework and outcomes 
                  for Phase {currentPhase?.id}: {currentPhase?.title}.
                </p>
                
                <h4 className="text-xl font-bold mb-3">Key Findings</h4>
                <ul className="mb-4">
                  <li>All objectives successfully met</li>
                  <li>95% of deliverables completed on schedule</li>
                  <li>Budget variance within acceptable parameters</li>
                  <li>Stakeholder alignment achieved</li>
                </ul>
                
                <h4 className="text-xl font-bold mb-3">Recommendations</h4>
                <p className="mb-4">
                  Based on phase outcomes, we recommend proceeding to Phase {currentPhase?.id + 1} 
                  with the following considerations...
                </p>
                
                <div className="bg-light-gray p-4 rounded-lg">
                  <h5 className="font-bold mb-2">Download Full Report</h5>
                  <button className="bg-corporate-navy hover:bg-forest-green text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full">
                    Download PDF (2.4 MB)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
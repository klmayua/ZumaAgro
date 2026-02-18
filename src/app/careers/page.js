"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Careers() {
  const [activeTab, setActiveTab] = useState('opportunities');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Mock job data
  const jobs = [
    {
      id: 1,
      title: "Senior Agronomist",
      department: "Agricultural Operations",
      location: "Kaduna, Nigeria",
      type: "Full-time",
      experience: "5+ years",
      posted: "2026-03-15",
      description: "Lead agronomic research and implementation across our integrated ranch systems. Responsible for crop optimization, soil health management, and sustainable farming practices.",
      requirements: [
        "PhD in Agronomy or related field",
        "Minimum 5 years of experience in commercial agriculture",
        "Experience with precision farming technologies",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      id: 2,
      title: "Livestock Veterinarian",
      department: "Animal Health",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "3+ years",
      posted: "2026-03-10",
      description: "Provide veterinary care for our cattle and goat operations. Develop health protocols, manage disease prevention programs, and ensure compliance with international standards.",
      requirements: [
        "DVM degree from accredited institution",
        "Valid veterinary license in Nigeria",
        "Experience with large animal medicine",
        "Knowledge of international health certifications"
      ]
    },
    {
      id: 3,
      title: "Technology Integration Specialist",
      department: "Digital Transformation",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "2+ years",
      posted: "2026-03-05",
      description: "Develop and implement digital solutions across our operations. Bridge the gap between agricultural practices and cutting-edge technology platforms.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with IoT and sensor technologies",
        "Understanding of agricultural operations",
        "Strong project management skills"
      ]
    },
    {
      id: 4,
      title: "Supply Chain Coordinator",
      department: "Logistics & Distribution",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "3+ years",
      posted: "2026-02-28",
      description: "Manage logistics operations for domestic and export markets. Coordinate transportation, inventory management, and customer fulfillment.",
      requirements: [
        "Bachelor's degree in Logistics or Business",
        "Experience in food supply chains",
        "Knowledge of export documentation",
        "Strong organizational skills"
      ]
    },
    {
      id: 5,
      title: "Environmental Compliance Officer",
      department: "Sustainability",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "2+ years",
      posted: "2026-02-20",
      description: "Ensure all operations comply with environmental regulations and sustainability standards. Monitor impact and implement improvement initiatives.",
      requirements: [
        "Bachelor's degree in Environmental Science",
        "Knowledge of Nigerian environmental regulations",
        "Experience with ESG reporting",
        "Strong attention to detail"
      ]
    },
    {
      id: 6,
      title: "Finance Analyst",
      department: "Finance & Administration",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "3+ years",
      posted: "2026-02-15",
      description: "Support financial planning, analysis, and reporting for our agricultural operations. Work with complex agricultural accounting and investment tracking.",
      requirements: [
        "Bachelor's degree in Finance or Accounting",
        "Experience with agricultural or commodity businesses",
        "Proficiency in financial modeling",
        "Professional certification preferred"
      ]
    }
  ];

  // Departments for filtering
  const departments = [
    "all",
    "Agricultural Operations",
    "Animal Health",
    "Digital Transformation",
    "Logistics & Distribution",
    "Sustainability",
    "Finance & Administration"
  ];

  // Filter jobs based on selected department
  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray">
      {/* Header Section */}
      <section className="bg-corporate-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at Zuma Agro</h1>
          <p className="text-xl max-w-3xl mx-auto text-meadow-green">
            Join us in transforming agriculture through innovation, sustainability, and impact
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-navy">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              At Zuma Agro, we're building Africa's premier integrated agricultural platform. 
              We're looking for passionate professionals who want to be part of transformative change 
              in food security and rural development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-light-gray p-6 rounded-xl">
                <div className="text-4xl mb-4 text-forest-green">🌍</div>
                <h3 className="text-xl font-bold mb-3">Meaningful Impact</h3>
                <p className="text-gray-600">
                  Contribute to solving Nigeria's food security challenges and rural development
                </p>
              </div>
              <div className="bg-light-gray p-6 rounded-xl">
                <div className="text-4xl mb-4 text-forest-green">🚀</div>
                <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                <p className="text-gray-600">
                  Work with cutting-edge technology in agricultural operations and management
                </p>
              </div>
              <div className="bg-light-gray p-6 rounded-xl">
                <div className="text-4xl mb-4 text-forest-green">👥</div>
                <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
                <p className="text-gray-600">
                  Join a diverse team united by purpose and professional excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-light-gray py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <button
              className={`px-6 py-3 font-medium text-lg mx-2 my-1 rounded-full ${
                activeTab === 'opportunities' 
                  ? 'bg-corporate-navy text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('opportunities')}
            >
              Job Opportunities
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg mx-2 my-1 rounded-full ${
                activeTab === 'culture' 
                  ? 'bg-corporate-navy text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('culture')}
            >
              Our Culture
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg mx-2 my-1 rounded-full ${
                activeTab === 'benefits' 
                  ? 'bg-corporate-navy text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('benefits')}
            >
              Benefits
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg mx-2 my-1 rounded-full ${
                activeTab === 'growth' 
                  ? 'bg-corporate-navy text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('growth')}
            >
              Professional Growth
            </button>
          </div>
        </div>
      </section>

      {/* Job Opportunities Tab */}
      {activeTab === 'opportunities' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-corporate-navy">
                Current Opportunities
              </h2>
              
              {/* Department Filter */}
              <div className="flex flex-wrap justify-center mb-12">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    className={`px-4 py-2 m-1 rounded-full text-sm font-medium ${
                      selectedDepartment === dept
                        ? 'bg-corporate-navy text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setSelectedDepartment(dept)}
                  >
                    {dept === 'all' ? 'All Departments' : dept}
                  </button>
                ))}
              </div>
              
              {/* Job Listings */}
              <div className="space-y-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <div key={job.id} className="bg-light-gray rounded-xl p-6 shadow-custom hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-corporate-navy mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 mb-4">
                            <span className="bg-forest-green text-white px-3 py-1 rounded-full text-sm">
                              {job.department}
                            </span>
                            <span className="bg-sun-gold text-corporate-navy px-3 py-1 rounded-full text-sm">
                              {job.location}
                            </span>
                            <span className="bg-earth-brown text-white px-3 py-1 rounded-full text-sm">
                              {job.type}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-4">{job.description}</p>
                          
                          <div className="mb-4">
                            <h4 className="font-bold text-forest-green mb-2">Requirements:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-sun-gold mr-2">•</span>
                                  <span className="text-gray-600">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="md:ml-6 mt-4 md:mt-0 md:text-right">
                          <div className="mb-4">
                            <span className="text-sm text-gray-500">Posted: {job.posted}</span>
                          </div>
                          <button className="bg-corporate-navy hover:bg-forest-green text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-bold text-corporate-navy mb-4">No positions available</h3>
                    <p className="text-gray-600">
                      We don't currently have any openings in the {selectedDepartment} department. 
                      Check back later or submit your resume for future consideration.
                    </p>
                    <button className="mt-4 bg-corporate-navy hover:bg-forest-green text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                      Submit Resume
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Culture Tab */}
      {activeTab === 'culture' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-corporate-navy">
                Our Culture
              </h2>
              
              <div className="grid grid-cols-1 gap-12">
                <div className="bg-light-gray p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6 text-forest-green">Mission-Driven Excellence</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    We believe that agriculture is not just a business—it's a vital component of 
                    national security, economic growth, and social stability. Every team member 
                    contributes to this greater purpose.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl mb-3">⚖️</div>
                      <h4 className="font-bold text-lg mb-2">Integrity</h4>
                      <p className="text-gray-600">Transparent, ethical, and honest in all dealings</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🤝</div>
                      <h4 className="font-bold text-lg mb-2">Collaboration</h4>
                      <p className="text-gray-600">Working together across disciplines and hierarchies</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🌱</div>
                      <h4 className="font-bold text-lg mb-2">Sustainability</h4>
                      <p className="text-gray-600">Long-term thinking in all our decisions</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-forest-green text-white p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">Work Environment</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-sun-gold mr-2">•</span>
                        <span>Flexible hybrid work arrangements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sun-gold mr-2">•</span>
                        <span>Field visits to ranch locations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sun-gold mr-2">•</span>
                        <span>Professional development opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sun-gold mr-2">•</span>
                        <span>Diverse, multicultural team</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-sun-gold text-corporate-navy p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">Military Partnership</h3>
                    <p className="mb-4">
                      Our unique partnership with the Nigerian Army creates a disciplined, 
                      mission-focused environment unlike any other in agriculture.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span>Structured career progression</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span>Leadership development programs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Tab */}
      {activeTab === 'benefits' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-corporate-navy">
                Employee Benefits
              </h2>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-light-gray p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6 text-forest-green">Compensation & Financial</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3 text-corporate-navy">Salary & Bonuses</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-sun-gold mr-2">•</span>
                          <span>Competitive salary packages</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sun-gold mr-2">•</span>
                          <span>Performance-based bonuses</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sun-gold mr-2">•</span>
                          <span>Profit-sharing program</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 text-corporate-navy">Financial Security</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-sun-gold mr-2">•</span>
                          <span>Comprehensive health insurance</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sun-gold mr-2">•</span>
                          <span>Retirement savings plan</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sun-gold mr-2">•</span>
                          <span>Life and disability insurance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-forest-green text-white p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Time Off</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-sun-gold mr-2">•</span>
                        <span>21 days annual leave</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sun-gold mr-2">•</span>
                        <span>Sick leave and medical appointments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sun-gold mr-2">•</span>
                        <span>Parental leave</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sun-gold mr-2">•</span>
                        <span>Holiday closure between Christmas and New Year</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-sun-gold text-corporate-navy p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Professional</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span>Tuition reimbursement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span>Conference attendance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span>Professional memberships</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span>Internal training programs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-earth-brown text-white p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Wellness</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-sun-gold mr-2">•</span>
                        <span>On-site fitness facilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sun-gold mr-2">•</span>
                        <span>Employee assistance program</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sun-gold mr-2">•</span>
                        <span>Health screenings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sun-gold mr-2">•</span>
                        <span>Farm-fresh produce program</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Professional Growth Tab */}
      {activeTab === 'growth' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-corporate-navy">
                Professional Growth
              </h2>
              
              <div className="grid grid-cols-1 gap-12">
                <div className="bg-light-gray p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6 text-forest-green">Learning & Development</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold mb-3 text-corporate-navy">Formal Education</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-sun-gold mr-2">•</span>
                          <span>Tuition reimbursement for job-related courses</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sun-gold mr-2">•</span>
                          <span>MBA and advanced degree programs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sun-gold mr-2">•</span>
                          <span>Professional certification support</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 text-corporate-navy">Skills Training</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-sun-gold mr-2">•</span>
                          <span>Leadership development programs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sun-gold mr-2">•</span>
                          <span>Technical skills workshops</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sun-gold mr-2">•</span>
                          <span>Cross-functional project assignments</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-forest-green text-white p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6">Career Progression Paths</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-corporate-navy p-6 rounded-lg">
                      <h4 className="font-bold mb-3 text-sun-gold">Specialist Track</h4>
                      <p className="mb-3">Deep expertise in functional areas</p>
                      <ul className="space-y-1 text-sm">
                        <li>Associate → Senior → Principal</li>
                        <li>Technical leadership roles</li>
                        <li>Subject matter expert positions</li>
                      </ul>
                    </div>
                    <div className="bg-corporate-navy p-6 rounded-lg">
                      <h4 className="font-bold mb-3 text-sun-gold">Management Track</h4>
                      <p className="mb-3">Leadership and people management</p>
                      <ul className="space-y-1 text-sm">
                        <li>Manager → Senior Manager → Director</li>
                        <li>Department and division leadership</li>
                        <li>Strategic decision-making roles</li>
                      </ul>
                    </div>
                    <div className="bg-corporate-navy p-6 rounded-lg">
                      <h4 className="font-bold mb-3 text-sun-gold">Entrepreneurial Track</h4>
                      <p className="mb-3">Innovation and new venture creation</p>
                      <ul className="space-y-1 text-sm">
                        <li>Innovation project leads</li>
                        <li>New business development</li>
                        <li>Spin-off opportunity creation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6 text-corporate-navy">Ready to Grow With Us?</h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Explore our current opportunities and take the next step in your career
                  </p>
                  <button 
                    className="bg-corporate-navy hover:bg-forest-green text-white font-bold py-3 px-8 rounded-full transition duration-300"
                    onClick={() => setActiveTab('opportunities')}
                  >
                    View Job Openings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Application Form */}
      <section className="py-16 bg-forest-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Spontaneous Application</h2>
            <p className="text-xl mb-8">
              Don't see a position that fits? Send us your resume and we'll keep it on file.
            </p>
            
            <div className="bg-corporate-navy p-8 rounded-xl">
              <form className="text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-2 font-medium">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Position of Interest</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                    placeholder="What type of role are you interested in?"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Upload Resume</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.514 5.514 0 0 0 12 7.5a5.514 5.514 0 0 0-1.025-.5A5.514 5.514 0 0 0 12 7.5a5.514 5.514 0 0 0-1.025-.5A5.514 5.514 0 0 0 12 7.5a5.514 5.514 0 0 0-1.025-.5A5.514 5.514 0 0 0 12 7.5a5.514 5.514 0 0 0-1.025-.5A5.514 5.514 0 0 0 12 7.5a5.514 5.514 0 0 0-1.025-.5A5.514 5.514 0 0 0 12 7.5a5.514 5.514 0 0 0-1.025-.5A5.514 5.514 0 0 0 12 7.5a5.514 5.514 0 0 0-1.025-.5"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 10MB)</p>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  </div> 
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Cover Letter</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                    placeholder="Tell us why you'd be a great fit for Zuma Agro..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-sun-gold hover:bg-earth-brown text-corporate-navy font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
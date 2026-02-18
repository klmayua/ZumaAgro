"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    department: 'general'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          department: 'general'
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray">
      {/* Header Section */}
      <section className="bg-corporate-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-meadow-green">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
              Get In Touch
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-light-gray p-8 rounded-xl shadow-custom">
                <h3 className="text-2xl font-bold mb-6 text-forest-green">Send us a message</h3>
                
                {/* Status Messages */}
                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 border border-green-400 text-green-700' 
                      : 'bg-red-100 border border-red-400 text-red-700'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="department" className="block text-gray-700 font-medium mb-2">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                    >
                      <option value="general">General Inquiries</option>
                      <option value="investors">Investor Relations</option>
                      <option value="media">Media Requests</option>
                      <option value="suppliers">Supplier Applications</option>
                      <option value="careers">Career Inquiries</option>
                      <option value="security">Security/Emergency</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sun-gold"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold py-3 px-6 rounded-lg transition duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-corporate-navy hover:bg-forest-green text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
              
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-forest-green">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="bg-light-gray p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-3 text-corporate-navy">Headquarters</h4>
                    <address className="not-italic text-gray-700">
                      <p className="mb-2">Zuma Agro Allied Integrated Limited</p>
                      <p className="mb-2">Plot 1234, Agricultural Business District</p>
                      <p className="mb-2">Central Business Area, Abuja, Nigeria</p>
                      <p className="mt-4">
                        <span className="font-semibold">Phone:</span> +234 XXX XXX XXXX
                      </p>
                      <p>
                        <span className="font-semibold">Email:</span> info@zumaagro.com
                      </p>
                    </address>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-light-gray p-6 rounded-xl">
                      <h4 className="text-xl font-bold mb-3 text-corporate-navy">Department Directory</h4>
                      <ul className="space-y-3">
                        <li>
                          <span className="font-semibold">CEO Office:</span> ceo@zumaagro.com
                        </li>
                        <li>
                          <span className="font-semibold">Operations:</span> operations@zumaagro.com
                        </li>
                        <li>
                          <span className="font-semibold">Finance:</span> finance@zumaagro.com
                        </li>
                        <li>
                          <span className="font-semibold">HR:</span> hr@zumaagro.com
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-light-gray p-6 rounded-xl">
                      <h4 className="text-xl font-bold mb-3 text-corporate-navy">Emergency Contact</h4>
                      <p className="text-gray-700 mb-3">
                        For security-related emergencies:
                      </p>
                      <p className="font-semibold">24/7 Security Hotline</p>
                      <p>+234 XXX XXX XXXX</p>
                    </div>
                  </div>
                  
                  {/* Office Locations Map */}
                  <div className="bg-light-gray p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-3 text-corporate-navy">Our Locations</h4>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center mb-4">
                      <span className="text-gray-500">Interactive Map of Zuma Agro Locations</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-forest-green">Operational Ranches</h5>
                        <ul className="text-sm text-gray-600">
                          <li>Kaduna Ranch - Northern Zone</li>
                          <li>Oyo Ranch - Western Zone</li>
                          <li>Enugu Ranch - Eastern Zone</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-forest-green">Regional Offices</h5>
                        <ul className="text-sm text-gray-600">
                          <li>Lagos Office - Export Operations</li>
                          <li>Abuja HQ - Corporate Functions</li>
                          <li>Port Harcourt - Southern Zone</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Planning */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-navy">
              Plan a Visit
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Interested in seeing our operations firsthand? Schedule a visit to one of our facilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-custom">
                <div className="text-4xl mb-4">🖥️</div>
                <h3 className="text-xl font-bold mb-3 text-forest-green">Virtual Tour</h3>
                <p className="text-gray-600 mb-4">
                  Explore our facilities through our comprehensive online virtual tours.
                </p>
                <button className="bg-corporate-navy hover:bg-forest-green text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  Access Virtual Tour
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-custom">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-bold mb-3 text-forest-green">Schedule Visit</h3>
                <p className="text-gray-600 mb-4">
                  Book an in-person visit to our ranches or facilities with advance notice.
                </p>
                <button className="bg-corporate-navy hover:bg-forest-green text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  Request Visit
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-custom">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3 text-forest-green">Security Clearance</h3>
                <p className="text-gray-600 mb-4">
                  Information on accessing our secured facilities and required documentation.
                </p>
                <button className="bg-corporate-navy hover:bg-forest-green text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  View Requirements
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How can I become a supplier for Zuma Agro?",
                  answer: "We encourage qualified suppliers to register through our supplier portal. Please visit our Supplier Applications section and complete the registration form with your company details and capabilities."
                },
                {
                  question: "What are your career opportunities?",
                  answer: "We regularly post job openings on our careers page and various job boards. We're particularly interested in professionals with experience in agriculture, logistics, technology, and business management."
                },
                {
                  question: "How do I invest in Zuma Agro?",
                  answer: "For investment inquiries, please contact our Investor Relations team at investors@zumaagro.com. We welcome discussions with qualified institutional investors who share our vision for sustainable agricultural development."
                },
                {
                  question: "Do you offer internships or graduate programs?",
                  answer: "Yes, we offer internship opportunities for students and recent graduates in relevant fields. Please check our careers page for current openings or send an inquiry to hr@zumaagro.com."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-corporate-navy mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
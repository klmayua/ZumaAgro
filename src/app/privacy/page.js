import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Zuma Agro Allied Integrated Limited',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-corporate-navy mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-custom p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Zuma Agro Allied Integrated Limited ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-corporate-navy mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Fill out contact forms on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Apply for career opportunities</li>
                <li>Request information or materials</li>
                <li>Communicate with us via email or other channels</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This information may include your name, email address, phone number, company name, job title, 
                and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-corporate-navy mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information about your device and 
                browsing activities, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Respond to your inquiries and provide requested information</li>
                <li>Send you newsletters and marketing communications (with your consent)</li>
                <li>Process job applications and communicate with candidates</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraud and unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party vendors who perform services on our 
                  behalf (e.g., hosting, email delivery, analytics)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>With Consent:</strong> When you have given us explicit consent to share your information
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze 
                website traffic, and personalize content. You can control cookie settings through your browser 
                preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:privacy@zumaagro.com" className="text-forest-green hover:underline">
                  privacy@zumaagro.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your country of 
                residence. We ensure appropriate safeguards are in place to protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our website is not intended for children under 18 years of age. We do not knowingly collect 
                personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-light-gray p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@zumaagro.com" className="text-forest-green hover:underline">
                    privacy@zumaagro.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Plot 1234, Agricultural Business District, Central Business Area, Abuja, Nigeria
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-forest-green hover:underline font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

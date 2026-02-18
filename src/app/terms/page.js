import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Zuma Agro Allied Integrated Limited',
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light-gray py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-corporate-navy mb-4">
            Terms of Use
          </h1>
          <p className="text-gray-600">Last updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-custom p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the website of Zuma Agro Allied Integrated Limited ("we," "our," or "us"), 
                you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, 
                please do not use this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">2. Use of Website</h2>
              <h3 className="text-xl font-semibold text-corporate-navy mb-3">Permitted Use</h3>
              <p className="text-gray-700 mb-4">
                You may use this website for personal, non-commercial purposes to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>View and download content for your personal use</li>
                <li>Access information about our services and operations</li>
                <li>Submit inquiries through contact forms</li>
                <li>Apply for career opportunities</li>
              </ul>

              <h3 className="text-xl font-semibold text-corporate-navy mb-3 mt-6">Prohibited Activities</h3>
              <p className="text-gray-700 mb-4">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Use the website for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Reproduce, duplicate, or copy any content without permission</li>
                <li>Use automated systems to access the website without authorization</li>
                <li>Transmit malware or harmful code</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">3. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on this website, including text, graphics, logos, images, videos, and software, 
                is the property of Zuma Agro Allied Integrated Limited or its content suppliers and is 
                protected by copyright and intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4">
                You may not use, reproduce, distribute, modify, or create derivative works of any content 
                without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">4. Disclaimers</h2>
              <h3 className="text-xl font-semibold text-corporate-navy mb-3">No Warranties</h3>
              <p className="text-gray-700 mb-4">
                This website is provided on an "as is" and "as available" basis without warranties of any kind, 
                either express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties of non-infringement</li>
                <li>Warranties that the website will be uninterrupted or error-free</li>
              </ul>

              <h3 className="text-xl font-semibold text-corporate-navy mb-3 mt-6">Forward-Looking Statements</h3>
              <p className="text-gray-700 mb-4">
                This website may contain forward-looking statements about our business, operations, and financial 
                performance. These statements are based on current expectations and are subject to risks and 
                uncertainties. Actual results may differ materially from those expressed or implied.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Zuma Agro Allied Integrated Limited shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits 
                or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or 
                other intangible losses resulting from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Your access to or use of or inability to access or use the website</li>
                <li>Any conduct or content of any third party on the website</li>
                <li>Any content obtained from the website</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">6. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to defend, indemnify, and hold harmless Zuma Agro Allied Integrated Limited and its 
                officers, directors, employees, and agents from and against any claims, liabilities, damages, 
                judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation 
                of these Terms or your use of the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">7. Third-Party Links</h2>
              <p className="text-gray-700 mb-4">
                This website may contain links to third-party websites or services that are not owned or 
                controlled by Zuma Agro. We have no control over and assume no responsibility for the content, 
                privacy policies, or practices of any third-party websites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">8. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to the website immediately, without prior notice or 
                liability, for any reason, including if you breach these Terms of Use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the Federal 
                Republic of Nigeria, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">10. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                Any disputes arising out of or relating to these Terms or the website shall be resolved through 
                good faith negotiations. If negotiations fail, disputes shall be submitted to the exclusive 
                jurisdiction of the courts of Abuja, Nigeria.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material 
                changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest-green mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-light-gray p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:legal@zumaagro.com" className="text-forest-green hover:underline">
                    legal@zumaagro.com
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

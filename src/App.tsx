import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';

import { ProblemSolution } from './components/ProblemSolution';
import { CoreBenefits } from './components/CoreBenefits';
import { ProductModules } from './components/ProductModules';
import { HowItWorks } from './components/HowItWorks';

import { Security } from './components/Security';
import { Pricing } from './components/Pricing';
// import { LeadMagnet } from './components/LeadMagnet';
// import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTABand } from './components/CTABand';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { StickyCallToAction, FloatingCTA } from './components/StickyCallToAction';

import { PageLoader } from './components/PageLoader';
import { CookieConsent } from './components/CookieConsent';
export function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Handle URL hash changes for privacy policy and terms
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy-policy') {
        setShowPrivacy(true);
        setShowTerms(false);
      } else if (hash === '#terms-conditions') {
        setShowTerms(true);
        setShowPrivacy(false);
      } else {
        setShowPrivacy(false);
        setShowTerms(false);
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    // Add a small delay for initial animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return <>
      {/* Page Loader */}
      {showLoader && <PageLoader minDisplayTime={2000} />}
      <div className={`min-h-screen w-full bg-white text-gray-800 font-sans transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header with Navigation */}
        <header role="banner">
          <Navigation showPrivacy={() => setShowPrivacy(true)} showTerms={() => setShowTerms(true)} />
        </header>
        
        {/* Main Content */}
        <main role="main">
          <section id="hero" aria-label="Hero section">
            <Hero />
          </section>

          <section id="problem-solution" aria-label="Problem and solution comparison" className="py-16 bg-white">
            <ProblemSolution />
          </section>
          <section id="benefits" aria-label="Core benefits and features" className="py-16 bg-blue-50/50">
            <CoreBenefits />
          </section>
          <section id="modules" aria-label="Product modules and features" className="py-16">
            <ProductModules />
          </section>

          <section id="how-it-works" aria-label="How the software works" className="py-16 bg-blue-50/50">
            <HowItWorks />
          </section>

          <section id="security" aria-label="Security and compliance features" className="py-16 bg-blue-50/50">
            <Security />
          </section>
          <section id="pricing" aria-label="Pricing plans and packages" className="py-16">
            <Pricing />
          </section>
          {/* <section id="lead-magnet" aria-label="Free resource" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <LeadMagnet />
            </div>
          </section> */}
          {/* <section id="testimonials" aria-label="Customer testimonials" className="py-16 bg-blue-50/50">
            <Testimonials />
          </section> */}
          <section id="faq" aria-label="Frequently asked questions" className="py-16">
            <FAQ />
          </section>
          <section id="cta" aria-label="Call to action" className="py-16 bg-blue-600 text-white">
            <CTABand />
          </section>
          <section id="contact" aria-label="Contact form and demo request" className="py-16">
            <ContactForm />
          </section>
        </main>
        
        {/* Footer */}
        <footer role="contentinfo">
          <Footer />
        </footer>
        
        {/* Mobile Sticky CTA */}
        <StickyCallToAction threshold={800} />
        {/* Desktop Floating CTA */}
        <FloatingCTA />
        
        {/* Cookie Consent Banner */}
        <CookieConsent />
        {/* Modal for Privacy Policy */}
        {showPrivacy && <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-y-auto animate-zoom-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Privacy Policy</h2>
                <button onClick={() => {
                  setShowPrivacy(false);
                  window.location.hash = '';
                }} className="text-gray-500 hover:text-gray-700 transition-colors">
                  Close
                </button>
              </div>
              <div className="max-w-none text-gray-800 leading-relaxed">
                {/* Header Section */}
                <div className="text-center mb-8 pb-6 border-b border-gray-200">
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
                  <p className="text-lg text-blue-600 font-medium">The Smile OS</p>
                  <p className="text-sm text-gray-500 mt-2">Effective Date: 11th September 2025</p>
                </div>
                
                {/* Introduction */}
                <div className="mb-8">
                  <p className="text-lg text-gray-700 mb-4 leading-7">
                    Welcome to The Smile OS website. We are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy outlines how we collect, use, and safeguard information when you visit our website.
                  </p>
                </div>
                
                {/* Section 1 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                    <p className="text-gray-700 mb-4 leading-7">We may collect the following information when you visit or interact with our website:</p>
                    <div className="grid gap-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700"><span className="font-semibold text-blue-700">Personal Information:</span> Name, email address, phone number through contact forms or newsletter subscriptions.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700"><span className="font-semibold text-blue-700">Usage Data:</span> Browsing activity, IP address, pages visited, time spent, and device information via cookies or analytics tools.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700"><span className="font-semibold text-blue-700">Cookies & Tracking:</span> We use cookies to enhance your browsing experience and to gather insights about website performance.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Section 2 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use the Information</h2>
                    <p className="text-gray-700 mb-4 leading-7">We use the collected data to:</p>
                    <div className="grid gap-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Respond to inquiries or requests submitted through contact forms.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Provide newsletters and updates.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Improve website performance and user experience.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Understand user behavior for analytical purposes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Section 3 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Services and Data Sharing</h2>
                    <p className="text-gray-700 mb-4 leading-7">We use the following third-party services that may collect and process your data:</p>
                    <div className="grid gap-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700"><span className="font-semibold text-blue-700">Google Analytics 4:</span> We use Google Analytics to understand website usage, visitor behavior, and improve our services. Google Analytics collects information such as:</p>
                        <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                          <li>Pages visited and time spent on pages</li>
                          <li>Device and browser information</li>
                          <li>IP address (anonymized)</li>
                          <li>Referral sources and search terms</li>
                        </ul>
                        <p className="text-sm text-gray-600 mt-2">This data is processed by Google according to their Privacy Policy. You can opt-out using Google's opt-out browser add-on or by disabling cookies in your browser.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700"><span className="font-semibold text-blue-700">Email Service Providers:</span> We use third-party email services for newsletter delivery and communication.</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-4 leading-7">
                      <span className="font-semibold">Data Sharing:</span> We do not sell your personal information. However, we may share data with these third-party service providers as necessary to operate our website and provide services. These providers are bound by their own privacy policies and contractual obligations.
                    </p>
                  </div>
                </div>
                
                {/* Section 4 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                    <p className="text-gray-700 leading-7">
                      We implement reasonable measures to protect your personal information from unauthorized access, alteration, or misuse. However, we cannot guarantee complete security and recommend that you share personal information cautiously.
                    </p>
                  </div>
                </div>
                
                {/* Section 5 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Choices and Rights</h2>
                    <p className="text-gray-700 mb-4 leading-7">You have the following choices regarding your data:</p>
                    <div className="grid gap-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700"><span className="font-semibold text-blue-700">Google Analytics Opt-out:</span> You can opt-out of Google Analytics tracking by:</p>
                        <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                          <li>Installing the Google Analytics opt-out browser add-on</li>
                          <li>Disabling cookies in your browser settings</li>
                          <li>Using browser extensions that block tracking</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700"><span className="font-semibold text-blue-700">Email Communications:</span> You may opt-out of receiving newsletters or promotional emails at any time by clicking the unsubscribe link provided in emails.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700"><span className="font-semibold text-blue-700">Data Access:</span> You can request information about the data we have collected about you by contacting us at info@thesmileos.com.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Section 6 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
                    <p className="text-gray-700 mb-4 leading-7">We use cookies and similar tracking technologies to:</p>
                    <div className="grid gap-3 mb-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Analyze website traffic and user behavior through Google Analytics</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Remember your preferences and improve user experience</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Track form submissions and website interactions</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-7">
                      You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                    </p>
                  </div>
                </div>
                
                {/* Section 7 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Links to Other Sites</h2>
                    <p className="text-gray-700 leading-7">
                      Our website may contain links to third-party websites. We are not responsible for their privacy practices and recommend reviewing their policies before sharing personal information.
                    </p>
                  </div>
                </div>
                
                {/* Section 8 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                    <p className="text-gray-700 leading-7">
                      Our website is not intended for children under 13. We do not knowingly collect personal information from minors.
                    </p>
                  </div>
                </div>
                
                {/* Section 9 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                    <p className="text-gray-700 leading-7">
                      We may update this policy periodically. Updates will be posted on this page with a revised effective date.
                    </p>
                  </div>
                </div>
                
                {/* Contact Section */}
                <div className="mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">Contact Us</h2>
                    <p className="text-gray-700 mb-4 leading-7">For any questions or concerns, please reach out to us at:</p>
                    <div className="space-y-2">
                      <p className="text-gray-700"><span className="font-semibold">Email:</span> info@thesmileos.com</p>
                      <p className="text-gray-700"><span className="font-semibold">Phone:</span> +91 81499 05241</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {/* Modal for Terms & Conditions */}
        {showTerms && <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-y-auto animate-zoom-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Terms & Conditions</h2>
                <button onClick={() => {
                  setShowTerms(false);
                  window.location.hash = '';
                }} className="text-gray-500 hover:text-gray-700 transition-colors">
                  Close
                </button>
              </div>
              <div className="max-w-none text-gray-800 leading-relaxed">
                {/* Header Section */}
                <div className="text-center mb-8 pb-6 border-b border-gray-200">
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">Terms and Conditions</h1>
                  <p className="text-lg text-blue-600 font-medium">The Smile OS Website</p>
                  <p className="text-sm text-gray-500 mt-2">Effective Date: September 11, 2025</p>
                </div>
                
                {/* Introduction */}
                <div className="mb-8">
                  <p className="text-lg text-gray-700 mb-4 leading-7">
                    Welcome to The Smile OS website (the "Website"). The Website is provided by The Smile OS ("we", "our", "us") to offer information about our healthcare management solutions, including product details, contact forms, support resources, and other content related to our services.
                  </p>
                  <p className="text-gray-700 leading-7">
                    By accessing or using this Website, you agree to be bound by these Terms and Conditions ("Terms"). Please read them carefully before using the Website. If you do not agree with any part of these Terms, please do not use the Website.
                  </p>
                </div>
                
                {/* Section 1 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Use of the Website</h2>
                    <p className="text-gray-700 mb-4 leading-7">
                      The content on this Website is provided for informational purposes only. It does not create any contractual relationship or obligation between you and us unless otherwise agreed upon in writing.
                    </p>
                    <p className="text-gray-700 leading-7">
                      You may browse, view, and download content solely for personal, non-commercial use unless you have explicit permission from us to use the content for other purposes.
                    </p>
                  </div>
                </div>
                {/* Section 2 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property</h2>
                    <p className="text-gray-700 mb-4 leading-7">
                      All content on the Website, including logos, graphics, images, text, videos, and design elements, is owned by The Smile OS or its licensors and is protected by applicable intellectual property laws.
                    </p>
                    <p className="text-gray-700 leading-7">
                      You are not allowed to copy, reproduce, distribute, or create derivative works based on the content without prior written permission.
                    </p>
                  </div>
                </div>
                
                {/* Section 3 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Conduct</h2>
                    <p className="text-gray-700 mb-4 leading-7">You agree not to:</p>
                    <div className="grid gap-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Use the Website for any unlawful or unauthorized purpose</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Interfere with the operation or security of the Website</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Upload or transmit harmful, defamatory, or offensive content</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Collect or harvest data from the Website without permission</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Attempt to access restricted areas or administrative functions</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Section 4 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Product Information and Services</h2>
                    <p className="text-gray-700 mb-4 leading-7">
                      The Website provides descriptions, features, and demonstrations of The Smile OS product, including healthcare management functionalities like appointment scheduling, clinic management, and patient communication.
                    </p>
                    <p className="text-gray-700 mb-4 leading-7">
                      Product availability, features, and pricing are subject to change without notice.
                    </p>
                    <p className="text-gray-700 leading-7">
                      For detailed usage, data handling, or subscription agreements, users are directed to review our Product Terms and Privacy Policy, linked within the Website.
                    </p>
                  </div>
                </div>
                {/* Section 5 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Links</h2>
                    <p className="text-gray-700 mb-4 leading-7">
                      The Website may contain links to third-party websites or services that are not controlled or endorsed by us. We are not responsible for the content, security, or privacy practices of such external sites.
                    </p>
                    <p className="text-gray-700 leading-7">
                      You are encouraged to read the terms and policies of those third parties before interacting with them.
                    </p>
                  </div>
                </div>
                
                {/* Section 6 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy</h2>
                    <p className="text-gray-700 leading-7">
                      Any personal information collected through contact forms, subscriptions, or inquiries is handled according to our Privacy Policy, which you can view on the Website. By providing your information, you consent to such processing.
                    </p>
                  </div>
                </div>
                
                {/* Section 7 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimers</h2>
                    <p className="text-gray-700 mb-4 leading-7">
                      The Website is provided "as is" and "as available" without warranties of any kind, express or implied. We do not guarantee that:
                    </p>
                    <div className="grid gap-3 mb-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">The Website will be free from errors or interruptions</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">Information provided is always accurate, complete, or up-to-date</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">The Website will be compatible with all devices or browsers</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-7">
                      You agree that your use of the Website is at your own risk.
                    </p>
                  </div>
                </div>
                
                {/* Section 8 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                    <p className="text-gray-700 leading-7">
                      To the fullest extent permitted by law, we will not be liable for any damages arising from your use or inability to use the Website, including but not limited to direct, indirect, incidental, or consequential damages.
                    </p>
                  </div>
                </div>
                {/* Section 9 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
                    <p className="text-gray-700 leading-7">
                      You agree to indemnify and hold harmless The Smile OS and its affiliates from any claims, damages, losses, liabilities, and expenses arising from your use of the Website or your violation of these Terms.
                    </p>
                  </div>
                </div>
                
                {/* Section 10 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                    <p className="text-gray-700 mb-4 leading-7">
                      These Terms shall be governed by and construed in accordance with the laws of Maharashtra, India, without regard to its conflict of law provisions.
                    </p>
                    <p className="text-gray-700 leading-7">
                      Any disputes arising from the use of this Website will be resolved exclusively in the courts located in Maharashtra, India.
                    </p>
                  </div>
                </div>
                
                {/* Section 11 */}
                <div className="mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                    <p className="text-gray-700 leading-7">
                      We reserve the right to modify or update these Terms at any time without prior notice. It is your responsibility to review these Terms periodically. Continued use of the Website constitutes acceptance of the revised Terms.
                    </p>
                  </div>
                </div>
                
                {/* Section 12 - Contact */}
                <div className="mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">12. Contact Information</h2>
                    <p className="text-gray-700 mb-4 leading-7">
                      If you have questions or concerns regarding these Terms, please contact us at:
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-700"><span className="font-semibold">Email:</span> info@thesmileos.com</p>
                      <p className="text-gray-700"><span className="font-semibold">Address:</span> Ravet, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="bg-gray-100 p-6 rounded-lg text-center">
                  <p className="text-gray-600 leading-7">
                    By using this Website, you agree to these Terms and any applicable policies. We appreciate your interest in The Smile OS and are committed to providing you with clear, reliable, and secure information.
                  </p>
                </div>
              </div>
            </div>
          </div>}
        {/* Comprehensive Structured Data for Local Business */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.thesmileos.com/#organization',
          name: 'The Smile OS',
          alternateName: 'Smile OS',
          url: 'https://www.thesmileos.com',
          logo: 'https://www.thesmileos.com/logo.png',
          image: 'https://www.thesmileos.com/og-image.jpg',
          description: 'Leading dental clinic management software in India. Comprehensive practice management system with appointment scheduling, billing, patient management, and communication tools for dental and medical practices.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Ravet',
            addressLocality: 'Ravet',
            addressRegion: 'Maharashtra',
            postalCode: '412101',
            addressCountry: 'IN'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-81499-05241',
            contactType: 'customer service',
            email: 'sales@thesmileos.com',
            availableLanguage: ['English', 'Hindi'],
            areaServed: 'IN'
          },
          sameAs: [
            'https://www.facebook.com/thesmileos',
            'https://www.linkedin.com/company/thesmileos',
            'https://www.instagram.com/thesmileos'
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '150',
            bestRating: '5',
            worstRating: '1'
          }
        })
      }} />
        
        {/* Structured Data for Software Application */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Smile OS',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web Browser',
          description: 'Comprehensive dental clinic management software with appointment scheduling, billing, patient management, and communication tools.',
          url: 'https://www.thesmileos.com',
          author: {
            '@type': 'Organization',
            name: 'The Smile OS',
            url: 'https://www.thesmileos.com'
          },
          offers: {
            '@type': 'Offer',
            price: '25000',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            description: 'Starting from ₹25,000 for dental clinic management software'
          },
          featureList: [
            'Appointment Scheduling',
            'Patient Management',
            'Billing & Invoicing',
            'WhatsApp Integration',
            'Email Reminders',
            'Inventory Management',
            'Analytics & Reporting',
            'Staff Management'
          ]
        })
      }} />
        
        {/* Structured Data for Website */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: 'https://www.thesmileos.com',
          name: 'The Smile OS - Dental Clinic Management Software',
          description: 'Leading dental clinic management software in India. Comprehensive practice management system for dental and medical practices.',
          publisher: {
            '@type': 'Organization',
            name: 'The Smile OS',
            url: 'https://www.thesmileos.com'
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.thesmileos.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        })
      }} />
      </div>
    </>;
}
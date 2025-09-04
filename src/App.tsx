import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';

import { ProblemSolution } from './components/ProblemSolution';
import { CoreBenefits } from './components/CoreBenefits';
import { ProductModules } from './components/ProductModules';
import { HowItWorks } from './components/HowItWorks';

import { Security } from './components/Security';
import { Pricing } from './components/Pricing';
import { LeadMagnet } from './components/LeadMagnet';
// import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTABand } from './components/CTABand';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { StickyCallToAction, FloatingCTA } from './components/StickyCallToAction';

import { PageLoader } from './components/PageLoader';
export function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
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
        <Navigation showPrivacy={() => setShowPrivacy(true)} showTerms={() => setShowTerms(true)} />
        <main>
          <section id="hero" aria-label="Hero section">
            <Hero />
          </section>

          <section id="problem-solution" aria-label="Problem and solution" className="py-16 bg-white">
            <ProblemSolution />
          </section>
          <section id="benefits" aria-label="Core benefits" className="py-16 bg-blue-50/50">
            <CoreBenefits />
          </section>
          <section id="modules" aria-label="Product features" className="py-16">
            <ProductModules />
          </section>

          <section id="how-it-works" aria-label="How it works" className="py-16 bg-blue-50/50">
            <HowItWorks />
          </section>

          <section id="security" aria-label="Security features" className="py-16 bg-blue-50/50">
            <Security />
          </section>
          <section id="pricing" aria-label="Pricing plans" className="py-16">
            <Pricing />
          </section>
          <section id="lead-magnet" aria-label="Free resource" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <LeadMagnet />
            </div>
          </section>
          {/* <section id="testimonials" aria-label="Customer testimonials" className="py-16 bg-blue-50/50">
            <Testimonials />
          </section> */}
          <section id="faq" aria-label="Frequently asked questions" className="py-16">
            <FAQ />
          </section>
          <section id="cta" aria-label="Call to action" className="py-16 bg-blue-600 text-white">
            <CTABand />
          </section>
          <section id="contact" aria-label="Contact form" className="py-16">
            <ContactForm />
          </section>
        </main>
        <Footer showPrivacy={() => setShowPrivacy(true)} showTerms={() => setShowTerms(true)} />
        {/* Mobile Sticky CTA */}
        <StickyCallToAction threshold={800} />
        {/* Desktop Floating CTA */}
        <FloatingCTA />
        {/* Modal for Privacy Policy */}
        {showPrivacy && <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-y-auto animate-zoom-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Privacy Policy</h2>
                <button onClick={() => setShowPrivacy(false)} className="text-gray-500 hover:text-gray-700 transition-colors">
                  Close
                </button>
              </div>
              <div className="prose max-w-none">
                <h3>1. Introduction</h3>
                <p>
                  Smile OS ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how your personal
                  information is collected, used, and disclosed by Smile OS.
                </p>
                <h3>2. Information We Collect</h3>
                <p>
                  We collect information that you provide directly to us, such
                  as when you create an account, use our services, or contact
                  us. This may include:
                </p>
                <ul>
                  <li>
                    Contact information (name, email address, phone number)
                  </li>
                  <li>Clinic information (name, address, specialty)</li>
                  <li>Payment information</li>
                  <li>Communications you send to us</li>
                </ul>
                <h3>3. How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>
                    Send you technical notices, updates, and support messages
                  </li>
                  <li>Respond to your comments and questions</li>
                  <li>Develop new products and services</li>
                </ul>
                <h3>4. Data Security</h3>
                <p>
                  We implement appropriate security measures to protect your
                  personal information. Each clinic's data is isolated from
                  others, and we use encryption in transit to protect your data.
                </p>
                <h3>5. Third-Party Services</h3>
                <p>
                  Our service integrates with third-party services like WhatsApp
                  Business API and payment gateways. These services have their
                  own privacy policies, and we recommend reviewing them.
                </p>
                <h3>6. Your Rights</h3>
                <p>
                  You have the right to access, correct, or delete your personal
                  information. Contact us at privacy@clinicos.com to exercise
                  these rights.
                </p>
                <h3>7. Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page.
                </p>
                <h3>8. Contact Us</h3>
                                  <p>
                    If you have any questions about this Privacy Policy, please
                    contact us at privacy@smileos.com.
                  </p>
              </div>
            </div>
          </div>}
        {/* Modal for Terms & Conditions */}
        {showTerms && <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-y-auto animate-zoom-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Terms & Conditions</h2>
                <button onClick={() => setShowTerms(false)} className="text-gray-500 hover:text-gray-700 transition-colors">
                  Close
                </button>
              </div>
              <div className="prose max-w-none">
                <h3>1. Acceptance of Terms</h3>
                <p>
                  By accessing or using Smile OS services, you agree to be bound
                  by these Terms & Conditions.
                </p>
                <h3>2. Description of Service</h3>
                <p>
                  Smile OS provides clinic management software for dental and
                  healthcare clinics, including appointment scheduling, patient
                  management, billing, inventory management, and communications.
                </p>
                <h3>3. User Accounts</h3>
                <p>
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for all activities that occur
                  under your account.
                </p>
                <h3>4. Data Ownership</h3>
                <p>
                  You retain ownership of all data you input into the system. We
                  do not own your data and will not sell or share it with third
                  parties except as necessary to provide our services.
                </p>
                <h3>5. Subscription and Billing</h3>
                <p>
                  Services are provided on a subscription basis. You agree to
                  pay all fees associated with your subscription plan. Fees are
                  non-refundable except as required by law.
                </p>
                <h3>6. Cancellation</h3>
                <p>
                  You may cancel your subscription at any time. Upon
                  cancellation, you will have access to your data for 30 days to
                  export it before it is deleted from our systems.
                </p>
                <h3>7. Limitations of Liability</h3>
                <p>
                  Smile OS is provided "as is" without warranties of any kind.
                  We are not liable for any indirect, incidental, or
                  consequential damages.
                </p>
                <h3>8. Third-Party Services</h3>
                <p>
                  Our service integrates with third-party services. We are not
                  responsible for the content or practices of these third-party
                  services.
                </p>
                <h3>9. Modifications to Terms</h3>
                <p>
                  We reserve the right to modify these Terms & Conditions at any
                  time. Continued use of the service constitutes acceptance of
                  the modified terms.
                </p>
                <h3>10. Contact Information</h3>
                <p>
                  For questions about these Terms & Conditions, please contact
                  us at legal@smileos.com.
                </p>
              </div>
            </div>
          </div>}
        {/* Structured Data for Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'The Smile OS',
          url: 'https://www.thesmileos.com',
          logo: 'https://www.thesmileos.com/logo.png',
          description: 'All-in-one clinic management software for dental and medical practices with appointment scheduling, billing, and patient communications.',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-98765-43210',
            contactType: 'customer service',
            availableLanguage: ['English', 'Hindi']
          },
          sameAs: ['https://www.facebook.com/thesmileos', 'https://www.twitter.com/thesmileos', 'https://www.linkedin.com/company/thesmileos', 'https://www.instagram.com/thesmileos']
        })
      }} />
        {/* Structured Data for Website */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: 'https://www.thesmileos.com',
          name: 'The Smile OS - Clinic Management Software',
          description: 'All-in-one clinic management software with appointment scheduling, billing, and patient communications.',
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
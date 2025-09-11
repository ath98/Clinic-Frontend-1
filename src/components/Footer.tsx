import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
export const Footer: React.FC = () => {
  return <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">The Smile OS</h3>
            <p className="text-gray-400 mb-4">
              All-in-one clinic management software for dental and healthcare
              practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors transform hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#modules" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#security" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#modules" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                  FAQ
                </a>
              </li>
              <li>
                <a href="mailto:sales@thesmileos.com" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                  Get Support
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                  Book Demo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms-conditions" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} The Smile OS. All rights reserved.
          </p>
        </div>
        {/* Schema.org Organization markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'The Smile OS',
          url: 'https://www.thesmileos.com',
          logo: 'https://www.thesmileos.com/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-98765-43210',
            contactType: 'customer service',
            availableLanguage: ['English', 'Hindi']
          },
          sameAs: ['https://www.facebook.com/thesmileos', 'https://www.linkedin.com/company/thesmileos', 'https://www.instagram.com/thesmileos']
        })
      }} />
      </div>
    </footer>;
};
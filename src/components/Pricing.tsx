import React from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export const Pricing: React.FC = () => {
  const plans = [{
    name: 'Starter Plan',
    price: '₹25,000',
    period: '/-',
    description: 'Perfect for single clinics just getting started',
    features: ['Modern, responsive design (up to 5 pages)', 'Mobile-friendly & fast loading', 'Basic SEO (titles, meta tags, sitemap)', 'Integrated CTA form', '2 Changes Per year'],
    cta: 'Start Free Trial',
    popular: false
  }, {
    name: 'Growth Plan',
    price: '₹30,000',
    period: '/-',
    description: 'For established clinics looking to optimize operations',
    features: ['Website analytics & visitor tracking', 'Google Maps & WhatsApp integration', 'Optimized image & speed performance', 'SSL setup', '4 Revisions Per Year'],
    cta: 'Start Free Trial',
    popular: true
  }, {
    name: 'Pro Plan',
    price: '₹35,000',
    period: '/-',
    description: 'For clinic networks with custom requirements',
    features: ['Advanced SEO (keyword optimization, schema, on-page strategy)', 'Landing pages for campaigns (unlimited)', 'Performance monitoring & security hardening', '6 Revisions Per Year'],
    cta: 'Contact Sales',
    popular: false
  }];
  return <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your clinic's needs. All plans include a
            120 days trial*.
          </p>
        </ScrollReveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => <ScrollReveal key={index} animation="zoom-in" delay={index * 150}>
            <div className={`bg-white rounded-xl overflow-hidden border ${plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-200 shadow-md hover:shadow-xl'} transition-all duration-300 transform hover:-translate-y-1 h-full`}>
              {plan.popular && <div className="bg-blue-500 text-white py-1 px-4 text-center text-sm font-medium">
                  MOST POPULAR
                </div>}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-900">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => <li key={idx} className="flex items-start">
                      <Check size={20} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
                <a href="#contact" className={`block text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}`}>
                  {plan.cta}
                </a>
              </div>
            </div>
          </ScrollReveal>)}
      </div>
      <ScrollReveal animation="fade-in" delay={500}>
        <div className="mt-12 text-center text-gray-600">
          <p>
            All plans include unlimited patients, basic support, and regular
            updates.
          </p>
          <p className="mt-2">
            Need a custom solution?{' '}
            <a href="#contact" className="text-blue-600 font-medium hover:underline">
              Contact our sales team
            </a>
            .
          </p>
          <p className="mt-4 text-sm text-gray-500">
            * You can get up to 120 days trial based on your clinic's needs and requirements.
          </p>
        </div>
      </ScrollReveal>
    </div>;
};
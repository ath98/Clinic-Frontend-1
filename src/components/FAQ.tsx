import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useFAQTracking } from '../hooks/useAnalytics';
export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [{
    question: 'What features does Smile OS offer for clinic management?',
    answer: 'Smile OS provides comprehensive clinic management features including patient records, appointment scheduling, billing, inventory management, and staff coordination. Our Growth and Custom plans offer advanced features with role-based access control for different staff members.'
  }, {
    question: 'Who owns the data entered into Smile OS?',
    answer: 'Your clinic owns all the data you enter into Smile OS. We do not sell your clinic data to third parties. We may share limited analytics data with trusted service providers (like Google Analytics) as outlined in our Privacy Policy. You can export your data at any time, and we provide tools to help you comply with data protection regulations.'
  }, {
    question: 'Do I need my own WhatsApp Business number?',
    answer: "Yes, you'll need a WhatsApp Business API account to use our WhatsApp integration features. We can guide you through the process of setting this up, or you can use your existing WhatsApp Business number if you already have one."
  }, {
    question: 'How long does it take to set up Smile OS for my clinic?',
    answer: 'Most clinics are up and running with Smile OS within 1-2 days. Our onboarding process is designed to be simple, and our team provides assistance with initial setup, data migration, and staff training to ensure a smooth transition.'
  }, {
    question: 'What kind of support does Smile OS offer?',
    answer: 'All plans include standard support via email and in-app chat. Our Growth and Custom plans include priority support with faster response times. Custom plans can also include dedicated support personnel for comprehensive clinic management needs.'
  }, {
    question: 'Can I migrate data from my existing system?',
    answer: 'Yes, we offer data migration services to help you transition from your current system. Our team will work with you to import patient records, appointment history, and other essential data to ensure a smooth transition with minimal disruption to your practice.'
  }];
  const toggleFaq = (index: number) => {
    const faq = faqs[index];
    const isOpening = openIndex !== index;
    
    setOpenIndex(openIndex === index ? null : index);
    
    // Track FAQ interaction
    if (faq) {
      const { handleFAQOpen, handleFAQClose } = useFAQTracking(faq.question);
      if (isOpening) {
        handleFAQOpen();
      } else {
        handleFAQClose();
      }
    }
  };
  return <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <ScrollReveal animation="slide-up">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Smile OS. Can't find what
            you're looking for?{' '}
            <a href="#contact" className="text-blue-600 font-medium hover:underline">
              Contact us
            </a>
            .
          </p>
        </ScrollReveal>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => <ScrollReveal key={index} animation="fade-in" delay={index * 100}>
              <div className="border border-blue-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <button className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-blue-50 transition-colors" onClick={() => toggleFaq(index)} aria-expanded={openIndex === index} aria-controls={`faq-answer-${index}`}>
                  <span className="font-semibold text-lg text-blue-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? <ChevronUp size={20} className="text-blue-500 flex-shrink-0" /> : <ChevronDown size={20} className="text-blue-500 flex-shrink-0" />}
                </button>
                <div id={`faq-answer-${index}`} className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-5 pt-0 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>)}
        </div>
      </div>
      {/* Schema.org FAQ markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          name: 'Frequently Asked Questions - Smile OS Dental Clinic Management Software',
          description: 'Common questions about Smile OS dental clinic management software, pricing, features, and implementation.',
          mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          })),
          about: {
            '@type': 'SoftwareApplication',
            name: 'Smile OS',
            description: 'Dental clinic management software'
          },
          publisher: {
            '@type': 'Organization',
            name: 'The Smile OS',
            url: 'https://www.thesmileos.com'
          }
        })
      }} />
    </div>;
};
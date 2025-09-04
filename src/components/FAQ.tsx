import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [{
    question: 'Can Smile OS manage multiple clinic locations?',
    answer: 'Yes, Smile OS is designed to support multi-clinic operations. Our Growth and Custom plans allow you to manage multiple locations from a single dashboard with role-based access control for staff at different locations.'
  }, {
    question: 'Who owns the data entered into Smile OS?',
    answer: 'Your clinic owns all the data you enter into Smile OS. We do not sell or share your data with third parties. You can export your data at any time, and we provide tools to help you comply with data protection regulations.'
  }, {
    question: 'Do I need my own WhatsApp Business number?',
    answer: "Yes, you'll need a WhatsApp Business API account to use our WhatsApp integration features. We can guide you through the process of setting this up, or you can use your existing WhatsApp Business number if you already have one."
  }, {
    question: 'What happens if I cancel my subscription?',
    answer: "If you cancel your subscription, you'll maintain access to your account until the end of your billing cycle. After that, you'll have 30 days to export your data before it's deleted from our systems. We make the transition process as smooth as possible."
  }, {
    question: 'How long does it take to set up Smile OS for my clinic?',
    answer: 'Most clinics are up and running with Smile OS within 1-2 days. Our onboarding process is designed to be simple, and our team provides assistance with initial setup, data migration, and staff training to ensure a smooth transition.'
  }, {
    question: 'What kind of support does Smile OS offer?',
    answer: 'All plans include standard support via email and in-app chat. Our Growth and Custom plans include priority support with faster response times. Custom plans can also include dedicated support personnel for larger clinic networks.'
  }, {
    question: 'Can I migrate data from my existing system?',
    answer: 'Yes, we offer data migration services to help you transition from your current system. Our team will work with you to import patient records, appointment history, and other essential data to ensure a smooth transition with minimal disruption to your practice.'
  }];
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      })
    }} />
    </div>;
};
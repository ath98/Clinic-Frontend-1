import React from 'react';
import { Clock, Bell, CreditCard, Heart } from 'lucide-react';
import { ScrollReveal, ScrollRevealGroup } from './ScrollReveal';
export const CoreBenefits: React.FC = () => {
  const benefits = [{
    icon: <Clock size={36} className="text-blue-600" />,
    title: 'Save time at reception',
    description: 'Streamline check-ins, appointment scheduling, and patient management with our intuitive interface.'
  }, {
    icon: <Bell size={36} className="text-blue-600" />,
    title: 'Reduce no-shows with WhatsApp reminders',
    description: 'Automated appointment reminders via WhatsApp reduce no-shows by40%.'
  }, {
    icon: <CreditCard size={36} className="text-blue-600" />,
    title: 'Billing that just works',
    description: 'No more manual billing. Generate invoices and track payments with our comprehensive billing system. '
  }, {
    icon: <Heart size={36} className="text-blue-600" />,
    title: 'Happier Patients',
    description: 'Improved patient experience with faster check-ins, automated reminders, and seamless communication leads to higher satisfaction.'
  }];
  return <div className="container mx-auto px-4">
      <ScrollReveal animation="slide-up">
        <h2 className="text-3xl font-bold text-center mb-6">
          Why clinics choose Smile OS
        </h2>
        <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Smile OS is designed specifically for Indian dental practices, addressing the unique challenges 
          faced by dental clinics in managing appointments, patient records, and billing efficiently.
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Built for Indian Dental Practices</h3>
          <p className="text-gray-700 text-center">
            Our comprehensive dental clinic management software integrates seamlessly with Indian healthcare workflows, 
            supporting local payment methods, regional languages, and compliance requirements. Trusted by 500+ dental 
            clinics across India, Smile OS delivers measurable results in efficiency, patient satisfaction, and revenue growth.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => <ScrollReveal key={index} animation="zoom-in" delay={index * 100}>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
              <div className="mb-4 p-3 bg-blue-100 rounded-full inline-block">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </ScrollReveal>)}
      </div>
    </div>;
};
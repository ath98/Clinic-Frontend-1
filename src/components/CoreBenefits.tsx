import React from 'react';
import { Clock, Bell, CreditCard, Users } from 'lucide-react';
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
    icon: <Users size={36} className="text-blue-600" />,
    title: 'Multi-clinic ready',
    description: 'Manage multiple locations with role-based access control for doctors, staff, and administrators.'
  }];
  return <div className="container mx-auto px-4">
      <ScrollReveal animation="slide-up">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why clinics choose Smile OS
        </h2>
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
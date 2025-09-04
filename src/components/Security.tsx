import React from 'react';
import { Shield, Users, Lock, ClipboardList } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export const Security: React.FC = () => {
  const securityFeatures = [{
    icon: <Shield size={32} className="text-blue-600" />,
    title: 'Data Isolation',
    description: "Each clinic's data is completely isolated from others, ensuring privacy and security."
  }, {
    icon: <Users size={32} className="text-blue-600" />,
    title: 'Role-Based Access',
    description: 'Control access with specific roles for doctors, nurses, receptionists, and administrators.'
  }, {
    icon: <Lock size={32} className="text-blue-600" />,
    title: 'Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard protocols.'
  }, {
    icon: <ClipboardList size={32} className="text-blue-600" />,
    title: 'Audit Logs',
    description: 'Comprehensive audit logs track all system activities for compliance and security.'
  }];
  return <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take the security and privacy of your clinic data seriously. Our
            platform is built with security at its core.
          </p>
        </ScrollReveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityFeatures.map((feature, index) => <ScrollReveal key={index} animation="zoom-in" delay={index * 100}>
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </ScrollReveal>)}
      </div>
      <ScrollReveal animation="slide-up" delay={500}>
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-3 text-blue-900">
                Your data belongs to you
              </h3>
              <p className="text-gray-700">
                We believe in complete data ownership. Your clinic's data
                belongs to you, and you can export it at any time. We never sell
                your data or use it for purposes other than providing our
                service.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 inline-block hover:shadow-lg transform hover:-translate-y-0.5">
                Learn More About Security
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>;
};
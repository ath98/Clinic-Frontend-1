import React from 'react';
import { Calendar, UserCircle, DollarSign, Package, Settings, MessageCircle, Mic, BarChart3 } from 'lucide-react';
import { ScrollReveal, ScrollRevealGroup } from './ScrollReveal';
export const ProductModules: React.FC = () => {
  const modules = [{
    icon: <Calendar size={32} className="text-blue-600" />,
    title: 'Appointments',
    description: 'Schedule, manage, and track appointments with an intuitive calendar interface.'
  }, {
    icon: <UserCircle size={32} className="text-blue-600" />,
    title: 'Patients',
    description: 'Maintain comprehensive patient records, medical history, and treatment plans.'
  }, {
    icon: <DollarSign size={32} className="text-blue-600" />,
    title: 'Finance/Billing',
    description: 'Generate invoices, process payments, and manage insurance claims.'
  }, {
    icon: <Package size={32} className="text-blue-600" />,
    title: 'Inventory',
    description: 'Track supplies, set reorder points, and manage stock levels.'
  }, {
    icon: <Settings size={32} className="text-blue-600" />,
    title: 'Services',
    description: "Customize and manage your clinic's service offerings and pricing."
  }, {
    icon: <MessageCircle size={32} className="text-blue-600" />,
    title: 'Communications',
    description: 'Send WhatsApp messages and emails to patients directly from the platform.'
  }, {
    icon: <Mic size={32} className="text-blue-600" />,
    title: 'Voice Journal',
    description: 'Record voice notes for patient consultations and transcribe automatically.'
  }, {
    icon: <BarChart3 size={32} className="text-blue-600" />,
    title: 'Dashboard',
    description: 'Get insights on clinic performance, revenue, and patient statistics.'
  }];
  return <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl font-bold mb-4">
            Everything you need to run your clinic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smile OS combines all essential tools in one platform, eliminating
            the need for multiple systems.
          </p>
        </ScrollReveal>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((module, index) => <ScrollReveal key={index} animation="zoom-in" delay={100 + index * 75}>
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
              <div className="mb-4 p-3 bg-blue-50 inline-block rounded-lg">
                {module.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {module.title}
              </h3>
              <p className="text-gray-600">{module.description}</p>
            </div>
          </ScrollReveal>)}
      </div>
    </div>;
};
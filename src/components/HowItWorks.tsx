import React from 'react';
import { ClipboardCheck, UserPlus, CalendarCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export const HowItWorks: React.FC = () => {
  const steps = [{
    icon: <ClipboardCheck size={40} className="text-blue-600" />,
    title: 'Sign up',
    description: 'Create your account in minutes and access your clinic dashboard immediately.'
  }, {
    icon: <UserPlus size={40} className="text-blue-600" />,
    title: 'Add clinic & staff',
    description: 'Set up your clinic profile and add staff members with appropriate access levels.'
  }, {
    icon: <CalendarCheck size={40} className="text-blue-600" />,
    title: 'Start scheduling & billing',
    description: 'Begin managing appointments, patients, and billing right away with our intuitive interface.'
  }];
  return <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with Smile OS is quick and easy. You'll be up and
            running in no time.
          </p>
        </ScrollReveal>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
        {steps.map((step, index) => <ScrollReveal key={index} animation="zoom-in" delay={index * 200}>
            <div className="flex-1 text-center max-w-xs mx-auto w-full">
              <div className="relative">
                <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mb-6 transform transition-transform duration-500 hover:scale-110 hover:shadow-lg">
                  {step.icon}
                </div>
                {/* Connecting line */}
                {index < steps.length - 1 && <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-blue-200 -z-10 transform -translate-x-8"></div>}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </ScrollReveal>)}
      </div>
      <ScrollReveal animation="slide-up" delay={600}>
        <div className="mt-12 text-center">
          <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 inline-block hover:shadow-lg transform hover:-translate-y-0.5">
            Get Started Now
          </a>
        </div>
      </ScrollReveal>
    </div>;
};
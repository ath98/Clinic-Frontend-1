import React from 'react';
import { ScrollReveal } from './ScrollReveal';
export const CTABand: React.FC = () => {
  return <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl font-bold mb-6">
            Ready to streamline your clinic?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of healthcare professionals who have transformed their
            practice with Smile OS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
              Book a Demo
            </a>
            <a href="#pricing" className="bg-blue-700 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
              View Pricing
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>;
};
import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Eye } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import heroImage from '../assets/hero-image.webp';
export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return <div className="pt-28 pb-16 bg-gradient-to-br from-blue-50 to-blue-100/70 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 mb-10 md:mb-0 md:pr-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Enhanced value proposition */}
            {/* <div className="mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                #1 Rated Clinic Software
              </span>
            </div> */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Reduce no-shows by <span className="text-blue-600">40%</span> and
              save <span className="text-blue-600">10+ hours</span> weekly with
              <span className="block text-blue-600">Smile OS Dental Software</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Smile OS combines appointments, billing, and patient messaging in
              one intuitive platform built specifically for dental and medical
              practices. The leading dental clinic management software in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 text-center hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                <span>Book Your Free Demo</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#modules" className="flex items-center justify-center gap-2 text-blue-700 px-6 py-3 rounded-full border border-blue-600 hover:bg-blue-50 transition-all duration-300 group">
                <Eye size={18} className="group-hover:scale-110 transition-transform" />
                View Features
              </a>
            </div>
            {/* Social proof points */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-3 mb-2">
                <div className="flex items-center text-sm text-gray-600 gap-1.5">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>40% fewer no-shows</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 gap-1.5">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>10+ hours saved weekly</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 gap-1.5">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Setup in under 48 hours</span>
                </div>
              </div>
              {/* <p className="text-sm text-gray-500 mt-2">
                Trusted by 50+ clinics across 10+ countries
              </p> */}
            </div>
          </div>
          <div className={`md:w-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform hover:scale-[1.02] transition-transform duration-500 relative">
              <img 
                src={heroImage} 
                alt="Smile OS dental clinic management software dashboard showing appointment scheduling, patient management, and billing interface for dental practices" 
                className="w-full h-auto" 
                loading="eager" 
                fetchPriority="high"
                width="600"
                height="400"
              />
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md text-sm font-medium text-blue-700 border border-blue-100">
                Easy 120 days trial*
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
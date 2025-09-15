import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Eye } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { LazyImage } from './LazyImage';
import heroImage from '../assets/hero-image.webp';
export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-blue-50 to-blue-100/70 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Enhanced value proposition */}
            {/* <div className="mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                #1 Rated Clinic Software
              </span>
            </div> */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              Reduce no-shows by <span className="text-blue-600">40%</span> and
              save <span className="text-blue-600">10+ hours</span> weekly with
              <span className="block text-blue-600">Smile OS Dental Software</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Smile OS combines appointments, billing, and patient messaging in
              one intuitive platform built specifically for dental and medical
              practices. The leading dental clinic management software in India.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-blue-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Transform Your Dental Practice Today</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                Smile OS is the comprehensive dental clinic management software designed specifically for Indian dental practices. 
                Our all-in-one solution streamlines your entire practice workflow, from patient registration to billing and follow-up care.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Join over 500+ dental clinics across India who have already transformed their practice management with Smile OS. 
                Experience the power of automated appointment scheduling, integrated billing systems, and seamless patient communication.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 text-center hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group text-sm sm:text-base">
                <span>Book Your Free Demo</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
              </a>
              <a href="#modules" className="flex items-center justify-center gap-2 text-blue-700 px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-blue-600 hover:bg-blue-50 transition-all duration-300 group text-sm sm:text-base">
                <Eye size={16} className="group-hover:scale-110 transition-transform sm:w-5 sm:h-5" />
                View Features
              </a>
            </div>
            {/* Social proof points */}
            <div className="mt-6 sm:mt-8">
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-2">
                <div className="flex items-center text-xs sm:text-sm text-gray-600 gap-1.5">
                  <CheckCircle size={14} className="text-green-500 sm:w-4 sm:h-4" />
                  <span>40% fewer no-shows</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600 gap-1.5">
                  <CheckCircle size={14} className="text-green-500 sm:w-4 sm:h-4" />
                  <span>10+ hours saved weekly</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600 gap-1.5">
                  <CheckCircle size={14} className="text-green-500 sm:w-4 sm:h-4" />
                  <span>Setup in under 48 hours</span>
                </div>
              </div>
              {/* <p className="text-sm text-gray-500 mt-2">
                Trusted by 50+ clinics across 10+ countries
              </p> */}
            </div>
          </div>
          <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform hover:scale-[1.02] transition-transform duration-500 relative max-w-md mx-auto lg:max-w-none">
              <LazyImage
                src={heroImage}
                alt="Smile OS dental clinic management software dashboard showing appointment scheduling, patient management, and billing interface for dental practices"
                className="w-full h-auto"
                objectFit="none"
              />
              {/* Floating badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md text-xs sm:text-sm font-medium text-blue-700 border border-blue-100">
                Easy 120 days trial*
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
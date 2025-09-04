import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { XCircle, CheckCircle } from 'lucide-react';
export const ProblemSolution: React.FC = () => {
  const problems = [
    'Average clinic loses ₹12,500 per no-show, with 25-40% cancellation rates',
    'Staff spends 3-4 hours daily on phone calls, manual scheduling, and follow-ups',
    'Paper-based systems cause 15% billing errors and 30-day payment delays',
    'Patient data spread across 5+ different systems increases security vulnerabilities',
    'No real-time insights into clinic performance and revenue trends'
  ];
  const solutions = [
    'Smart WhatsApp automation reduces no-shows by 40% and saves ₹10,00,000+ annually',
    'One-click scheduling and automated reminders free up 15+ hours weekly for patient care',
    'Integrated billing with auto-invoicing reduces errors by 90% and speeds payments by 60%',
    'Single, secure platform with encrypted data and access controls provided according to your needs',
    'Real-time dashboards show daily performance, revenue trends, and growth opportunities'
  ];
  return <div className="container mx-auto px-4 py-16">
      <ScrollReveal animation="slide-up">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            THE CLINIC CHALLENGE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            The hidden costs of manual clinic management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional clinic management wastes time, loses revenue, and creates security risks. 
            See how modern clinics are transforming their operations with Smile OS.
          </p>
        </div>
      </ScrollReveal>
      
      {/* Key Statistics Section */}
      <ScrollReveal animation="fade-in" delay={300}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">₹12,500</div>
            <div className="text-sm text-gray-600">Average loss per no-show</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">15+ hrs</div>
            <div className="text-sm text-gray-600">Weekly time saved</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">40%</div>
            <div className="text-sm text-gray-600">Reduction in no-shows</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">90%</div>
            <div className="text-sm text-gray-600">Fewer billing errors</div>
          </div>
        </div>
      </ScrollReveal>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <ScrollReveal animation="slide-right" delay={200}>
          <div className="bg-red-50 p-6 md:p-8 rounded-xl border border-red-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-100 rounded-full translate-y-12 -translate-x-12 opacity-30"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-red-800 flex items-center gap-2">
                <XCircle size={24} className="text-red-500" />
                <span>Without Smile OS</span>
              </h3>
              <ul className="space-y-4">
                {problems.map((problem, index) => <li key={index} className="flex items-start gap-3">
                    <XCircle size={20} className="text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
                  </li>)}
              </ul>
              
              {/* Visual indicator */}
              <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-200">
                <div className="text-sm text-red-700 font-medium">❌ Manual Process</div>
                <div className="text-xs text-red-600 mt-1">Time-consuming and error-prone</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="slide-right" delay={400}>
          <div className="bg-green-50 p-6 md:p-8 rounded-xl border border-green-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full translate-y-12 -translate-x-12 opacity-30"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-2">
                <CheckCircle size={24} className="text-green-500" />
                <span>With Smile OS</span>
              </h3>
              <ul className="space-y-4">
                {solutions.map((solution, index) => <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </li>)}
              </ul>
              
              {/* Visual indicator */}
              <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-200">
                <div className="text-sm text-green-700 font-medium">✅ Automated Solution</div>
                <div className="text-xs text-green-600 mt-1">Efficient and error-free</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>;
};
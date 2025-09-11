import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, Lock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { useFormTracking, useDemoTracking } from '../hooks/useAnalytics';
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    clinicName: '',
    name: '',
    email: '',
    phone: ''
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    error: boolean;
    message: string;
    loading: boolean;
  }>({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });

  // Analytics tracking hooks
  const trackForm = useFormTracking('contact_form', 'demo_request');
  const trackDemo = useDemoTracking('contact_form');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill out all required fields.',
        loading: false
      });
      return;
    }

    // Set loading state
    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      loading: true
    });

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        clinic_name: formData.clinicName || 'Not provided',
        phone: formData.phone || 'Not provided',
        to_email: EMAILJS_CONFIG.BUSINESS_EMAIL,
        message: `New demo request from ${formData.name} at ${formData.clinicName || 'Unknown clinic'}. Contact: ${formData.email}, Phone: ${formData.phone || 'Not provided'}`
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.TEMPLATE_ID, 
        templateParams, 
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Track successful form submission
      trackForm();
      trackDemo();

      // Show success message
      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you! We'll be in touch soon.",
        loading: false
      });

      // Reset form after successful submission
      setFormData({
        clinicName: '',
        name: '',
        email: '',
        phone: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
        loading: false
      });
    }
  };
  return <div id="contact-form" className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <ScrollReveal animation="slide-up">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              GET STARTED TODAY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Ready to transform your clinic?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schedule a personalized demo and see how Smile OS can help your
              practice save time and increase revenue.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal animation="zoom-in" delay={300}>
          <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <h3 className="text-2xl font-bold mb-6">Why book a demo?</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span>
                      See how Smile OS works with your specific workflow
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span>
                      Get personalized onboarding plan for your clinic
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span>Ask questions specific to your practice needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span>No obligation, zero pressure conversation</span>
                  </li>
                </ul>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="font-medium mb-2">Contact Information</p>
                  <p className="text-sm opacity-90 mb-1">
                    Email: sales@thesmileos.com
                  </p>
                  <p className="text-sm opacity-90">Phone: +91 81499 05241</p>
                </div>
              </div>
              <div className="p-8">
                {formStatus.submitted && !formStatus.error ? <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-zoom-in">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-blue-900">
                      Demo Request Received!
                    </h3>
                    <p className="text-gray-600">
                      We'll contact you within 24 hours to schedule your
                      personalized demo at a time that works for you.
                    </p>
                    <button onClick={() => setFormStatus({
                  submitted: false,
                  error: false,
                  message: '',
                  loading: false
                })} className="mt-6 text-blue-600 font-medium hover:text-blue-700">
                      Request another demo
                    </button>
                  </div> : <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-bold mb-6 text-blue-900">
                      Book your free demo
                    </h3>
                    <div className="grid grid-cols-1 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required />
                      </div>
                      <div>
                        <label htmlFor="clinicName" className="block text-sm font-medium text-gray-700 mb-1">
                          Clinic Name
                        </label>
                        <input type="text" id="clinicName" name="clinicName" value={formData.clinicName} onChange={handleChange} className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone/WhatsApp
                        </label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" />
                      </div>
                      {formStatus.error && <div className="text-red-500 animate-fade-in">
                          {formStatus.message}
                        </div>}
                      <div>
                        <button 
                          type="submit" 
                          disabled={formStatus.loading}
                          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {formStatus.loading ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <span>Book Your Free Demo</span>
                              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                        <div className="flex items-center justify-center mt-3 gap-1.5 text-xs text-gray-500">
                          <Lock size={12} />
                          <span>
                            Your information is secure and will never be shared
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>;
};
// Helper icon component
const CheckIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>;
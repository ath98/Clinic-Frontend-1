import React, { useState } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
export const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    // In a real implementation, you would send this to your backend or email service
    console.log('Lead magnet subscription:', email);
    setIsSubmitted(true);
    setError('');
  };
  return <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8 shadow-md">
      <div className="flex items-start gap-4">
        <div className="hidden md:block p-3 bg-blue-100 rounded-full">
          <FileText size={28} className="text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-900">
            Free Resource: Clinic Efficiency Guide
          </h3>
          <p className="text-gray-700 mb-4">
            Learn how top-performing clinics save 10+ hours weekly and reduce
            no-shows by 40% with our step-by-step guide.
          </p>
          {isSubmitted ? <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-medium">
                Thank you! Check your email for your free guide.
              </p>
            </div> : <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                <p className="text-xs text-gray-500 mt-1">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap">
                <span>Get Free Guide</span>
                <ArrowRight size={16} />
              </button>
            </form>}
        </div>
      </div>
    </div>;
};
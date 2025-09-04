import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
interface StickyCallToActionProps {
  threshold?: number; // Scroll threshold in pixels before showing
}
export const StickyCallToAction: React.FC<StickyCallToActionProps> = ({
  threshold = 600
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, isDismissed]);
  if (!isVisible) return null;
  return <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-blue-100 p-3 z-40 animate-slide-up md:hidden">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <p className="font-medium text-blue-900">
            Ready to streamline your clinic?
          </p>
          <p className="text-sm text-gray-600">Get started in minutes</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 text-sm whitespace-nowrap">
            Book Demo
          </a>
          <button onClick={() => setIsDismissed(true)} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Dismiss">
            <X size={20} />
          </button>
        </div>
      </div>
    </div>;
};
export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  if (!isVisible) return null;
  return <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center">
        Book a Demo
      </a>
    </div>;
};
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { useButtonTracking, useMobileMenuTracking } from '../hooks/useAnalytics';
interface NavigationProps {
  showPrivacy: () => void;
  showTerms: () => void;
}
export const Navigation: React.FC<NavigationProps> = ({
  showPrivacy,
  showTerms
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Analytics tracking hooks
  const trackDemoButton = useButtonTracking('book_demo', 'navigation');
  const trackMobileMenu = useMobileMenuTracking();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between" role="navigation" aria-label="Main navigation">
          <a href="#" className="flex items-center gap-2" aria-label="Smile OS - Dental Clinic Management Software">
            <img src={logo} alt="Smile OS dental clinic management software logo" className="h-8 w-auto" width="32" height="32" />
            <span className="text-xl font-bold text-blue-600">Smile OS</span>
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <a href="#modules" className="text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                Pricing
              </a>
              <a href="#security" className="text-gray-700 hover:text-blue-600 transition-colors">
                Security
              </a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              onClick={trackDemoButton}
            >
              Book a Demo
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => {
              setIsOpen(!isOpen);
              if (isOpen) {
                trackMobileMenu.handleMenuClose();
              } else {
                trackMobileMenu.handleMenuOpen();
              }
            }}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {/* Mobile Menu */}
        {isOpen && <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-slide-up" role="menu">
            <div className="flex flex-col space-y-3">
              <a href="#modules" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                Pricing
              </a>
              <a href="#security" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                Security
              </a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                FAQ
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors text-center" onClick={() => setIsOpen(false)}>
                Book a Demo
              </a>
            </div>
          </div>}
      </div>
    </header>;
};
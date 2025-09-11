import { useEffect, useCallback } from 'react';
import { 
  trackEvent, 
  trackPageView, 
  trackConversion, 
  trackFormSubmission, 
  trackButtonClick,
  trackSectionView,
  trackPricingView,
  trackDemoRequest,
  trackContactForm,
  trackFAQInteraction,
  trackMobileMenu,
  trackSocialClick,
  trackExternalLink,
  trackNewsletterSignup,
  trackDownload,
  trackError,
  trackEngagementScore,
  initializeAnalytics
} from '../config/analytics';

// Custom hook for analytics tracking
export const useAnalytics = () => {
  // Initialize analytics on mount
  useEffect(() => {
    initializeAnalytics();
  }, []);

  // Track page views
  const trackPage = useCallback((pagePath: string, pageTitle?: string) => {
    trackPageView(pagePath, pageTitle);
  }, []);

  // Track events
  const trackEventAction = useCallback((eventName: string, parameters?: Record<string, any>) => {
    trackEvent(eventName, parameters);
  }, []);

  // Track conversions
  const trackConversionAction = useCallback((conversionType: string, value?: number) => {
    trackConversion(conversionType, value);
  }, []);

  // Track form submissions
  const trackForm = useCallback((formName: string, formType: string) => {
    trackFormSubmission(formName, formType);
  }, []);

  // Track button clicks
  const trackButton = useCallback((buttonName: string, buttonLocation: string) => {
    trackButtonClick(buttonName, buttonLocation);
  }, []);

  // Track section views
  const trackSection = useCallback((sectionName: string) => {
    trackSectionView(sectionName);
  }, []);

  // Track pricing views
  const trackPricing = useCallback((planName: string) => {
    trackPricingView(planName);
  }, []);

  // Track demo requests
  const trackDemo = useCallback((source: string) => {
    trackDemoRequest(source);
  }, []);

  // Track contact forms
  const trackContact = useCallback((formType: string) => {
    trackContactForm(formType);
  }, []);

  // Track FAQ interactions
  const trackFAQ = useCallback((question: string, action: 'open' | 'close') => {
    trackFAQInteraction(question, action);
  }, []);

  // Track mobile menu
  const trackMobile = useCallback((action: 'open' | 'close') => {
    trackMobileMenu(action);
  }, []);

  // Track social clicks
  const trackSocial = useCallback((platform: string) => {
    trackSocialClick(platform);
  }, []);

  // Track external links
  const trackExternal = useCallback((url: string, linkText: string) => {
    trackExternalLink(url, linkText);
  }, []);

  // Track newsletter signups
  const trackNewsletter = useCallback((source: string) => {
    trackNewsletterSignup(source);
  }, []);

  // Track downloads
  const trackFileDownload = useCallback((fileName: string, fileType: string) => {
    trackDownload(fileName, fileType);
  }, []);

  // Track errors
  const trackErrorAction = useCallback((errorType: string, errorMessage: string) => {
    trackError(errorType, errorMessage);
  }, []);

  // Track engagement score
  const trackEngagement = useCallback((score: number) => {
    trackEngagementScore(score);
  }, []);

  return {
    trackPage,
    trackEvent: trackEventAction,
    trackConversion: trackConversionAction,
    trackForm,
    trackButton,
    trackSection,
    trackPricing,
    trackDemo,
    trackContact,
    trackFAQ,
    trackMobile,
    trackSocial,
    trackExternal,
    trackNewsletter,
    trackDownload: trackFileDownload,
    trackError: trackErrorAction,
    trackEngagement
  };
};

// Hook for tracking section visibility
export const useSectionTracking = (sectionName: string) => {
  const { trackSection } = useAnalytics();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSection(sectionName);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(sectionName);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionName, trackSection]);
};

// Hook for tracking button clicks
export const useButtonTracking = (buttonName: string, buttonLocation: string) => {
  const { trackButton } = useAnalytics();

  const handleClick = useCallback(() => {
    trackButton(buttonName, buttonLocation);
  }, [buttonName, buttonLocation, trackButton]);

  return handleClick;
};

// Hook for tracking form submissions
export const useFormTracking = (formName: string, formType: string) => {
  const { trackForm } = useAnalytics();

  const handleSubmit = useCallback(() => {
    trackForm(formName, formType);
  }, [formName, formType, trackForm]);

  return handleSubmit;
};

// Hook for tracking demo requests
export const useDemoTracking = (source: string) => {
  const { trackDemo } = useAnalytics();

  const handleDemoRequest = useCallback(() => {
    trackDemo(source);
  }, [source, trackDemo]);

  return handleDemoRequest;
};

// Hook for tracking pricing plan views
export const usePricingTracking = (planName: string) => {
  const { trackPricing } = useAnalytics();

  const handlePricingView = useCallback(() => {
    trackPricing(planName);
  }, [planName, trackPricing]);

  return handlePricingView;
};

// Hook for tracking FAQ interactions
export const useFAQTracking = (question: string) => {
  const { trackFAQ } = useAnalytics();

  const handleFAQOpen = useCallback(() => {
    trackFAQ(question, 'open');
  }, [question, trackFAQ]);

  const handleFAQClose = useCallback(() => {
    trackFAQ(question, 'close');
  }, [question, trackFAQ]);

  return { handleFAQOpen, handleFAQClose };
};

// Hook for tracking mobile menu
export const useMobileMenuTracking = () => {
  const { trackMobile } = useAnalytics();

  const handleMenuOpen = useCallback(() => {
    trackMobile('open');
  }, [trackMobile]);

  const handleMenuClose = useCallback(() => {
    trackMobile('close');
  }, [trackMobile]);

  return { handleMenuOpen, handleMenuClose };
};

// Hook for tracking social media clicks
export const useSocialTracking = (platform: string) => {
  const { trackSocial } = useAnalytics();

  const handleSocialClick = useCallback(() => {
    trackSocial(platform);
  }, [platform, trackSocial]);

  return handleSocialClick;
};

// Hook for tracking external links
export const useExternalLinkTracking = (url: string, linkText: string) => {
  const { trackExternal } = useAnalytics();

  const handleExternalClick = useCallback(() => {
    trackExternal(url, linkText);
  }, [url, linkText, trackExternal]);

  return handleExternalClick;
};

// Hook for tracking newsletter signups
export const useNewsletterTracking = (source: string) => {
  const { trackNewsletter } = useAnalytics();

  const handleNewsletterSignup = useCallback(() => {
    trackNewsletter(source);
  }, [source, trackNewsletter]);

  return handleNewsletterSignup;
};

// Hook for tracking file downloads
export const useDownloadTracking = (fileName: string, fileType: string) => {
  const { trackDownload } = useAnalytics();

  const handleDownload = useCallback(() => {
    trackDownload(fileName, fileType);
  }, [fileName, fileType, trackDownload]);

  return handleDownload;
};

// Hook for tracking errors
export const useErrorTracking = () => {
  const { trackError } = useAnalytics();

  const handleError = useCallback((errorType: string, errorMessage: string) => {
    trackError(errorType, errorMessage);
  }, [trackError]);

  return handleError;
};

// Hook for tracking engagement score
export const useEngagementTracking = () => {
  const { trackEngagement } = useAnalytics();

  const handleEngagement = useCallback((score: number) => {
    trackEngagement(score);
  }, [trackEngagement]);

  return handleEngagement;
};

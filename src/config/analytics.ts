// Google Analytics 4 Configuration
// Replace GA_MEASUREMENT_ID with your actual Google Analytics 4 Measurement ID

export const GA_MEASUREMENT_ID = 'G-DV0TPBYB5F'; // Replace with your actual GA4 ID

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters?.label || '',
      value: parameters?.value || 0,
      ...parameters
    });
  }
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle || document.title
    });
  }
};

// Track conversions
export const trackConversion = (conversionType: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: GA_MEASUREMENT_ID,
      event_category: 'conversion',
      event_label: conversionType,
      value: value || 0
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, formType: string) => {
  trackEvent('form_submit', {
    event_category: 'engagement',
    event_label: formName,
    form_type: formType,
    custom_parameter_1: 'dental_software'
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  trackEvent('button_click', {
    event_category: 'engagement',
    event_label: buttonName,
    button_location: buttonLocation,
    custom_parameter_1: 'dental_software'
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll', {
    event_category: 'engagement',
    event_label: 'scroll_depth',
    value: depth,
    custom_parameter_1: 'dental_software'
  });
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds: number) => {
  trackEvent('timing_complete', {
    event_category: 'engagement',
    event_label: 'time_on_page',
    value: timeInSeconds,
    custom_parameter_1: 'dental_software'
  });
};

// Track Core Web Vitals
export const trackWebVitals = (metric: string, value: number) => {
  trackEvent('web_vitals', {
    event_category: 'performance',
    event_label: metric,
    value: Math.round(value),
    custom_parameter_1: 'dental_software'
  });
};

// Track section views
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: sectionName,
    custom_parameter_1: 'dental_software'
  });
};

// Track pricing plan views
export const trackPricingView = (planName: string) => {
  trackEvent('pricing_view', {
    event_category: 'engagement',
    event_label: planName,
    custom_parameter_1: 'dental_software'
  });
};

// Track demo requests
export const trackDemoRequest = (source: string) => {
  trackEvent('demo_request', {
    event_category: 'conversion',
    event_label: source,
    custom_parameter_1: 'dental_software'
  });
  
  // Also track as conversion
  trackConversion('demo_request', 1);
};

// Track contact form submissions
export const trackContactForm = (formType: string) => {
  trackEvent('contact_form', {
    event_category: 'conversion',
    event_label: formType,
    custom_parameter_1: 'dental_software'
  });
  
  // Also track as conversion
  trackConversion('contact_form', 1);
};

// Track FAQ interactions
export const trackFAQInteraction = (question: string, action: 'open' | 'close') => {
  trackEvent('faq_interaction', {
    event_category: 'engagement',
    event_label: question,
    faq_action: action,
    custom_parameter_1: 'dental_software'
  });
};

// Track mobile menu interactions
export const trackMobileMenu = (action: 'open' | 'close') => {
  trackEvent('mobile_menu', {
    event_category: 'engagement',
    event_label: action,
    custom_parameter_1: 'dental_software'
  });
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', {
    event_category: 'engagement',
    event_label: platform,
    custom_parameter_1: 'dental_software'
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link', {
    event_category: 'engagement',
    event_label: linkText,
    link_url: url,
    custom_parameter_1: 'dental_software'
  });
};

// Track video interactions (if you add videos later)
export const trackVideoInteraction = (videoTitle: string, action: 'play' | 'pause' | 'complete') => {
  trackEvent('video_interaction', {
    event_category: 'engagement',
    event_label: videoTitle,
    video_action: action,
    custom_parameter_1: 'dental_software'
  });
};

// Track search queries (if you add search functionality)
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', {
    event_category: 'engagement',
    event_label: searchTerm,
    value: resultsCount,
    custom_parameter_1: 'dental_software'
  });
};

// Track newsletter signups
export const trackNewsletterSignup = (source: string) => {
  trackEvent('newsletter_signup', {
    event_category: 'conversion',
    event_label: source,
    custom_parameter_1: 'dental_software'
  });
  
  // Also track as conversion
  trackConversion('newsletter_signup', 1);
};

// Track file downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    event_category: 'engagement',
    event_label: fileName,
    file_type: fileType,
    custom_parameter_1: 'dental_software'
  });
};

// Track error events
export const trackError = (errorType: string, errorMessage: string) => {
  trackEvent('error', {
    event_category: 'error',
    event_label: errorType,
    error_message: errorMessage,
    custom_parameter_1: 'dental_software'
  });
};

// Track user engagement score
export const trackEngagementScore = (score: number) => {
  trackEvent('engagement_score', {
    event_category: 'engagement',
    event_label: 'user_engagement',
    value: score,
    custom_parameter_1: 'dental_software'
  });
};

// Track device and browser information
export const trackDeviceInfo = () => {
  if (typeof window !== 'undefined') {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android/i.test(userAgent) && !/Mobile/i.test(userAgent);
    
    trackEvent('device_info', {
      event_category: 'technical',
      event_label: 'device_type',
      device_type: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
      custom_parameter_1: 'dental_software'
    });
  }
};

// Initialize analytics tracking
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined') {
    // Track device info on page load
    trackDeviceInfo();
    
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      trackTimeOnPage(Math.round(loadTime / 1000));
    });
    
    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        if (scrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          trackScrollDepth(scrollDepth);
        }
      }
    });
  }
};

// TypeScript declarations for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

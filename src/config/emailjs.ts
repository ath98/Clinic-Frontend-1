// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID (found in EmailJS dashboard)
  SERVICE_ID: 'service_qikss0d',
  
  // Your EmailJS Template ID (found in EmailJS dashboard)
  TEMPLATE_ID: 'template_0mupibx',
  
  // Your EmailJS Public Key (found in EmailJS dashboard)
  PUBLIC_KEY: 'CjW-N7-2xAwtm3hdq',
  
  // Your business email where form submissions will be sent
  BUSINESS_EMAIL: 'admin@thesmileos.com'
};

// EmailJS Template Variables
// These should match the variables in your EmailJS template
export const EMAILJS_TEMPLATE_PARAMS = {
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  clinic_name: '{{clinic_name}}',
  phone: '{{phone}}',
  to_email: '{{to_email}}',
  message: '{{message}}'
};

import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
// Add meta tags for SEO
const metaTags = [{
  name: 'description',
  content: 'Appointments, billing, inventory, and WhatsApp/email reminders in one simple platform. Built for multi-clinic workflows.'
}, {
  name: 'keywords',
  content: 'clinic management software, dental clinic software, medical practice management, appointment scheduling, WhatsApp reminders, medical billing software'
}, {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1'
}, {
  property: 'og:title',
  content: 'ClinicOS – All-in-one Clinic Management Software'
}, {
  property: 'og:description',
  content: 'Reduce no-shows by 40% and save 10+ hours weekly with our all-in-one clinic management platform.'
}, {
  property: 'og:type',
  content: 'website'
}, {
  property: 'og:url',
  content: 'https://www.clinicos.com'
}, {
  property: 'og:image',
  content: 'https://www.clinicos.com/og-image.jpg'
}];
// Add all meta tags
metaTags.forEach(meta => {
  const metaTag = document.createElement('meta');
  Object.keys(meta).forEach(key => {
    metaTag.setAttribute(key, meta[key]);
  });
  document.head.appendChild(metaTag);
});
// Add canonical link
const canonicalLink = document.createElement('link');
canonicalLink.setAttribute('rel', 'canonical');
canonicalLink.setAttribute('href', 'https://www.clinicos.com');
document.head.appendChild(canonicalLink);
// Update title for SEO
document.title = 'ClinicOS – #1 Clinic Management Software for Dental & Medical Practices';
// Add preconnect for performance
const preconnect = document.createElement('link');
preconnect.setAttribute('rel', 'preconnect');
preconnect.setAttribute('href', 'https://images.unsplash.com');
document.head.appendChild(preconnect);
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
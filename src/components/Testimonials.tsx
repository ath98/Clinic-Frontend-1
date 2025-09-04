// import React from 'react';
// import { Star } from 'lucide-react';
// import { ScrollReveal } from './ScrollReveal';
// export const Testimonials: React.FC = () => {
//   const testimonials = [{
//     quote: 'ClinicOS has transformed how we manage our dental practice. The WhatsApp reminders have reduced our no-shows by 35%, and the billing system is a game-changer.',
//     author: 'Dr. Sarah Johnson',
//     role: 'Dental Surgeon',
//     clinic: 'Bright Smile Dental Clinic'
//   }, {
//     quote: 'The multi-clinic feature allows me to manage all three of my locations from one dashboard. The staff onboarding was quick, and the support team is always responsive.',
//     author: 'Dr. Michael Chen',
//     role: 'Clinic Director',
//     clinic: 'HealthPoint Medical Group'
//   }, {
//     quote: 'As a small clinic, we needed something affordable yet comprehensive. ClinicOS gives us enterprise-level tools at a price we can afford. Our patients love the reminders too!',
//     author: 'Dr. Lisa Rodriguez',
//     role: 'General Practitioner',
//     clinic: 'Family Care Clinic'
//   }];
//   return <div className="container mx-auto px-4">
//       <div className="text-center mb-12">
//         <ScrollReveal animation="slide-up">
//           <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Join hundreds of healthcare professionals who have transformed their
//             clinic operations with ClinicOS.
//           </p>
//         </ScrollReveal>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {testimonials.map((testimonial, index) => <ScrollReveal key={index} animation="zoom-in" delay={index * 150}>
//             <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
//               <div className="flex mb-4">
//                 {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />)}
//               </div>
//               <blockquote className="text-gray-700 mb-6 italic">
//                 "{testimonial.quote}"
//               </blockquote>
//               <div className="border-t border-gray-100 pt-4">
//                 <p className="font-semibold text-blue-900">
//                   {testimonial.author}
//                 </p>
//                 <p className="text-gray-600">{testimonial.role}</p>
//                 <p className="text-gray-500 text-sm">{testimonial.clinic}</p>
//               </div>
//             </div>
//           </ScrollReveal>)}
//       </div>
//     </div>;
// };
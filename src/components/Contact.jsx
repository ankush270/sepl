import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactDetails = [
    {
      id: 1,
      title: 'Registered Office',
      value: '#5-21/1, Sapthagiri, Old Post Office Road, Surathkal, Mangaluru, Dakshina Kannada - 575014, Karnataka, India',
      icon: MapPin,
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      id: 2,
      title: 'Phone Number',
      value: '+91 95381 07758',
      link: 'tel:+919538107758',
      icon: Phone,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      id: 3,
      title: 'Email Address',
      value: 'akshath_surathkal@yahoo.com',
      link: 'mailto:akshath_surathkal@yahoo.com',
      icon: Mail,
      color: 'bg-cyan-50 text-cyan-600',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Light background decorative bubbles */}
      <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-indigo-100/30 to-purple-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-[12px] font-extrabold tracking-widest text-accent uppercase">
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Get In Touch With <span className="font-serif italic text-accent font-medium">SEPL.CO</span>
          </h2>
          <p className="text-base text-slate-500 font-semibold leading-relaxed">
            We'd love to hear from you. Reach out to explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Contact Methods Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 text-left">
            <div className="space-y-6">
              {contactDetails.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className={`p-3.5 rounded-2xl ${item.color} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                    <item.icon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[14.5px] text-slate-400 uppercase tracking-wider mb-1.5">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-base sm:text-lg font-bold text-primary hover:text-accent transition-colors block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base sm:text-lg font-bold text-primary leading-snug">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick response note */}
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 flex gap-4 items-center">
              <Clock className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-sm font-semibold text-primary/80 leading-relaxed">
                Our support team is available Mon-Sat, 9:00 AM - 6:00 PM IST. We strive to respond to all inquiries within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Iframe */}
          <div className="lg:col-span-7 relative h-[450px] lg:h-auto rounded-[32px] overflow-hidden border border-slate-200/60 shadow-xl bg-slate-100 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.893116812853!2d74.7797746148221!3d13.003923390834479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a09adfb5317%3A0xe543dfa2f6fb2a06!2sOld%20Post%20Office%20Rd%2C%20Surathkal%2C%20Mangaluru%2C%20Karnataka%20575014!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              title="SEPL.CO Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

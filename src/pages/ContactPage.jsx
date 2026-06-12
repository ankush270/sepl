import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General Support', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Support', message: '' });
    }, 4000);
  };

  const contactChannels = [
    { title: 'Registered Office HQ', desc: '#5-21/1, Sapthagiri, Old Post Office Road, Surathkal, Mangaluru, Dakshina Kannada - 575014, Karnataka, India', icon: MapPin, color: 'text-indigo-600 bg-indigo-50' },
    { title: 'Phone Call Support', desc: '+91 95381 07758', link: 'tel:+919538107758', icon: Phone, color: 'text-emerald-600 bg-emerald-50' },
    { title: 'Official Email Channels', desc: 'akshath_surathkal@yahoo.com', link: 'mailto:akshath_surathkal@yahoo.com', icon: Mail, color: 'text-cyan-600 bg-cyan-50' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 text-left animate-in fade-in duration-300">
      
      {/* Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-primary via-primary-light to-primary p-8 sm:p-12 lg:p-16 shadow-xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              We look forward to collaborating with you. Send us your queries, feedback, or scheduling requests.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
        
        {/* Contact Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="space-y-6">
            {contactChannels.map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <div className={`p-3.5 rounded-2xl ${item.color} flex-shrink-0`}>
                  <item.icon className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-bold text-[14.5px] text-slate-400 uppercase tracking-wider mb-1.5">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-base sm:text-lg text-primary hover:text-accent transition-colors block">{item.desc}</a>
                  ) : (
                    <p className="text-base sm:text-lg text-primary leading-snug">{item.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 flex gap-4 items-center">
            <Clock className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-sm font-semibold text-primary/80 leading-relaxed">
              Standard operating hours are Mon-Sat, 9:00 AM - 6:00 PM IST. We strive to reply within 24 hours.
            </p>
          </div>
        </div>


      </div>

      {/* Interactive Map */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl font-extrabold text-primary mb-4">Find Us In Surathkal</h2>
        <p className="text-slate-500 font-semibold mb-8">Locate our corporate headquarters on the interactive map.</p>
        <div className="w-full h-[450px] rounded-[32px] overflow-hidden border border-slate-200 shadow-lg relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.893116812853!2d74.7797746148221!3d13.003923390834479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a09adfb5317%3A0xe543dfa2f6fb2a06!2sOld%20Post%20Office%20Rd%2C%20Surathkal%2C%20Mangaluru%2C%20Karnataka%20575014!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            title="SEPL Corporate Headquarters Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
}

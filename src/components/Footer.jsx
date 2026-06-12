import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Send } from 'lucide-react';

// Custom inline SVG components for social brand icons to ensure robust builds independent of package variations
const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail('');
    }
  };

  const socialLinks = [
    { Icon: FacebookIcon, href: '#', label: 'Facebook' },
    { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { Icon: InstagramIcon, href: '#', label: 'Instagram' },
    { Icon: TwitterIcon, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-primary-dark text-slate-400">
      
      {/* 1. Let's Build Something Together: Premium Gradient CTA Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-12 pb-8 relative z-10">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-primary via-primary-light to-primary p-8 sm:p-12 lg:p-16 shadow-2xl border border-primary-light/10 text-left">
          
          {/* Decorative mesh background details */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Let's Build Something Together
              </h2>
              <p className="text-base text-slate-300 font-semibold max-w-2xl leading-relaxed">
                Ready to elevate your operations with SEPL.CO? Our team of industry experts is ready to tailor our multi-vertical ecosystem to your unique professional and community needs.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row gap-4 justify-start lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-primary bg-white hover:bg-slate-50 hover:shadow-lg hover:shadow-white/10 active:translate-y-0.5 transition-all duration-200"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Grid Directory */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 border-t border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 text-left">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-1.5 inline-block">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-white">
                SEPL<span className="text-accent">.CO</span>
              </span>
            </Link>
            <p className="text-sm font-semibold text-slate-400 leading-relaxed max-w-sm">
              Building a sustainable digital future through premium service ecosystems, offering trusted services in healthcare, education, tech, and lifestyle.
            </p>

            {/* Quick contact methods */}
            <div className="space-y-3 font-semibold text-sm">
              <a href="tel:+919538107758" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <div className="p-2 bg-slate-800/60 rounded-lg text-slate-300">
                  <Phone className="w-4 h-4" />
                </div>
                +91 95381 07758
              </a>
              <a href="mailto:akshath_surathkal@yahoo.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <div className="p-2 bg-slate-800/60 rounded-lg text-slate-300">
                  <Mail className="w-4 h-4" />
                </div>
                akshath_surathkal@yahoo.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="p-3 bg-slate-800/40 text-slate-400 rounded-xl hover:text-white hover:bg-slate-800 transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services Directory */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-extrabold text-[13.5px] text-white uppercase tracking-widest border-l-2 border-accent pl-2.5">
              Services
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li><Link to="/services#healthcare" className="hover:text-white transition-colors">Healthcare & Diagnostics</Link></li>
              <li><Link to="/services#education" className="hover:text-white transition-colors">Progressive Education</Link></li>
              <li><Link to="/services#business" className="hover:text-white transition-colors">Business & Logistics</Link></li>
              <li><Link to="/services#lifestyle" className="hover:text-white transition-colors">Lifestyle & Hospitality</Link></li>
              <li><Link to="/services#realestate" className="hover:text-white transition-colors">Real Estate & Properties</Link></li>
            </ul>
          </div>
 
          {/* Column 3: Company Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-extrabold text-[13.5px] text-white uppercase tracking-widest border-l-2 border-accent pl-2.5">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about#founder" className="hover:text-white transition-colors">Our Founder</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>



        </div>
      </div>

      {/* 3. Bottom Legal Copyright Bar */}
      <div className="bg-slate-950/60 py-6 border-t border-slate-900">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div>
            © 2026 SEPL.CO - Sapthagiri Endeavours & Progressive Learning Corporation Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex gap-2 items-center text-slate-400">
            <span>Surathkal, Mangaluru - 575014</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

import React, { useState } from 'react';
import { Code, Gem, ShieldCheck, Briefcase, Star, ArrowRight, Laptop, Award, CheckCircle2 } from 'lucide-react';

export default function BusinessPage() {
  const [formData, setFormData] = useState({ name: '', company: '', query: 'Enterprise Software' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', query: 'Enterprise Software' });
    }, 4000);
  };

  const softwareServices = [
    { title: 'Enterprise Web Apps', desc: 'React, Next.js, and high-performance cloud platforms.' },
    { title: 'ERP & CRM Systems', desc: 'Custom enterprise resources and analytics.' },
    { title: 'Cloud Infrastructure', desc: 'Highly secure AWS, GCP, and Azure migrations.' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 text-left animate-in fade-in duration-300">
      
      {/* Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-slate-800 via-slate-900 to-primary p-8 sm:p-12 lg:p-16 shadow-xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/5 text-sm font-bold tracking-wider uppercase text-accent">
              Business & Retail Division
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif leading-tight">
              Enterprise & Retail
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-semibold leading-relaxed max-w-xl">
              Driving corporate value through state-of-the-art software technology consulting and providing luxury retail trust via premium jewellery showrooms.
            </p>
          </div>
        </div>
      </div>

      {/* Grid divisions */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        
        {/* Software Solutions */}
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-md border border-slate-100/80 flex flex-col justify-between items-start">
          <div className="space-y-6 w-full">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl inline-block">
              <Code className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">Software & Tech</h2>
            <p className="text-slate-500 font-semibold text-sm leading-relaxed">
              We specialize in custom web architectures, cloud engineering, automated database models, and high-performance applications designed to unlock operational scaling for enterprise businesses globally.
            </p>
            <div className="grid grid-cols-1 gap-4 pt-2">
              {softwareServices.map((service, i) => (
                <div key={i} className="flex gap-3 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <Laptop className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-primary text-sm">{service.title}</h4>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a href="#consultation" className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors w-full justify-center">
            Book Tech Audit
          </a>
        </div>

        {/* Jewellery Showrooms */}
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-md border border-slate-100/80 flex flex-col justify-between items-start">
          <div className="space-y-6 w-full">
            <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl inline-block">
              <Gem className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">Luxury Jewellery</h2>
            <p className="text-slate-500 font-semibold text-sm leading-relaxed">
              Re-discovering timeless elegance and heritage trust in gold, diamond, and silver ornament creations. Each piece is crafted by master artisans and undergoes comprehensive hallmarking audits for absolute purity.
            </p>
            <div className="space-y-3.5 pt-2 text-slate-600 font-bold text-sm">
              <div className="flex items-center gap-2.5"><Award className="w-5 h-5 text-amber-500" /> BIS 916 Hallmarked Certified Gold Ornaments</div>
              <div className="flex items-center gap-2.5"><Award className="w-5 h-5 text-amber-500" /> Internationally Certified Diamonds (IGI/GIA)</div>
              <div className="flex items-center gap-2.5"><Award className="w-5 h-5 text-amber-500" /> Custom bespoke bridal jewelry design studios</div>
              <div className="flex items-center gap-2.5"><Award className="w-5 h-5 text-amber-500" /> Dynamic gold exchange savings schemes</div>
            </div>
          </div>
          <a href="#consultation" className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded-full transition-colors w-full justify-center">
            View Showrooms Locations
          </a>
        </div>

      </div>

      {/* Consultation Request */}
      <div id="consultation" className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-white border border-slate-100 shadow-xl rounded-[32px] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-serif">
              Corporate Consultation
            </h2>
            <p className="text-slate-500 font-semibold leading-relaxed">
              Request a comprehensive technical software consultation or schedule a VIP private bridal jewellery studio viewing. Specify your needs, and our business officer will contact you.
            </p>
            <div className="space-y-3 font-semibold text-slate-600">
              <div className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-emerald-500" /> Strict Corporate Confidentiality NDAs</div>
              <div className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-emerald-500" /> Certified solution architecture diagnostics</div>
            </div>
          </div>

          <div className="relative">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center space-y-4 py-16 animate-in zoom-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-emerald-800">Request Confirmed!</h3>
                <p className="text-emerald-700 font-semibold text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you! We have logged your {formData.query} query for {formData.company || 'your business'}. Our business manager will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Richard Hendricks"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-slate-700 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Company Name (Optional)</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Pied Piper"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-slate-700 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Request Subject</label>
                  <select
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-slate-700 font-semibold"
                  >
                    <option>Enterprise Software Consultation</option>
                    <option>Mobile App Development Consultation</option>
                    <option>Private Bridal Jewellery Studio Appointment</option>
                    <option>Jewellery Savings Scheme Subscription</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary hover:bg-primary-light text-white text-base font-bold transition-all shadow-md shadow-primary/20 hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-5 h-5" />
                  Request Callback
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

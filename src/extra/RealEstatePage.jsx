import React, { useState } from 'react';
import { Building2, Home, MapPin, Key, ShieldCheck, Mail, CheckCircle2, ChevronRight } from 'lucide-react';

export default function RealEstatePage() {
  const [formData, setFormData] = useState({ name: '', phone: '', property: 'Sapthagiri Premium Apartments', budget: '₹50 Lakhs - ₹1 Crore' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', property: 'Sapthagiri Premium Apartments', budget: '₹50 Lakhs - ₹1 Crore' });
    }, 4000);
  };

  const properties = [
    {
      title: 'Sapthagiri Premium Residency',
      type: 'Residential Apartments',
      location: 'Surathkal, Mangaluru',
      specs: '2, 3 & 4 BHK Luxury Homes',
      status: 'Ready to Move In',
      price: 'Starting from ₹65 Lakhs',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'SEPL Business Hub',
      type: 'Commercial Office Spaces',
      location: 'Kottara Chowki, Mangaluru',
      specs: 'Fully Furnished Workspaces',
      status: 'Under Construction (Possession Dec 2026)',
      price: 'Starting from ₹1.2 Crore',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'EduSphere Green Meadows',
      type: 'Agricultural Lands & Plots',
      location: 'Bajpe, Mangaluru Rural',
      specs: 'Villas plots with water & roads',
      status: 'Booking Open',
      price: 'Starting from ₹18 Lakhs / Cents',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 text-left animate-in fade-in duration-300">
      
      {/* Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-600 to-indigo-800 p-8 sm:p-12 lg:p-16 shadow-xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-sm font-bold tracking-wider uppercase text-accent animate-pulse">
              Real Estate Division
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Premium Real Estate
            </h1>
            <p className="text-base sm:text-lg text-blue-100 font-semibold leading-relaxed max-w-xl">
              Pioneering trusted residential construction, state-of-the-art commercial workspace properties, and prime agricultural land plots in coastal Karnataka.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Properties Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-primary">Featured Properties</h2>
            <p className="text-slate-500 font-semibold mt-1">Discover certified spaces designed around your requirements.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">{prop.type}</span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <MapPin className="w-4 h-4 text-accent" />
                    {prop.location}
                  </div>
                  <h3 className="text-xl font-bold text-primary leading-tight">{prop.title}</h3>
                  <p className="text-[13.5px] font-semibold text-slate-500">{prop.specs}</p>
                  <div className="text-xs font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-md inline-block">
                    {prop.status}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-slate-50 flex justify-between items-center mt-4">
                <span className="font-extrabold text-indigo-600 text-lg">{prop.price}</span>
                <a
                  href="#inquiry"
                  onClick={() => setFormData({ ...formData, property: prop.title })}
                  className="p-2 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all"
                  aria-label="Select property"
                >
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Property Inquiry */}
      <div id="inquiry" className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-white border border-slate-100 shadow-xl rounded-[32px] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
              Property Inquiries
            </h2>
            <p className="text-slate-500 font-semibold leading-relaxed">
              Book a site visit, consult with property specialists, or view layout maps of prime agricultural plots. Let us know your preferred project, and our agent will connect.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Key className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-extrabold text-primary text-sm">Site Visits</h4>
                  <p className="text-xs font-semibold text-slate-400">Expedited secure transport and layout guided walks.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl"><ShieldCheck className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-extrabold text-primary text-sm">RERA Approved</h4>
                  <p className="text-xs font-semibold text-slate-400">All residential and commercial properties have 100% legal clearance.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center space-y-4 py-16 animate-in zoom-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-emerald-800">Booking Scheduled!</h3>
                <p className="text-emerald-700 font-semibold text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name}! We have registered your property query for {formData.property}. Our property investment officer will contact you within 2 hours.
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
                    placeholder="e.g. Walter White"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-indigo-500 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 88888 88888"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-indigo-500 font-semibold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Preferred Project</label>
                    <select
                      value={formData.property}
                      onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-indigo-500 font-semibold"
                    >
                      <option>Sapthagiri Premium Apartments</option>
                      <option>SEPL Business Hub Office</option>
                      <option>EduSphere Green Meadows Lands</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-indigo-500 font-semibold"
                    >
                      <option>₹15 Lakhs - ₹30 Lakhs</option>
                      <option>₹30 Lakhs - ₹50 Lakhs</option>
                      <option>₹50 Lakhs - ₹1 Crore</option>
                      <option>Above ₹1 Crore</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary hover:bg-primary-light text-white text-base font-bold transition-all shadow-md shadow-primary/20 hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  Request Details
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { Plane, Fuel, Compass, ShieldCheck, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LifestylePage() {
  const [formData, setFormData] = useState({ name: '', query: 'International Tour Packages', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', query: 'International Tour Packages', details: '' });
    }, 4000);
  };

  const travelPackages = [
    { title: 'Exotic Thailand Retreat', duration: '5 Nights / 6 Days', desc: 'Covering Bangkok & Phuket with top-tier premium resort bookings, local transfers, and guided city tours.' },
    { title: 'Majestic Dubai & Desert Safari', duration: '4 Nights / 5 Days', desc: 'Premium Burj Khalifa visits, marina cruises, desert dune bashing, and visa logistics expedited.' },
    { title: 'Heritage Karnataka Tour', duration: '6 Nights / 7 Days', desc: 'Exploring Coorg, Mysore, and Chikmagalur with curated stays in pristine plantation domains.' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 text-left animate-in fade-in duration-300">
      
      {/* Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-700 p-8 sm:p-12 lg:p-16 shadow-xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-sm font-bold tracking-wider uppercase">
              Lifestyle & Essential Division
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Lifestyle & Essentials
            </h1>
            <p className="text-base sm:text-lg text-emerald-100 font-semibold leading-relaxed max-w-xl">
              Nurturing travel experiences, supplying industrial bulk fuels logistics, and hosting music & sports training programs for vibrant community growth.
            </p>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        
        {/* Travels Division */}
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-md border border-slate-100/80 flex flex-col justify-between items-start">
          <div className="space-y-6 w-full">
            <div className="p-4 bg-sky-50 text-sky-600 rounded-2xl inline-block">
              <Plane className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">SEPL Travels</h2>
            <p className="text-slate-500 font-semibold text-sm leading-relaxed">
              Explore the globe with tailored tour itineraries. We handle flight bookings, express visa approvals, luxury hotel accommodations, and customizable tour guides to guarantee premium journeys.
            </p>
            <div className="space-y-4 pt-2">
              {travelPackages.map((pkg, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100/60">
                  <div className="flex justify-between items-center mb-1 text-xs font-extrabold text-sky-600 uppercase tracking-wider">
                    <span>{pkg.title}</span>
                    <span>{pkg.duration}</span>
                  </div>
                  <p className="text-[12.5px] font-semibold text-slate-400 mt-1 leading-relaxed">{pkg.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <a href="#booking" className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold rounded-full transition-colors w-full justify-center">
            Inquire Tour Package
          </a>
        </div>

        {/* Industrial Fuels */}
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-md border border-slate-100/80 flex flex-col justify-between items-start">
          <div className="space-y-6 w-full">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl inline-block">
              <Fuel className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">SEPL Fuels</h2>
            <p className="text-slate-500 font-semibold text-sm leading-relaxed">
              Expediting bulk high-speed diesel (HSD), petrol, and industrial lubricants distribution. Serving manufacturing facilities, marine vessels, and heavy transport networks across coastal Karnataka with guaranteed product purity.
            </p>
            <div className="space-y-3.5 pt-2 text-slate-600 font-bold text-sm">
              <div className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-emerald-500" /> Authorized Public Sector Oil Distributor</div>
              <div className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-emerald-500" /> Fully monitored secure tanker logistics fleets</div>
              <div className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-emerald-500" /> Static and portable industrial dispensing tanks</div>
              <div className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-emerald-500" /> Real-time pricing models and automated audits</div>
            </div>
          </div>
          <a href="#booking" className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-full transition-colors w-full justify-center">
            Inquire Bulk Fuel Quote
          </a>
        </div>

      </div>

      {/* Booking Form */}
      <div id="booking" className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-white border border-slate-100 shadow-xl rounded-[32px] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
              Inquire Now
            </h2>
            <p className="text-slate-500 font-semibold leading-relaxed">
              Book a custom vacation package or request bulk fuel distribution logistical configurations. Our travel specialists or corporate distribution officers will follow up within an hour.
            </p>
            <div className="space-y-3 font-semibold text-slate-600">
              <div className="flex items-center gap-2.5"><Trophy className="w-5 h-5 text-amber-500 fill-amber-500" /> Top Travel Agency Award, Coastal Karnataka</div>
              <div className="flex items-center gap-2.5"><Sparkles className="w-5 h-5 text-sky-500" /> 100% Custom Tailored Custom Travel Packages</div>
            </div>
          </div>

          <div className="relative">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center space-y-4 py-16 animate-in zoom-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-emerald-800">Inquiry Logged!</h3>
                <p className="text-emerald-700 font-semibold text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you! We have logged your {formData.query} inquiry. Our specialist officer will contact you shortly to configure details.
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
                    placeholder="e.g. David Tennant"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Select Inquiry Type</label>
                  <select
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 font-semibold"
                  >
                    <option>International Tour Packages</option>
                    <option>Domestic Vacation Booking</option>
                    <option>Visa Assistance & Flights</option>
                    <option>Bulk HSD / Petrol Distribution Quote</option>
                    <option>Industrial Lubricants Delivery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Requirement Details</label>
                  <textarea
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="e.g. Travel dates, number of passengers, destinations, or monthly industrial fuel requirements (in Litres)..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 font-semibold h-24"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary hover:bg-primary-light text-white text-base font-bold transition-all shadow-md shadow-primary/20 hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <Compass className="w-5 h-5" />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

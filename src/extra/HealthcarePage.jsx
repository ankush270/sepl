import { useState } from 'react';
import { 
  HeartPulse, Pill, Stethoscope, Calendar, Clock, 
  User, CheckCircle2, ShieldCheck, Heart, PhoneCall, 
  Activity
} from 'lucide-react';

export default function HealthcarePage() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Clinic Consultation', date: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', service: 'Clinic Consultation', date: '', notes: '' });
    }, 4000);
  };

  const departments = [
    { name: 'Cardiology', doctor: 'Dr. Sarah Chen, MD', hours: 'Mon - Fri (10:00 AM - 12:30 PM)', status: 'Active' },
    { name: 'General Medicine', doctor: 'Dr. Akshath R. Acharya, MBBS', hours: 'Daily (09:00 AM - 01:00 PM)', status: 'Active' },
    { name: 'Pediatrics & Care', doctor: 'Dr. Manoj Kumar, DCH', hours: 'Mon, Wed, Sat (04:00 PM - 07:00 PM)', status: 'Active' },
    { name: 'Rehabilitation & Physio', doctor: 'Dr. Sneha Patil, BPT', hours: 'Daily (08:30 AM - 05:30 PM)', status: 'On Call' },
  ];

  const labPackages = [
    { name: 'Basic Wellness Profile', price: '₹999', tests: ['Complete Blood Count (CBC)', 'Fast Blood Sugar (FBS)', 'Serum Cholesterol', 'Kidney Function Test (KFT)'] },
    { name: 'Executive Cardiac Panel', price: '₹2,499', tests: ['ECG & Lipids Profile', 'Liver Function Panel (LFT)', 'Thyroid Profile (T3, T4, TSH)', 'Diabetic HbA1c Level'] },
    { name: 'Premium Full Body Audit', price: '₹4,999', tests: ['All Executive Profile Tests', 'Vitamin D & B12 Levels', 'Urine Microalbumin', 'Senior Physician Consultation'] },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 text-left animate-in fade-in duration-300">
      
      {/* 1. Clinical Alert / Emergency Dispatch Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-8">
        <div className="bg-rose-50 border-l-4 border-rose-500 rounded-r-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5 text-rose-800">
            <PhoneCall className="w-6 h-6 text-rose-600 animate-pulse flex-shrink-0" />
            <div>
              <p className="font-extrabold text-sm sm:text-base">🚨 24/7 MEDICAL EMERGENCY SERVICES DISPATCH</p>
              <p className="text-xs font-semibold text-rose-600/90 mt-0.5">Need immediate ambulance or homecare diagnostics? We are active.</p>
            </div>
          </div>
          <a href="tel:+919538107758" className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-rose-600/10 active:translate-y-0.5">
            Call Ambulance: +91 95381 07758
          </a>
        </div>
      </div>

      {/* Banner / Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-700 p-8 sm:p-12 lg:p-16 shadow-xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-sm font-bold tracking-wider uppercase">
                <HeartPulse className="w-4 h-4 text-accent" />
                SEPL Healthcare Division
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Compassionate Care.<br />Accurate Diagnostics.
              </h1>
              <p className="text-base sm:text-lg text-cyan-100 font-semibold leading-relaxed max-w-xl">
                Integrating fully automated clinical diagnostics, trusted retail pharmacy supplies, and professional home nursing under a strict ISO-certified standard of quality.
              </p>
            </div>
            
            {/* Quick Stat Widgets */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-accent">ISO</div>
                <div className="text-[10px] font-bold text-cyan-200 uppercase tracking-widest mt-1">9001:2015 Lab</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-accent">100%</div>
                <div className="text-[10px] font-bold text-cyan-200 uppercase tracking-widest mt-1">Authentic Drugs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-accent">24/7</div>
                <div className="text-[10px] font-bold text-cyan-200 uppercase tracking-widest mt-1">Nursing Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-accent">NABL</div>
                <div className="text-[10px] font-bold text-cyan-200 uppercase tracking-widest mt-1">Compliant Labs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roster / Department Timings */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-24">
        <h2 className="text-3xl font-extrabold text-primary mb-4">Clinical Departments & Timings</h2>
        <p className="text-slate-500 font-semibold mb-12">Consult with certified general practitioners and senior medical specialists daily.</p>
        <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="hidden md:grid grid-cols-4 bg-slate-900 text-white font-extrabold text-xs uppercase tracking-widest py-4 px-6 gap-4 text-left">
            <div>Medical Specialty</div>
            <div>Senior Consultant In Charge</div>
            <div>Consulting Timings</div>
            <div>Status</div>
          </div>
          <div className="divide-y divide-slate-100">
            {departments.map((d, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-4 font-bold py-5 px-6 gap-4 items-start md:items-center text-left hover:bg-slate-50 transition-colors">
                <div className="text-indigo-600 flex items-center justify-start gap-2 text-sm">
                  <Activity className="w-4.5 h-4.5 text-slate-400 flex-shrink-0" />
                  <span className="md:hidden text-slate-400 font-extrabold text-xs uppercase mr-1.5 flex-shrink-0">Specialty:</span>
                  {d.name}
                </div>
                <div className="text-primary text-[15px] flex items-center justify-start gap-2">
                  <span className="md:hidden text-slate-400 font-extrabold text-xs uppercase mr-1.5 flex-shrink-0">Consultant:</span>
                  {d.doctor}
                </div>
                <div className="text-slate-500 text-xs flex items-center justify-start gap-2 font-semibold">
                  <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="md:hidden text-slate-400 font-extrabold text-xs uppercase mr-1.5 flex-shrink-0">Timings:</span>
                  {d.hours}
                </div>
                <div className="flex items-center justify-start gap-2">
                  <span className="md:hidden text-slate-400 font-extrabold text-xs uppercase mr-1.5 flex-shrink-0">Status:</span>
                  <span className={`inline-block text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${d.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'}`}>
                    {d.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        
        {/* Diagnostics Clinic */}
        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100/80 flex flex-col justify-between items-start border-t-4 border-t-cyan-500 hover:shadow-lg transition-all">
          <div>
            <div className="p-4 bg-cyan-50 text-cyan-600 rounded-2xl inline-block mb-6"><HeartPulse className="w-8 h-8" /></div>
            <h2 className="text-2xl font-bold text-primary mb-4">Clinic & Diagnostics</h2>
            <p className="text-slate-500 font-semibold text-xs leading-relaxed mb-6">
              Our high-fidelity diagnostic laboratory employs fully automated analyzers to generate verified reports. Supported by experienced consulting pathologists.
            </p>
            <ul className="space-y-3.5 text-slate-600 text-[13px] font-bold mb-8">
              <li className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-cyan-500 flex-shrink-0" /> Fully Automated Pathology Track</li>
              <li className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-cyan-500 flex-shrink-0" /> Ultrasonography & Digital X-Ray</li>
              <li className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-cyan-500 flex-shrink-0" /> Certified Senior Consultant Pathologists</li>
            </ul>
          </div>
          <a href="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors w-full justify-center">
            Book Pathology Slot
          </a>
        </div>

        {/* Pharmacy */}
        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100/80 flex flex-col justify-between items-start border-t-4 border-t-emerald-500 hover:shadow-lg transition-all">
          <div>
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl inline-block mb-6"><Pill className="w-8 h-8" /></div>
            <h2 className="text-2xl font-bold text-primary mb-4">Quality Pharmacy</h2>
            <p className="text-slate-500 font-semibold text-xs leading-relaxed mb-6">
              Providing 100% genuine branded and generic medicines under strict storage compliance. Managed by registered pharmacists with integrated doorstep home delivery.
            </p>
            <ul className="space-y-3.5 text-slate-600 text-[13px] font-bold mb-8">
              <li className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" /> 100% Verified Branded & Generic Meds</li>
              <li className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Local door-step delivery logistics</li>
              <li className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Specialized cold-storage insulin hubs</li>
            </ul>
          </div>
          <a href="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors w-full justify-center">
            Upload Prescription
          </a>
        </div>

        {/* Nursing */}
        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100/80 flex flex-col justify-between items-start border-t-4 border-t-indigo-500 hover:shadow-lg transition-all">
          <div>
            <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl inline-block mb-6"><Stethoscope className="w-8 h-8" /></div>
            <h2 className="text-2xl font-bold text-primary mb-4">Home Nursing Care</h2>
            <p className="text-slate-500 font-semibold text-xs leading-relaxed mb-6">
              Bringing professional clinical assistance directly to your home. Dedicated to elderly support, post-surgery physical therapy, and critical ICU rehabilitation.
            </p>
            <ul className="space-y-3.5 text-slate-600 text-[13px] font-bold mb-8">
              <li className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-indigo-500 flex-shrink-0" /> 24/7 Patient Home Nurses</li>
              <li className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-indigo-500 flex-shrink-0" /> Geriatric & Elderly Care Specializations</li>
              <li className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-indigo-500 flex-shrink-0" /> Post-Operative Physiotherapists</li>
            </ul>
          </div>
          <a href="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors w-full justify-center">
            Request Home Nurse
          </a>
        </div>

      </div>

      {/* Diagnostic Health Packages */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-24">
        <h2 className="text-3xl font-extrabold text-primary mb-4">Preventive Diagnostics Packages</h2>
        <p className="text-slate-500 font-semibold mb-12">Fully NABL and ISO compliant clinical health profiles.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {labPackages.map((pkg, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="text-3xl font-extrabold text-indigo-600 mb-2">{pkg.price}</div>
              <h3 className="text-xl font-bold text-primary mb-6">{pkg.name}</h3>
              <ul className="space-y-3 mb-8 text-slate-600 text-xs font-semibold">
                {pkg.tests.map((test, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-500 flex-shrink-0 fill-rose-500" />
                    {test}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setFormData({ ...formData, notes: `Interested in diagnostics package: ${pkg.name}` })}
                className="w-full py-2.5 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 font-bold rounded-full transition-all text-xs"
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Booking Request */}
      <div id="booking" className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-white border border-slate-100 shadow-xl rounded-[32px] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-50 text-cyan-600 text-xs font-bold uppercase tracking-wider">Clinical Bookings</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
              Request Clinical Appointment
            </h2>
            <p className="text-slate-500 font-semibold leading-relaxed">
              Schedule an in-clinic diagnostic consultation or allocate homecare nursing assistants. Submit your details, and our receptionist will confirm your slot within 30 minutes.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-cyan-50 text-cyan-600 rounded-2xl"><Clock className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-extrabold text-primary text-sm">Response Time</h4>
                  <p className="text-xs font-semibold text-slate-400">Guaranteed call-back confirmation within 30 mins.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl"><User className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-extrabold text-primary text-sm">Board-Certified MDs</h4>
                  <p className="text-xs font-semibold text-slate-400">Consult with highly verified senior physicians.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center space-y-4 py-16 animate-in zoom-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-emerald-800">Booking Request Logged!</h3>
                <p className="text-emerald-700 font-semibold text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name || 'valued patient'}. We have received your slot booking query for {formData.service} on {formData.date || 'your selected date'}. Our medical officer will call you back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Patient Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 95381 07758"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Select Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 font-semibold"
                  >
                    <option>Clinic Consultation</option>
                    <option>Diagnostic Laboratory Test</option>
                    <option>Pharmacy Prescription Delivery</option>
                    <option>Home Nurse Allocation</option>
                    <option>Physiotherapy Appointment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Appointment Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Additional Medical Notes</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe symptoms, requested diagnostic packages, or prescriptions to deliver..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-cyan-500 font-semibold h-24"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary hover:bg-primary-light text-white text-base font-bold transition-all shadow-md shadow-primary/20 hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Request Booking Slot
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

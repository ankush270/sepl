import { Target, Eye, Award, ShieldCheck } from 'lucide-react';
import Founder from '../components/Founder';

export default function AboutPage() {
  const values = [
    { title: 'Community Integrity', desc: 'Putting patient wellness, student learning, and retail trust ahead of corporate profitability paradigms.', icon: ShieldCheck, color: 'text-indigo-600 bg-indigo-50' },
    { title: 'Quality Excellence', desc: 'Enforcing BIS 916 hallmarked retail protocols, RERA approved structures, and fully certified diagnostics tests.', icon: Award, color: 'text-amber-600 bg-amber-50' },
    { title: 'Innovation Driven', desc: 'Equipping learning classrooms with modern digital streams, and clinics with fully automated diagnostics.', icon: Target, color: 'text-sky-600 bg-sky-50' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 text-left animate-in fade-in duration-300">
      
      {/* Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-primary via-primary-light to-primary p-8 sm:p-12 lg:p-16 shadow-xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif leading-tight">
              Ecosystem Excellence
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-semibold leading-relaxed max-w-xl">
              Discover the history, core operational values, and corporate leadership details driving Sapthagiri Endeavours & Progressive Learning Corp.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-primary tracking-tight">Our Mission & Vision</h2>
          <p className="text-slate-500 font-semibold text-base leading-relaxed">
            Established with a single medical clinic, SEPL.CO (Sapthagiri Endeavours & Progressive Learning Corporation Pvt. Ltd.) has evolved into a trusted multi-vertical conglomerate spanning healthcare, education, retail luxury, and logistics. Our driving compass is to provide authentic, highly premium, and community-optimized services.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl flex-shrink-0"><Target className="w-6 h-6" /></div>
              <div>
                <h4 className="font-extrabold text-primary">Our Mission</h4>
                <p className="text-xs font-semibold text-slate-400 mt-1 leading-relaxed">To coordinate essential healthcare, progressive academic learning, and retail luxury under a unified standard of absolute integrity.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <div className="p-3 bg-rose-50 text-rose-600 rounded-xl flex-shrink-0"><Eye className="w-6 h-6" /></div>
              <div>
                <h4 className="font-extrabold text-primary">Our Vision</h4>
                <p className="text-xs font-semibold text-slate-400 mt-1 leading-relaxed">To unlock standard operational scaling across 10 verticals while directly enriching the social fabrics of coastal Karnataka.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-lg bg-slate-100">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="SEPL Corporate Team brainstorming" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-24">
        <h2 className="text-3xl font-extrabold text-primary mb-12 text-center">Our Core Corporate Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className={`p-3.5 rounded-2xl ${v.color} inline-block mb-6`}>
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{v.title}</h3>
              <p className="text-slate-500 font-semibold text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Section */}
      <Founder />

    </div>
  );
}

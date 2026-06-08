
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  Pill, 
  Stethoscope, 
  GraduationCap, 
  Baby, 
  Code, 
  Gem, 
  Plane, 
  Fuel, 
  Music4,
  ArrowRight
} from 'lucide-react';

export default function ServicesGrid() {
  const verticals = [
    {
      id: 1,
      title: 'Clinic & Diagnostics',
      desc: 'Advanced diagnostics and expert consultations for better health.',
      icon: HeartPulse,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-100/50',
      arrowColor: 'text-cyan-600',
      path: '/healthcare',
    },
    {
      id: 2,
      title: 'Pharmacy',
      desc: 'Quality medicines with care, affordability and trust.',
      icon: Pill,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100/50',
      arrowColor: 'text-emerald-600',
      path: '/healthcare',
    },
    {
      id: 3,
      title: 'Healthcare Services',
      desc: 'Nursing, physiotherapy, ambulance & home care services.',
      icon: Stethoscope,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100/50',
      arrowColor: 'text-indigo-600',
      path: '/healthcare',
    },
    {
      id: 4,
      title: 'Academy',
      desc: 'IIT JEE/NEET coaching, music classes & sports training.',
      icon: GraduationCap,
      color: 'text-purple-600 bg-purple-50 border-purple-100/50',
      arrowColor: 'text-purple-600',
      path: '/education',
    },
    {
      id: 5,
      title: 'Preschool & School',
      desc: 'Holistic K-12 education rooted in values and excellence.',
      icon: Baby,
      color: 'text-rose-600 bg-rose-50 border-rose-100/50',
      arrowColor: 'text-rose-600',
      path: '/education',
    },
    {
      id: 6,
      title: 'Software',
      desc: 'Custom software & digital transformation for businesses.',
      icon: Code,
      color: 'text-blue-600 bg-blue-50 border-blue-100/50',
      arrowColor: 'text-blue-600',
      path: '/business',
    },
    {
      id: 7,
      title: 'Jewellery',
      desc: 'Elegant gold, diamond & silver collections for every occasion.',
      icon: Gem,
      color: 'text-amber-600 bg-amber-50 border-amber-100/50',
      arrowColor: 'text-amber-600',
      path: '/business',
    },
    {
      id: 8,
      title: 'Travels',
      desc: 'Tours, tickets & visa assistance for smooth journeys.',
      icon: Plane,
      color: 'text-orange-600 bg-orange-50 border-orange-100/50',
      arrowColor: 'text-orange-600',
      path: '/lifestyle',
    },
    {
      id: 9,
      title: 'Fuels',
      desc: 'Reliable fuel supply & bulk distribution for industries.',
      icon: Fuel,
      color: 'text-green-600 bg-green-50 border-green-100/50',
      arrowColor: 'text-green-600',
      path: '/lifestyle',
    },
    {
      id: 10,
      title: 'Music & Sports',
      desc: 'Nurturing talent and building champions for tomorrow.',
      icon: Music4,
      color: 'text-sky-600 bg-sky-50 border-sky-100/50',
      arrowColor: 'text-sky-600',
      path: '/lifestyle',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-[12px] font-extrabold tracking-widest text-accent uppercase">
            Our Service Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Discover Our <span className="font-serif italic text-accent font-medium">10 Verticals</span>
          </h2>
          <p className="text-base text-slate-500 font-semibold leading-relaxed">
            Pillars of excellence delivering impact across every sphere of life.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {verticals.map((v) => (
            <div
              key={v.id}
              className="group relative bg-white border border-slate-100 rounded-3xl p-6 flex flex-col justify-between text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-100 hover:border-slate-200/80 cursor-default"
            >
              <div>
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${v.color} mb-6 transition-all duration-300 group-hover:scale-105`}>
                  <v.icon className="w-6 h-6" />
                </div>

                {/* Vertical title */}
                <h3 className="text-lg font-bold text-primary mb-2.5 leading-snug group-hover:text-primary-light transition-colors">
                  {v.title}
                </h3>

                {/* Subtext description */}
                <p className="text-[13.5px] text-slate-500 font-semibold leading-relaxed mb-6">
                  {v.desc}
                </p>
              </div>

              {/* Action Link to Route */}
              <Link
                to={v.path}
                className={`inline-flex items-center gap-1.5 text-xs font-bold ${v.arrowColor} uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300`}
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

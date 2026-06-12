
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
      path: '/services#clinic-diagnostics',
    },
    {
      id: 2,
      title: 'Pharmacy',
      desc: 'Quality medicines with care, affordability and trust.',
      icon: Pill,
      path: '/services#pharmacy',
    },
    {
      id: 3,
      title: 'Healthcare Services',
      desc: 'Nursing, physiotherapy, ambulance & home care services.',
      icon: Stethoscope,
      path: '/services#healthcare-services',
    },
    {
      id: 4,
      title: 'Academy',
      desc: 'IIT JEE/NEET coaching, music classes & sports training.',
      icon: GraduationCap,
      path: '/services#academy',
    },
    {
      id: 5,
      title: 'Preschool & School',
      desc: 'Holistic K-12 education rooted in values and excellence.',
      icon: Baby,
      path: '/services#preschool-school',
    },
    {
      id: 6,
      title: 'Software',
      desc: 'Custom software & digital transformation for businesses.',
      icon: Code,
      path: '/services#software',
    },
    {
      id: 7,
      title: 'Jewellery',
      desc: 'Elegant gold, diamond & silver collections for every occasion.',
      icon: Gem,
      path: '/services#jewellery',
    },
    {
      id: 8,
      title: 'Travels',
      desc: 'Tours, tickets & visa assistance for smooth journeys.',
      icon: Plane,
      path: '/services#travels',
    },
    {
      id: 9,
      title: 'Fuels',
      desc: 'Reliable fuel supply & bulk distribution for industries.',
      icon: Fuel,
      path: '/services#fuels',
    },
    {
      id: 10,
      title: 'Music & Sports',
      desc: 'Nurturing talent and building champions for tomorrow.',
      icon: Music4,
      path: '/services#music-sports',
    },
  ];

  return (
    <section id="services" className="pt-24 bg-white relative">
      
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
            Discover Our <span className="text-accent font-extrabold">10 Verticals</span>
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
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-accent/20 bg-accent/5 text-accent-dark mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-primary group-hover:border-accent group-hover:scale-105">
                  <v.icon className="w-6 h-6" />
                </div>

                {/* Vertical title */}
                <h3 className="text-lg font-bold text-primary mb-2.5 leading-snug group-hover:text-accent-dark transition-colors">
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
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-dark group-hover:text-accent-dark/85 uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300"
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

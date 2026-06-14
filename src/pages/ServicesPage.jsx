import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, Pill, Stethoscope, GraduationCap, 
  Baby, Code, Gem, Plane, Fuel, Music4, 
  Building2, Phone, ArrowRight
} from 'lucide-react';

const categories = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    subtitle: 'Quality care, modern diagnostics, and trusted pharmaceutical support — accessible to every community.',
    services: [
      {
        id: 'clinic-diagnostics',
        icon: HeartPulse,
        title: 'SEPLCO Clinic and Diagnostics',
        description: 'Our multi-specialty clinic is equipped with a modern diagnostic laboratory offering accurate and timely pathology, radiology, and general consultation services. Staffed by experienced medical professionals, we focus on preventive care and early diagnosis.',
      },
      {
        id: 'pharmacy',
        icon: Pill,
        title: 'SEPLCO Pharmacy (Medicals & Surgicals)',
        description: 'A licensed retail pharmacy providing genuine branded and generic medicines, surgical supplies, and medical equipment at affordable prices. Our registered pharmacists ensure proper guidance and medication management.',
      },
      {
        id: 'healthcare-services',
        icon: Stethoscope,
        title: 'SEPLCO Healthcare Services',
        description: 'Professional home nursing, physiotherapy, ambulance dispatch, and allied healthcare support tailored to individual needs. Committed to compassionate, round-the-clock service for post-operative care, elderly support, and emergency response.',
      },
    ],
  },
  {
    id: 'education',
    title: 'Education',
    subtitle: 'Building futures through quality education, structured coaching, and holistic child development.',
    services: [
      {
        id: 'academy',
        icon: GraduationCap,
        title: 'SEPLCO Academy',
        description: 'Under SEPLCO Academy, we prepare students for competitive entrance examinations like IIT JEE and NEET via SEPLCO Tutorials, nurture musical talents through SEPLCO Music, and provide professional athletic training through SEPLCO Sports.',
      },
      {
        id: 'preschool-school',
        icon: Baby,
        title: 'SEPLCO Preschool and School',
        description: 'A holistic K-12 educational institution rooted in values-driven learning and all-round student development. We nurture curiosity, discipline, and a love for learning in early childhood and secondary education.',
      },
    ],
  },
  {
    id: 'business',
    title: 'Business & Lifestyle',
    subtitle: 'Professional services that help businesses grow and individuals celebrate life\'s milestones.',
    services: [
      {
        id: 'software',
        icon: Code,
        title: 'SEPLCO Software',
        description: 'Custom software development, web applications, and digital transformation solutions for businesses of all sizes. We deliver technology solutions that drive efficiency and growth.',
      },
      {
        id: 'jewellery',
        icon: Gem,
        title: 'SEPLCO Jewellery',
        description: 'A curated collection of gold, diamond, and silver jewellery crafted for every occasion — from everyday elegance to special celebrations. Each piece reflects quality craftsmanship and timeless design.',
      },
    ],
  },
  {
    id: 'logistics-lifestyle',
    title: 'Logistics & Lifestyle',
    subtitle: 'Services that enrich everyday life — from travel and energy to properties.',
    services: [
      {
        id: 'travels',
        icon: Plane,
        title: 'SEPLCO Travels',
        description: 'Comprehensive travel services covering tour packages, flight and hotel bookings, visa assistance, and corporate travel management. We take care of the logistics so you can focus on the experience.',
      },
      {
        id: 'fuels',
        icon: Fuel,
        title: 'SEPLCO Fuels',
        description: 'Reliable bulk fuel supply and distribution services for industrial, commercial, and institutional requirements. We ensure timely delivery and consistent quality to keep your operations running smoothly.',
      },
      {
        id: 'properties-hospitality',
        icon: Building2,
        title: 'SEPLCO Properties and Hospitality',
        description: 'End-to-end real estate services including property development, sales, investment advisory, and hospitality management. We focus on building quality infrastructure that serves communities for generations.',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 text-left animate-in fade-in duration-300">

      {/* Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-primary via-primary-light to-primary p-8 sm:p-12 lg:p-16 shadow-xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/10 text-sm font-bold tracking-wider uppercase">
              <ArrowRight className="w-4 h-4 text-accent" />
              Our Ecosystem
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Our Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl">
              SEPL.CO operates across healthcare, education, business, and lifestyle verticals — each built on a foundation of quality, integrity, and community impact.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="px-5 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:text-primary hover:border-accent hover:bg-accent/5 transition-all duration-200"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </div>

      {/* Category Sections */}
      {categories.map((category, catIndex) => (
        <div key={category.id} id={category.id} className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-20 scroll-mt-24">
          
          {/* Category Header */}
          <div className="mb-10">
            <div className="inline-block text-[12px] font-extrabold tracking-widest text-accent-dark uppercase mb-2">
              {String(catIndex + 1).padStart(2, '0')} — {category.title}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-3">
              {category.title}
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl">
              {category.subtitle}
            </p>
          </div>

          {/* Service Cards */}
          <div className={`grid grid-cols-1 ${category.services.length === 1 ? 'lg:grid-cols-1 max-w-3xl' : category.services.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-8`}>
            {category.services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 scroll-mt-24 flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-accent/20 bg-accent/5 text-accent-dark mb-6">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Divider between categories */}
          {catIndex < categories.length - 1 && (
            <div className="mt-20 border-t border-slate-100" />
          )}
        </div>
      ))}

      {/* Contact CTA */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-4">
            Interested in any of our services?
          </h2>
          <p className="text-slate-500 font-medium mb-8 max-w-lg mx-auto">
            Get in touch with our team and we'll help you find the right solution for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </div>

    </div>
  );
}

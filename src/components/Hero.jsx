
import { HeartPulse, GraduationCap, Building2, Palmtree, ArrowRight, Grid, Users, Headphones, Globe } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

export default function Hero() {
  const quickTags = [
    { name: 'Healthcare', icon: HeartPulse, color: 'text-indigo-600 bg-indigo-50 border-indigo-100 hover:bg-indigo-100' },
    { name: 'Education', icon: GraduationCap, color: 'text-purple-600 bg-purple-50 border-purple-100 hover:bg-purple-100' },
    { name: 'Business', icon: Building2, color: 'text-sky-600 bg-sky-50 border-sky-100 hover:bg-sky-100' },
    { name: 'Lifestyle', icon: Palmtree, color: 'text-amber-600 bg-amber-50 border-amber-100 hover:bg-amber-100' },
  ];

  return (
    <section 
      className="relative overflow-hidden pt-12 pb-24 bg-slate-50 bg-right bg-no-repeat bg-cover lg:bg-contain z-10"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      
      {/* Premium overlay gradients to ensure immaculate text readability on the left while revealing collage on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/98 to-transparent lg:from-slate-50/98 lg:via-slate-50/90 lg:to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 via-transparent to-transparent pointer-events-none z-0" />

      {/* Decorative gradient glowing spheres */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-100/10 to-sky-100/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-50/10 to-purple-50/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[500px]">
          
          {/* Left Column: Typographic Pitch & Controls */}
          <div className="lg:col-span-7 space-y-8 text-left relative z-10">
            
            {/* Badge Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/10 bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Ecosystem Excellence
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.15]">
              <span className="block">A Universe of Services</span>
              <span className="text-accent block mt-1">
                Under One Brand
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              SEPL.CO integrates healthcare, education, and lifestyle solutions into a seamless, modern ecosystem. Experience premium efficiency tailored to your professional and personal growth.
            </p>

            {/* Interactive Tags Row */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3.5">
              {quickTags.map((tag) => (
                <div
                  key={tag.name}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border font-semibold text-[14px] transition-all duration-300 cursor-pointer shadow-sm shadow-slate-100/50 hover:shadow-md hover:-translate-y-0.5 ${tag.color}`}
                >
                  <tag.icon className="w-4 h-4" />
                  <span>{tag.name}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-primary hover:bg-primary-light hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Ecosystem
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#founder"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-slate-700 bg-white border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                View Founder Profile
              </a>
            </div>

          </div>

          {/* Right Column: Floating micro-modules overlaying the collage background */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-end lg:min-h-[450px] z-10">

            
            {/* Floating Card 1: Healthcare Plus */}
            <div className="absolute top-[10%] left-[-2%] sm:left-[10%] lg:left-[-12%] w-[240px] glassmorphism border border-white/60 p-4 rounded-2xl shadow-xl flex gap-3.5 items-start animate-float-slow hover:pause cursor-default transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-l-4 border-l-cyan-400">
              <div className="flex-shrink-0 p-2.5 bg-cyan-50 text-cyan-500 rounded-xl">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-extrabold text-[15px] text-slate-800">Healthcare Plus</h3>
                <p className="text-[12px] text-slate-500 font-semibold leading-snug mt-0.5">
                  Next-gen patient management and diagnostics.
                </p>
              </div>
            </div>

            {/* Floating Card 2: EduSphere */}
            <div className="absolute bottom-[20%] right-[-2%] sm:right-[10%] lg:right-[-6%] w-[240px] glassmorphism border border-white/60 p-4 rounded-2xl shadow-xl flex gap-3.5 items-start animate-float-slower hover:pause cursor-default transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-l-4 border-l-amber-500">
              <div className="flex-shrink-0 p-2.5 bg-amber-50 text-amber-500 rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-extrabold text-[15px] text-slate-800">EduSphere</h3>
                <p className="text-[12px] text-slate-500 font-semibold leading-snug mt-0.5">
                  Global learning resources for high-performers.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Banner Card */}
        {/* <div className="mt-20 lg:mt-24 bg-white/90 border border-slate-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 backdrop-blur-md relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y-0 lg:divide-x lg:divide-slate-100">

            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left px-2">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl flex-shrink-0">
                <Grid className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">10+</div>
                <div className="text-[12px] font-bold text-slate-400  tracking-widest mt-0.5">Services</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left px-2">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">1000+</div>
                <div className="text-[12px] font-bold text-slate-400  tracking-widest mt-0.5">Customers</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left px-2">
              <div className="p-3 bg-cyan-50 text-cyan-600 rounded-2xl flex-shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">24/7</div>
                <div className="text-[12px] font-bold text-slate-400  tracking-widest mt-0.5">Expert Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left px-2">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl flex-shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">15+</div>
                <div className="text-[12px] font-bold text-slate-400  tracking-widest mt-0.5">Countries</div>
              </div>
            </div>

          </div>
        </div> */}

      </div>
    </section>
  );
}

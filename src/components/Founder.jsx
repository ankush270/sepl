import React from 'react';

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-white relative">
      
      {/* Decorative background details */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Portrait & Title Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Background design elements */}
            <div className="absolute inset-0 bg-slate-100 rounded-[36px] -rotate-3 scale-[1.02] -z-10 pointer-events-none" />
            
            {/* Portrait Frame */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border-4 border-white bg-slate-50 group">
              <img
                src="/dr.akshath2.jpg"
                alt="Dr. Akshath Ramesh Acharya"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
              />
              
              {/* Subtle overlay shadow inside the frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* overlay badge card at the bottom of the photo */}
            <div className="w-[85%] sm:w-[80%] absolute bottom-[-32px] bg-primary border border-primary-light/30 p-5 rounded-2xl shadow-xl text-center">
              <h4 className="font-extrabold text-white text-[16px] sm:text-[17px] tracking-tight">
                Dr. Akshath Ramesh Acharya
              </h4>
              <p className="text-[12px] font-bold text-accent uppercase tracking-widest mt-1">
                Founder & Managing Director
              </p>
            </div>

          </div>

          {/* Right Column: Biography Narrative */}
          <div className="lg:col-span-7 text-left space-y-6 pt-10 lg:pt-0">
            
            {/* Section Indicator */}
            <div className="inline-block text-[12px] font-extrabold tracking-widest text-accent uppercase">
              Leaders Trust
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
              Our <span className="font-serif italic text-accent font-medium">Founder</span>
            </h2>

            {/* Biography details */}
            <div className="space-y-4 text-base sm:text-[16.5px] text-slate-600 font-semibold leading-relaxed">
              <p>
                A visionary healthcare professional and entrepreneur from Mangaluru, Dr. Akshath Ramesh Acharya founded SEPL.CO with a singular mission — to make quality healthcare, education, and essential services accessible to every community.
              </p>
              <p>
                With deep expertise in medicine and a passion for social impact, he has steered SEPL.CO from a single clinic into a diversified conglomerate spanning 10 verticals. Under his leadership, the organization has touched thousands of lives across Dakshina Kannada and beyond.
              </p>
            </div>

            {/* Quote Blockout card */}
            <div className="relative border-l-4 border-accent bg-slate-50 rounded-r-3xl p-6 shadow-sm border-y border-r border-slate-100 mt-8">
              <p className="text-base sm:text-lg font-bold text-primary italic leading-relaxed">
                "When we serve the community with integrity, growth follows naturally. Healthcare and education are not just businesses — they are responsibilities."
              </p>
              <div className="text-right mt-3 text-sm font-extrabold text-slate-400 uppercase tracking-widest">
                — Dr. Akshath Ramesh Acharya
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

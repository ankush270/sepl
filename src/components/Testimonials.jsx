import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      quote: "SEPL.CO's healthcare solutions transformed our patient tracking efficiency by 40%. The integration is seamless and the UI is incredibly intuitive.",
      author: "Dr. Sarah Chen",
      role: "Director, Metro Health",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
    },
    {
      id: 2,
      quote: "The education tools provided by EduSphere allowed us to reach remote students with high-quality streaming and interactive resources.",
      author: "Marcus Thorne",
      role: "Dean, Global Academy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
    },
    {
      id: 3,
      quote: "Unparalleled attention to detail in their business consulting services. They don't just solve problems, they build lasting value.",
      author: "Linda Wu",
      role: "CEO, TechFlow",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-xl space-y-4">
            <div className="text-[12px] font-extrabold tracking-widest text-accent uppercase">
              Global Trust
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
              Trusted by <span className="font-serif italic text-accent font-medium">Thousands</span>
            </h2>
            <p className="text-base text-slate-500 font-semibold leading-relaxed">
              Hear from the leaders and clients who believe in our ecosystem.
            </p>
          </div>

          {/* Carousel Action Buttons */}
          <div className="flex gap-3 justify-start sm:justify-end">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-primary hover:border-slate-400 hover:shadow-md transition-all duration-200 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-primary hover:border-slate-400 hover:shadow-md transition-all duration-200 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Desktop View (3-column layout) */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg shadow-slate-100/50 flex flex-col justify-between items-start text-left hover:shadow-xl hover:border-slate-200/60 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 group-hover:text-amber-50 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
              
              <div className="relative">
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[15.5px] font-semibold text-slate-600 leading-relaxed italic mb-8 relative z-10">
                  "{r.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-slate-100/80 pt-6 w-full">
                <img
                  src={r.avatar}
                  alt={r.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md shadow-slate-200/80"
                />
                <div>
                  <h4 className="font-extrabold text-[15px] text-slate-800">{r.author}</h4>
                  <p className="text-[12.5px] font-bold text-slate-400">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Mobile/Tablet Active Carousel view */}
        <div className="block lg:hidden">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-lg shadow-slate-100/50 flex flex-col justify-between items-start text-left relative min-h-[300px] animate-in fade-in slide-in-from-right-3 duration-300">
            <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 pointer-events-none" />
            
            <div className="w-full">
              {/* Rating stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-[15.5px] font-semibold text-slate-600 leading-relaxed italic mb-8 relative z-10">
                "{reviews[activeIndex].quote}"
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 border-t border-slate-100 pt-6 w-full">
              <img
                src={reviews[activeIndex].avatar}
                alt={reviews[activeIndex].author}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md shadow-slate-200/80"
              />
              <div>
                <h4 className="font-extrabold text-[15px] text-slate-800">{reviews[activeIndex].author}</h4>
                <p className="text-[12.5px] font-bold text-slate-400">{reviews[activeIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 justify-center mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-primary w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

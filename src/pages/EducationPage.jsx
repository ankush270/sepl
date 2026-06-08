import { useState } from 'react';
import { 
  GraduationCap, Baby, Music, Calendar, MapPin, 
  CheckCircle2, Trophy, Clock, 
  Bell, School, ClipboardList
} from 'lucide-react';

export default function EducationPage() {
  const [formData, setFormData] = useState({ studentName: '', age: '', program: 'IIT-JEE Prep Batch', location: 'Surathkal Campus' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ studentName: '', age: '', program: 'IIT-JEE Prep Batch', location: 'Surathkal Campus' });
    }, 4000);
  };

  const programs = [
    { name: 'IIT JEE & NEET Prep', category: 'Academy Entrance', desc: 'Rigorous coaching for premier national engineering & medical entries. High-octane mock drills led by top IITian faculties.', duration: '2 Years', rank: 'AIR Top 50 Achieved' },
    { name: 'Trinity Music Curricula', category: 'Fine Arts & Music', desc: 'Bespoke vocal classes, violin, guitar, and keyboard training complying with Trinity College London standards.', duration: 'Flexible', rank: 'Trinity Certified Syllabus' },
    { name: 'Sports Coaching Track', category: 'Athletics & Games', desc: 'Structured tactical physical training covering football, badminton, and basketball classes led by state-level coaches.', duration: 'Annual', rank: 'State-Level Gold Medals' },
  ];

  const notices = [
    { date: 'June 5, 2026', title: 'IIT-JEE Crash Course Admissions', desc: 'Final batch enrollment closes next Wednesday. Limited seats left.' },
    { date: 'June 12, 2026', title: 'Trinity College Practical Exams', desc: 'Admit cards distributed at our Surathkal music center office.' },
    { date: 'June 20, 2026', title: 'Annual Parents-Teacher Meetup', desc: 'Montessori K-12 parent-faculty meet starting 9:00 AM.' },
  ];

  const toppers = [
    { name: 'Aditya Rao', rank: 'JEE Advanced - AIR 24', score: '348 / 360', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80' },
    { name: 'Sneha Shetty', rank: 'NEET UG - Score 710', score: 'AIR 48', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
    { name: 'Rahul Acharya', rank: 'KVPY Fellow & Olympiad', score: 'Scholarship Holder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
  ];

  const batches = [
    { time: '08:30 AM - 12:30 PM', name: 'Preschool & Montessori Playgroup', age: '3 - 5 Years' },
    { time: '04:30 PM - 07:30 PM', name: 'IIT-JEE Elite Evening Batch', age: 'Class 11 & 12' },
    { time: '05:30 PM - 08:30 PM', name: 'NEET Foundation Practice', age: 'Class 10 & 11' },
    { time: '06:00 PM - 08:00 PM', name: 'Trinity Music & Instrumental Classes', age: 'All Ages' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 text-left animate-in fade-in duration-300">
      
      {/* Banner / Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-800 p-8 sm:p-12 lg:p-16 shadow-xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-sm font-bold tracking-wider uppercase">
                <School className="w-4 h-4 text-accent" />
                EduSphere Academy
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif leading-tight">
                Nurturing Minds,<br />Building Futures.
              </h1>
              <p className="text-base sm:text-lg text-purple-100 font-semibold leading-relaxed max-w-xl">
                A premium learning center integrating rigorous competitive IIT-JEE prep, values-rooted K-12 Montessori frameworks, and certified arts training.
              </p>
            </div>
            
            {/* Quick Stat Widgets */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-accent">98.4%</div>
                <div className="text-[10px] font-bold text-purple-200 uppercase tracking-widest mt-1">JEE Selection</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-accent">500+</div>
                <div className="text-[10px] font-bold text-purple-200 uppercase tracking-widest mt-1">Trinity Music Grades</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-accent">1:15</div>
                <div className="text-[10px] font-bold text-purple-200 uppercase tracking-widest mt-1">Teacher-Student</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-accent">ISO</div>
                <div className="text-[10px] font-bold text-purple-200 uppercase tracking-widest mt-1">Certified School</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Bulletins (Notice Board) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Modern Interactive Notice Board */}
        <div className="lg:col-span-4 bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-500 mb-6">
              <Bell className="w-6 h-6 animate-bounce" />
              <h3 className="text-xl font-extrabold text-primary tracking-tight">Academic Notice Board</h3>
            </div>
            <p className="text-slate-400 font-semibold text-xs mb-8 uppercase tracking-widest">Latest announcements & updates</p>
            <div className="space-y-6">
              {notices.map((n, i) => (
                <div key={i} className="border-b border-slate-50 pb-5 last:border-b-0 last:pb-0">
                  <span className="inline-block text-[11px] font-extrabold text-slate-400 bg-slate-50 border px-2.5 py-1 rounded-md mb-2">{n.date}</span>
                  <h4 className="font-extrabold text-primary text-[15px]">{n.title}</h4>
                  <p className="text-xs font-semibold text-slate-500 mt-1 leading-relaxed">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-4 flex gap-3 items-center mt-6">
            <ClipboardList className="w-6 h-6 text-rose-500 flex-shrink-0" />
            <p className="text-[11.5px] font-bold text-rose-800 leading-normal">Helpline queries: Call counselor at +91 95381 07758</p>
          </div>
        </div>

        {/* Right Side: Core Thematic Curricula (IIT, Montessori, Music) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Montessori */}
          <div className="bg-white border border-slate-100 p-6 rounded-[28px] shadow-sm flex flex-col justify-between items-start border-t-4 border-t-rose-500 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="p-3 bg-rose-50 text-rose-600 rounded-2xl inline-block"><Baby className="w-6 h-6" /></div>
              <h3 className="text-xl font-extrabold text-primary">Montessori Preschool</h3>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">Activity-centric curriculum optimized for young minds. Rooted in traditional child values, security, and motor skills development.</p>
              <ul className="space-y-2 text-[12.5px] font-bold text-slate-600">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Sensory-based learning</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Playgroups & nurseries</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Smart audio classroom</li>
              </ul>
            </div>
            <a href="#admissions" className="w-full mt-6 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-extrabold text-xs text-center rounded-xl transition-all">Enroll Preschool</a>
          </div>

          {/* Academic coaching */}
          <div className="bg-white border border-slate-100 p-6 rounded-[28px] shadow-sm flex flex-col justify-between items-start border-t-4 border-t-purple-500 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl inline-block"><GraduationCap className="w-6 h-6" /></div>
              <h3 className="text-xl font-extrabold text-primary">IIT-JEE & NEET Academy</h3>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">National-caliber competitive coaching. Exhaustive conceptual drills, printed worksheets, and timed mock tests led by veteran faculties.</p>
              <ul className="space-y-2 text-[12.5px] font-bold text-slate-600">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-purple-500" /> All-India test series</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Integrated K-12 coaching</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Live doubt audit counters</li>
              </ul>
            </div>
            <a href="#admissions" className="w-full mt-6 py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-700 font-extrabold text-xs text-center rounded-xl transition-all">Join JEE Batches</a>
          </div>

          {/* Music */}
          <div className="bg-white border border-slate-100 p-6 rounded-[28px] shadow-sm flex flex-col justify-between items-start border-t-4 border-t-indigo-500 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl inline-block"><Music className="w-6 h-6" /></div>
              <h3 className="text-xl font-extrabold text-primary">Trinity Music School</h3>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">Certified instrumental music programs following the Trinity College London framework. Instrumental tracks in violin, guitar, and drums.</p>
              <ul className="space-y-2 text-[12.5px] font-bold text-slate-600">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Trinity graded certificates</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Specialized piano keyboards</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Annual auditorium recitals</li>
              </ul>
            </div>
            <a href="#admissions" className="w-full mt-6 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-extrabold text-xs text-center rounded-xl transition-all">Join Music Academy</a>
          </div>
        </div>

      </div>

      {/* Timetable / Batch Schedules */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-24">
        <h2 className="text-3xl font-extrabold text-primary mb-4 font-serif">Daily Academic Schedule</h2>
        <p className="text-slate-500 font-semibold mb-12">Batch timings configured across all locations and age brackets.</p>
        <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="hidden md:grid grid-cols-4 bg-slate-900 text-white font-extrabold text-xs uppercase tracking-widest py-4 px-6 gap-4 text-left">
            <div>Batch Timings</div>
            <div className="md:col-span-2">Program Class Name</div>
            <div>Target Age / Grade</div>
          </div>
          <div className="divide-y divide-slate-100">
            {batches.map((b, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-4 font-bold py-5 px-6 gap-4 items-start md:items-center text-left hover:bg-slate-50 transition-colors">
                <div className="text-indigo-600 flex items-center justify-start gap-2 text-sm">
                  <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="md:hidden text-slate-400 font-extrabold text-xs uppercase mr-1.5 flex-shrink-0">Timings:</span>
                  {b.time}
                </div>
                <div className="md:col-span-2 text-primary text-[15px] flex items-center justify-start gap-2">
                  <span className="md:hidden text-slate-400 font-extrabold text-xs uppercase mr-1.5 flex-shrink-0">Program:</span>
                  {b.name}
                </div>
                <div className="text-slate-500 text-xs uppercase tracking-wider flex items-center justify-start gap-2">
                  <span className="md:hidden text-slate-400 font-extrabold text-xs uppercase mr-1.5 flex-shrink-0">Age/Grade:</span>
                  {b.age}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hall of Fame / Toppers Gallery */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-24 bg-gradient-to-b from-purple-500/5 to-indigo-500/5 p-8 sm:p-12 rounded-[32px] border border-slate-100">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <Trophy className="w-12 h-12 text-accent mx-auto fill-accent animate-pulse" />
          <h2 className="text-3xl font-extrabold text-primary font-serif">Academy Toppers</h2>
          <p className="text-slate-500 font-semibold">Honoring the exceptional achievements of our students in national examinations.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 text-center shadow-sm relative group hover:-translate-y-1 transition-all duration-300">
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-white shadow-md mb-4 group-hover:scale-105 transition-transform" />
              <h4 className="font-extrabold text-primary text-base">{t.name}</h4>
              <div className="text-indigo-600 font-extrabold text-xs mt-1 uppercase tracking-wider">{t.rank}</div>
              <div className="inline-block mt-3 text-[11px] font-extrabold text-slate-400 bg-slate-50 border px-3 py-1 rounded-md">{t.score}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Elite Coaching Programs catalog */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-24">
        <h2 className="text-3xl font-extrabold text-primary mb-4 font-serif">Curated Learning Tracks</h2>
        <p className="text-slate-500 font-semibold mb-12">Adhering to certified benchmarks and national exams frameworks.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((pkg, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative">
              <span className="absolute top-6 right-8 text-slate-100 font-extrabold text-6xl select-none pointer-events-none">0{i+1}</span>
              <div className="inline-block px-3 py-1 rounded-md bg-purple-50 text-purple-600 text-[11px] font-extrabold uppercase tracking-wider mb-4">{pkg.category}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{pkg.name}</h3>
              <p className="text-slate-500 font-semibold text-xs leading-relaxed mb-6">{pkg.desc}</p>
              <div className="flex justify-between items-center border-t border-slate-100 pt-4 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> Duration: {pkg.duration}</div>
                <div className="flex items-center gap-1 text-accent"><Trophy className="w-4 h-4 fill-accent" /> {pkg.rank}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admissions Inquiry */}
      <div id="admissions" className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-white border border-slate-100 shadow-xl rounded-[32px] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider">Admissions Open 2026-27</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-serif leading-tight">
              Begin Your Ward's Learning Journey
            </h2>
            <p className="text-slate-500 font-semibold leading-relaxed">
              Schedule a private campus tour, request prospectus catalogs, or book an entry screening diagnostics test. Fill out the application, and we will connect.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl"><Calendar className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-extrabold text-primary text-sm">Admissions Helpline</h4>
                  <p className="text-xs font-semibold text-slate-400">Consult with counselors Mon-Sat 9 AM - 5 PM.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-2xl"><MapPin className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-extrabold text-primary text-sm">Main Campus Location</h4>
                  <p className="text-xs font-semibold text-slate-400">Old Post Office Road, Surathkal, Mangaluru.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center space-y-4 py-16 animate-in zoom-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-emerald-800">Inquiry Logged!</h3>
                <p className="text-emerald-700 font-semibold text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you! We have successfully received the enrollment query for {formData.studentName}. Our student academic counselor from the {formData.location} will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Student Name</label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. John Miller"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-purple-500 font-semibold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Student Age</label>
                    <input
                      type="number"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="e.g. 15"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-purple-500 font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Select Campus</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-purple-500 font-semibold"
                    >
                      <option>Surathkal Campus</option>
                      <option>Mangaluru Main City Campus</option>
                      <option>Udupi Extension Branch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Select Program Track</label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-purple-500 font-semibold"
                  >
                    <option>IIT-JEE Prep Batch</option>
                    <option>NEET Intensive Foundation</option>
                    <option>Preschool Admission</option>
                    <option>Primary School Admission</option>
                    <option>Trinity College Music Session</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary hover:bg-primary-light text-white text-base font-bold transition-all shadow-md shadow-primary/20 hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-5 h-5" />
                  Submit Admission Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

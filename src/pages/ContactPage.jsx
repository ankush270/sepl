import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General Support', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Support', message: '' });
    }, 4000);
  };

  const contactChannels = [
    { title: 'Registered Office HQ', desc: '#5-21/1, Sapthagiri, Old Post Office Road, Surathkal, Mangaluru, Dakshina Kannada - 575014, Karnataka, India', icon: MapPin, color: 'text-indigo-600 bg-indigo-50' },
    { title: 'Phone Call Support', desc: '+91 95381 07758', link: 'tel:+919538107758', icon: Phone, color: 'text-emerald-600 bg-emerald-50' },
    { title: 'Official Email Channels', desc: 'akshath_surathkal@yahoo.com', link: 'mailto:akshath_surathkal@yahoo.com', icon: Mail, color: 'text-cyan-600 bg-cyan-50' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 text-left animate-in fade-in duration-300">
      
      {/* Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-primary via-primary-light to-primary p-8 sm:p-12 lg:p-16 shadow-xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif leading-tight">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-semibold leading-relaxed max-w-xl">
              We look forward to collaborating with you. Send us your queries, feedback, or scheduling requests.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
        
        {/* Contact Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="space-y-6">
            {contactChannels.map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <div className={`p-3.5 rounded-2xl ${item.color} flex-shrink-0`}>
                  <item.icon className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[14.5px] text-slate-400 uppercase tracking-wider mb-1.5">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-base sm:text-lg font-bold text-primary hover:text-accent transition-colors block">{item.desc}</a>
                  ) : (
                    <p className="text-base sm:text-lg font-bold text-primary leading-snug">{item.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 flex gap-4 items-center">
            <Clock className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-sm font-semibold text-primary/80 leading-relaxed">
              Standard operating hours are Mon-Sat, 9:00 AM - 6:00 PM IST. We strive to reply within 24 hours.
            </p>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-[32px] p-8 sm:p-10 shadow-md">
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center space-y-4 py-20 animate-in zoom-in duration-300">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
              <h3 className="text-2xl font-bold text-emerald-800">Message Sent!</h3>
              <p className="text-emerald-700 font-semibold text-sm max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}! We have received your query regarding "{formData.subject}". Our support officer will write back to you shortly at {formData.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-2xl font-bold text-primary mb-6">Write to Us</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Walter White"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-slate-700 font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. walter@gmail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-slate-700 font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 95381 07758"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-slate-700 font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Inquiry Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-slate-700 font-semibold"
                  >
                    <option>General Support</option>
                    <option>Partner Collaborations</option>
                    <option>Feedback & Suggestions</option>
                    <option>Business Consultations</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter detailed message regarding your collaborations or suggestions..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-slate-700 font-semibold h-32"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary-light text-white text-base font-bold transition-all shadow-md shadow-primary/20 hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Interactive Map */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl font-extrabold text-primary mb-4">Find Us In Surathkal</h2>
        <p className="text-slate-500 font-semibold mb-8">Locate our corporate headquarters on the interactive map.</p>
        <div className="w-full h-[450px] rounded-[32px] overflow-hidden border border-slate-200 shadow-lg relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.893116812853!2d74.7797746148221!3d13.003923390834479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a09adfb5317%3A0xe543dfa2f6fb2a06!2sOld%20Post%20Office%20Rd%2C%20Surathkal%2C%20Mangaluru%2C%20Karnataka%20575014!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            title="SEPL Corporate Headquarters Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
}

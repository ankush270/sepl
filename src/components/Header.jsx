import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'Healthcare', path: '/services#healthcare'},
    { name: 'Education', path: '/services#education'},
    { name: 'Business', path: '/services#business'},
    { name: 'Lifestyle', path: '/services#lifestyle'},
    { name: 'Real Estate', path: '/services#realestate'},
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glassmorphism border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          {/* <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-1.5 group">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-primary">
                SEPL<span className="text-accent">.CO</span>
              </span>
            </Link>
          </div> */}
          <img src="logo.png" alt="logo" width={150} height={150}/>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-4 items-center">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className="flex items-center gap-1 px-3.5 py-2 rounded-full text-[15px] font-medium text-slate-700 hover:text-primary hover:bg-slate-100/60 transition-all duration-200"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-primary transition-transform duration-250 group-hover:rotate-180" />
                  )}
                </Link>
                
                {/* Visual dropdown on hover */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl py-3 px-2 flex flex-col gap-1 transition-all duration-200 origin-top scale-95 opacity-0 animate-in fade-in slide-in-from-top-1 scale-100 opacity-100">
                    <Link to={link.path} className="px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors">
                      Overview
                    </Link>
                    <Link to={link.path} className="px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors">
                      Services
                    </Link>
                    <Link to={link.path} className="px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors">
                      Resources
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Icons & CTAs */}
          <div className="hidden md:flex items-center gap-4">


            {/* Get Started Button */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-semibold text-white bg-primary hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">

            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full text-slate-600 hover:text-primary hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glassmorphism border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-primary hover:bg-slate-100 transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between px-4">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-white bg-primary hover:bg-primary-light"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

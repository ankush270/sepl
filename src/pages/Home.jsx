import React from 'react';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import Testimonials from '../components/Testimonials';
import Founder from '../components/Founder';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-300">
      <Hero />
      <ServicesGrid />
      <Testimonials />
      <Founder />
      <Contact />
    </div>
  );
}

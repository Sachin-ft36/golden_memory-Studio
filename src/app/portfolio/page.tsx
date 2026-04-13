'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import wedding1 from '@/assets/portfolio/wedding-1.jpg';
import portrait1 from '@/assets/portfolio/portrait-1.jpg';
import event1 from '@/assets/portfolio/event-1.jpg';

const projects = [
  { title: 'Eternal Vows', category: 'Weddings', image: wedding1.src, size: 'large' },
  { title: 'The Modern Muse', category: 'Portraits', image: portrait1.src, size: 'medium' },
  { title: 'Metropolitan Night', category: 'Events', image: event1.src, size: 'medium' },
  { title: 'Golden Hour', category: 'Weddings', image: wedding1.src, size: 'medium' },
  { title: 'Shadow & Light', category: 'Portraits', image: portrait1.src, size: 'large' },
  { title: 'Grand Gala', category: 'Events', image: event1.src, size: 'medium' },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          {/* Top Line */}
          <div
            className="h-[1px] w-20 mb-6"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          />

          {/* Heading */}
          <h1
            className="text-5xl md:text-7xl font-bold tracking-[0.1em] uppercase mb-6 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Portfolio
          </h1>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base tracking-[0.1em] font-light leading-relaxed max-w-2xl text-center">
            Capturing the essence of moments through a cinematic lens. Our work is a testament to storytelling and visual excellence.
          </p>

          {/* Bottom Line */}
          <div
            className="h-[1px] w-20 mt-8"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          />
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
              style={{
                opacity: 0,
                animation: `fadeSlideUp 0.6s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <div className={project.size === 'large' ? 'aspect-[3/4]' : 'aspect-[4/3]'}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span
                  className="text-[10px] uppercase tracking-[0.3em] font-medium mb-2"
                  style={{ color: '#c9a84c' }}
                >
                  {project.category}
                </span>
                <h3
                  className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {project.title}
                </h3>
                <div
                  className="h-[2px] w-12 mt-4 transition-all duration-500 group-hover:w-20"
                  style={{ background: 'linear-gradient(90deg, #c9a84c, #f0d080)' }}
                />
              </div>

              {/* Border hover */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.3)' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/10 flex justify-center">
        <div className="max-w-2xl w-full flex flex-col items-center text-center px-6">

          {/* Top Line */}
          <div
            className="h-[1px] w-20 mb-10"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          />

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-bold tracking-[0.1em] uppercase mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to capture your own story?
          </h2>

          {/* Button */}
          <Link href="/contact">
            <button
              className="mt-6 px-10 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #b8903e 100%)',
                color: '#000',
                boxShadow: '0 4px 20px -4px rgba(201,168,76,0.4)',
              }}
            >
              Book Your Session
            </button>
          </Link>
        </div>
      </section>

      {/* Animation */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
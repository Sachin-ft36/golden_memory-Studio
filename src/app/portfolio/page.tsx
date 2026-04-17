'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import wedding1 from '@/assets/portfolio/wedding-1.jpg';
import portrait1 from '@/assets/portfolio/portrait-1.jpg';
import event1 from '@/assets/portfolio/event-1.jpg';

const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Editorial'];

const projects = [
  { title: 'Eternal Vows', category: 'Weddings', image: wedding1.src, size: 'large' },
  { title: 'The Modern Muse', category: 'Portraits', image: portrait1.src, size: 'medium' },
  { title: 'Metropolitan Night', category: 'Events', image: event1.src, size: 'medium' },
  { title: 'Golden Hour', category: 'Weddings', image: wedding1.src, size: 'medium' },
  { title: 'Shadow & Light', category: 'Portraits', image: portrait1.src, size: 'large' },
  { title: 'Grand Gala', category: 'Events', image: event1.src, size: 'medium' },
  { title: 'Urban Chic', category: 'Editorial', image: portrait1.src, size: 'large' },
  { title: 'Silent Moments', category: 'Portraits', image: portrait1.src, size: 'medium' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#c9a84c]/10 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c9a84c]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#c9a84c]">Our Archives</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c9a84c]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-9xl font-bold tracking-tight uppercase mb-8 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Portfolio
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl text-center"
          >
            Capturing the essence of moments through a cinematic lens. Our work is a testament to storytelling and visual excellence.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-20 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-4 md:gap-12">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative py-2 text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-500 ${
                activeCategory === cat ? 'text-[#c9a84c]' : 'text-white/30 hover:text-white/60'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#c9a84c]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer bg-white/5"
              >
                <div className={project.size === 'large' ? 'aspect-[3/4]' : 'aspect-[4/5]'}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-[10px] uppercase tracking-[0.4em] font-bold mb-3 text-[#c9a84c]"
                  >
                    {project.category}
                  </motion.span>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold tracking-tight uppercase leading-none mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {project.title}
                  </motion.h3>
                  <div className="h-[1px] w-0 bg-[#c9a84c] group-hover:w-full transition-all duration-700 delay-100" />
                </div>

                {/* Glass Border */}
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/10 transition-colors duration-700" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-20 noise" />
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-6 relative z-10">
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-12 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to tell your <br/>story with us?
          </h2>

          <Link href="/contact">
            <button
              className="group relative px-12 py-5 rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#c9a84c] via-[#f0d080] to-[#c9a84c] transition-transform duration-500 group-hover:scale-110" />
              <span className="relative text-black text-[11px] font-black uppercase tracking-[0.4em]">
                Secure Your Date
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
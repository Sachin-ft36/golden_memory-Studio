'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import { Camera, Video, Users, Heart, Star, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Wedding Photography',
    description: 'Capturing the love, joy, and every intimate detail of your special day with a cinematic and emotional approach.',
    features: ['Full day coverage', 'Premium retouching', 'Online gallery', 'Print-ready files'],
    icon: <Heart className="w-8 h-8" style={{ color: '#c9a84c' }} />,
    price: 'Starting at $2,500'
  },
  {
    title: 'Cinematic Films',
    description: 'Breathtaking videography that tells your story through movement, sound, and professional color grading.',
    features: ['4K Highlight film', 'Full ceremony edit', 'Drone footage', 'Licensed music'],
    icon: <Video className="w-8 h-8" style={{ color: '#c9a84c' }} />,
    price: 'Starting at $3,500'
  },
  {
    title: 'Studio Portraits',
    description: 'High-end portraiture for individuals, families, and professionals in a controlled lighting environment.',
    features: ['Professional lighting', 'Multiple outfits', 'Creative direction', 'Premium editing'],
    icon: <Users className="w-8 h-8" style={{ color: '#c9a84c' }} />,
    price: 'Starting at $500'
  }
];

const ServicesPage = () => {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050505] text-white pb-20">
        <Navbar />
        
        <header className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4" style={{ color: '#c9a84c' }} />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/50">Our Expertise</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-medium tracking-tighter mb-6 font-serif"
            style={{ color: '#c9a84c' }}
          >
            Services
          </motion.h1>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
            From intimate moments to large-scale productions, we offer a range of cinematic services tailored to your unique story.
          </p>
        </header>

        <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
           {services.map((service, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               whileHover={{ y: -10 }}
               className="p-10 rounded-3xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all group"
             >
               <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                  {service.icon}
               </div>
               <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
               <p className="text-white/60 mb-8 text-lg font-light leading-relaxed">
                 {service.description}
               </p>
               <ul className="space-y-4 mb-10">
                 {service.features.map((feature, fIndex) => (
                   <li key={fIndex} className="flex items-center gap-3 text-white/80">
                      <Star className="w-4 h-4 text-accent-secondary" />
                      <span>{feature}</span>
                   </li>
                 ))}
               </ul>
               <div className="pt-10 border-t border-white/5">
                  <p className="text-sm uppercase tracking-widest text-white/40 mb-2">Package</p>
                  <p className="text-2xl font-bold text-accent-secondary">{service.price}</p>
               </div>
             </motion.div>
           ))}
        </section>

        <section className="mt-40 px-6 max-w-7xl mx-auto text-center py-40 rounded-[4rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10">
           <h2 className="text-5xl md:text-6xl font-medium mb-10 tracking-tight opacity-90 font-serif" style={{ color: '#c9a84c' }}>
             "Every frame is a story <br/> waiting to be told."
           </h2>
           <p className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase mb-12">We don’t just take photos; we create legacies.</p>
           <button 
             className="px-12 py-5 rounded-full font-bold text-black text-[11px] uppercase tracking-[0.3em] transition-all hover:scale-105"
             style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #b8903e 100%)' }}
           >
             Unlock Your Legacy
           </button>
        </section>
      </main>
    </SmoothScroll>
  );
};

export default ServicesPage;

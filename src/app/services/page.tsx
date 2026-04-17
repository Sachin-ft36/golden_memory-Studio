'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import { Star, Sparkles, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Wedding Photography',
    subtitle: 'Timeless Stories',
    description: 'Capturing the love, joy, and every intimate detail of your special day with a cinematic and emotional approach. We focus on the unspoken moments that make your story unique.',
    features: ['10+ Hours Coverage', 'Two Lead Photographers', '4K Digital Gallery', 'Custom Heirloom Album'],
    image: '/assets/services/wedding.png',
    price: 'Starting at $2,500',
    align: 'left'
  },
  {
    title: 'Cinematic Films',
    subtitle: 'Motion Narrative',
    description: 'Breathtaking videography that tells your story through movement, sound, and professional color grading. Experience your memories in a high-definition cinematic format.',
    features: ['4K Highlight Film', 'Full Ceremony Edit', 'Drone Cinematography', 'Licensed Soundtracks'],
    image: '/assets/services/cinema.png',
    price: 'Starting at $3,500',
    align: 'right'
  },
  {
    title: 'Studio Portraits',
    subtitle: 'The Editorial Look',
    description: 'High-end portraiture for individuals and professionals. We create an atmosphere where your personality shines through dramatic lighting and creative direction.',
    features: ['All-Day Studio Access', 'Professional Retouching', 'Multiple Look Changes', 'Commercial Usage Rights'],
    image: '/assets/services/portrait.png',
    price: 'Starting at $500',
    align: 'left'
  }
];

const processSteps = [
  { number: '01', title: 'Consultation', description: 'We meet to discuss your vision, style, and the unique story you want to tell.' },
  { number: '02', title: 'Preparation', description: 'Location scouting, creative direction, and timeline planning for a seamless experience.' },
  { number: '03', title: 'The Shoot', description: 'Our expert team captures every detail with precision and artistic flair.' },
  { number: '04', title: 'Post-Production', description: 'Careful selection and hand-crafted editing to bring your story to life.' },
  { number: '05', title: 'Delivery', description: 'Your memories delivered in a premium digital gallery and custom keepsakes.' },
];

const ServicesPage = () => {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050505] text-white pb-[40vh]">
        <Navbar />
        
        {/* Hero Header */}
        <header className="pt-64 pb-32 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#c9a84c]/5 blur-[120px] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-12"
          >
            <Sparkles className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/60">The Golden Standard</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-bold tracking-tight mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Services
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/40 font-light max-w-3xl mx-auto leading-relaxed text-center"
          >
            We offer more than just photography. We provide a cinematic experience tailored to the most significant chapters of your life.
          </motion.p>
        </header>

        {/* Services Sections */}
        <section className="space-y-40 px-6 max-w-[1400px] mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${service.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/5 relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute bottom-10 right-10 z-20 px-6 py-4 backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl">
                    <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/40 mb-1">Package</p>
                    <p className="text-lg font-bold text-[#c9a84c]">{service.price}</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute -inset-4 border border-[#c9a84c]/20 rounded-[3rem] -z-10 group-hover:inset-0 transition-all duration-700`} />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <span className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-[0.5em] block mb-4">
                    {service.subtitle}
                  </span>
                  <h2 
                    className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-xl text-white/50 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-4 text-white/70">
                       <div className="w-5 h-5 rounded-full bg-[#c9a84c]/10 flex items-center justify-center border border-[#c9a84c]/20">
                          <Check className="w-3 h-3 text-[#c9a84c]" />
                       </div>
                       <span className="text-sm tracking-wide font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <button className="mt-8 flex items-center gap-4 group">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Inquire About This Service</span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#c9a84c] group-hover:border-[#c9a84c] transition-all">
                      <ArrowRight className="w-4 h-4 group-hover:text-black transition-colors" />
                    </div>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Process Section */}
        <section className="mt-64 bg-[#0A0A0C] py-40 border-y border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 noise" />
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-24">
                 <h2 
                   className="text-5xl md:text-7xl font-bold mb-8"
                   style={{ fontFamily: "'Cormorant Garamond', serif" }}
                 >
                   The Masterpiece <br/> Workflow
                 </h2>
                 <p className="text-white/40 text-[10px] font-bold tracking-[0.5em] uppercase">How we create magic</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
                 {processSteps.map((step, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: idx * 0.1 }}
                     className="space-y-6"
                   >
                     <p className="text-4xl font-bold text-[#c9a84c]/20 font-serif leading-none">{step.number}</p>
                     <h3 className="text-lg font-bold tracking-tight uppercase">{step.title}</h3>
                     <p className="text-sm text-white/40 font-light leading-relaxed">{step.description}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Closing CTA */}
        <section className="py-64 text-center px-6">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="max-w-4xl mx-auto space-y-12"
           >
              <h2 
                className="text-5xl md:text-7xl font-bold tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "Every frame is a story <br/> waiting to be told."
              </h2>
              <p className="text-white/40 text-[11px] font-bold tracking-[0.5em] uppercase">Join the legacy of Golden Memory Studio</p>
              <Link href="/contact">
                <button 
                  className="px-16 py-6 rounded-full font-black text-black text-[12px] uppercase tracking-[0.4em] transition-all hover:scale-105 active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #b8903e 100%)' }}
                >
                  Start Your Journey
                </button>
              </Link>
           </motion.div>
        </section>
      </main>
    </SmoothScroll>
  );
};

export default ServicesPage;

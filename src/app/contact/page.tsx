'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import { Mail, Phone, MapPin, Send, Film, PlaySquare, CheckCircle2 } from 'lucide-react';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    event: 'Wedding',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const InputField = ({ label, type, name, required = false, placeholder, isTextArea = false }: any) => {
    return (
      <div className="flex flex-col gap-4 group">
        <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#c9a84c] ml-1">
          {label}
        </label>
        <div className="relative">
          {isTextArea ? (
            <textarea
              required={required}
              placeholder={placeholder}
              rows={5}
              onChange={(e) => setFormState({ ...formState, [name]: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 focus:border-[#c9a84c]/50 focus:bg-[#c9a84c]/5 focus:outline-none transition-all text-white placeholder:text-white/10 resize-none font-light"
            />
          ) : (
            <input
              type={type}
              required={required}
              placeholder={placeholder}
              onChange={(e) => setFormState({ ...formState, [name]: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-6 focus:border-[#c9a84c]/50 focus:bg-[#c9a84c]/5 focus:outline-none transition-all text-white placeholder:text-white/10 font-light"
            />
          )}
          <div className="absolute inset-0 rounded-full border border-[#c9a84c]/0 group-focus-within:border-[#c9a84c]/20 pointer-events-none transition-all duration-500 scale-[1.02]" />
        </div>
      </div>
    );
  };

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050505] text-white pb-[30vh]">
        <Navbar />

        {/* Hero Section */}
        <header className="pt-64 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#c9a84c]/5 blur-[150px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-12"
          >
            <Send className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/50">Inquire Now</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-bold tracking-tight mb-8 leading-none"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Let’s Capture <br /> Your Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/40 font-light max-w-2xl mx-auto leading-relaxed text-center"
          >
            Available for worldwide commissions. Reach out to discuss your next project, wedding, or event.
          </motion.p>
        </header>

        <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-16"
          >
            <div className="space-y-12">
               <div>
                  <h3 className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-[0.5em] mb-8">Contact Info</h3>
                  <div className="space-y-12">
                    <div className="group cursor-pointer">
                      <p className="text-[9px] text-white/30 uppercase tracking-[0.5em] mb-4">Electronic Mail</p>
                      <p className="text-xl font-light tracking-tight group-hover:text-[#c9a84c] transition-colors">hello@goldenmemory.studio</p>
                    </div>

                    <div className="group cursor-pointer">
                      <p className="text-[9px] text-white/30 uppercase tracking-[0.5em] mb-4">Voice Call</p>
                      <p className="text-xl font-light tracking-tight group-hover:text-[#c9a84c] transition-colors">+1 (555) 0123-4567</p>
                    </div>

                    <div className="group cursor-pointer">
                      <p className="text-[9px] text-white/30 uppercase tracking-[0.5em] mb-4">Studio Location</p>
                      <p className="text-xl font-light tracking-tight group-hover:text-[#c9a84c] transition-colors leading-snug">Civil Lines, Rewa <br/> MP, India</p>
                    </div>
                  </div>
               </div>

               <div className="pt-12 border-t border-white/5">
                  <h3 className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-[0.5em] mb-8">Follow The Journey</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition-all">
                      <Film className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition-all">
                      <PlaySquare className="w-6 h-6" />
                    </a>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Redesigned Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit} 
                  className="bg-white/[0.01] border border-white/5 rounded-[4rem] p-10 md:p-20 backdrop-blur-3xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    <InputField label="Full Name" type="text" name="name" required placeholder="Johnathan Doe" />
                    <InputField label="Email Address" type="email" name="email" required placeholder="john@studio.com" />
                    
                    <div className="flex flex-col gap-4 group">
                       <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#c9a84c] ml-1">Event Type</label>
                       <div className="relative">
                         <select
                           onChange={(e) => setFormState({ ...formState, event: e.target.value })}
                           className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-6 focus:border-[#c9a84c]/50 focus:bg-[#c9a84c]/5 focus:outline-none transition-all text-white font-light appearance-none cursor-pointer"
                         >
                           <option className="bg-black">Wedding Archive</option>
                           <option className="bg-black">Editorial Session</option>
                           <option className="bg-black">Commercial Commission</option>
                           <option className="bg-black">Private Event</option>
                         </select>
                         <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                           <Film className="w-4 h-4" />
                         </div>
                       </div>
                    </div>
                    <InputField label="Expected Date" type="date" name="date" />

                    <div className="md:col-span-2">
                       <InputField label="Detailed Narrative" name="message" required placeholder="Tell us your story..." isTextArea={true} />
                    </div>

                    <button
                      type="submit"
                      className="md:col-span-2 h-24 rounded-full relative group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] group-hover:scale-105 transition-transform duration-700" />
                      <div className="relative flex items-center justify-center gap-6 text-black font-black text-[13px] uppercase tracking-[0.6em]">
                        <Send className="w-5 h-5" />
                        <span>Dispatch Inquiry</span>
                      </div>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/[0.01] border border-white/5 rounded-[4rem] p-40 text-center space-y-10"
                >
                   <div className="w-24 h-24 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-[#c9a84c]" />
                   </div>
                   <h2 className="text-5xl font-bold font-serif">Inquiry Received</h2>
                   <p className="text-white/40 max-w-md mx-auto leading-relaxed">
                     Thank you for trusting Golden Memory Studio. A curator will reach out within 24 hours.
                   </p>
                   <button 
                     onClick={() => setIsSubmitted(false)}
                     className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c9a84c]"
                   >
                     Send Another Message
                   </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Map Section */}
        <section className="px-6 max-w-screen-2xl mx-auto mt-64 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[700px] rounded-[5rem] overflow-hidden border border-white/5 relative grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl shadow-[#c9a84c]/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.665427183!2d81.3005277!3d24.5428055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMyJzM0LjEiTiA4McKwMTgnMDEuOSJF!5e0!3m2!1sen!2sin!4v1712415000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
            
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            
            <div className="absolute bottom-16 left-16 p-12 backdrop-blur-3xl bg-black/60 border border-white/10 rounded-[3rem] max-w-md hidden md:block">
               <h4 className="text-[10px] font-bold text-[#c9a84c] uppercase tracking-[0.5em] mb-6">HQ Coordinates</h4>
               <p className="text-2xl font-bold mb-4 font-serif">Rewa, India</p>
               <p className="text-sm text-white/40 font-light leading-relaxed">Available for worldwide commissions. We specialize in international destination weddings.</p>
            </div>
          </motion.div>
          
          <div className="mt-12 flex items-center justify-between px-20 text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase">
            <span>24.5428° N, 81.3005° E</span>
            <span className="text-[#c9a84c]/60">Golden Memory Studio &copy; {new Date().getFullYear()}</span>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
};

export default ContactPage;

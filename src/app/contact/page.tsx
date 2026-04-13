'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import { Mail, Phone, MapPin, Send, Film, PlaySquare } from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    event: 'Wedding',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Golden Memory Studio will get back to you shortly.');
  };

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050505] text-white pb-20">
        <Navbar />


        <header className="pt-64 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

            className="text-7xl md:text-8xl font-medium tracking-tighter mb-6 font-serif text-center"
            style={{ color: '#c9a84c' }}
          >
            Let’s Capture <br /> Your Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}

            className="text-xl text-white/40 font-light max-w-2xl mx-auto"
          >
            Available for worldwide commissions. Reach out to discuss your next project, wedding, or event.
          </motion.p>
        </header>

        <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-10">
              <h3 className="text-[11px] font-bold opacity-80 uppercase tracking-[0.4em]" style={{ color: '#c9a84c' }}>Contact Details</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-[#c9a84c]/50 group-hover:bg-[#c9a84c]/5 transition-all">
                    <Mail className="w-6 h-6" style={{ color: '#c9a84c' }} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-1">Email Us</p>
                    <p className="text-xl font-light tracking-tight">hello@goldenmemory.studio</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-[#c9a84c]/50 group-hover:bg-[#c9a84c]/5 transition-all">
                    <Phone className="w-6 h-6" style={{ color: '#c9a84c' }} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-1">Call Us</p>
                    <p className="text-xl font-light tracking-tight">+1 (555) 0123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-[#c9a84c]/50 group-hover:bg-[#c9a84c]/5 transition-all">
                    <MapPin className="w-6 h-6" style={{ color: '#c9a84c' }} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-1">Our Studio</p>
                    <p className="text-xl font-light tracking-tight">Civil Lines, Rewa, MP, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10 pt-10 border-t border-white/5">
              <h3 className="text-[11px] font-bold opacity-80 uppercase tracking-[0.4em]" style={{ color: '#c9a84c' }}>Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group">
                  <Film className="w-6 h-6 group-hover:text-[#c9a84c] transition-colors" />
                </a>
                <a href="#" className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group">
                  <PlaySquare className="w-6 h-6 group-hover:text-[#c9a84c] transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Full Name</label>
                  <input
                    type="text" required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#c9a84c] focus:outline-none transition-colors text-white placeholder:text-white/20"
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Email Address</label>
                  <input
                    type="email" required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#c9a84c] focus:outline-none transition-colors text-white placeholder:text-white/20"
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Event Type</label>
                  <div className="relative">
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#c9a84c] focus:outline-none transition-colors appearance-none text-white"
                      onChange={(e) => setFormState({ ...formState, event: e.target.value })}
                    >
                      <option className="bg-black">Wedding</option>
                      <option className="bg-black">Portrait Session</option>
                      <option className="bg-black">Commercial</option>
                      <option className="bg-black">Event</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Event Date</label>
                  <input
                    type="date"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#c9a84c] focus:outline-none transition-colors text-white"
                    onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Your Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your story..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#c9a84c] focus:outline-none transition-colors resize-none text-white placeholder:text-white/20"
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 rounded-2xl font-bold text-black text-[11px] uppercase tracking-[0.4em] flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #b8903e 100%)' }}
              >
                <Send className="w-4 h-4" />
                <span>Send Inquiry</span>
              </button>
            </form>
          </motion.div>
        </section>

        {/* Map Section */}
        <section className="px-6 max-w-7xl mx-auto mt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[600px] rounded-[4rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-3xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.665427183!2d81.3005277!3d24.5428055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMyJzM0LjEiTiA4McKwMTgnMDEuOSJF!5e0!3m2!1sen!2sin!4v1712415000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between px-12 text-white/30 text-[10px] font-bold tracking-[0.4em] uppercase gap-4">
            <span>Studio Coordinates: 24.5428° N, 81.3005° E</span>
            <span style={{ color: '#c9a84c' }}>Open for Worldwide Commissions</span>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
};

export default ContactPage;

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import Image from 'next/image';
import { X, ZoomIn, Camera, Maximize2, Share2, Info } from 'lucide-react';

const collections = ['All', 'Romance', 'Editorial', 'After Dark', 'Atmospheric'];

const galleryImages = [
  { src: '/assets/services/1.jpg', alt: 'Velvet Whispers', collection: 'Romance', location: 'Paris, France', gear: 'Sony A7R IV | 50mm f/1.2' },
  { src: '/assets/services/2.jpg', alt: 'Urban Symmetry', collection: 'Editorial', location: 'Berlin, Germany', gear: 'Fuji GFX 100S | 45mm' },
  { src: '/assets/services/3.jpg', alt: 'Silent Peaks', collection: 'Atmospheric', location: 'Swiss Alps', gear: 'Leica M11 | 35mm f/1.4' },
  { src: '/assets/services/4.jpg', alt: 'Neon Pulse', collection: 'After Dark', location: 'Seoul, South Korea', gear: 'Sony A7S III | 24mm f/1.4' },
  { src: '/assets/services/5.jpg', alt: 'Chiaroscuro', collection: 'Editorial', location: 'Florence, Italy', gear: 'Canon R5 | 85mm f/1.2' },
  { src: '/assets/services/6.jpg', alt: 'Azure Dreams', collection: 'Romance', location: 'Santorini, Greece', gear: 'Nikon Z9 | 35mm' },
  { src: '/assets/services/7.jpg', alt: 'Mist & Memory', collection: 'Atmospheric', location: 'Scottish Highlands', gear: 'Hasselblad X2D' },
  { src: '/assets/services/8.webp', alt: 'Golden Hour', collection: 'Romance', location: 'Tuscany, Italy', gear: 'Sony A7R V' },
  { src: '/assets/services/9.webp', alt: 'Midnight Muse', collection: 'After Dark', location: 'London, UK', gear: 'Sony FX3' },
  { src: '/assets/services/10.webp', alt: 'Ethereal Light', collection: 'Atmospheric', location: 'Iceland', gear: 'Phase One XF' },
  { src: '/assets/services/11.webp', alt: 'Urban Echo', collection: 'Editorial', location: 'Tokyo, Japan', gear: 'Leica Q3' },
  { src: '/assets/services/12.webp', alt: 'Eternal Bloom', collection: 'Romance', location: 'Kyoto, Japan', gear: 'Canon R3' },
  { src: '/assets/services/13.webp', alt: 'Shadow Play', collection: 'After Dark', location: 'New York, USA', gear: 'Nikon Z8' },
  { src: '/assets/services/14.jpg', alt: 'Coastal Calm', collection: 'Atmospheric', location: 'Amalfi Coast', gear: 'Sony A7R IV' },
  { src: '/assets/services/15.webp', alt: 'Modern Grace', collection: 'Editorial', location: 'Milan, Italy', gear: 'Fujifilm GFX' },
  { src: '/assets/services/16.webp', alt: 'Sunset Soul', collection: 'Romance', location: 'Bali, Indonesia', gear: 'Leica M11' },
  { src: '/assets/services/17.jpg', alt: 'City Lights', collection: 'After Dark', location: 'Hong Kong', gear: 'Sony A7S III' },
  { src: '/assets/services/18.webp', alt: 'Mountain Majesty', collection: 'Atmospheric', location: 'Canadian Rockies', gear: 'Canon R5' },
  { src: '/assets/services/19.webp', alt: 'Reflective Mood', collection: 'Editorial', location: 'Stockholm, Sweden', gear: 'Nikon Z9' },
  { src: '/assets/services/20.webp', alt: 'Secret Garden', collection: 'Romance', location: 'Provence, France', gear: 'Sony A1' },
  { src: '/assets/services/21.webp', alt: 'Night Crawler', collection: 'After Dark', location: 'Singapore', gear: 'Panasonic S1H' },
  { src: '/assets/services/22.webp', alt: 'Whimsical Way', collection: 'Atmospheric', location: 'New Zealand', gear: 'Leica SL2' },
  { src: '/assets/services/23.webp', alt: 'Studio Story', collection: 'Editorial', location: 'Chicago, USA', gear: 'Hasselblad 907X' },
  { src: '/assets/services/24.jpg', alt: 'Timeless Love', collection: 'Romance', location: 'Vienna, Austria', gear: 'Sony A9 III' }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeCollection, setActiveCollection] = useState('All');

  const filteredImages = galleryImages.filter(img => 
    activeCollection === 'All' || img.collection === activeCollection
  );

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050505] text-white pb-40">
        <Navbar />
        
        {/* Header Section */}
        <header className="pt-64 pb-32 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#c9a84c]/5 blur-[150px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-12"
          >
            <Camera className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/50">Curated Collections</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-bold tracking-tight mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/40 font-light max-w-3xl mx-auto leading-relaxed text-center"
          >
            Explore our visual journey through light, shadow, and human connection. Each collection is a distinct narrative of moments frozen in time.
          </motion.p>
        </header>

        {/* Collections Filter */}
        <nav className="mb-24 px-6 sticky top-24 z-50">
           <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-4 md:gap-16 py-6 backdrop-blur-3xl bg-black/40 border border-white/5 rounded-full px-12">
              {collections.map((coll) => (
                <button
                  key={coll}
                  onClick={() => setActiveCollection(coll)}
                  className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-all relative py-2 ${
                    activeCollection === coll ? 'text-[#c9a84c]' : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  {coll}
                  {activeCollection === coll && (
                    <motion.div 
                      layoutId="galleryFilterActive"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c9a84c]"
                    />
                  )}
                </button>
              ))}
           </div>
        </nav>

        {/* Gallery Grid */}
        <section className="px-6 max-w-screen-2xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  layout
                  key={image.alt + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="relative group aspect-square cursor-pointer overflow-hidden rounded-[2rem] bg-white/5"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                     <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#c9a84c] mb-2">{image.collection}</p>
                     <p className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{image.alt}</p>
                     <div className="mt-4 flex items-center gap-4">
                        <ZoomIn className="w-4 h-4 text-white/40" />
                        <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">Explore Frame</span>
                     </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Enhanced Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] flex flex-col md:flex-row bg-[#050505] p-6 gap-8 overflow-hidden"
              onClick={() => setSelectedImage(null)}
            >
               {/* Image Side */}
               <motion.div 
                 initial={{ scale: 0.95, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 className="relative flex-1 h-full rounded-[3rem] overflow-hidden"
                 onClick={(e) => e.stopPropagation()}
               >
                  <Image 
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover"
                  />
                  <button 
                    className="absolute top-10 right-10 p-5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-[#c9a84c] hover:text-black transition-all"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="w-6 h-6" />
                  </button>
               </motion.div>

               {/* Details Side */}
               <motion.aside 
                 initial={{ x: 50, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 className="w-full md:w-[400px] flex flex-col justify-between py-10 px-4"
                 onClick={(e) => e.stopPropagation()}
               >
                  <div className="space-y-12">
                     <div>
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#c9a84c] block mb-4">Masterpiece Detail</span>
                        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                           {selectedImage.alt}
                        </h2>
                        <p className="text-white/40 font-light flex items-center gap-3">
                           <Info className="w-4 h-4" />
                           {selectedImage.location}
                        </p>
                     </div>

                     <div className="space-y-8 pt-12 border-t border-white/5">
                        <div className="flex items-center gap-6">
                           <Camera className="w-6 h-6 text-[#c9a84c]" />
                           <div>
                              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30 mb-1">Capture Gear</p>
                              <p className="text-sm font-light">{selectedImage.gear}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-6">
                           <Maximize2 className="w-6 h-6 text-[#c9a84c]" />
                           <div>
                              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30 mb-1">Format</p>
                              <p className="text-sm font-light">Uncompressed Digital Archive</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <button className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-4 hover:bg-white/10 transition-all uppercase tracking-[0.3em] text-[10px] font-bold">
                        <Share2 className="w-4 h-4" />
                        Share Archive
                     </button>
                     <p className="text-center text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase">
                        Golden Memory Studio &copy; {new Date().getFullYear()}
                     </p>
                  </div>
               </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-64 text-center py-40 border-t border-white/5">
           <h3 className="text-2xl font-bold tracking-widest opacity-20 uppercase font-serif">End of Narrative</h3>
        </footer>
      </main>
    </SmoothScroll>
  );
};

export default GalleryPage;

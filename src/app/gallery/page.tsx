'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { src: '/images/portfolio/wedding-1.png', alt: 'Eternal Vows' },
  { src: '/images/gallery/candid-1.png', alt: 'Pure Joy' },
  { src: '/images/gallery/bw-1.png', alt: 'Jazz Night' },
  { src: '/images/gallery/arc-1.png', alt: 'Modern Lines' },
  { src: '/images/portfolio/portrait-1.png', alt: 'The Muse' },
  { src: '/images/portfolio/event-1.png', alt: 'Metropolitan' },
  { src: '/images/portfolio/wedding-1.png', alt: 'Golden Hour' },
  { src: '/images/gallery/candid-1.png', alt: 'Soap Bubbles' },
  { src: '/images/gallery/bw-1.png', alt: 'The Saxophonist' }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050505] text-white pb-20">
        <Navbar />
        
        <header className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-medium tracking-tighter mb-4 font-serif"
            style={{ color: '#c9a84c' }}
          >
            Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/40 font-light max-w-2xl"
          >
            A curated collection of our most evocative captures. Explore the art of visual storytelling.
          </motion.p>
        </header>

        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group aspect-square cursor-pointer overflow-hidden rounded-xl bg-white/5"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <ZoomIn className="w-6 h-6 text-white" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
              onClick={() => setSelectedImage(null)}
            >
               <button 
                 className="absolute top-10 right-10 p-4 text-white/60 hover:text-white transition-colors"
                 onClick={() => setSelectedImage(null)}
               >
                 <X className="w-8 h-8" />
               </button>
               
               <motion.div 
                 initial={{ scale: 0.9, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 exit={{ scale: 0.9, opacity: 0 }}
                 className="relative w-full h-full max-w-5xl max-h-5xl overflow-hidden rounded-2xl"
                 onClick={(e) => e.stopPropagation()}
               >
                 <Image 
                   src={selectedImage}
                   alt="Gallery View"
                   fill
                   className="object-contain"
                 />
                 <div className="absolute bottom-6 left-6 text-white/30 text-[10px] font-bold tracking-[0.4em] uppercase font-serif">
                    Golden Memory Studio &copy; Shot with Precision
                 </div>
               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-40 text-center py-20 opacity-20">
           <p className="text-[10px] font-bold tracking-[0.5em] uppercase">End of Gallery</p>
        </footer>
      </main>
    </SmoothScroll>
  );
};

export default GalleryPage;

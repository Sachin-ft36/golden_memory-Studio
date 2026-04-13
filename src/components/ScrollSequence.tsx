'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

interface ScrollSequenceProps {
  framesCount: number;
  baseUrl: string;
  containerRef: React.RefObject<HTMLElement | null>;
}

const ScrollSequence: React.FC<ScrollSequenceProps> = ({ framesCount, baseUrl, containerRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Progressive loading of images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const preloadImages = async () => {
      for (let i = 1; i <= framesCount; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(3, '0');
        img.src = `${baseUrl}/ezgif-frame-${frameIndex}.jpg`;
        
        img.onload = () => {
          loadedCount++;
          if (loadedCount === framesCount) {
            setImagesLoaded(true);
          }
        };
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, [framesCount, baseUrl]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 0-0.45: Disassemble (0 -> 239)
  // 0.45-0.55: Hold Exploded (239)
  // 0.55-1.0: Reassemble (239 -> 0)
  const frameIndex = useTransform(smoothProgress, [0, 0.45, 0.55, 1], [0, 239, 239, 0], { clamp: true });

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx || images.length === 0) return;

      const currentFrame = Math.round(frameIndex.get());
      const img = images[currentFrame];
      if (!img) return;

      // Maintain aspect ratio and center the image
      const canvasAspectRatio = canvas.width / canvas.height;
      const imageAspectRatio = img.width / img.height;

      // Reset canvas if needed or just clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Photorealistic rendering: ensure canvas size matches viewport
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const unsubscribe = frameIndex.on('change', render);
    
    // Initial render
    if (imagesLoaded) {
      render();
    }

    // Handle window resize
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        render();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [frameIndex, images, imagesLoaded]);

  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center bg-[#050505]">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{ filter: 'contrast(1.1) brightness(1.05)' }} // Subtle pop for "8K" feel
      />
      
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050505] z-50">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4"
          >
             <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
             <p className="text-white/40 text-sm font-medium tracking-widest uppercase">Loading Experience</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ScrollSequence;

'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollSequence from '@/components/ScrollSequence';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import Link from 'next/link';

const Section = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -80]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="h-[100vh] flex flex-col items-center justify-center px-6 md:px-20"
    >
      {children}
    </motion.div>
  );
};

/* 🔥 PREVIEW CARD */
const PreviewCard = ({
  title,
  description,
  href,
  align = "left",
}: {
  title: React.ReactNode;   // ✅ UPDATED
  description: string;
  href: string;
  align?: "left" | "right" | "center";
}) => {
  return (
    <Link href={href} className="block pointer-events-auto">
      <div
        className={`max-w-5xl mx-auto px-10 transition-all duration-500 hover:scale-[1.03] ${align === "right"
          ? "text-right ml-auto"
          : align === "center"
            ? "text-center"
            : "text-left mr-auto"
          }`}
      >
        <h2
          className="text-4xl md:text-6xl font-serif mb-6 leading-[1.1] max-w-2xl"
          style={{ color: "#cba53cff" }}
        >
          {title}
        </h2>

        <p className="text-white/60 text-lg max-w-xl leading-relaxed">
          {description}
        </p>

        <span className="text-xs text-white/40 uppercase tracking-[0.3em] mt-6 inline-block">
          Explore →
        </span>
      </div>
    </Link>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <SmoothScroll>
      <main className="bg-[#050505] text-white">
        <Navbar />

        {/* ✅ BALANCED HEIGHT */}
        <div ref={containerRef} className="relative h-[500vh]">

          {/* BACKGROUND */}
          <div className="sticky top-0 w-full h-screen z-0">
            <ScrollSequence
              framesCount={240}
              baseUrl="/images/sequence"
              containerRef={containerRef}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* CONTENT */}
          <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">

            {/* HERO */}
            <div className="h-[100vh] flex flex-col items-center justify-center px-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                <h1 className="text-5xl md:text-8xl font-serif mb-4 leading-[1.1]" style={{ color: '#cba53cff' }}>
                  Golden Memory <br /> Studio
                </h1>

                <p className="text-white/60 text-sm tracking-[0.3em] uppercase mt-6">
                  Cinematic Photography. Precision Lighting. Premium Output.
                </p>

                <span className="text-[10px] opacity-40 mt-8 block uppercase tracking-[0.5em]">
                  Scroll to explore
                </span>
              </motion.div>
            </div>

            {/* SECTION 1 */}
            <Section>
              <PreviewCard
                title="Designed with cinematic precision"
                description="Every frame is planned — lighting, composition, and editing — to deliver premium and consistent results."
                href="/portfolio"
                align="left"
              />
            </Section>

            {/* SECTION 2 */}
            <Section>
              <PreviewCard
                title="Built on real client results"
                description="Sharp visuals, natural tones, and reliable delivery — clients trust our structured workflow."
                href="/services"
                align="right"
              />
            </Section>

            {/* SECTION 4 */}
            <Section>
              <PreviewCard
                title="Start your project with us today"
                description="Tell us your idea, timeline, and vision — we’ll handle planning, shoot, and delivery."
                href="/contact"
                align="center"
              />
            </Section>

            {/* 🔥 FINAL CTA */}
            <div className="min-h-screen flex items-center justify-center px-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 60 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full max-w-5xl mx-auto"
              >
                <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[1.1]" style={{ color: '#cba53cff' }}>
                  Ready to capture <br /> something real?
                </h2>

                <p
                  className="text-white/50 max-w-xl mx-auto mb-10 text-sm"
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  Book your session with a team that focuses on quality and execution.
                </p>

                <div className="flex gap-8 justify-center mt-10 flex-wrap">
                  <Link href="/contact">
                    <button
                      className="px-12 py-5 rounded-full font-bold text-black text-[11px] uppercase tracking-[0.3em]"
                      style={{
                        background: 'linear-gradient(135deg, #c9a84c, #f0d080, #b8903e)'
                      }}
                    >
                      Book Now
                    </button>
                  </Link>

                  <Link href="/portfolio">
                    <button className="px-12 py-5 bg-white/5 border border-white/10 text-white text-[11px] rounded-full">
                      View Portfolio
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <footer className="py-20 border-t border-white/5 text-center bg-[#050505]">
          <p className="text-white/20 text-sm tracking-widest uppercase">
            © 2026 Golden Memory Studio. All rights reserved.
          </p>
        </footer>

      </main>
    </SmoothScroll>
  );
}
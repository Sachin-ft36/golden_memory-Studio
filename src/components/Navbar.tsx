'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import logo from '@/assets/logo/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
      );
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-[999] transition-all duration-500 ${scrolled
          ? 'py-2 shadow-lg border-b border-white/10'
          : 'py-3 border-b border-transparent'
          }`}
        style={{
          backgroundColor: scrolled
            ? 'rgba(0,0,0,0.75)'
            : 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(16px)',
        }}
      >
        {/* Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] z-20 transition-transform duration-150"
          style={{
            width: '100%',
            transform: `scaleX(${scrollProgress / 100})`,
            transformOrigin: 'left',
            background:
              'linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)',
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center">

          <div className="flex-1 flex justify-start">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src={logo}
                alt="Golden Memory Photography"
                width={75}
                height={20}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 flex-none">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-[11px] uppercase font-medium tracking-[0.25em] transition-all duration-300"
                  style={{
                    color: isActive
                      ? '#ffffff'
                      : 'rgba(255,255,255,0.6)',
                  }}
                >
                  {link.name}
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[2px] transition-transform duration-300 origin-left"
                    style={{
                      background: '#c9a84c',
                      transform: isActive
                        ? 'scaleX(1)'
                        : 'scaleX(0)',
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA + Burger */}
          <div className="flex-1 flex items-center justify-end">

            {/* CTA Button */}
            <Link href="/contact" className="hidden lg:block">
              <button
                className="relative px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    'linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #b8903e 100%)',
                  color: '#000',
                  boxShadow:
                    '0 4px 20px -4px rgba(201,168,76,0.4)',
                }}
              >
                Book Now
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-6 flex flex-col gap-1.5 z-50"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div
                className={`h-0.5 w-6 bg-white transition-all ${mobileOpen
                  ? 'rotate-45 translate-y-1.5'
                  : ''
                  }`}
              />
              <div
                className={`h-0.5 w-6 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''
                  }`}
              />
              <div
                className={`h-0.5 w-6 bg-white transition-all ${mobileOpen
                  ? '-rotate-45 -translate-y-1.5'
                  : ''
                  }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-500 ${mobileOpen
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-full pointer-events-none'
          }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-2xl text-white uppercase tracking-widest hover:text-[#c9a84c]"
            onClick={() => setMobileOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled || isOpen ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100" : "bg-transparent"
        )}
      >
        <div className="max-w-[1240px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 12.5C4.5 12.5 6 14 9 14s4.5-1.5 4.5-1.5"/>
                <path d="M12 3a9 9 0 0 1 9 9v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a9 9 0 0 1 9-9z"/>
                <path d="M12 3v6"/>
              </svg>
            </div>
            <span className="font-heading font-bold text-xl text-primary tracking-tight group-hover:text-secondary transition-colors">
              Bright Smile
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-secondary",
                  pathname === link.href ? "text-secondary" : "text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+17135550198" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              (713) 555-0198
            </a>
            <Button size="sm" onClick={() => window.location.href = '/#contact'}>
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-primary/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6 pt-24">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-2xl font-heading font-medium text-white/90 hover:text-secondary transition-colors",
                  pathname === link.href && "text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto space-y-4">
            <a 
              href="tel:+17135550198"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (713) 555-0198
            </a>
            <Button className="w-full" size="lg" onClick={() => setIsOpen(false)}>
              Book Online
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
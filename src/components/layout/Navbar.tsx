"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-[#E5E7EB]" : "bg-transparent border-transparent"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0F3460] to-[#16213E] rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl group-hover:scale-105 transition-transform">
              B
            </div>
            <span className="font-heading font-bold text-xl text-[#0F3460] tracking-tight">
              Bright Smile
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-body font-medium text-sm transition-colors relative group",
                  pathname === item.href ? "text-[#008080]" : "text-[#1F2937] hover:text-[#008080]"
                )}
              >
                {item.title}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#008080] transition-all duration-300 group-hover:w-full",
                  pathname === item.href ? "w-full" : "w-0"
                )} />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
             <a href={`tel:${siteConfig.contact.phone}`} className="hidden lg:flex items-center gap-2 text-sm font-semibold text-[#0F3460] hover:text-[#E94560] transition-colors">
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone}
             </a>
            <Button asChild size="sm">
              <Link href="/#contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-[#0F3460]"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-50 flex flex-col justify-center items-center space-y-8 transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-[#0F3460]"
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
        </button>
        
        <Link href="/" className="font-heading font-bold text-2xl text-[#0F3460]">Bright Smile</Link>

        <nav className="flex flex-col items-center space-y-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-2xl font-body font-medium text-[#1F2937] hover:text-[#008080]"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <Button size="lg" asChild className="w-64">
           <Link href="/#contact">Book Appointment</Link>
        </Button>
      </div>
    </>
  );
}
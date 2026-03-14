"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for glassmorphism opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100" : "bg-white/80 backdrop-blur-sm border-transparent"
        )}
      >
        <div className="max-w-[1240px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-heading font-bold text-xl text-[#0E3A53] tracking-tight hover:opacity-80 transition-opacity">
            Bright Smile<span className="text-[#4CA1A3]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-[#4CA1A3]",
                  pathname === link.href ? "text-[#4CA1A3]" : "text-[#0E3A53]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="tel:+17135550123" className="text-[#0E3A53] font-semibold text-sm hover:text-[#4CA1A3] transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (713) 555-0123
            </Link>
            <Link
              href="/#contact"
              className="bg-[#4CA1A3] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3E8A8C] transition-all shadow-sm hover:shadow-md"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-[#0E3A53] hover:text-[#4CA1A3] transition-colors p-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-[#0E3A53]/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <span className="font-heading font-bold text-xl text-[#0E3A53]">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#0E3A53] hover:text-[#4CA1A3] transition-colors p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium text-[#0E3A53] hover:text-[#4CA1A3] transition-colors",
                  pathname === link.href && "text-[#4CA1A3]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <Link href="tel:+17135550123" className="flex items-center justify-center gap-3 w-full bg-[#0E3A53] text-white py-4 rounded-xl font-semibold hover:bg-[#0a2c40] transition-colors">
              <Phone className="w-5 h-5" />
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-heading font-bold text-xl group-hover:scale-105 transition-transform">
            B
          </div>
          <span className="font-heading font-bold text-xl text-neutral-text-main">
            Bright Smile
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary relative",
                pathname === link.href ? "text-primary" : "text-neutral-text-body"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg shadow-blue hover:bg-primary-dark hover:-translate-y-0.5 transition-all"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-neutral-text-main hover:bg-gray-100 rounded-md"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium py-2 border-b border-gray-50",
                  pathname === link.href ? "text-primary" : "text-neutral-text-body"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="w-full text-center mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
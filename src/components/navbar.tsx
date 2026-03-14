"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled || pathname !== "/" ? "bg-white/90 backdrop-blur-md border-gray-100 py-4" : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="text-2xl font-heading font-bold text-primary tracking-tight">
            Bright<span className="text-accent">Smile</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-medical relative group",
                  pathname === link.href ? "text-primary" : "text-gray-600"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-medical transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
              <a href="tel:+17135550198" className="hidden lg:flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                (713) 555-0198
              </a>
              <Button size="sm" asChild>
                <Link href="/#contact">Book Now</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Open menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 transform transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-2xl font-heading font-bold text-primary hover:text-medical"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Button size="lg" className="w-64" asChild>
          <Link href="/#contact">Book Appointment</Link>
        </Button>
        <a href="tel:+17135550198" className="flex items-center text-lg font-semibold text-primary">
          <Phone className="w-5 h-5 mr-2 text-accent" />
          (713) 555-0198
        </a>
      </div>
    </>
  );
}
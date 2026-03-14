"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-primary text-white text-center py-2 text-sm font-accent tracking-wide">
        Accepting New Patients! Emergency Care Available •{" "}
        <a href="tel:7135550123" className="font-bold text-accent hover:underline ml-1">
          (713) 555-0123
        </a>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          isScrolled || isOpen ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100" : "bg-white border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl group-hover:bg-primary transition-colors">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-primary tracking-tight leading-none">Bright Smile</span>
                <span className="text-xs font-accent text-gray-500 tracking-widest uppercase">Dental</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-teal-600 relative group py-2",
                    pathname === link.href ? "text-primary" : "text-gray-600"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transition-all duration-300",
                    pathname === link.href ? "h-0.5" : "h-0 group-hover:h-0.5"
                  )} />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/#contact">
                <Button size="md">Book Online</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-20",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col p-6 space-y-6 h-full overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-2xl font-serif font-bold",
                  pathname === link.href ? "text-teal-600" : "text-gray-900"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <Link href="tel:7135550123" className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-teal-600">
                <Phone size={20} /> (713) 555-0123
              </Link>
              <Link href="/#contact">
                <Button size="lg" className="w-full">Book Appointment</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
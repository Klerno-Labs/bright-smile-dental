"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-[1240px] px-6 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl text-primary">
          Bright Smile
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                pathname === link.href ? "text-secondary" : "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+17135550123" className="text-primary font-medium flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone className="h-4 w-4" />
            <span>(713) 555-0123</span>
          </a>
          <Link href="/#contact">
            <Button variant="primary" size="sm">Book Consultation</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-primary"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-6 h-full">
            <div className="flex justify-between items-center mb-8">
              <span className="font-heading font-bold text-xl text-primary">Menu</span>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X className="text-primary" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-primary hover:text-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-4">
              <a href="tel:+17135550123" className="flex items-center gap-3 text-primary font-medium p-4 bg-gray-50 rounded-lg">
                <Phone className="h-5 w-5 text-secondary" />
                <span>(713) 555-0123</span>
              </a>
              <Link href="/#contact" className="block">
                <Button variant="primary" className="w-full">Book Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
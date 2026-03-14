"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100" : "bg-white/80 backdrop-blur-sm border-transparent"
      )}
    >
      <Container className="flex items-center justify-between h-20">
        <Link href="/" aria-label="Bright Smile Dental Home">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#4CA1A3]",
                pathname === link.href ? "text-[#4CA1A3]" : "text-[#0E3A53]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+17135550198" className="flex items-center gap-2 text-[#0E3A53] font-semibold text-sm hover:text-[#4CA1A3] transition-colors">
            <Phone className="h-4 w-4" />
            <span>(713) 555-0198</span>
          </a>
          <Link href="/contact">
            <Button size="sm">Book Consultation</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#0E3A53]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-6">
          <nav className="flex-1 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-2xl font-manrope font-semibold text-[#0E3A53] transition-colors",
                  pathname === link.href && "text-[#4CA1A3]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-gray-100 pt-6 space-y-4">
             <a href="tel:+17135550198" className="flex items-center gap-3 text-[#0E3A53] font-bold text-lg">
              <Phone className="h-5 w-5 text-[#4CA1A3]" />
              (713) 555-0198
            </a>
            <Link href="/contact">
              <Button variant="secondary" className="w-full">Book Consultation</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
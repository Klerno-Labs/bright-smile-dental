"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/Button";
import { Logo } from "./Logo";
import siteConfig from "@/config/site";
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

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 glass-nav",
        scrolled ? "shadow-sm py-3" : "py-5"
      )}
    >
      <div className="max-w-[1240px] mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                pathname === item.href ? "text-secondary" : "text-primary"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${siteConfig.contact.phone}`} className="text-sm font-semibold text-primary flex items-center gap-2">
            <Phone className="w-4 h-4" />
            {siteConfig.contact.phone}
          </a>
          <Button size="sm">Book Consultation</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg p-6 flex flex-col gap-6 animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col gap-4">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === item.href ? "text-secondary" : "text-primary"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-4">
            <Button size="lg" className="w-full">
              Book Consultation
            </Button>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center justify-center gap-2 text-primary font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
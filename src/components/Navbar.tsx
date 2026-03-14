"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm py-2" : "bg-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-white p-1.5 rounded-lg group-hover:bg-primaryDark transition-colors">
                <span className="sr-only">Bright Smile Dental Logo</span>
                {/* Simple SVG Logo */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.09 8.26L20.66 9.27L15.92 14.14L17.18 20.67L11.65 17.5L6.12 20.67L7.38 14.14L2.64 9.27L9.21 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-textMain">
                Bright Smile
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative",
                    pathname === item.href ? "text-primary" : "text-textBody"
                  )}
                >
                  {item.title}
                  {pathname === item.href && (
                    <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="text-sm font-semibold text-primary flex items-center gap-2 hover:text-primaryDark transition-colors">
                <Phone size={16} />
                <span className="hidden lg:inline">{siteConfig.contact.phone}</span>
              </a>
              <Button asChild size="sm" variant="default">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 text-textMain hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6">
          <nav className="flex flex-col gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-2xl font-heading font-semibold text-textMain hover:text-primary transition-colors",
                  pathname === item.href ? "text-primary" : ""
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-lg font-semibold text-primary mb-6">
              <Phone />
              {siteConfig.contact.phone}
            </a>
            <Button asChild className="w-full" size="lg">
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
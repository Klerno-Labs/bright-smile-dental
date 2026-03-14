"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
          isScrolled || pathname !== "/"
            ? "bg-white/90 backdrop-blur-lg shadow-sm border-gray-100 py-4"
            : "bg-transparent py-6 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-medical to-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              B
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-primary leading-none">
                Bright Smile
              </span>
              <span className="text-xs font-accent tracking-widest text-medical uppercase">
                Dental
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-body font-medium text-base transition-colors relative py-2",
                  pathname === item.href
                    ? "text-primary font-bold"
                    : "text-gray-600 hover:text-medical"
                )}
              >
                {item.title}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-medical rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phone}
            </a>
            <Button variant="default" size="sm" asChild>
              <Link href="/services#book">
                Book Now <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2 text-gray-700 hover:bg-surface-alt rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
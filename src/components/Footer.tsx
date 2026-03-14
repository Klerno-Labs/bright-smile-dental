"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, Phone, Facebook, Instagram, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0E3A53] text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <span className="font-manrope font-bold text-xl tracking-tight text-white">
                Bright<span className="text-[#4CA1A3]">Smile</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Modern dentistry with a gentle touch. We are committed to providing you and your family with the highest quality dental care in a comfortable, relaxed atmosphere.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href={siteConfig.links.facebook || "#"} 
                className="p-2 bg-white/10 rounded-full hover:bg-[#4CA1A3] transition-colors"
                aria-label="Visit our Facebook page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href={siteConfig.links.instagram || "#"} 
                className="p-2 bg-white/10 rounded-full hover:bg-[#4CA1A3] transition-colors"
                aria-label="Visit our Instagram page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-manrope font-bold text-lg mb-4 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/contact#new-patients" className="hover:text-white transition-colors">New Patients</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-manrope font-bold text-lg mb-4 text-[#D4AF37]">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#4CA1A3] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address}<br />
                  {siteConfig.contact.city}, {siteConfig.contact.state} {siteConfig.contact.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#4CA1A3] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#4CA1A3] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-manrope font-bold text-lg mb-4 text-[#D4AF37]">Office Hours</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>{siteConfig.hours.weekdays}</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>{siteConfig.hours.saturday}</span>
              </li>
              <li className="flex justify-between">
                <span>{siteConfig.hours.sunday}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop} 
            className="p-2 rounded-full bg-white/10 hover:bg-[#4CA1A3] transition-colors text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
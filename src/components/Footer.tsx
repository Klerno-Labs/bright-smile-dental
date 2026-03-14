"use client";

import Link from "next/link";
import { ArrowUp, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Bright Smile Dental</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Providing Houston with premium family and cosmetic dentistry since 1990. 
              We believe in patient-first care and life-changing confidence.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>4521 Westheimer Rd, Suite 200</li>
              <li>Houston, TX 77027</li>
              <li className="pt-2">
                <a href="tel:+17135550123" className="hover:text-white transition-colors text-white font-medium">
                  (713) 555-0123
                </a>
              </li>
              <li>
                <a href="mailto:info@brightsmiledental.com" className="hover:text-white transition-colors">
                  info@brightsmiledental.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-6 text-accent">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>8am - 6pm</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9am - 2pm</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bright Smile Dental. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop} 
            aria-label="Back to top"
            className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
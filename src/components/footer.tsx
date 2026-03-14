"use client";

import Link from "next/link";
import { ArrowUp, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0E3A53] text-white pt-20 pb-8">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="font-heading font-bold text-2xl tracking-tight">
              Bright Smile<span className="text-[#4CA1A3]">.</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Modern dentistry with a gentle touch. We are dedicated to providing life-changing confidence through personalized care in Houston, TX.
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4CA1A3] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4CA1A3] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4CA1A3] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-[#4CA1A3] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#4CA1A3] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#4CA1A3] transition-colors">Services</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-[#4CA1A3] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4CA1A3] shrink-0 mt-1" />
                <span className="text-gray-400">4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#4CA1A3] shrink-0" />
                <a href="tel:+17135550123" className="text-gray-400 hover:text-white transition-colors">(713) 555-0123</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#4CA1A3] shrink-0" />
                <a href="mailto:info@brightsmilehouston.com" className="text-gray-400 hover:text-white transition-colors">info@brightsmilehouston.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm">Get the latest oral health tips and special offers.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4CA1A3] transition-colors"
              />
              <button 
                type="submit" 
                className="bg-[#4CA1A3] px-4 py-2 rounded-lg font-semibold hover:bg-[#3E8A8C] transition-colors"
                aria-label="Subscribe to newsletter"
              >
                <ArrowUp className="w-4 h-4 rotate-45" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Bright Smile Dental. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
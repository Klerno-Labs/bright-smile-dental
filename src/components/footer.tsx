"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">Bright<span className="text-medical">Smile</span></h3>
            <p className="text-gray-400 leading-relaxed">
              Providing Houston with world-class dental care in a calm, luxurious environment. Your smile is our masterpiece.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Visit our Facebook page" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Visit our Instagram page" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Visit our LinkedIn page" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-medical transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-medical transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-medical transition-colors">Services</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-medical transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-medical transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-medical shrink-0 mt-1" />
                <span>4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-medical shrink-0" />
                <a href="tel:+17135550198" className="hover:text-white transition-colors">(713) 555-0198</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-medical shrink-0" />
                <a href="mailto:info@brightsmiledental.com" className="hover:text-white transition-colors">info@brightsmiledental.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Office Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span className="text-white">8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span className="text-white">9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-accent">Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Bright Smile Dental. All rights reserved.
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={scrollToTop}
            className="border-gray-600 text-gray-400 hover:text-white hover:border-white rounded-full w-12 h-12 p-0 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
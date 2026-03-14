import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-serif font-bold text-sm">B</div>
              <span className="font-serif font-bold text-xl text-white">Bright Smile</span>
            </div>
            <p className="text-sm leading-relaxed">
              Providing exceptional dental care with a gentle touch. We combine advanced technology with a spa-like environment to ensure your comfort.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 font-serif">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link href="/#contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 font-serif">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-400 shrink-0 mt-1" size={18} />
                <span>4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-teal-400 shrink-0" size={18} />
                <a href="tel:7135550123" className="hover:text-teal-400 transition-colors">(713) 555-0123</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal-400 shrink-0" size={18} />
                <a href="mailto:info@brightsmiledental.com" className="hover:text-teal-400 transition-colors">info@brightsmiledental.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 font-serif">Office Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span className="text-white">8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span className="text-white">9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-gray-500">Closed</span></li>
            </ul>
            <div className="mt-6">
              <Link href="/#contact">
                <Button variant="secondary" size="sm" className="w-full">Request Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Bright Smile Dental. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors"
            aria-label="Back to top"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
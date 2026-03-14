import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, Phone, ArrowUp, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#16213E] text-white pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* About */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-[#16213E] font-heading font-bold">B</div>
            <span className="font-heading font-bold text-xl">Bright Smile</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            Providing world-class dental care with a gentle, patient-first approach. Your smile is our masterpiece.
          </p>
          <div className="flex gap-4">
             <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 bg-white/10 rounded-full hover:bg-[#008080] transition-colors">
               <Facebook className="w-5 h-5" />
             </a>
             <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-white/10 rounded-full hover:bg-[#008080] transition-colors">
               <Instagram className="w-5 h-5" />
             </a>
             <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-white/10 rounded-full hover:bg-[#008080] transition-colors">
               <Linkedin className="w-5 h-5" />
             </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-[#008080] transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#008080] transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#008080] transition-colors">Services</Link></li>
            <li><Link href="/#contact" className="hover:text-[#008080] transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-[#008080] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#008080] transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin className="w-5 h-5 text-[#008080] shrink-0" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Phone className="w-5 h-5 text-[#008080] shrink-0" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Mail className="w-5 h-5 text-[#008080] shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
           <h4 className="font-heading font-bold text-lg mb-6">Office Hours</h4>
           <ul className="space-y-3 text-sm text-gray-400">
             <li className="flex justify-between border-b border-white/10 pb-2">
               <span>Mon - Fri</span>
               <span className="text-white">8:00 AM - 6:00 PM</span>
             </li>
             <li className="flex justify-between border-b border-white/10 pb-2">
               <span>Saturday</span>
               <span className="text-white">9:00 AM - 2:00 PM</span>
             </li>
             <li className="flex justify-between">
               <span>Sunday</span>
               <span className="text-[#E94560]">Closed</span>
             </li>
           </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <button 
          onClick={scrollToTop}
          className="p-3 bg-white/10 rounded-full hover:bg-[#008080] transition-colors text-white"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
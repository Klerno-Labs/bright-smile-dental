import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { Button } from './ui/Button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 12.5C4.5 12.5 6 14 9 14s4.5-1.5 4.5-1.5"/>
                  <path d="M12 3a9 9 0 0 1 9 9v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a9 9 0 0 1 9-9z"/>
                  <path d="M12 3v6"/>
                </svg>
              </div>
              <span className="font-heading font-bold text-xl">Bright Smile</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Modern dentistry with a gentle touch. We are committed to providing Houston families with premium care in a relaxing environment.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-secondary transition-colors">Patient Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                <span>4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+17135550198" className="hover:text-white transition-colors">(713) 555-0198</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@brightsmiledental.com" className="hover:text-white transition-colors">info@brightsmiledental.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Hours */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Office Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-secondary">Closed</span></li>
            </ul>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Bright Smile Dental. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter, ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-neutral-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-heading font-bold text-xl">
              B
            </div>
            <span className="font-heading font-bold text-xl text-white">
              Bright Smile
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Modern dentistry with a gentle touch. We are committed to providing exceptional dental care for the whole family in a comfortable, state-of-the-art environment.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Visit our Facebook page" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Visit our Instagram page" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Visit our Twitter page" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-heading font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link href="/contact#new-patient" className="text-accent font-medium">New Patient Offer</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-heading font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <span>4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-primary flex-shrink-0" />
              <a href="tel:+17135550199" className="hover:text-white transition-colors">(713) 555-0199</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-primary flex-shrink-0" />
              <a href="mailto:info@brightsmiledental.com" className="hover:text-white transition-colors">info@brightsmiledental.com</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-white font-heading font-bold text-lg mb-6">Office Hours</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Mon - Fri:</span>
              <span>8:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday:</span>
              <span>9:00 AM - 2:00 PM</span>
            </li>
            <li className="flex justify-between text-gray-500">
              <span>Sunday:</span>
              <span>Closed</span>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-xs text-center">
              <span className="text-accent font-bold">Emergency?</span> Call us anytime for urgent care.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Bright Smile Dental. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
        <button 
          onClick={scrollToTop} 
          aria-label="Back to top" 
          className="p-2 bg-white/10 hover:bg-primary rounded-full transition-colors"
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </footer>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-heading font-bold text-white">
                Bright Smile
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Experience world-class dentistry with a gentle touch. We are committed to providing you and your family with the best oral health care in Houston.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-medical transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-medical transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-medical transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-medical mt-1 shrink-0" />
                <span className="text-gray-400">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-medical shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-medical shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">
              Office Hours
            </h3>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-gray-300 mb-2">{siteConfig.contact.hours}</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm text-accent font-semibold mb-3">Emergency Care</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We reserve time daily for emergency patients. Call us as soon as possible if you are in pain.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="text-gray-400 hover:text-white hover:bg-white/5"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
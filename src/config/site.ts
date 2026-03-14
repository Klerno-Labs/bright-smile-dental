import type { Metadata } from "next";

export const siteConfig = {
  name: "Bright Smile Dental",
  description: "Experience modern dentistry with a gentle touch at Bright Smile Dental. Comprehensive cosmetic, family, and emergency dental services in Houston, TX.",
  url: "https://brightsmiledental.com",
  ogImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=630&fit=crop",
  links: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  contact: {
    phone: "(713) 555-0198",
    email: "info@brightsmiledental.com",
    address: "4521 Westheimer Rd, Suite 200, Houston, TX 77027",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
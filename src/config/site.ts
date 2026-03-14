import { ImageSlot } from "./images";

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    mapUrl: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Bright Smile Dental",
  description: "Modern dentistry with a gentle touch. Comprehensive family care, cosmetic enhancements, and implants in Houston, TX.",
  url: "https://brightsmiledental-demo.com",
  ogImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
  links: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  contact: {
    phone: "(713) 555-0198",
    email: "hello@brightsmiledental-demo.com",
    address: "4521 Westheimer Rd, Suite 200",
    city: "Houston",
    state: "TX",
    zip: "77027",
    mapUrl: "https://maps.google.com",
  },
  hours: {
    weekdays: "Mon-Fri: 8am - 6pm",
    saturday: "Saturday: 9am - 2pm",
    sunday: "Sunday: Closed",
  },
};
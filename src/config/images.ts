// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see
  "hero": {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    alt: "Bright modern dental office reception area with natural light",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback)
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2068&auto=format&fit=crop",
    alt: "Dental team collaborating in a bright office",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage
  "about": {
    src: "https://images.unsplash.com/photo-1579684385147-6ef0db5f648f?q=80&w=2070&auto=format&fit=crop",
    alt: "Business professionals in modern meeting room",
    width: 1200,
    height: 800,
  },

  // First service card image
  "service-1": {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop",
    alt: "Cosmetic dentistry procedure showing a bright smile",
    width: 1200,
    height: 800,
  },

  // Second service card image
  "service-2": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    alt: "Advanced dental implant technology",
    width: 1200,
    height: 800,
  },

  // Third service card image
  "service-3": {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
    alt: "General dental checkup in progress",
    width: 1200,
    height: 800,
  },

  // Gallery image 1
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    alt: "Interior of dental clinic waiting room",
    width: 1200,
    height: 800,
  },

  // Gallery image 2
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern dental treatment room",
    width: 1200,
    height: 800,
  },

  // Team member photo
  "team-1": {
    src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1974&auto=format&fit=crop",
    alt: "Lead dentist smiling confidently",
    width: 600,
    height: 600,
  },

  // Gallery image 3
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?q=80&w=2070&auto=format&fit=crop",
    alt: "State of the art dental equipment",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=2070&auto=format&fit=crop",
    alt: "Happy patient leaving the clinic",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    alt: "Professional business environment",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;
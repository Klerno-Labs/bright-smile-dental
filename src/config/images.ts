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
  // Homepage hero banner — the first image visitors see — REPLACE with a real Unsplash URL matching: "Modern office workspace with natural light"
  "hero": {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    alt: "Bright Smile Dental Interior Reception",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) — REPLACE with a real Unsplash URL matching: "Professional team collaborating in bright office"
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop",
    alt: "Dental Team Meeting",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage — REPLACE with a real Unsplash URL matching: "Business professionals in modern meeting room"
  "about": {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    alt: "Dr. Sarah Bennett Consulting Patient",
    width: 1200,
    height: 800,
  },

  // First service card image — REPLACE with a real Unsplash URL matching: "Creative professionals working together"
  "service-1": {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2069&auto=format&fit=crop",
    alt: "Cosmetic Dentistry Procedure",
    width: 1200,
    height: 800,
  },

  // Second service card image — REPLACE with a real Unsplash URL matching: "Data analytics dashboard on screen"
  "service-2": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2080&auto=format&fit=crop",
    alt: "Advanced Dental Imaging Technology",
    width: 1200,
    height: 800,
  },

  // Third service card image — REPLACE with a real Unsplash URL matching: "Team workshop and brainstorming session"
  "service-3": {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
    alt: "Family Dentistry Checkup",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 — REPLACE with a real Unsplash URL matching: "Professional handshake in business setting"
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2070&auto=format&fit=crop",
    alt: "Patient Happy Smile",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 — REPLACE with a real Unsplash URL matching: "Modern conference room with city view"
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2068&auto=format&fit=crop",
    alt: "Modern Dental Chair",
    width: 1200,
    height: 800,
  },

  // Team member photo — REPLACE with a real Unsplash URL matching: "Diverse team celebrating success"
  "team-1": {
    src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
    alt: "Dr. Sarah Bennett",
    width: 1200,
    height: 800,
  },

  // Gallery image 3 — REPLACE with a real Unsplash URL matching: "Technology workspace with multiple screens"
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2080&auto=format&fit=crop",
    alt: "3D Dental Modeling",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background — REPLACE with a real Unsplash URL matching: "Innovation and technology concept"
  "cta": {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    alt: "Dental Practice Team",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration — REPLACE with a real Unsplash URL matching: "Professional business environment"
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    alt: "Bright Smile Clinic Exterior",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;
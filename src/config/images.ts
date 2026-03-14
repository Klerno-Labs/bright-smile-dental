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
  // Homepage hero banner — the first image visitors see — REPLACE with a real Unsplash URL matching: "Modern dental office reception with warm lighting"
  "hero": {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop",
    alt: "Modern dental office reception with warm lighting",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) — REPLACE with a real Unsplash URL matching: "Professional dentist examining patient"
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600&auto=format&fit=crop",
    alt: "Professional dentist examining patient with care",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage — REPLACE with a real Unsplash URL matching: "Smiling dental team in scrubs"
  "about": {
    src: "https://images.unsplash.com/photo-1538869337831-4f4c5cfcd69c?q=80&w=1600&auto=format&fit=crop",
    alt: "Smiling dental team in scrubs",
    width: 1200,
    height: 800,
  },

  // First service card image — REPLACE with a real Unsplash URL matching: "Dental tools on tray"
  "service-1": {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop",
    alt: "Sterile dental tools on a tray",
    width: 1200,
    height: 800,
  },

  // Second service card image — REPLACE with a real Unsplash URL matching: "Cosmetic dentistry result"
  "service-2": {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
    alt: "Bright smile showing cosmetic results",
    width: 1200,
    height: 800,
  },

  // Third service card image — REPLACE with a real Unsplash URL matching: "Digital dental x-ray on screen"
  "service-3": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    alt: "Digital dental x-ray displayed on monitor",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 — REPLACE with a real Unsplash URL matching: "Comfortable dental waiting area"
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop",
    alt: "Comfortable dental waiting area with plants",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 — REPLACE with a real Unsplash URL matching: "Dental chair and equipment"
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=800&auto=format&fit=crop",
    alt: "Modern dental chair with advanced equipment",
    width: 1200,
    height: 800,
  },

  // Team member photo — REPLACE with a real Unsplash URL matching: "Female lead dentist portrait"
  "team-1": {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    alt: "Dr. Elena Vance portrait",
    width: 1200,
    height: 800,
  },

  // Gallery image 3 — REPLACE with a real Unsplash URL matching: "Child smiling at dentist"
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=800&auto=format&fit=crop",
    alt: "Happy child smiling during dental visit",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background — REPLACE with a real Unsplash URL matching: "Smiling family"
  "cta": {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1600&auto=format&fit=crop",
    alt: "Happy family smiling together",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration — REPLACE with a real Unsplash URL matching: "Patient consultation"
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop",
    alt: "Patient having a consultation with dentist",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;
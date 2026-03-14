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
  // Homepage hero banner — the first image visitors see — Smiling confident patient
  "hero": {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
    alt: "Smiling patient showing bright teeth",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (About page) — Clean, modern dental interior
  "about-hero": {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern dental office interior with bright lighting",
    width: 1200,
    height: 800,
  },

  // About section narrative — Team collaboration
  "about-team": {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    alt: "Dental team collaborating",
    width: 1200,
    height: 800,
  },

  // Service: General Dentistry — Checkup scenario
  "service-general": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    alt: "Dentist performing a routine checkup",
    width: 1200,
    height: 800,
  },

  // Service: Cosmetic — Whitening/Smile
  "service-cosmetic": {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop",
    alt: "Sparkling smile cosmetic result",
    width: 1200,
    height: 800,
  },

  // Service: Orthodontics — Braces/Invisalign
  "service-ortho": {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop",
    alt: "Orthodontic treatment tools",
    width: 1200,
    height: 800,
  },

  // Gallery: Office Tour 1
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1200&auto=format&fit=crop",
    alt: "Patient waiting area",
    width: 1200,
    height: 800,
  },

  // Gallery: Office Tour 2
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=1200&auto=format&fit=crop",
    alt: "State of the art dental equipment",
    width: 1200,
    height: 800,
  },

  // Team: Doctor 1 (Dr. Sarah Bennett)
  "team-1": {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea867d88?q=80&w=600&auto=format&fit=crop",
    alt: "Dr. Sarah Bennett",
    width: 600,
    height: 600,
  },

  // Team: Doctor 2 (Dr. Michael Chen)
  "team-2": {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
    alt: "Dr. Michael Chen",
    width: 600,
    height: 600,
  },

  // Team: Doctor 3 (Dr. Emily Rodriguez)
  "team-3": {
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
    alt: "Dr. Emily Rodriguez",
    width: 600,
    height: 600,
  },
  
  // CTA Section Background
  "cta": {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    alt: "Dental tools ready for procedure",
    width: 1200,
    height: 600,
  }
} as const;

export type ImageSlot = keyof typeof images;
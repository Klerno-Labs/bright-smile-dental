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
  // Homepage hero banner — the first image visitors see — High-end dental interaction
  "hero": {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
    alt: "Friendly female dentist explaining treatment options to a smiling patient in a modern clinic",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) — Clean, bright clinic interior
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop",
    alt: "Bright and modern dental clinic reception area with comfortable seating",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage — Professional team atmosphere
  "about": {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop",
    alt: "Modern dental clinic interior with advanced technology and sterile environment",
    width: 1200,
    height: 800,
  },

  // First service card image — Cosmetic Dentistry focus
  "service-1": {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1000&auto=format&fit=crop",
    alt: "Close up of a perfect white smile demonstrating cosmetic dentistry results",
    width: 800,
    height: 600,
  },

  // Second service card image — General/Restorative focus
  "service-2": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
    alt: "Precision dental tools laid out ready for a procedure",
    width: 800,
    height: 600,
  },

  // Third service card image — Specialist/Implants focus
  "service-3": {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop",
    alt: "Dental implant consultation showing digital x-ray on screen",
    width: 800,
    height: 600,
  },

  // Gallery image 1 — Before/After context or happy patient
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=1000&auto=format&fit=crop",
    alt: "Patient smiling broadly after a successful teeth whitening treatment",
    width: 800,
    height: 600,
  },

  // Gallery image 2 — Waiting room/Comfort
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
    alt: "Relaxing waiting area with plants and modern furniture",
    width: 800,
    height: 600,
  },

  // Team member photo — Lead Dentist
  "team-1": {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    alt: "Dr. Sarah Jenkins, Lead Dentist smiling professionally",
    width: 600,
    height: 600,
  },

  // Team member photo — Orthodontist
  "team-2": {
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    alt: "Dr. Michael Chen, Orthodontist holding a patient model",
    width: 600,
    height: 600,
  },

  // Team member photo — Hygienist
  "team-3": {
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    alt: "Emily Rodriguez, Dental Hygienist preparing a sterilized tray",
    width: 600,
    height: 600,
  },

  // Call-to-action section background — Consultation vibe
  "cta": {
    src: "https://images.unsplash.com/photo-1536866456616-6c89974ce9c8?q=80&w=2000&auto=format&fit=crop",
    alt: "Dentist shaking hands with a patient in the consultation room",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration — Subtle texture
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    alt: "Soft blurred background of a clean dental office corridor",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;
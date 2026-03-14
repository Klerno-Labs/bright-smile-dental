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
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=800&fit=crop&q=80",
    alt: "Bright modern dental office reception with natural light",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) — REPLACE with a real Unsplash URL matching: "Professional team collaborating in bright office"
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop&q=80",
    alt: "Dental team collaborating in bright modern office",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage — REPLACE with a real Unsplash URL matching: "Business professionals in modern meeting room"
  "about": {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop&q=80",
    alt: "Modern dental clinic interior with advanced technology",
    width: 1200,
    height: 800,
  },

  // First service card image — REPLACE with a real Unsplash URL matching: "Creative professionals working together"
  "service-1": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop&q=80",
    alt: "Professional teeth cleaning procedure",
    width: 1200,
    height: 800,
  },

  // Second service card image — REPLACE with a real Unsplash URL matching: "Data analytics dashboard on screen"
  "service-2": {
    src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop&q=80",
    alt: "Cosmetic dentistry smile makeover tools",
    width: 1200,
    height: 800,
  },

  // Third service card image — REPLACE with a real Unsplash URL matching: "Team workshop and brainstorming session"
  "service-3": {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=800&fit=crop&q=80",
    alt: "Dental implants consultation and planning",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 — REPLACE with a real Unsplash URL matching: "Professional handshake in business setting"
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=1200&h=800&fit=crop&q=80",
    alt: "Happy patient smiling after treatment",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 — REPLACE with a real Unsplash URL matching: "Modern conference room with city view"
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&h=800&fit=crop&q=80",
    alt: "State of the art dental equipment",
    width: 1200,
    height: 800,
  },

  // Team member photo — REPLACE with a real Unsplash URL matching: "Diverse team celebrating success"
  "team-1": {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&h=800&fit=crop&q=80",
    alt: "Lead Dentist Dr. Sarah Bennett",
    width: 1200,
    height: 800,
  },

  // Gallery image 3 — REPLACE with a real Unsplash URL matching: "Technology workspace with multiple screens"
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop&q=80",
    alt: "Pediatric dentistry colorful environment",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background — REPLACE with a real Unsplash URL matching: "Innovation and technology concept"
  "cta": {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop&q=80",
    alt: "Welcoming dental practice reception area",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration — REPLACE with a real Unsplash URL matching: "Professional business environment"
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=80",
    alt: "Comfortable patient waiting area",
    width: 1200,
    height: 800,
  },

  // Founder/Doctor specific image
  "founder": {
    src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=1200&h=800&fit=crop&q=80",
    alt: "Dr. James Sterling, Founder of Bright Smile Dental",
    width: 1200,
    height: 800,
  }
} as const;

export type ImageSlot = keyof typeof images;
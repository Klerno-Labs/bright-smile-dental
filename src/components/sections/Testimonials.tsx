"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maria L.",
    role: "Patient",
    content: "I used to be terrified of the dentist, but Dr. Vance changed that. The sedation options and gentle care made my implant procedure completely painless.",
    rating: 5
  },
  {
    name: "James T.",
    role: "Patient",
    content: "The CEREC crown technology is amazing. I walked in with a broken tooth and walked out an hour later with a perfect crown. Unbelievable service.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Patient",
    content: "Bright Smile Dental feels more like a spa than a clinic. The whitening results were instant, and the staff made me feel so comfortable.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeading 
          title="What our patients say" 
          subtitle="Testimonials"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-[#D4AF37]/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-[#4B5563] mb-6 italic leading-relaxed font-playfair">
                "{review.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#4CA1A3]/20 flex items-center justify-center text-[#4CA1A3] font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#0E3A53] text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden bg-[#0E3A53] py-6 rounded-xl">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0E3A53] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0E3A53] to-transparent z-10" />
          
          <motion.div 
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-12 items-center">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2 text-white">
                    <div className="flex gap-0.5">
                      <Star className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                      <Star className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                      <Star className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                      <Star className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                      <Star className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                    </div>
                    <span className="font-semibold">Google Reviews</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
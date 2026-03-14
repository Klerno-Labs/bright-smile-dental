"use client";

import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Maria L.",
    role: "Patient",
    text: "I've always been terrified of the dentist, but Dr. Bennett made me feel so comfortable. The sedation options changed my life!",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Patient",
    text: "The before and after of my veneers is incredible. They look so natural, and I can't stop smiling now. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah J.",
    role: "Patient",
    text: "Professional, clean, and friendly. The staff explains everything clearly, and there are never any hidden costs.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <Container>
        <SectionHeading 
          title="Patient Stories" 
          subtitle="Don't just take our word for it. Hear from our happy patients."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/10" />
              <div className="flex text-accent mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="fill-current w-4 h-4" />
                ))}
              </div>
              <p className="text-text-main mb-6 leading-relaxed font-serif italic text-lg">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                   <Image src={`https://i.pravatar.cc/150?u=${review.name}`} alt={review.name} width={40} height={40} />
                </div>
                <div>
                  <div className="font-bold text-primary text-sm">{review.name}</div>
                  <div className="text-xs text-muted">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Marquee */}
        <div className="border-t border-gray-100 pt-8 overflow-hidden">
          <p className="text-center text-sm font-semibold text-muted uppercase tracking-widest mb-6">
            As Seen In
          </p>
          <div className="relative flex overflow-x-hidden group">
             <div className="py-2 animate-marquee whitespace-nowrap flex gap-16 items-center">
               {[...Array(4)].map((_, i) => (
                 <span key={i} className="text-2xl font-heading font-bold text-gray-300">
                   AUSTIN MONTHLY • TEXAS DENTIST JOURNAL • TOP DOC 2024 • HEALTH MAGAZINE •
                 </span>
               ))}
             </div>
             <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap flex gap-16 items-center">
               {[...Array(4)].map((_, i) => (
                 <span key={i} className="text-2xl font-heading font-bold text-gray-300">
                   AUSTIN MONTHLY • TEXAS DENTIST JOURNAL • TOP DOC 2024 • HEALTH MAGAZINE •
                 </span>
               ))}
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
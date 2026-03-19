"use client";

import React from "react";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Maria L.",
    role: "Patient",
    content: "I've always been terrified of the dentist, but Dr. Bennett made me feel so comfortable. The sedation options and gentle approach changed everything for me.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Patient",
    content: "Got my implants here last year. The technology is insane—it was over faster than I expected and healed perfectly. Best investment I've made.",
    rating: 5,
  },
  {
    name: "Sarah J.",
    role: "Patient",
    content: "Bringing my kids here is a breeze. They actually look forward to the treasure box! The staff is patient, kind, and incredibly professional.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-accent font-bold tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mt-4">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div className="bg-white p-8 rounded-2xl shadow-card hover:-translate-y-2 transition-transform duration-300">
              <div className="flex text-accent mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 style={{ width: "100%", height: "100%", objectFit: "cover" }}-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                   {/* Placeholder avatar */}
                   <div className="w-full h-full bg-primary text-white flex items-center justify-center font-bold">
                     {testimonial.name[0]}
                   </div>
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
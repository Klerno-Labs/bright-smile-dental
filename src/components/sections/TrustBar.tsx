"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const partners = [
  { name: "Delta Dental", height: 30 },
  { name: "Aetna", height: 30 },
  { name: "Cigna", height: 30 },
  { name: "Humana", height: 30 },
  { name: "MetLife", height: 30 },
];

export function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="py-12 border-y border-[#E5E7EB] bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Trusted by Major Insurance Providers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale transition-all duration-700 hover:grayscale-0 hover:opacity-100">
          {partners.map((partner) => (
            <div key={partner.name} className="font-heading font-bold text-2xl text-[#0F3460] flex items-center gap-2">
              {/* Placeholder for actual logo images */}
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
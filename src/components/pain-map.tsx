"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// Simplified dental data structure
const teethData = [
  { id: "t1", label: "Upper Molar", x: 20, y: 30, issue: "Sensitivity", solution: "Root Canal Therapy" },
  { id: "t2", label: "Upper Incisor", x: 50, y: 20, issue: "Chipping", solution: "Veneers" },
  { id: "t3", label: "Lower Molar", x: 30, y: 70, issue: "Pain", solution: "Filling or Crown" },
  { id: "t4", label: "Gum Line", x: 60, y: 80, issue: "Bleeding", solution: "Deep Cleaning" },
];

export function PainMap() {
  const [activeTooth, setActiveTooth] = useState<typeof teethData[0] | null>(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] bg-white rounded-3xl shadow-inner border border-gray-100 flex items-center justify-center overflow-hidden">
      {/* Background Grid/Patient Outline Placeholder */}
      <svg className="w-full h-full text-gray-100" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="112.5" r="80" fill="currentColor" opacity="0.5" />
        <path d="M200 40 Q280 60 280 112.5 Q280 165 200 185 Q120 165 120 112.5 Q120 60 200 40Z" fill="none" stroke="currentColor" strokeWidth="2" />
        {/* Simplified Teeth Arch */}
        <path d="M140 100 Q200 130 260 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      </svg>

      {/* Interactive Hotspots */}
      {teethData.map((tooth) => (
        <button
          key={tooth.id}
          className={cn(
            "absolute w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 z-10",
            "hover:scale-125 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CA1A3]",
            activeTooth?.id === tooth.id ? "bg-[#4CA1A3] scale-125 ring-4 ring-[#4CA1A3]/30" : "bg-[#4CA1A3]/80"
          )}
          style={{ left: `${tooth.x}%`, top: `${tooth.y}%` }}
          onClick={() => setActiveTooth(tooth)}
          aria-label={`Select ${tooth.label}`}
        >
          <span className="sr-only">{tooth.label}</span>
        </button>
      ))}

      {/* Info Card / Modal */}
      {activeTooth && (
        <div className="absolute bottom-6 right-6 left-6 md:left-auto md:w-80 bg-[#0E3A53] text-white p-6 rounded-2xl shadow-xl animate-fade-in-up z-20">
          <button 
            onClick={() => setActiveTooth(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            aria-label="Close info"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <h4 className="font-serif text-[#D4AF37] italic text-lg mb-1">Concern: {activeTooth.issue}</h4>
          <h3 className="font-heading font-bold text-xl mb-3">{activeTooth.label}</h3>
          <p className="text-gray-300 text-sm mb-4">
            You may be experiencing {activeTooth.issue.toLowerCase()}. Our recommended solution is <strong>{activeTooth.solution}</strong>.
          </p>
          <button 
            onClick={() => setActiveTooth(null)}
            className="w-full bg-[#4CA1A3] py-2 rounded-lg font-semibold hover:bg-[#3E8A8C] transition-colors"
          >
            Book Consultation
          </button>
        </div>
      )}
      
      {!activeTooth && (
        <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
          <p className="text-gray-500 text-sm">Tap an area to see recommended services</p>
        </div>
      )}
    </div>
  );
}
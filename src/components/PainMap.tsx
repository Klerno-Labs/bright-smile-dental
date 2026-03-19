"use client";

import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PainMap() {
  const [activeTooth, setActiveTooth] = useState<string | null>(null);

  const teeth = [
    { id: "t1", label: "Upper Left", issue: "Sensitivity/Whitening", x: 30, y: 40 },
    { id: "t2", label: "Upper Front", issue: "Cosmetic/Veneers", x: 50, y: 35 },
    { id: "t3", label: "Upper Right", issue: "Chipped Tooth", x: 70, y: 40 },
    { id: "t4", label: "Lower Left", issue: "Gum Pain", x: 30, y: 70 },
    { id: "t5", label: "Lower Front", issue: "Alignment", x: 50, y: 75 },
    { id: "t6", label: "Lower Right", issue: "Wisdom Pain", x: 70, y: 70 },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] bg-white rounded-3xl shadow-card border border-gray-100 flex items-center justify-center overflow-hidden">
      {/* Simplified Jaw Visual Representation using CSS/SVG shapes */}
      <div className="relative w-full h-full">
        {/* Upper Jaw Arc */}
        <div className="absolute top-[15%] left-[20%] right-[20%] h-[25%] border-t-8 border-x-8 border-gray-200 rounded-t-[100%]"></div>
        {/* Lower Jaw Arc */}
        <div className="absolute bottom-[15%] left-[20%] right-[20%] h-[25%] border-b-8 border-x-8 border-gray-200 rounded-b-[100%]"></div>

        {/* Hotspots */}
        {teeth.map((tooth) => (
          <button
            key={tooth.id}
            className="absolute w-6 h-6 -ml-3 -mt-3 rounded-full bg-secondary/20 border-2 border-secondary hover:bg-secondary hover:text-white hover:scale-125 transition-all duration-200 z-10 flex items-center justify-center"
            style={{ left: `${tooth.x}%`, top: `${tooth.y}%` }}
            onClick={() => setActiveTooth(tooth.id)}
            aria-label={`Select ${tooth.label}`}
          >
            <div className="w-2 h-2 rounded-full bg-secondary" />
          </button>
        ))}
      </div>

      {/* Modal / Tooltip */}
      <AnimatePresence>
        {activeTooth && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-primary/60 backdrop-blur-sm p-6"> setActiveTooth(null)}
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 relative"> e.stopPropagation()}
            >
              <button
                onClick={() => setActiveTooth(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-primary"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2 mb-4 text-secondary">
                <span className="font-heading font-bold">Area Identified:</span>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                {teeth.find(t => t.id === activeTooth)?.issue}
              </h3>
              <p className="text-textMain mb-6">
                Based on the area selected, you might benefit from our {teeth.find(t => t.id === activeTooth)?.issue} services. We recommend a professional consultation.
              </p>
              
              <a href="/services" className="flex items-center justify-center w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition-colors">
                View Treatment Options <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
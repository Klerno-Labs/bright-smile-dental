"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const teeth = [
  { id: "t1", top: "20%", left: "30%", label: "Upper Molar", issue: "Wisdom Pain", desc: "Impaction or decay causing discomfort." },
  { id: "t2", top: "50%", left: "25%", label: "Canine", issue: "Sensitivity", desc: "Gum recession or enamel wear." },
  { id: "t3", top: "30%", left: "50%", label: "Front Teeth", issue: "Cosmetic", desc: "Whitening or veneer consultation." },
  { id: "t4", top: "65%", left: "45%", label: "Lower Incisor", issue: "Alignment", desc: "Invisalign or braces options." },
  { id: "t5", top: "75%", left: "35%", label: "Lower Molar", issue: "Cavity", desc: "Filling or crown restoration needed." },
];

export function PainMap() {
  const [selectedTooth, setSelectedTooth] = useState<typeof teeth[0] | null>(null);

  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-[1240px] mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
          Where does it hurt?
        </h2>
        <p className="text-text-main max-w-2xl mx-auto mb-12">
          Click on an area of the mouth to learn about potential solutions and schedule a consultation.
        </p>

        <div className="relative max-w-2xl mx-auto aspect-[4/3] bg-[#F0F9FA] rounded-[40px] border border-secondary/10 flex items-center justify-center">
          {/* Placeholder for detailed SVG Mouth */}
          <svg 
            viewBox="0 0 200 150" 
            className="w-full h-full text-secondary/20"
            fill="currentColor"
          >
            <path d="M20,75 Q100,120 180,75 Q100,150 20,75 Z" /> {/* Lower jaw */}
            <path d="M20,75 Q100,30 180,75 Q100,0 20,75 Z" /> {/* Upper jaw */}
          </svg>

          {teeth.map((tooth) => (
            <button
              key={tooth.id}
              onClick={() => setSelectedTooth(tooth)}
              className="absolute w-6 h-6 bg-secondary rounded-full shadow-lg hover:scale-125 transition-transform z-10 flex items-center justify-center text-white text-xs font-bold"
              style={{ top: tooth.top, left: tooth.left }}
              aria-label={tooth.label}
            >
              !
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedTooth && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedTooth(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedTooth(null)}
                className="absolute top-4 right-4 text-muted hover:text-primary"
                aria-label="Close modal"
              >
                <X />
              </button>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                <span className="text-xl">🦷</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-1">{selectedTooth.issue}</h3>
              <p className="text-sm text-secondary font-medium mb-4">{selectedTooth.label}</p>
              <p className="text-text-main mb-6">{selectedTooth.desc}</p>
              <button 
                onClick={() => setSelectedTooth(null)}
                className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90"
              >
                Discuss Treatment
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
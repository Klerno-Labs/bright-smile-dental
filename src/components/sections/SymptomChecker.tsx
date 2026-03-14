"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Activity } from "lucide-react";

const symptoms = [
  { id: "top-left", label: "Top Left", cx: "35", cy: "40", service: "General Checkup & Cleaning", link: "/services#general" },
  { id: "top-front", label: "Top Front", cx: "50", cy: "35", service: "Cosmetic Whitening", link: "/services#cosmetic" },
  { id: "top-right", label: "Top Right", cx: "65", cy: "40", service: "Root Canal Therapy", link: "/services#endodontics" },
  { id: "bottom-left", label: "Bottom Left", cx: "35", cy: "60", service: "Periodontal Care", link: "/services#periodontal" },
  { id: "bottom-front", label: "Bottom Front", cx: "50", cy: "65", service: "Orthodontic Consult", link: "/services#ortho" },
  { id: "bottom-right", label: "Bottom Right", cx: "65", cy: "60", service: "Wisdom Tooth Removal", link: "/services#oral-surgery" },
];

export default function SymptomChecker() {
  const [activeTooth, setActiveTooth] = useState<string | null>(null);

  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-4">
            INTERACTIVE CHECKER
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-text-main mb-4">
            Not sure what you need?
          </h2>
          <p className="text-neutral-text-body text-lg">
            Click on the area where you are experiencing discomfort to see potential treatments and book an appointment.
          </p>
        </div>

        <div className="bg-neutral-bg rounded-3xl p-8 md:p-12 shadow-card border border-neutral-border flex flex-col lg:flex-row items-center gap-12">
          {/* Interactive Area */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-md aspect-[4/3]">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-xl"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Gum Outline - Stylized */}
                <path d="M10 30 Q50 10 90 30 L90 70 Q50 90 10 70 Z" fill="#ffe4e6" />
                
                {/* Teeth - Simplified Shapes */}
                {symptoms.map((symptom) => (
                  <g key={symptom.id} className="cursor-pointer group">
                    <circle
                      cx={symptom.cx}
                      cy={symptom.cy}
                      r="8"
                      fill={activeTooth === symptom.id ? "#0056b3" : "white"}
                      stroke="#e2e8f0"
                      strokeWidth="1"
                      className="transition-all duration-300 group-hover:scale-110"
                      onClick={() => setActiveTooth(symptom.id)}
                    />
                    {activeTooth === symptom.id && (
                      <circle
                        cx={symptom.cx}
                        cy={symptom.cy}
                        r="12"
                        stroke="#0056b3"
                        strokeWidth="2"
                        className="animate-ping opacity-75"
                      />
                    )}
                  </g>
                ))}
              </svg>
              
              {/* Hover hint */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm text-neutral-text-muted flex items-center gap-2">
                <Activity size={16} /> Tap a circle
              </div>
            </div>
          </div>

          {/* Result Panel */}
          <div className="w-full lg:w-1/2 min-h-[300px]">
            <AnimatePresence mode="wait">
              {!activeTooth ? (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col justify-center items-center text-center p-8 border-2 border-dashed border-neutral-border rounded-2xl"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                    <Activity size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-text-main">Select an Area</h3>
                  <p className="text-neutral-text-body mt-2">
                    Choose a section from the diagram to see recommended services.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={activeTooth}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-primary/20 h-full flex flex-col justify-center"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider text-primary">
                      {symptoms.find((s) => s.id === activeTooth)?.label}
                    </span>
                    <button 
                      onClick={() => setActiveTooth(null)}
                      className="text-gray-400 hover:text-gray-600"
                      aria-label="Clear selection"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-neutral-text-main mb-3">
                    {symptoms.find((s) => s.id === activeTooth)?.service}
                  </h3>
                  
                  <p className="text-neutral-text-body mb-6">
                    Based on your selection, this service is most commonly recommended. 
                    Our specialists will provide a full diagnosis during your visit.
                  </p>

                  <a 
                    href={symptoms.find((s) => s.id === activeTooth)?.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <ChevronRight size={18} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
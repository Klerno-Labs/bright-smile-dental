"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const symptoms = [
  { id: "top-left", label: "Upper Left", service: "General Examination" },
  { id: "top-right", label: "Upper Right", service: "General Examination" },
  { id: "bottom-left", label: "Lower Left", service: "Root Canal / Extraction" },
  { id: "bottom-right", label: "Lower Right", service: "Wisdom Tooth Evaluation" },
  { id: "front", label: "Front Teeth", service: "Cosmetic Whitening / Veneers" },
];

export function SymptomChecker() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual Component */}
          <div className="relative">
            <div className="bg-primaryLight rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              />
              
              <h3 className="text-2xl font-bold mb-8 text-center">Where does it hurt?</h3>
              
              {/* Simplified Interactive Mouth Visualization */}
              <div className="relative h-64 bg-white rounded-xl shadow-inner flex items-center justify-center border border-gray-100">
                <svg viewBox="0 0 200 150" className="w-full h-full max-w-sm">
                   {/* Upper Arch */}
                   <path d="M20,50 Q100,10 180,50 L180,70 Q100,30 20,70 Z" 
                     className={cn("transition-colors duration-300", selectedArea?.includes("top") ? "fill-primary/20" : "fill-gray-50")} />
                   {/* Lower Arch */}
                   <path d="M20,100 Q100,140 180,100 L180,80 Q100,120 20,80 Z" 
                     className={cn("transition-colors duration-300", selectedArea?.includes("bottom") ? "fill-primary/20" : "fill-gray-50")} />
                   
                   {/* Interactive Zones (Circles for simplicity) */}
                   {symptoms.map((s) => (
                     <g key={s.id} className="tooth-group" onClick={() => setSelectedArea(s.id)}>
                       <circle cx={s.id === "top-left" ? 60 : s.id === "top-right" ? 140 : s.id === "bottom-left" ? 60 : s.id === "bottom-right" ? 140 : 100} 
                               cy={s.id === "top-left" ? 50 : s.id === "top-right" ? 50 : s.id === "bottom-left" ? 100 : s.id === "bottom-right" ? 100 : 75} 
                               r="20" 
                               className={cn(selectedArea === s.id ? "fill-primary stroke-primaryDark stroke-2" : "fill-transparent stroke-gray-300 stroke-2 hover:stroke-primary hover:fill-primary/10")} />
                       <text x={s.id === "top-left" ? 60 : s.id === "top-right" ? 140 : s.id === "bottom-left" ? 60 : s.id === "bottom-right" ? 140 : 100} 
                             y={s.id === "top-left" ? 50 : s.id === "top-right" ? 50 : s.id === "bottom-left" ? 100 : s.id === "bottom-right" ? 100 : 75} 
                             textAnchor="middle" dy=".3em" className="text-xs pointer-events-none font-bold fill-textBody opacity-50">
                         ?
                       </text>
                     </g>
                   ))}
                </svg>
                
                <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-textMuted">
                  Click an area to see related services
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div>
            <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Interactive Symptom Checker
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-6">
              Not sure what you need?
            </h2>
            <p className="text-lg text-textBody mb-8">
              Dental pain can be confusing. Click on the areas above where you are experiencing discomfort, and we will suggest the best type of appointment to book.
            </p>

            <AnimatePresence mode="wait">
              {selectedArea ? (
                <motion.div
                  key={selectedArea}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white border border-primary/20 rounded-xl p-6 shadow-blue"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primaryLight flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-2xl">🦷</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-textMain mb-2">
                        {symptoms.find(s => s.id === selectedArea)?.label} Issue
                      </h4>
                      <p className="text-textBody mb-4">
                        Based on this area, we recommend a <span className="font-semibold text-primary">{symptoms.find(s => s.id === selectedArea)?.service}</span>.
                      </p>
                      <a 
                        href="/contact" 
                        className="inline-flex items-center text-primary font-semibold hover:underline"
                      >
                        Book this appointment &rarr;
                      </a>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center"
                >
                  <p className="text-textMuted italic">Select an area on the diagram to see results.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
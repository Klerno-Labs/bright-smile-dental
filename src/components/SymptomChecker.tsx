"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle } from "lucide-react";

// Simple representation of tooth zones for demo purposes
const symptomZones = [
  { id: "top-left", label: "Top Left", top: "20%", left: "30%" },
  { id: "top-right", label: "Top Right", top: "20%", right: "30%" },
  { id: "bottom-left", label: "Bottom Left", bottom: "20%", left: "30%" },
  { id: "bottom-right", label: "Bottom Right", bottom: "20%", right: "30%" },
];

const diagnoses: Record<string, { title: string; link: string; description: string }> = {
  "top-left": {
    title: "Possible Sensitivity or Cavity",
    link: "/services#general",
    description: "Sensitivity in upper teeth often indicates enamel wear or early decay.",
  },
  "top-right": {
    title: "Wisdom Tooth Issues?",
    link: "/services#emergency",
    description: "Pain in the upper back could be related to wisdom teeth eruption.",
  },
  "bottom-left": {
    title: "Gum Inflammation",
    link: "/services#general",
    description: "Lower gum sensitivity can be a sign of gingivitis or periodontal issues.",
  },
  "bottom-right": {
    title: "Possible Infection",
    link: "/services#emergency",
    description: "Persistent pain in the lower jaw requires immediate attention.",
  },
};

export function SymptomChecker() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const handleZoneClick = (id: string) => {
    setSelectedZone(id);
  };

  const result = selectedZone ? diagnoses[selectedZone] : null;

  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Interactive Area */}
        <div className="p-8 bg-gray-50 flex items-center justify-center relative min-h-[400px]">
          <div className="relative w-64 h-64 bg-blue-100 rounded-full opacity-50 absolute blur-3xl" />
          
          {/* Simplified Schematic Mouth */}
          <div className="relative z-10 w-full max-w-sm">
             <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Where does it hurt?</h3>
                <p className="text-sm text-gray-500">Tap an area to see potential causes</p>
             </div>
             
             <div className="relative bg-white border-4 border-gray-200 rounded-3xl p-4 h-64 shadow-inner">
                {/* Tooth Zones */}
                {symptomZones.map((zone) => (
                  <motion.button
                    key={zone.id}
                    type="button"
                    onClick={() => handleZoneClick(zone.id)}
                    className={cn(
                      "absolute w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors",
                      selectedZone === zone.id
                        ? "bg-primary border-primary text-white shadow-lg scale-110"
                        : "bg-white border-gray-300 text-gray-400 hover:border-primary hover:text-primary"
                    )}
                    style={{
                      top: zone.top,
                      bottom: zone.bottom,
                      left: zone.left,
                      right: zone.right,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Check ${zone.label}`}
                  >
                    {selectedZone === zone.id ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <span className="text-xs font-bold">?</span>
                    )}
                  </motion.button>
                ))}
                
                {/* Placeholder visual aid */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                   <div className="w-48 h-32 border-b-8 border-gray-400 rounded-b-full"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Result Panel */}
        <div className="p-8 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!selectedZone ? (
              <div className="text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Not sure where to start?
                </h3>
                <p className="text-gray-600 mb-6">
                  Select an area on the diagram to get instant recommendations on
                  which service might be right for you.
                </p>
              </div>
            ) : (
              result && (
                <div className="h-full flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-xs font-bold rounded-full w-fit mb-4 uppercase tracking-wider">
                    AI Suggestion
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {result.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {result.description}
                  </p>
                  <a
                    href={result.link}
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg w-fit"
                  >
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <button
                    onClick={() => setSelectedZone(null)}
                    className="mt-4 text-sm text-gray-500 underline hover:text-gray-700"
                  >
                    Reset checker
                  </button>
                </div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
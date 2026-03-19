"use client";

import { useState } from "react";
import { Tooth, AlertCircle, X } from "lucide-react";

type ToothData = {
  id: string;
  label: string;
  description: string;
  link: string;
};

const teethData: Record<string, ToothData> = {
  t1: { id: "t1", label: "Front Teeth", description: "Concerns about discoloration, chips, or gaps?", link: "/services#cosmetic" },
  t2: { id: "t2", label: "Molars", description: "Experiencing sensitivity or pain in the back?", link: "/services#restorative" },
  t3: { id: "t3", label: "Gums", description: "Bleeding or inflammation? We can help.", link: "/services#periodontal" },
};

export function PainMap() {
  const [activeTooth, setActiveTooth] = useState<ToothData | null>(null);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <Container className="text-center relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E3A53] mb-4">
            Where does it hurt?
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Click on an area to learn more about how we can solve your specific dental concerns.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto h-[400px] bg-white rounded-3xl shadow-lg flex items-center justify-center border border-gray-100">
          {/* Stylized Mouth Diagram */}
          <div className="relative w-full h-full p-8">
            {/* Top Arch */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 flex gap-2">
              {[...Array(6)].map((_, i) => (
                <button
                  key={`top-${i}`}
                  onClick={() => {
                    if (i < 2) setActiveTooth(teethData.t1);
                    else setActiveTooth(teethData.t2);
                  }}
                  className="w-10 h-12 rounded-t-full bg-gray-100 hover:bg-[#4CA1A3] hover:scale-110 transition-all border border-gray-200 relative group"
                  aria-label={`Tooth ${i + 1}`}
                >
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-white text-xs font-bold">
                    {i+1}
                   </div>
                </button>
              ))}
            </div>

            {/* Bottom Arch */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {[...Array(6)].map((_, i) => (
                <button
                  key={`bottom-${i}`}
                  onClick={() => {
                    if (i < 2) setActiveTooth(teethData.t1);
                    else setActiveTooth(teethData.t2);
                  }}
                  className="w-10 h-12 rounded-b-full bg-gray-100 hover:bg-[#4CA1A3] hover:scale-110 transition-all border border-gray-200 relative group"
                  aria-label={`Tooth ${i + 1}`}
                >
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-white text-xs font-bold">
                    {i+1}
                   </div>
                </button>
              ))}
            </div>
            
            {/* Gums Area */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-red-50 rounded-full border-2 border-dashed border-red-200 flex items-center justify-center cursor-pointer hover:bg-red-100 transition-colors"
               onClick={() => setActiveTooth(teethData.t3)}
             >
               <span className="text-red-300 text-xs uppercase tracking-widest font-semibold">Gums</span>
             </div>
          </div>
          
          <div className="absolute bottom-4 right-4 text-gray-300">
            <Tooth className="h-24 w-24 opacity-20" />
          </div>
        </div>

        {/* Modal / Tooltip */}
        {activeTooth && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl relative">
              <button
                onClick={() => setActiveTooth(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#E0F2F2] flex items-center justify-center text-[#4CA1A3]">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0E3A53]">{activeTooth.label}</h3>
              </div>
              
              <p className="text-[#4B5563] mb-6">{activeTooth.description}</p>
              
              <button
                onClick={() => {
                  setActiveTooth(null);
                  window.location.href = activeTooth.link;
                }}
                className="w-full bg-[#4CA1A3] text-white py-3 rounded-lg font-semibold hover:bg-[#3E8A8C] transition-colors"
              >
                View Treatment Options
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
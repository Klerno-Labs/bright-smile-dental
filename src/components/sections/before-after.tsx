"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { images } from "@/config/images";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Real Results, Real Smiles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Drag the slider to see the transformative power of our cosmetic treatments.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div 
            ref={containerRef}
            className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-[24px] overflow-hidden shadow-xl cursor-col-resize select-none group"
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
          >
            {/* Before Image (Background) */}
            <div className="absolute inset-0">
              <img 
                src={images["gallery-1"].src} 
                alt="Before Treatment" 
                className="w-full h-full object-cover filter sepia-[0.5] brightness-90" 
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                Before
              </div>
            </div>

            {/* After Image (Foreground - Clipped) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={images["gallery-3"].src} 
                alt="After Treatment" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                After
              </div>
            </div>

            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-medical text-medical group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
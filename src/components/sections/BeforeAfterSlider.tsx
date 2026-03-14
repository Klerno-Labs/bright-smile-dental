"use client";

import { useState, useRef } from "react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg cursor-ew-resize select-none group"
      onMouseMove={handleSliderMove}
      onTouchMove={handleSliderMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={images["service-2"].src}
          alt="After treatment" style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          After
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={images["service-1"].src} // Using service-1 as a placeholder for "Before"
          alt="Before treatment" style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          Before
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-[#0E3A53] shadow-lg flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-[#4CA1A3] rounded-full" />
            <div className="w-1 h-4 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Center Prompt */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md">Drag to compare</span>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    
    // Clamp between 0 and 100
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden rounded-l-[24px] select-none cursor-ew-resize group"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={images["hero-alt"].src}
          alt="After treatment" style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover"
        />
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-[#0E3A53] shadow-lg">
          After
        </div>
      </div>

      {/* Before Image (Foreground with Clipping) */}
      <div 
        className="absolute top-0 bottom-0 left-0 overflow-hidden border-r-2 border-white shadow-2xl"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={images["hero"].src}
          alt="Before treatment" style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover h-full w-[1200px] max-w-none" // Ensure image doesn't shrink inside the clipped container
        />
        <div className="absolute bottom-6 right-6 bg-[#0E3A53]/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg">
          Before
        </div>
      </div>

      {/* Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#4CA1A3]">
          <svg className="w-4 h-4 text-[#4CA1A3]" style={{ width: "100%", height: "100%", objectFit: "cover" }}="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
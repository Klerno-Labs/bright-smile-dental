"use client";

import { useState, useRef, MouseEvent } from "react";
import { images } from "@/config/images";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Placeholder images using generic keys from config for demo purposes
  // In production, these would be specific 'before' and 'after' keys
  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-ew-resize select-none group"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseMove={handleMove}
      onMouseLeave={() => setIsDragging(false)}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={images["gallery-1"].src}
          alt="After treatment" style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          After
        </div>
      </div>

      {/* Before Image (Foreground - Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden border-r-2 border-white shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={images["service-2"].src} // Using a different image to simulate "before"
          alt="Before treatment" style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          Before
        </div>
      </div>

      {/* Drag Handle */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-primary pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 1rem)` }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" style={{ width: "100%", height: "100%", objectFit: "cover" }}="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
          <polyline points="9 18 3 12 9 6" transform="translate(12 0)"></polyline>
        </svg>
      </div>
    </div>
  );
}
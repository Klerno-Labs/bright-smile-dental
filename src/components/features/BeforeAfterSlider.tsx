"use client";

import { useState, useRef } from "react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-4xl text-[#0F3460] mb-6">Real Results, Real Smiles</h2>
          <p className="text-lg text-gray-600">
            See the transformation our patients experience. Drag the slider to reveal the before and after.
          </p>
        </div>

        <div 
          ref={containerRef}
          className={cn(
            "relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] rounded-large overflow-hidden shadow-hover select-none group cursor-col-resize"
          )}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* Before Image (Bottom Layer) */}
          <div className="absolute inset-0 bg-gray-200">
            <img 
              src={images["before-teeth"].src} 
              alt="Before treatment" 
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide">
              BEFORE
            </div>
          </div>

          {/* After Image (Top Layer - Clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={images["after-teeth"].src} 
              alt="After treatment" 
              className="w-full h-full object-cover"
              style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }} // Counteract clip-path scaling visual artifact if needed
              draggable={false}
            />
             <div className="absolute top-6 right-6 bg-[#008080]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide">
              AFTER
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none cursor-col-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#008080]">
               <svg className="w-5 h-5 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
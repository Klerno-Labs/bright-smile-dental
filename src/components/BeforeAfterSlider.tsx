'use client';
import React, { useState, useRef } from "react";
import Image from 'next/image';
import { images } from '@/config/images';
import { cn } from '@/lib/utils';

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const percentage = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-ew-resize select-none group"
      onMouseMove={handleSliderMove}
      onTouchMove={handleSliderMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image 
          src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop" 
          alt="After: Bright confident smile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Before Image (Foreground with Clip) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image 
          src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=800&auto=format&fit=crop" 
          alt="Before: Dull smile"
          fill
          className="object-cover filter brightness-[0.9]"
          priority
        />
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
          Before
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
        After
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize pointer-events-none flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 rounded-full bg-white text-primary shadow-xl flex items-center justify-center transform -translate-x-1/2 pointer-events-auto group-hover:scale-110 transition-transform">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            <polyline points="9 18 3 12 9 6" transform="rotate(180 6 12)"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
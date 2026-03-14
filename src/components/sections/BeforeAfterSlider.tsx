"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
}

export function BeforeAfterSlider({ beforeSrc, afterSrc }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  useEffect(() => {
    const handleStop = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleStop);
      window.addEventListener("touchend", handleStop);
      return () => {
        window.removeEventListener("mouseup", handleStop);
        window.removeEventListener("touchend", handleStop);
      };
    }
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full cursor-ew-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={isDragging ? handleSliderMove : undefined}
      onTouchMove={isDragging ? handleSliderMove : undefined}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
         <Image 
           src={beforeSrc} 
           alt="Before Treatment" 
           fill 
           className="object-cover filter brightness-90"
           draggable={false}
         />
         <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
           Before
         </div>
      </div>

      {/* After Image (Foreground with Clip Path) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image 
          src={afterSrc} 
          alt="After Treatment" 
          fill 
          className="object-cover"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
           After
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-primary border-2 border-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            <polyline points="9 18 15 12 9 6" transform="rotate(180 12 12)"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/config/images";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { useState } from "react";
export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  // Note: Using generic service images for the slider demonstration
  const beforeImg = images["gallery-1"];
  const afterImg = images["gallery-2"];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-medical font-accent font-bold tracking-widest uppercase text-sm">
            Transformations
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-4 mb-6">
            Real Results, Real Smiles
          </h2>
          <p className="text-lg text-gray-600">
            See the difference our expert care makes. Drag the slider to reveal the magic of modern cosmetic dentistry.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl select-none group cursor-ew-resize"
          onMouseMove={handleMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleMove}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          {/* Before Image (Background) */}
          <div className="absolute inset-0">
            <Image
              src={beforeImg.src}
              alt={beforeImg.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-6 left-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              Before
            </div>
          </div>

          {/* After Image (Foreground Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <Image
              src={afterImg.src}
              alt={afterImg.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-6 right-6 bg-medical/80 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              After
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-primary group-hover:scale-110 transition-transform">
              {isDragging ? (
                <div className="w-4 h-4 bg-primary rounded-full" />
              ) : (
                <>
                  <ChevronLeft className="w-5 h-5 text-primary" />
                  <ChevronRight className="w-5 h-5 text-primary" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
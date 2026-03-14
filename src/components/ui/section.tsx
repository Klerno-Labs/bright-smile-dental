import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: "white" | "surface" | "mint-gradient";
  id?: string;
  container?: boolean;
}

export function Section({ children, className = "", bgColor = "white", id, container = true }: SectionProps) {
  const bgColors = {
    white: "bg-white",
    surface: "bg-surface",
    "mint-gradient": "bg-gradient-mint",
  };

  const containerClass = container ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : "w-full px-4 sm:px-6 lg:px-8";
  
  return (
    <section id={id} className={`w-full py-16 md:py-24 lg:py-32 ${bgColors[bgColor]} ${className}`}>
      <div className={containerClass}>
        {children}
      </div>
    </section>
  );
}
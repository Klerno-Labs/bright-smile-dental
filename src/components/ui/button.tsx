import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CA1A3] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-[#4CA1A3] text-white hover:bg-[#3E8A8C] hover:shadow-lg": variant === "primary",
            "bg-[#0E3A53] text-white hover:bg-[#0a2c40]": variant === "secondary",
            "border-2 border-[#0E3A53] text-[#0E3A53] hover:bg-[#0E3A53] hover:text-white": variant === "outline",
            "text-[#4CA1A3] hover:bg-[#4CA1A3]/10": variant === "ghost",
          },
          {
            "h-10 px-6 py-2 text-sm": size === "default",
            "h-9 px-4 text-xs": size === "sm",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
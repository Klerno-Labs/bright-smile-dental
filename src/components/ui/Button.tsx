import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[50px] text-sm font-accent font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#E94560] text-white hover:bg-[#d63d55] hover:scale-105 shadow-card",
        secondary: "bg-[#0F3460] text-white hover:bg-[#16213E] hover:scale-105",
        outline: "border-2 border-[#0F3460] text-[#0F3460] hover:bg-[#0F3460] hover:text-white",
        ghost: "text-[#0F3460] hover:bg-[#F3F4F6]",
      },
      size: {
        sm: "h-10 px-6 text-xs",
        md: "h-12 px-8 text-base",
        lg: "h-16 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
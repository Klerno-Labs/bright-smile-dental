import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "font-accent font-semibold tracking-wide transition-all duration-300 ease-out inline-flex items-center justify-center rounded-lg disabled:opacity-70 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-accent text-white hover:bg-red-500 hover:scale-[1.02] shadow-md hover:shadow-lg",
    secondary: "bg-primary text-white hover:bg-secondary hover:scale-[1.02] shadow-md hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-[1.02]",
    ghost: "text-primary hover:bg-surface",
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
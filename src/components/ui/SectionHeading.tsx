import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center mx-auto max-w-3xl", className)}>
      {subtitle && (
        <p className="text-[#4CA1A3] font-semibold tracking-wide uppercase text-sm mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-manrope font-bold text-[clamp(2rem,4vw,3rem)] text-[#0E3A53] leading-[1.2] mb-4">
        {title}
      </h2>
      <div className={cn("h-1 w-20 bg-[#D4AF37] rounded-full", align === "center" ? "mx-auto" : "ml-0")} />
    </div>
  );
}
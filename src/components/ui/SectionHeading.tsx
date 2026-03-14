import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-main leading-relaxed font-body">
          {subtitle}
        </p>
      )}
      <div className={cn("w-20 h-1.5 bg-secondary mt-6", align === "left" ? "" : "mx-auto")} />
    </div>
  );
}
import Image from "next/image";
import { Container } from "../ui/Container";
import { images } from "@/config/images";
import { SectionHeading } from "../ui/SectionHeading";

interface HeroInternalProps {
  title: string;
  subtitle?: string;
  imageKey: keyof typeof images;
}

export function HeroInternal({ title, subtitle, imageKey }: HeroInternalProps) {
  const imgData = images[imageKey];

  return (
    <div className="relative pt-32 pb-20 bg-primary">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={imgData.src}
          alt={imgData.alt}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
      
      <Container className="relative z-10">
        <div className="max-w-3xl text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/80 leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
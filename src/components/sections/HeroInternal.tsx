import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { images } from "@/config/images";

interface HeroInternalProps {
  title: string;
  subtitle?: string;
  imageKey: keyof typeof images;
}

export function HeroInternal({ title, subtitle, imageKey }: HeroInternalProps) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={images[imageKey].src}
          alt={images[imageKey].alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0E3A53]/70" />
      </div>
      
      <Container className="relative z-10 text-center text-white">
        <h1 className="font-manrope font-bold text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto font-playfair italic">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
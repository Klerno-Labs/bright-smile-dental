import { Button } from "./ui/Button";
import { images } from "@/config/images";
export function CTA({ title = "Ready for Your Best Smile?", description = "Join thousands of happy patients in Houston. Book your appointment today and experience the difference of gentle, modern dentistry." }) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={images["cta"].src}
          alt={images["cta"].alt} style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-primaryLight mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-10">
            <a href="/contact">Book Appointment</a>
          </Button>
          <Button asChild size="lg" variant="accent" className="text-lg h-14 px-10">
             <a href="tel:+17135550198">Call (713) 555-0198</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
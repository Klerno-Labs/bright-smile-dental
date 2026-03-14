import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { images } from "@/config/images";
import Image from "next/image";

export function CallToAction({ showForm = false }: { showForm?: boolean }) {
  return (
    <section className="py-24 relative bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={images["cta"].src}
          alt={images["cta"].alt}
          fill
          className="object-cover"
        />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            Schedule your consultation today and take the first step towards better oral health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Book Appointment
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:text-white hover:bg-white/10">
              Call (512) 555-0198
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
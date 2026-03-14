import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";

export function CallToAction() {
  return (
    <section className="relative py-24 bg-[#0E3A53]">
      <div className="absolute inset-0 z-0">
        <img
          src={images["cta"].src}
          alt="Background" style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E3A53] via-[#0E3A53]/95 to-[#0E3A53]/70" />
      </div>

      <Container className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-white">
          <h2 className="text-3xl md:text-5xl font-bold font-manrope mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Schedule your consultation today and take the first step towards a healthier, brighter smile. New patients receive $49 exam & X-rays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#4CA1A3] hover:bg-[#3E8A8C] text-white border-none">
              Book Appointment
            </Button>
            <Button size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-[#0E3A53]">
              Call (713) 555-0198
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
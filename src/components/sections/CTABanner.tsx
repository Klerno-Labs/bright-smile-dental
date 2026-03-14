import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { Calendar } from "lucide-react";

export function CTABanner() {
  return (
    <section id="contact" className="py-section-gap relative bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${images["cta"].src})` }}>
      <div className="absolute inset-0 bg-[#0F3460]/90"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center text-white">
        <div className="inline-block p-4 bg-[#008080] rounded-full mb-8">
           <Calendar className="w-8 h-8 text-white" />
        </div>
        <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">Ready to Transform Your Smile?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Book your appointment today and take the first step towards a healthier, brighter you. New patients always welcome.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Button size="lg" className="bg-white text-[#0F3460] hover:bg-gray-100">
             Schedule Visit
           </Button>
           <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Call (713) 555-0123
           </Button>
        </div>
      </div>
    </section>
  );
}
import { HeroInternal } from "@/components/sections/HeroInternal";
import { ServicesList } from "@/components/sections/ServicesList";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallToAction } from "@/components/sections/CallToAction";
import { Metadata } from "next";
import Image from "next/image";
import { images } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { FinanceCalculator } from "@/components/sections/FinanceCalculator";

export const metadata: Metadata = {
  title: "Our Services",
  description: "From general dentistry to complex cosmetic procedures, we offer a full range of services.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroInternal 
        title="Comprehensive Dental Services" 
        subtitle="World-class treatments right here in your neighborhood."
        imageKey="service-2"
      />

      <ServicesList />

      {/* Featured Service Highlight - ZigZag */}
      <section className="py-24 bg-surface">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
               <Image src={images["service-1"].src} alt="Cosmetic Dentistry" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
               <h3 className="font-heading text-3xl font-bold text-primary mb-4">Smile Makeovers</h3>
               <p className="text-text-main leading-relaxed mb-6">
                 A complete smile makeover involves a comprehensive assessment of your facial aesthetics and dental health to design the perfect smile for you. It may include a combination of veneers, crowns, implants, and whitening.
               </p>
               <ul className="space-y-3 mb-8">
                 {["Customized treatment plan", "Digital smile preview", "Financing available"].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-text-main">
                     <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                       <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                     </div>
                     {item}
                   </li>
                 ))}
               </ul>
               <Button>Book Consultation</Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <h3 className="font-heading text-3xl font-bold text-primary mb-4">Dental Implants</h3>
               <p className="text-text-main leading-relaxed mb-6">
                 Regain the function and appearance of natural teeth with our premium dental implant solutions. Using 3D CT imaging, we ensure precise placement for optimal results and longevity.
               </p>
               <div className="bg-background p-6 rounded-xl border border-gray-100 mb-8">
                 <h4 className="font-bold text-primary mb-4">Cost & Finance</h4>
                 <p className="text-sm text-text-main mb-4">Starting at $3,000 per implant. Abutment and crown additional.</p>
                 <div className="w-full lg:w-2/3">
                    <FinanceCalculator />
                 </div>
               </div>
               <Button>Learn More</Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
               <Image src={images["gallery-3"].src} alt="Dental Implants" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
import { HeroInternal } from "@/components/sections/HeroInternal";
import { ServicesList } from "@/components/sections/ServicesList";
import { Container } from "@/components/ui/Container";
import { Search, Shield, Sparkles, Clock, Heart } from "lucide-react";

export const metadata = {
  title: "Our Services",
  description: "Explore our comprehensive dental services including cosmetic, general, and emergency dentistry.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroInternal 
        title="Our Dental Services" 
        subtitle="Comprehensive care for your entire family"
        imageKey="service-2" 
      />

      {/* Service Categories Overview */}
      <section className="py-16 bg-white border-b border-gray-100">
        <Container>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: Shield, label: "Preventative" },
              { icon: Sparkles, label: "Cosmetic" },
              { icon: Clock, label: "Emergency" },
              { icon: Heart, label: "Restorative" },
              { icon: Search, label: "Orthodontics" }
            ].map((cat, i) => (
              <button key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-[#E0F2F2] text-[#0E3A53] rounded-full transition-colors">
                <cat.icon className="h-4 w-4 text-[#4CA1A3]" />
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <ServicesList />
    </>
  );
}
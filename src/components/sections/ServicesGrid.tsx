import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Shield, Sparkles, Clock } from "lucide-react";

const services = [
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and professional whitening for that picture-perfect look.",
    icon: Sparkles,
    link: "/services#cosmetic"
  },
  {
    title: "General Dentistry",
    description: "Comprehensive exams, cleanings, and fillings to keep your oral health in peak condition.",
    icon: Shield,
    link: "/services#general"
  },
  {
    title: "Emergency Care",
    description: "Same-day appointments available for toothaches, chips, and urgent dental needs.",
    icon: Clock,
    link: "/contact"
  }
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading 
          title="Comprehensive Dental Solutions" 
          subtitle="Our Services"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#E0F2F2] flex items-center justify-center text-[#4CA1A3] mb-6 group-hover:bg-[#4CA1A3] group-hover:text-white transition-colors">
                <service.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-bold text-[#0E3A53] mb-3 font-manrope">
                {service.title}
              </h3>
              
              <p className="text-[#4B5563] leading-relaxed mb-6">
                {service.description}
              </p>
              
              <a href={service.link} className="inline-flex items-center text-[#4CA1A3] font-semibold group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
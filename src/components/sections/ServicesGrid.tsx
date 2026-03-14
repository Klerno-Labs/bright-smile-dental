import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowRight, Monitor, Sparkles, HeartPulse } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Cosmetic Dentistry",
    excerpt: "Transform your smile with veneers, bonding, and professional whitening for a look you'll love.",
    icon: Sparkles,
    link: "/services#cosmetic",
  },
  {
    title: "General Dentistry",
    excerpt: "Comprehensive checkups, cleanings, and fillings to keep your oral health in peak condition.",
    icon: HeartPulse,
    link: "/services#general",
  },
  {
    title: "Advanced Technology",
    excerpt: "Digital X-rays, 3D imaging, and laser dentistry for precise, comfortable treatments.",
    icon: Monitor,
    link: "/services#tech",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <SectionHeading 
          title="Our Expertise" 
          subtitle="Comprehensive care designed for your comfort and long-term health."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              href={service.link}
              className="group bg-surface p-8 rounded-[24px] shadow-card hover:shadow-hover transition-all duration-300 border border-gray-100 block"
            >
              <div className={cn(
                "w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors"
              )}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">{service.title}</h3>
              <p className="text-text-main leading-relaxed mb-6 text-sm">
                {service.excerpt}
              </p>
              <span className="inline-flex items-center text-secondary font-semibold group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
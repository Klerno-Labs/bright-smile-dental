import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Heart, Shield } from "lucide-react";
import { images } from "@/config/images";

const services = [
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and professional whitening tailored to your facial features.",
    icon: <Sparkles className="w-8 h-8" />,
    image: images["service-1"],
    link: "/services#cosmetic",
    price: "From $250"
  },
  {
    title: "Dental Implants",
    description: "Restore function and aesthetics with permanent, natural-looking implant solutions.",
    icon: <Heart className="w-8 h-8" />,
    image: images["service-2"],
    link: "/services#implants",
    price: "Consultation Free"
  },
  {
    title: "Family Dentistry",
    description: "Comprehensive care for all ages, from pediatric checkups to geriatric dental health management.",
    icon: <Shield className="w-8 h-8" />,
    image: images["service-3"],
    link: "/services#general",
    price: "Insurance Welcome"
  },
];

export function ServiceGrid() {
  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-4xl text-[#0F3460] mb-4">Comprehensive Care</h2>
            <p className="text-lg text-gray-600">
              We combine cutting-edge technology with compassionate care to provide a full spectrum of dental services.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[12px] p-[40px] border border-[#E5E7EB] shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="text-[#008080] mb-6">
                {service.icon}
              </div>
              
              <h3 className="font-heading text-[28px] text-[#0F3460] mb-4 font-bold">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-6">
                <span className="text-sm font-accent text-[#E94560] font-bold tracking-wide">
                  {service.price}
                </span>
                <Link 
                  href={service.link} 
                  className="text-[#0F3460] font-bold flex items-center group-hover:text-[#008080] transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
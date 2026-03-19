import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/config/images";

const services = [
  {
    title: "Cosmetic Dentistry",
    description: "Porcelain veneers, teeth whitening, and smile makeovers designed to give you the confidence you deserve.",
    image: "service-1",
    price: "Consultation from $150",
    link: "/services#cosmetic"
  },
  {
    title: "Implant Restoration",
    description: "State-of-the-art dental implants that look and feel just like your natural teeth. Restore function and aesthetics.",
    image: "service-2",
    price: "Financing Available",
    link: "/services#implants"
  },
  {
    title: "Invisalign®",
    description: "Straighten your teeth discreetly with clear aligners. Customized for comfort and results.",
    image: "service-3",
    price: "Monthly from $199",
    link: "/services#invisalign"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Comprehensive Care</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From preventative checkups to complex restorations, we offer a full spectrum of dental services under one roof.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={images[service.image as keyof typeof images].src}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-medical transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{service.description}</p>
                
                <div className="space-y-4">
                  <div className="text-accent font-semibold text-sm tracking-wide uppercase">{service.price}</div>
                  <a href={service.link} className="flex items-center text-primary font-bold group/link">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
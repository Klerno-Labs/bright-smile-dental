"use client";

import { Hero } from "@/components/sections/hero";
import { Contact } from "@/components/sections/contact";
import { Check, Zap } from "lucide-react";

const treatments = [
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with our advanced cosmetic treatments",
    services: [
      { name: "Teeth Whitening", price: "From $299" },
      { name: "Porcelain Veneers", price: "From $899/tooth" },
      { name: "Smile Makeover", price: "Custom pricing" },
      { name: "Dental Bonding", price: "From $199/tooth" },
    ],
  },
  {
    id: "implants",
    title: "Dental Implants",
    desc: "Permanent solutions for missing teeth",
    services: [
      { name: "Single Tooth Implant", price: "From $2,499" },
      { name: "Implant-Supported Bridge", price: "From $4,999" },
      { name: "Full Arch Restoration", price: "Custom pricing" },
      { name: "Mini Implants", price: "From $1,499" },
    ],
  },
  {
    id: "general",
    title: "General Dentistry",
    desc: "Comprehensive care for the whole family",
    services: [
      { name: "Routine Cleaning", price: "From $149" },
      { name: "Dental Fillings", price: "From $199" },
      { name: "Root Canal Therapy", price: "From $799" },
      { name: "Tooth Extraction", price: "From $199" },
    ],
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    desc: "Straight teeth for a confident smile",
    services: [
      { name: "Invisalign", price: "From $3,999" },
      { name: "Traditional Braces", price: "From $2,999" },
      { name: "Retainers", price: "From $299" },
      { name: "Clear Aligners", price: "From $2,499" },
    ],
  },
];

export function ServicesContent() {
  return (
    <>
      <section className="pt-32 pb-20 bg-surface-alt border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Dental Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive care utilizing the latest technology for your comfort and health.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {treatments.map((category, idx) => (
            <div key={category.id} id={category.id} className="mb-24 last:mb-0 scroll-mt-24">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-medical/10 rounded-2xl flex items-center justify-center mr-6 text-medical">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">{category.title}</h2>
                  <p className="text-gray-600">{category.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.services.map((service, sIdx) => (
                  <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-medical hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-primary group-hover:text-medical transition-colors">{service.name}</h3>
                      <Check className="w-5 h-5 text-gray-300 group-hover:text-medical transition-colors" />
                    </div>
                    <p className="text-accent font-semibold text-sm">{service.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
}

"use client";

import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Contact } from "@/components/sections/contact";
import { Check, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive dental treatments including Cosmetic Dentistry, Implants, and Orthodontics.",
};

const treatments = [
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    desc: "Achieve the smile of your dreams with our aesthetic treatments.",
    services: [
      { name: "Porcelain Veneers", price: "From $1,200/tooth" },
      { name: "Professional Whitening", price: "$399" },
      { name: "Bonding & Contouring", price: "From $300/tooth" },
      { name: "Gum Recontouring", price: "From $500" }
    ]
  },
  {
    id: "restorative",
    title: "Restorative Care",
    desc: "Repair damaged teeth and restore full function to your bite.",
    services: [
      { name: "Dental Implants", price: "From $3,500" },
      { name: "Crowns & Bridges", price: "From $1,100" },
      { name: "Root Canal Therapy", price: "From $800" },
      { name: "Tooth-Colored Fillings", price: "From $250" }
    ]
  },
  {
    id: "ortho",
    title: "Orthodontics",
    desc: "Straighten your teeth at any age with modern solutions.",
    services: [
      { name: "Invisalign", price: "From $4,500" },
      { name: "Clear Braces", price: "From $4,000" },
      { name: "Traditional Braces", price: "From $3,800" },
      { name: "Retainers", price: "From $200" }
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Internal Hero */}
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
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center mb-8"
              >
                <div className="w-16 h-16 bg-medical/10 rounded-2xl flex items-center justify-center mr-6 text-medical">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">{category.title}</h2>
                  <p className="text-gray-600">{category.desc}</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.services.map((service, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.1 }}
                    className="p-6 bg-white border border-gray-200 rounded-xl hover:border-medical hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-primary group-hover:text-medical transition-colors">{service.name}</h3>
                      <Check className="w-5 h-5 text-gray-300 group-hover:text-medical transition-colors" />
                    </div>
                    <p className="text-accent font-semibold text-sm">{service.price}</p>
                  </motion.div>
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
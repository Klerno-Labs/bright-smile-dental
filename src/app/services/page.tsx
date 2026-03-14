"use client";

import { useState } from "react";
import { Metadata } from "next";
import { motion } from "framer-motion";
import { Calculator, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";

// Note: Normally this is a server component for metadata, but we are making it client for the calculator/accordion interactions
// In a real app, split the accordion into a client component.

export default function ServicesPage() {
  const [openService, setOpenService] = useState<string | null>("cosmetic");
  const [cost, setCost] = useState(3000);

  const monthlyPayment = Math.round((cost / 12) * 1.05); // Simple calc logic

  const services = [
    { 
      id: "cosmetic", 
      title: "Cosmetic Dentistry", 
      price: "$500 - $3,000",
      desc: "Transform your smile with porcelain veneers, professional whitening, and bonding.",
      details: "Our cosmetic services include Zoom Whitening, Porcelain Veneers, and Cosmetic Bonding. We use digital smile design to show you your potential results before we start.",
      img: "service-2"
    },
    { 
      id: "general", 
      title: "General Dentistry", 
      price: "$150 - $400",
      desc: "Routine cleanings, comprehensive exams, and cavity style={{ width: "100%", height: "100%", objectFit: "cover" }}ings for the whole family.",
      details: "Prevention is the best medicine. Our general services include prophylaxis, fluoride treatments, sealants, and tooth-colored composite style={{ width: "100%", height: "100%", objectFit: "cover" }}ings.",
      img: "service-1"
    },
    { 
      id: "implants", 
      title: "Implants & Restoration", 
      price: "$2,000+",
      desc: "Permanent solutions for missing teeth using top-grade titanium implants.",
      details: "We use 3D CBCT imaging for precise implant placement. Whether you need a single tooth implant or a full-mouth restoration (All-on-4), our specialists are here to help.",
      img: "service-3"
    }
  ];

  return (
    <main className="pt-10">
      {/* Hero */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h1>
          <p className="text-lg text-textMain max-w-2xl mx-auto">Transparent pricing and world-class care. Select a category to learn more.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-6">
            {services.map((service) => (
              <motion.div 
                key={service.id}
                layout
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <button 
                  onClick={() => setOpenService(openService === service.id ? null : service.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-xl font-bold text-primary">{service.title}</span>
                    <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">{service.price}</span>
                  </div>
                  {openService === service.id ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-secondary" />}
                </button>
                
                {openService === service.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-100"
                  >
                    <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                      <div>
                        <p className="text-textMain mb-4 leading-relaxed">{service.desc}</p>
                        <p className="text-textMain leading-relaxed">{service.details}</p>
                        <div className="mt-8">
                           <Button>Book This Service</Button>
                        </div>
                      </div>
                      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                        <img 
                          src={images[service.img as ImageSlot].src} 
                          alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                          className="object-cover" 
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Calculator Feature */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary">Finance Calculator</h3>
                <p className="text-sm text-textMain">Estimate your monthly payments (APR 5%)</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Estimated Treatment Cost</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">$</span>
                  <input 
                    type="number" 
                    value={cost}
                    onChange={(e) => setCost(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                  />
                </div>
                <input 
                  type="range" 
                  min="500" 
                    max="10000" 
                    step="100"
                  value={cost}
                  onChange={(e) => setCost(Number(e.target.value))}
                  className="w-full mt-3 accent-secondary"
                />
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex justify-between items-center">
                <span className="text-textMain">Estimated Monthly Payment</span>
                <span className="text-3xl font-bold text-primary">${monthlyPayment}<span className="text-sm text-gray-500 font-normal">/mo</span></span>
              </div>
              
              <p className="text-xs text-gray-400 text-center">*Estimates only. Actual financing terms may vary based on credit approval.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
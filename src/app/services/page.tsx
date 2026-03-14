"use client";

import { useState } from "react";
import { Metadata } from "next"; // Note: Client components can't export metadata, but this ensures strict mode checking doesn't fail imports
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChevronDown, Calculator, Clock, DollarSign } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

// Mock export for static check - actual metadata should be in a server component wrapper if needed
// For this single-file constraint, we ignore the metadata export here and assume layout handles base.

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [calculatorCost, setCalculatorCost] = useState(2000);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = ["all", "cosmetic", "restorative", "general"];
  
  const services = [
    { id: "s1", category: "cosmetic", title: "Teeth Whitening", price: "299", time: "1 Hour", desc: "Professional laser whitening for results up to 8 shades lighter." },
    { id: "s2", category: "cosmetic", title: "Porcelain Veneers", price: "1200", time: "2 Visits", desc: "Custom thin shells to correct shape, color, and alignment." },
    { id: "s3", category: "restorative", title: "Dental Implants", price: "2500", time: "3-6 Months", desc: "Permanent solution for missing teeth that looks and feels natural." },
    { id: "s4", category: "restorative", title: "Crowns & Bridges", price: "800", time: "1-2 Visits", desc: "Durable ceramic restorations to protect damaged teeth." },
    { id: "s5", category: "general", title: "Routine Cleaning", price: "150", time: "45 Mins", desc: "Comprehensive cleaning, polishing, and oral exam." },
    { id: "s6", category: "general", title: "Root Canal", price: "900", time: "1-2 Hours", desc: "Pain-relieving therapy to save infected teeth." },
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-[#F9FAFB] border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0E3A53] mb-6">Our Dental Services</h1>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto mb-10">
            Transparent pricing, advanced technology, and expert care. No hidden fees.
          </p>
          
          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all",
                  activeCategory === cat 
                    ? "bg-[#0E3A53] text-white" 
                    : "bg-white text-[#4B5563] border border-gray-200 hover:border-[#0E3A53]"
                )}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service List */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="space-y-4">
            {filteredServices.map((service) => (
              <div key={service.id} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <span className="font-heading font-bold text-xl text-[#0E3A53]">{service.title}</span>
                    <span className="hidden md:inline text-gray-400">•</span>
                    <span className="text-[#4CA1A3] font-medium">Starting at ${service.price}</span>
                  </div>
                  <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform", expandedService === service.id && "rotate-180")} />
                </button>
                
                {expandedService === service.id && (
                  <div className="p-6 bg-[#F9FAFB] border-t border-gray-200 animate-fade-in-up grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                      <h4 className="font-bold text-[#0E3A53] mb-2">Overview</h4>
                      <p className="text-[#4B5563] mb-4">{service.desc}</p>
                      <div className="flex gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{service.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <Button asChild className="w-full md:w-auto">
                        <Link href="/#contact">Book Consultation</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service + Calculator */}
      <section className="py-24 bg-[#0E3A53] text-white overflow-hidden relative">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Featured Procedure</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Full Smile Makeover</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Combine veneers, whitening, and contouring for a complete transformation. We use digital smile design to show you your new smile before we start.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-[#4CA1A3]">12+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#4CA1A3]">500+</div>
                <div className="text-sm text-gray-400">Smiles Restored</div>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <div className="bg-white text-[#0E3A53] rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 text-[#0E3A53]">
              <Calculator className="w-6 h-6 text-[#4CA1A3]" />
              <h3 className="font-heading font-bold text-xl">Payment Estimator</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Estimated Treatment Cost</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input 
                    type="number" 
                    value={calculatorCost} 
                    onChange={(e) => setCalculatorCost(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CA1A3] focus:border-transparent outline-none font-heading font-bold"
                  />
                </div>
              </div>

              <div className="bg-[#F9FAFB] p-6 rounded-xl border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 text-sm">12 Month Financing (APR 9.9%)</span>
                </div>
                <div className="text-3xl font-bold text-[#0E3A53]">
                  ${(calculatorCost / 12 + (calculatorCost * 0.099 / 12)).toFixed(2)} <span className="text-sm font-normal text-gray-500">/mo</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">*Subject to credit approval.</p>
              </div>

              <Button className="w-full bg-[#4CA1A3] hover:bg-[#3E8A8C] text-white" asChild>
                <Link href="/#contact">Apply for Financing</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative BG */}
        <Image src={images["service-2"].src} alt="" fill className="object-cover opacity-10 grayscale mix-blend-overlay" />
      </section>

      <Footer />
    </main>
  );
}
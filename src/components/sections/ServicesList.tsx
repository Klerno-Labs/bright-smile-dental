"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FinanceCalculator } from "./FinanceCalculator";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const servicesData = [
  {
    category: "Cosmetic",
    items: [
      {
        id: "whitening",
        title: "Professional Teeth Whitening",
        price: "$299",
        duration: "1 Hour",
        description: "Our in-office laser whitening system can brighten your smile by up to 8 shades in a single session.",
        details: ["Custom take-home trays included", "Safe for enamel", "Long-lasting results"]
      },
      {
        id: "veneers",
        title: "Porcelain Veneers",
        price: "$1,200 / tooth",
        duration: "2 Visits",
        description: "Custom-crafted shells of porcelain that cover the front surface of teeth to perfect their shape and color.",
        details: ["Stain-resistant", "Natural look", "Corrects chips & gaps"]
      }
    ]
  },
  {
    category: "Restorative",
    items: [
      {
        id: "implants",
        title: "Dental Implants",
        price: "$2,500",
        duration: "3-6 Months",
        description: "The gold standard for replacing missing teeth. Implants provide a stable foundation for crowns that look and feel like natural teeth.",
        details: ["Prevents bone loss", "Lifetime durability", "Eat with confidence"]
      },
      {
        id: "crowns",
        title: "Same-Day CEREC Crowns",
        price: "$1,100",
        duration: "1 Visit",
        description: "Digital scanning and 3D milling technology allow us to create and place your permanent crown in a single appointment.",
        details: ["No messy impressions", "No temporary crown", "High-strength ceramic"]
      }
    ]
  }
];

export function ServicesList() {
  const [openCategory, setOpenCategory] = useState<string>("Cosmetic");
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {servicesData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setOpenCategory(cat.category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                openCategory === cat.category
                  ? "bg-[#0E3A53] text-white"
                  : "bg-white text-[#0E3A53] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.category} Dentistry
            </button>
          ))}
        </div>

        {/* Accordion Content */}
        <div className="space-y-4 mb-16">
          {servicesData.find(c => c.category === openCategory)?.items.map((item, idx) => (
            <div key={item.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setActiveCalculator(activeCalculator === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#0E3A53]">{item.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-500 mt-1">
                    <span className="font-medium text-[#4CA1A3]">{item.price}</span>
                    <span>•</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
                {activeCalculator === item.id ? <ChevronUp className="text-[#4CA1A3]" /> : <ChevronDown className="text-gray-400" />}
              </button>
              
              {activeCalculator === item.id && (
                <div className="px-6 pb-6 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[#4B5563] mb-4">{item.description}</p>
                      <ul className="space-y-2 mb-6">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-[#0E3A53]">
                            <Check className="h-4 w-4 text-[#4CA1A3]" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact">
                         <Button size="sm">Book Consultation</Button>
                      </Link>
                    </div>
                    <div>
                      <FinanceCalculator basePrice={parseInt(item.price.replace(/[^0-9]/g, ''))} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
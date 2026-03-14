'use client';
import { useState } from 'react';
import { Check, Calculator, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { images } from '@/config/images';
import Image from 'next/image';

export const metadata = {
  title: "Our Services",
  description: "Explore our comprehensive dental services including cosmetic, restorative, and preventative care.",
  openGraph: {
    title: "Our Services - Bright Smile Dental",
    description: "From fillings to implants, we do it all.",
    images: [{ url: images['service-1'].src }],
  }
};

const servicesData = [
  {
    category: "Cosmetic",
    items: [
      {
        title: "Teeth Whitening",
        price: "$299",
        time: "1 Hour",
        desc: "Professional-grade whitening that removes years of staining in a single session. Safe for enamel.",
        details: ["Custom trays included", "Zoom! technology", "Immediate results"]
      },
      {
        title: "Porcelain Veneers",
        price: "$1,200/each",
        time: "2 Visits",
        desc: "Thin shells of porcelain that cover the front surface of teeth to improve appearance.",
        details: ["Stain resistant", "Natural look", "10+ year lifespan"]
      },
      {
        title: "Invisalign",
        price: "$4,500 - $6,000",
        time: "12-18 Mo",
        desc: "Clear aligners that straighten teeth without metal brackets. Virtually invisible.",
        details: ["Removable", "Comfortable", "Digital scanning"]
      }
    ]
  },
  {
    category: "Restorative",
    items: [
      {
        title: "Dental Implants",
        price: "$3,000+",
        time: "3-6 Mo",
        desc: "Permanent replacement roots that support crowns or bridges. The gold standard for missing teeth.",
        details: ["Titanium posts", "Lifetime guarantee on post", "Looks like real teeth"]
      },
      {
        title: "Crowns & Bridges",
        price: "$1,100+",
        time: "1-2 Weeks",
        desc: "Cover damaged teeth or replace missing ones with durable ceramic restorations.",
        details: ["Same-day CEREC options", "Color matched", "Metal-free options"]
      }
    ]
  },
  {
    category: "Preventative",
    items: [
      {
        title: "Comprehensive Exam",
        price: "$150",
        time: "45 Mins",
        desc: "Full examination including X-rays, oral cancer screening, and gum health assessment.",
        details: ["Digital X-rays", "Periodontal charting", "Treatment plan"]
      },
      {
        title: "Cleaning",
        price: "$120",
        time: "45 Mins",
        desc: "Professional cleaning to remove plaque and tartar, followed by polishing.",
        details: ["Ultrasonic scaling", "Fluoride treatment", "Flossing"]
      }
    ]
  }
];

function FinanceCalculator({ price }: { price: string }) {
  const [cost, setCost] = useState(2500);
  const monthlyPayment = (cost / 12) * 1.05; // Simple calculation with interest

  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6">
      <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
        <Calculator className="w-5 h-5 text-secondary" />
        Finance Calculator
      </div>
      <label className="text-sm text-text-muted mb-2 block">Estimated Treatment Cost: ${cost}</label>
      <input 
        type="range" 
        min="500" 
        max="10000" 
        step="100" 
        value={cost}
        onChange={(e) => setCost(Number(e.target.value))}
        className="w-full accent-secondary mb-4"
      />
      <div className="flex justify-between items-center border-t border-gray-300 pt-4">
        <span className="text-sm text-text-muted">Est. Monthly Payment (12mo)</span>
        <span className="text-xl font-bold text-secondary">${Math.round(monthlyPayment)}/mo</span>
      </div>
      <p className="text-xs text-text-muted mt-2">*Based on 5% APR for qualified applicants.</p>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Our Dental Services</h1>
          <p className="text-xl text-text-main max-w-2xl mx-auto">
            Transparent pricing, world-class technology, and a gentle touch.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {['Cosmetic', 'Restorative', 'Preventative'].map((filter) => (
              <button key={filter} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium">
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service List */}
      <section className="pb-24">
        <div className="max-w-[800px] mx-auto px-6">
          {servicesData.map((cat, catIdx) => (
            <div key={catIdx} className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4 border-l-4 border-secondary pl-4">{cat.category}</h2>
              <div className="space-y-4">
                {cat.items.map((service, idx) => (
                  <ServiceAccordion key={idx} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Service ZigZag */}
      <section className="bg-white py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              <Image src={images['service-3']} alt="Implants" fill className="object-cover" />
            </div>
            <div>
              <span className="text-accent font-bold tracking-wider uppercase text-sm">Most Popular</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-6">Dental Implants</h2>
              <p className="text-lg text-text-main mb-6 leading-relaxed">
                Stop hiding your smile. Our 3D-guided implant technology ensures precise placement and faster healing times. 
                Whether you need a single tooth or a full mouth restoration, Dr. Bennett is an expert in implantology.
              </p>
              <ul className="space-y-3 mb-8">
                {['Look and feel like natural teeth', 'Prevent bone loss', 'Last a lifetime with care', 'Eat whatever you want'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-main">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Check className="w-3 h-3" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <FinanceCalculator price="3000" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-6">Not sure what you need?</h2>
          <p className="text-xl mb-8 opacity-90">Book a comprehensive exam and let us create a custom treatment plan for you.</p>
          <Button variant="secondary" size="lg" className="bg-white text-secondary hover:bg-gray-100">
            Book Exam ($150)
          </Button>
        </div>
      </section>
    </main>
  );
}

function ServiceAccordion({ service }: { service: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div>
            <h3 className="font-bold text-primary text-lg">{service.title}</h3>
            <p className="text-sm text-text-muted">Starting at {service.price} • {service.time}</p>
          </div>
        </div>
        {isOpen ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-secondary" />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-text-main mb-4">{service.desc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {service.details.map((detail: string, i: number) => (
              <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                {detail}
              </span>
            ))}
          </div>
          <Button size="sm" className="w-full sm:w-auto">Book {service.title}</Button>
        </div>
      )}
    </div>
  );
}
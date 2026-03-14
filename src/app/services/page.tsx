import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { images } from "@/config/images";
import Link from "next/link";

const categories = [
  { id: "all", label: "All Services" },
  { id: "general", label: "General" },
  { id: "cosmetic", label: "Cosmetic" },
  { id: "ortho", label: "Orthodontics" },
  { id: "emergency", label: "Emergency" },
];

const servicesData = [
  { id: 1, cat: "general", title: "Comprehensive Exam", desc: "Full oral health assessment including digital X-rays and oral cancer screening.", price: "$150 - $200" },
  { id: 2, cat: "general", title: "Deep Cleaning", desc: "Removal of plaque and tartar below the gum line to treat or prevent gum disease.", price: "$200 - $350" },
  { id: 3, cat: "cosmetic", title: "Professional Whitening", desc: "In-office Zoom whitening for results up to 8 shades lighter in one hour.", price: "$399" },
  { id: 4, cat: "cosmetic", title: "Porcelain Veneers", desc: "Custom thin shells bonded to the front of teeth to correct shape, color, and alignment.", price: "$1,000+ / tooth" },
  { id: 5, cat: "ortho", title: "Clear Aligners", desc: "Invisalign and similar clear tray systems to straighten teeth discreetly.", price: "$3,500 - $6,000" },
  { id: 6, cat: "emergency", title: "Tooth Extraction", desc: "Gentle removal of damaged or impacted teeth, including wisdom teeth.", price: "$200 - $600" },
];

export default function Services() {
  const [activeCat, setActiveCat] = useState("all");

  const filteredServices = activeCat === "all" 
    ? servicesData 
    : servicesData.filter(s => s.cat === activeCat);

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-text-main mb-6">
            World-Class Dental Services
          </h1>
          <p className="text-neutral-text-body text-lg max-w-2xl mx-auto">
            From preventative care to complete smile makeovers, we use the latest techniques to ensure optimal results.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 min-w-max justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCat === cat.id 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-section bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredServices.map((service) => (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-primary/30 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
                      service.cat === 'emergency' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                    }`}>
                      {service.cat}
                    </span>
                    <span className="font-bold text-neutral-text-main">{service.price}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-text-main mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-text-body mb-6 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all gap-1">
                    Book Now <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">Technology</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-text-main mb-6">
              Advanced Equipment for Better Care
            </h2>
            <ul className="space-y-6">
              {[
                "Digital X-Rays (90% less radiation)",
                "Intraoral Cameras for instant visualization",
                "3D Cone Beam CT imaging",
                "Laser Cavity Detection"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-neutral-text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl" />
            <Image 
              src={images["gallery-2"].src}
              alt="Advanced Technology"
              width={600}
              height={400}
              className="relative rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
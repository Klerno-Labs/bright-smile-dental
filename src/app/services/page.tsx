import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { images } from "@/config/images";
import ContactForm from "@/components/forms/contact-form";

const categories = [
  {
    id: "general",
    title: "General Dentistry",
    desc: "Routine cleanings, exams, and preventative care to keep your smile healthy for life.",
    price: "From $150",
    items: ["Comprehensive Exams", "Digital X-Rays", "Professional Cleanings", "Fluoride Treatments", "Oral Cancer Screenings"],
    image: images["service-2"]
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    desc: "Enhance the appearance of your smile with our aesthetic treatments.",
    price: "From $400",
    items: ["Professional Teeth Whitening", "Porcelain Veneers", "Dental Bonding", "Invisalign®", "Gum Contouring"],
    image: images["service-1"]
  },
  {
    id: "restorative",
    title: "Restorative Procedures",
    desc: "Repair damaged teeth and restore function with natural-looking solutions.",
    price: "From $800",
    items: ["Dental Implants", "Crowns & Bridges", "Tooth-Colored Fillings", "Root Canal Therapy", "Dentures"],
    image: images["service-3"]
  }
];

export const metadata = {
  title: "Our Services | Premium Dental Treatments",
  description: "Explore our comprehensive range of dental services including cosmetic, general, and restorative dentistry in Houston.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-surface py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Dental Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            World-class treatments tailored to your unique needs. We combine advanced technology with a gentle touch.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <main>
        {categories.map((cat, idx) => (
          <Section key={cat.id} bgColor={idx % 2 === 0 ? "white" : "surface"}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className="relative rounded-[24px] overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src={cat.image.src}
                  alt={cat.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-accent font-bold tracking-widest uppercase text-sm">{cat.price}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">{cat.id}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">{cat.title}</h2>
                <p className="text-lg text-gray-600 mb-8">{cat.desc}</p>
                
                <ul className="space-y-4 mb-8">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="bg-teal-100 rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/#contact">
                  <button className="group inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors">
                    Book Consultation <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </Section>
        ))}

        {/* FAQ Section */}
        <Section bgColor="white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Do you accept my insurance?", a: "We accept most major PPO insurance plans including Delta Dental, Aetna, Cigna, and MetLife. Please call our office for a complimentary benefits check." },
                { q: "What if I have a dental emergency?", a: "We reserve time daily for emergency patients. If you are in pain, please call us immediately at (713) 555-0123 and we will do our best to see you same-day." },
                { q: "Are you accepting new patients?", a: "Yes! We are currently accepting new patients of all ages. We would love the opportunity to care for your smile." }
              ].map((item, i) => (
                <details key={i} className="group bg-surface rounded-xl border border-gray-200 p-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-lg text-primary list-none">
                    {item.q}
                    <span className="transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed animate-slide-down">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact Form */}
        <Section id="contact" bgColor="mint-gradient">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Ready to Start?</h2>
              <p className="text-lg text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
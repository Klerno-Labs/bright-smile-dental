import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive dental services including cosmetic dentistry, implants, orthodontics, and general family care.",
};

const services = {
  cosmetic: {
    title: "Cosmetic Dentistry",
    desc: "Enhance the appearance of your smile with our aesthetic treatments.",
    items: [
      { name: "Professional Whitening", price: "$299 - $499" },
      { name: "Porcelain Veneers", price: "$1,200 - $2,500 per tooth" },
      { name: "Invisalign", price: "$3,500 - $6,000" },
      { name: "Bonding & Contouring", price: "$300 - $600 per tooth" },
    ],
    image: "service-1",
  },
  general: {
    title: "General Dentistry",
    desc: "Preventative care to keep your smile healthy and functional.",
    items: [
      { name: "Comprehensive Exam", price: "$150 (New Patient Special)" },
      { name: "Cleaning & Hygiene", price: "$99 - $175" },
      { name: "Fillings (Composite)", price: "$150 - $400" },
      { name: "Root Canal Therapy", price: "$600 - $1,200" },
    ],
    image: "service-3",
  },
  restorative: {
    title: "Restorative & Implants",
    desc: "Repair and replace missing or damaged teeth.",
    items: [
      { name: "Dental Implants", price: "$2,500 - $4,000" },
      { name: "Crowns & Bridges", price: "$800 - $1,500 per unit" },
      { name: "Dentures (Partial/Full)", price: "$1,000 - $3,000" },
      { name: "Bone Grafting", price: "$400 - $1,200" },
    ],
    image: "service-2",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            Comprehensive Dental Care
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine cleanings to complex full-mouth reconstructions, we offer a full range of services under one roof.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1">
              <a href="#cosmetic" className="block px-4 py-3 text-lg font-medium text-primary bg-medical/10 border-l-4 border-medical rounded-r-lg">
                Cosmetic Dentistry
              </a>
              <a href="#general" className="block px-4 py-3 text-lg font-medium text-gray-600 hover:text-primary hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-200 transition-all rounded-r-lg">
                General Dentistry
              </a>
              <a href="#restorative" className="block px-4 py-3 text-lg font-medium text-gray-600 hover:text-primary hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-200 transition-all rounded-r-lg">
                Restorative & Implants
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-24">
            {Object.entries(services).map(([key, category], index) => (
              <section id={key} key={key} className="scroll-mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
                  <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                      {category.desc}
                    </p>
                    <ul className="space-y-4">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg bg-white shadow-sm">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-medical shrink-0" />
                            <span className="font-medium text-gray-900">{item.name}</span>
                          </div>
                          <span className="text-sm font-bold text-gray-500 bg-gray-50 px-3 py-1 rounded">
                            {item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={images[category.image as keyof typeof images].src}
                        alt={images[category.image as keyof typeof images].alt}
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 md:h-full"
                      />
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* FAQ Section */}
            <section className="pt-12 border-t border-gray-200">
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "Do you accept insurance?", a: "Yes, we accept most major dental insurance plans, including Delta, Aetna, Cigna, and MetLife. We handle the paperwork for you to maximize your benefits." },
                  { q: "What if I have a dental emergency?", a: "We reserve time daily for emergency patients. Please call us immediately at (713) 555-0198 if you are experiencing pain or have broken a tooth." },
                  { q: "Do you offer financing?", a: "Absolutely. We partner with CareCredit and offer in-house payment plans to make your dental care affordable." },
                ].map((faq, i) => (
                  <details key={i} className="group bg-white border border-gray-200 rounded-lg">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-primary">
                      <span>{faq.q}</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronRight className="w-5 h-5" />
                      </span>
                    </summary>
                    <div className="text-gray-600 px-6 pb-6 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Contact Form */}
            <section id="book" className="pt-12 border-t border-gray-200">
              <div className="bg-surface rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Request a Consultation
                </h2>
                <p className="text-gray-600 mb-8">
                  Ready to get started? Fill out the form below and we will contact you to schedule your visit.
                </p>
                <ContactForm context="Services Page Consultation" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
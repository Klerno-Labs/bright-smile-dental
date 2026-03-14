import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { CheckCircle, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive dental services including cosmetic, general, and restorative dentistry.",
};

const services = [
  {
    category: "Cosmetic Dentistry",
    id: "cosmetic",
    items: [
      { name: "Teeth Whitening", desc: "Professional Zoom whitening for instant results.", price: "$299" },
      { name: "Porcelain Veneers", desc: "Custom-crafted shells for a perfect smile alignment.", price: "From $1,200/tooth" },
      { name: "Invisalign", desc: "Clear aligners to straighten teeth discreetly.", price: "From $4,000" },
    ]
  },
  {
    category: "Restorative & Implants",
    id: "implants",
    items: [
      { name: "Dental Implants", desc: "Permanent replacement for missing teeth.", price: "From $3,000" },
      { name: "Crowns & Bridges", desc: "Durable restorations for damaged or missing teeth.", price: "From $800" },
      { name: "Root Canal Therapy", desc: "Pain-relieving treatment to save natural teeth.", price: "From $600" },
    ]
  },
  {
    category: "General & Family",
    id: "general",
    items: [
      { name: "Comprehensive Exam", desc: "Digital X-rays and full oral health assessment.", price: "$150 (New Patient)" },
      { name: "Cleanings", desc: "Routine hygiene appointments to prevent decay.", price: "From $100" },
      { name: "Pediatric Dentistry", desc: "Gentle care designed specifically for children.", price: "Insurance Accepted" },
    ]
  },
];

const faqs = [
  { q: "Do you accept my insurance?", a: "We accept most major PPO insurance plans including Delta, Aetna, Cigna, and MetLife. Contact our front desk to verify your specific coverage." },
  { q: "What if I have a dental emergency?", a: "We reserve time daily for emergency patients. Call us immediately at (713) 555-0123 if you are experiencing pain or have broken a tooth." },
  { q: "Are financing options available?", a: "Yes! We partner with CareCredit and offer in-house payment plans to make your treatment affordable." },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
       {/* Header */}
       <section className="pt-32 pb-16 bg-[#F8F9FA] border-b border-[#E5E7EB]">
         <div className="max-w-[1280px] mx-auto px-6">
           <h1 className="font-heading font-bold text-4xl text-[#0F3460] mb-4">Our Treatments</h1>
           <p className="text-lg text-gray-600 max-w-2xl">
             From preventative care to complex cosmetic transformations, we offer a full range of services to meet your needs.
           </p>
         </div>
       </section>

       {/* Services List */}
       <div className="max-w-[1280px] mx-auto px-6 py-section-gap grid grid-cols-1 lg:grid-cols-3 gap-12">
         <div className="lg:col-span-2 space-y-20">
           {services.map((group) => (
             <div key={group.id} id={group.id} className="scroll-mt-24">
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-[#008080]/10 rounded-full flex items-center justify-center text-[#008080]">
                    <CheckCircle className="w-6 h-6" />
                 </div>
                 <h2 className="font-heading font-bold text-3xl text-[#0F3460]">{group.category}</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {group.items.map((item) => (
                   <div key={item.name} className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                     <div className="flex justify-between items-start mb-2">
                       <h3 className="font-bold text-xl text-[#0F3460]">{item.name}</h3>
                       <span className="text-[#E94560] font-bold text-sm bg-[#E94560]/10 px-2 py-1 rounded">{item.price}</span>
                     </div>
                     <p className="text-gray-600 text-sm">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </div>
           ))}

           {/* FAQ Section */}
           <div className="border-t border-[#E5E7EB] pt-16">
             <h2 className="font-heading font-bold text-3xl text-[#0F3460] mb-8">Common Questions</h2>
             <div className="space-y-6">
               {faqs.map((faq, i) => (
                 <details key={i} className="group border-b border-[#E5E7EB] pb-6">
                   <summary className="flex justify-between items-center cursor-pointer list-none text-lg font-semibold text-[#0F3460]">
                     {faq.q}
                     <span className="transition group-open:rotate-180">
                       <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                     </span>
                   </summary>
                   <p className="text-gray-600 mt-4 leading-relaxed">{faq.a}</p>
                 </details>
               ))}
             </div>
           </div>
         </div>

         {/* Sidebar / Sticky Form */}
         <div className="relative">
           <div className="sticky top-28 bg-[#F8F9FA] p-8 rounded-2xl border border-[#E5E7EB] shadow-card">
             <h3 className="font-heading font-bold text-2xl text-[#0F3460] mb-4">Book Consultation</h3>
             <p className="text-sm text-gray-600 mb-6">
               Unsure which treatment is right for you? Schedule a consultation, and our doctors will create a personalized plan.
             </p>
             <ContactForm context="Services Consultation" />
           </div>
         </div>
       </div>
    </div>
  );
}
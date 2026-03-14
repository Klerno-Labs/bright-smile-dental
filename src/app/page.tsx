import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { BeforeAfterSlider } from "@/components/features/BeforeAfterSlider";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { SmileAssessment } from "@/components/features/SmileAssessment";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { ContactForm } from "@/components/forms/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Premium dental care in Houston specializing in cosmetic, implants, and family dentistry.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BeforeAfterSlider />
      <ServiceGrid />
      <SmileAssessment />
      <Testimonials />
      
      {/* Contact Section */}
      <section className="py-section-gap bg-white" id="contact-section">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
             <h2 className="font-heading font-bold text-4xl text-[#0F3460]">Get In Touch</h2>
             <p className="text-lg text-gray-600">
               Ready to schedule your visit? Fill out the form, and our team will contact you within 24 hours to confirm your appointment.
             </p>
             
             <div className="space-y-6 pt-6">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#008080]/10 flex items-center justify-center text-[#008080] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F3460]">Visit Us</h4>
                    <p className="text-gray-600">4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</p>
                  </div>
               </div>
               
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#008080]/10 flex items-center justify-center text-[#008080] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F3460]">Call Us</h4>
                    <p className="text-gray-600">(713) 555-0123</p>
                  </div>
               </div>
             </div>
          </div>
          
          <div className="bg-surface p-8 rounded-2xl border border-[#E5E7EB] shadow-card">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <CTABanner />
    </>
  );
}
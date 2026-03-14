import { HeroHome } from "@/components/sections/HeroHome";
import { TrustBar } from "@/components/sections/TrustBar";
import { PainMap } from "@/components/sections/PainMap";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { CallToAction } from "@/components/sections/CallToAction";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = {
  title: "Home",
  description: "Welcome to Bright Smile Dental. Modern dentistry with a gentle touch in Houston, TX.",
};

export default function Home() {
  return (
    <>
      <HeroHome />
      <TrustBar />
      <PainMap />
      <ServicesGrid />
      
      {/* Before/After Feature Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#D4AF37] font-bold tracking-wider uppercase text-sm">See The Difference</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E3A53] mt-3 mb-6">
                Real Results for Real Patients
              </h2>
              <p className="text-[#4B5563] mb-6 leading-relaxed">
                We believe in transparency. Drag the slider to see the stunning transformations our patients have achieved through our cosmetic and restorative procedures.
              </p>
              <ul className="space-y-4 mb-8">
                {["Customized Treatment Plans", "Advanced Digital Technology", "Experienced Cosmetic Specialists"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#0E3A53]">
                    <div className="h-6 w-6 rounded-full bg-[#E0F2F2] flex items-center justify-center text-[#4CA1A3] text-sm">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <BeforeAfterSlider />
          </div>
        </Container>
      </section>

      <Testimonials />
      
      {/* Contact Section on Homepage */}
      <section className="py-24 bg-gray-50" id="contact">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E3A53] mb-4">
                Request an Appointment
              </h2>
              <p className="text-[#4B5563]">Fill out the form below and we will get back to you within 24 hours.</p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
      
      <CallToAction />
    </>
  );
}
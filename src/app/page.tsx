import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { BeforeAfter } from "@/components/sections/before-after";
import { Contact } from "@/components/sections/contact";
import { Button } from "@/components/ui/button";
import { Star, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Bright Smile Dental. Your trusted partner for cosmetic and family dentistry in Houston, TX.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Trust Strip */}
      <div className="bg-secondary py-8 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-4">Accepted Insurance Providers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {["Aetna", "Cigna", "Delta Dental", "Humana", "MetLife"].map((provider) => (
              <span key={provider} className="text-white font-heading text-xl font-bold">{provider}</span>
            ))}
          </div>
        </div>
      </div>

      <Services />
      <BeforeAfter />

      {/* Testimonial Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-soft opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <Star className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
              "Best Dental Experience in Houston"
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-body">
              I was terrified of the dentist, but Dr. Bright and the team made me feel completely at ease. The sedation options worked perfectly, and my new smile looks incredible. I actually smile in photos now!
            </p>
            <div className="font-bold text-primary text-lg">Maria L.</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Patient Since 2021</div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2071')] bg-cover opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Love Your Smile?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Schedule your new patient consultation today and receive a comprehensive exam and digital X-rays for just $99.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-red-500 text-white border-0">
              <Calendar className="w-5 h-5 mr-2" />
              Book $99 Exam
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white hover:border-white">
              Call (713) 555-0198
            </Button>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
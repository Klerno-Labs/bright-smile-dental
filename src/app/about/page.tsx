import { HeroInternal } from "@/components/sections/HeroInternal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamSection } from "@/components/sections/TeamSection";
import { Badge, Clock, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Bright Smile Dental's philosophy, technology, and expert team.",
};

export default function AboutPage() {
  return (
    <>
      <HeroInternal 
        title="About Bright Smile Dental" 
        subtitle="Where advanced dentistry meets compassionate care."
        imageKey="about"
      />

      <section className="py-24 bg-surface">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">Our Philosophy</h2>
              <p className="text-text-main leading-relaxed mb-6">
                At Bright Smile Dental, we believe a visit to the dentist should be something to smile about. Founded in 2010, our practice was built on the foundation of patient-centered care. We listen to your concerns, explain your options clearly, and prioritize your comfort above all else.
              </p>
              <p className="text-text-main leading-relaxed mb-8">
                We understand that every smile is unique. That's why we create personalized treatment plans tailored to your specific needs and goals, ensuring you receive the most effective and appropriate care.
              </p>
              
              <blockquote className="font-serif text-2xl text-secondary italic border-l-4 border-secondary pl-6 py-2 bg-secondary/5 rounded-r-lg">
                "We treat our patients like family, because that's exactly what they are to us."
              </blockquote>
              <p className="text-sm font-bold text-primary mt-2">— Dr. Sarah Bennett</p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-primary mb-8">Why Choose Us</h3>
              <div className="space-y-6">
                {[
                  { icon: Badge, title: "Expert Care", desc: "Board-certified specialists with years of experience." },
                  { icon: Clock, title: "Respect for Time", desc: "We value your schedule with minimal wait times." },
                  { icon: ShieldCheck, title: "Safe & Sterile", desc: "Hospital-grade sterilization protocols for your safety." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-text-main">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-background">
        <Container>
          <SectionHeading 
            title="Modern Technology" 
            subtitle="We invest in the latest technology to provide faster, more accurate, and comfortable treatments."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Digital X-Rays", desc: "90% less radiation than traditional film." },
              { title: "3D Imaging", desc: "Precise planning for implants and orthodontics." },
              { title: "Laser Dentistry", desc: "Minimally invasive gum treatment." }
            ].map((tech, idx) => (
              <div key={idx} className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">{tech.title}</h3>
                <p className="text-text-main text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TeamSection />
    </>
  );
}
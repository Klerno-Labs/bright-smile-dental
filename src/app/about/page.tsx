import { HeroInternal } from "@/components/sections/HeroInternal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { TeamSection } from "@/components/sections/TeamSection";
import { CheckCircle, Award, Users } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "Learn more about Bright Smile Dental's philosophy, technology, and expert team in Houston, TX.",
};

export default function AboutPage() {
  return (
    <>
      <HeroInternal 
        title="About Our Practice" 
        subtitle="Excellence in dentistry since 1990"
        imageKey="about" 
      />

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E3A53] mb-6">
                We Treat Patients, Not Just Teeth
              </h2>
              <p className="text-[#4B5563] mb-6 leading-relaxed">
                At Bright Smile Dental, we believe that visiting the dentist should be a positive, stress-free experience. Founded on the principles of compassion and integrity, our practice has served the Houston community for over three decades.
              </p>
              <p className="text-[#4B5563] mb-8 leading-relaxed">
                Our philosophy is simple: provide the highest quality care using the latest technology, delivered with a gentle touch. We listen to your concerns, explain your options clearly, and empower you to make the best decisions for your oral health.
              </p>
              <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2 mb-6">
                <p className="font-playfair text-2xl italic text-[#0E3A53]">
                  "Your smile is our passion. We dedicate ourselves to crafting beautiful, healthy smiles that last a lifetime."
                </p>
                <cite className="not-italic text-sm text-gray-500 mt-2 block">— Dr. Elena Vance, Lead Dentist</cite>
              </blockquote>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <Award className="h-10 w-10 text-[#4CA1A3] mb-4" />
                <h3 className="font-bold text-[#0E3A53] text-lg mb-2">Award Winning</h3>
                <p className="text-sm text-[#4B5563]">Recognized as Houston's Top Dentist for 5 consecutive years.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <Users className="h-10 w-10 text-[#4CA1A3] mb-4" />
                <h3 className="font-bold text-[#0E3A53] text-lg mb-2">Family Friendly</h3>
                <p className="text-sm text-[#4B5563]">We create a welcoming environment for patients of all ages.</p>
              </div>
               <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 sm:col-span-2">
                <CheckCircle className="h-10 w-10 text-[#4CA1A3] mb-4" />
                <h3 className="font-bold text-[#0E3A53] text-lg mb-2">Gentle Guarantee</h3>
                <p className="text-sm text-[#4B5563]">If you feel any discomfort, simply raise your hand and we will pause immediately.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <SectionHeading 
            title="Advanced Technology" 
            subtitle="State-of-the-Art Equipment"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              "3D Digital Imaging (CBCT)",
              "Intraoral Cameras",
              "Laser Cavity Detection",
              "CEREC Same-Day Crowns",
              "Digital Impressions (No Goop!)",
              "Sedation Dentistry Options"
            ].map((tech, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="h-2 w-2 rounded-full bg-[#4CA1A3]" />
                <span className="font-medium text-[#0E3A53]">{tech}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TeamSection />
    </>
  );
}
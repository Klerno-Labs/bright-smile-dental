import { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Zap } from "lucide-react";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team at Bright Smile Dental. We are dedicated to providing top-tier dental care in Houston, TX.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#4CA1A3] font-bold tracking-widest uppercase text-sm mb-4 block">Since 2010</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0E3A53] mb-6 leading-tight">
              We believe dentistry should be personal.
            </h1>
            <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
              Bright Smile Dental was founded on a simple principle: treat every patient like a member of our own family. We combine state-of-the-art technology with old-fashioned compassion.
            </p>
            <div className="flex gap-4">
              <Button asChild><a href="#team">Meet the Team</a></Button>
              <Button variant="outline" asChild><a href="/#contact">Book Visit</a></Button>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src={images["about"].src} alt="Our Clinic Philosophy" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#E0F2F2] rounded-full flex items-center justify-center text-[#4CA1A3] mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#0E3A53] mb-3">Patient-First</h3>
              <p className="text-[#4B5563]">Your comfort is our priority. We offer amenities like noise-canceling headphones and blankets to make your visit relaxing.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#E0F2F2] rounded-full flex items-center justify-center text-[#4CA1A3] mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#0E3A53] mb-3">Advanced Tech</h3>
              <p className="text-[#4B5563]">We use 3D imaging, digital scanning, and laser dentistry to reduce procedure times and improve accuracy.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#E0F2F2] rounded-full flex items-center justify-center text-[#4CA1A3] mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#0E3A53] mb-3">Expert Care</h3>
              <p className="text-[#4B5563]">Our doctors undergo hundreds of hours of continuing education every year to stay at the forefront of the field.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0E3A53] mb-4">Meet Our Doctors</h2>
            <p className="text-[#4B5563]">Our team of specialists brings decades of combined experience to your smile.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Bennett",
                role: "Lead Dentist, DDS",
                bio: "Graduated with honors from UT Health. Specializes in cosmetic reconstructions and implantology.",
                img: "team-1"
              },
              {
                name: "Dr. Michael Chen",
                role: "Orthodontist",
                bio: "Certified Invisalign provider. Passionate about creating confident smiles for teenagers and adults.",
                img: "hero-alt" // Reusing image for demo
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Pediatric Dentist",
                bio: "Making dentistry fun for kids. 15 years of experience creating positive early dental experiences.",
                img: "gallery-3" // Reusing image for demo
              }
            ].map((member, i) => (
              <div key={i} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#F9FAFB] shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={images[member.img as keyof typeof images].src}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0E3A53]">{member.name}</h3>
                <p className="text-[#4CA1A3] font-medium text-sm mb-3">{member.role}</p>
                <p className="text-[#4B5563] text-sm leading-relaxed px-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
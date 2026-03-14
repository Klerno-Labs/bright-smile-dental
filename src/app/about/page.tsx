import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { MapPin, Linkedin, Twitter } from "lucide-react";

export const metadata = {
  title: "About Us | Meet Our Dental Team",
  description: "Learn about Bright Smile Dental's philosophy and meet our expert team of dentists in Houston.",
};

const team = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Lead Dentist, DDS",
    bio: "Dr. Jenkins has over 15 years of experience specializing in cosmetic and restorative dentistry. She believes everyone deserves a smile they love.",
    image: images["team-1"],
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Dr. Michael Chen",
    role: "Orthodontist, DMD",
    bio: "An expert in Invisalign and clear braces, Dr. Chen helps patients achieve perfect alignment with modern, discreet solutions.",
    image: images["team-2"],
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Hygienist",
    bio: "Emily ensures every patient's cleaning is thorough yet gentle. She is passionate about patient education and preventative care.",
    image: images["team-3"],
    socials: { linkedin: "#", twitter: "#" }
  }
];

export default function AboutPage() {
  return (
    <div>
      {/* About Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <Image src={images["about"].src} alt="Clinic Interior" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-up">Experience You Can Trust</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-up delay-100">
            We are not just dentists; we are partners in your health journey. Our state-of-the-art facility in Houston is designed with your comfort in mind.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Philosophy</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Bright Smile Dental, we reject the idea that visiting the dentist must be uncomfortable. We have curated a spa-like environment that calms the senses the moment you walk in.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We invest in the highest technology—not because it looks cool, but because it allows us to diagnose issues earlier and treat them more precisely. From 3D imaging to laser dentistry, we bring the future of care to Houston today.
            </p>
            <ul className="space-y-4 mb-8">
              {["Patient-first approach always", "Transparent pricing with no surprises", "Latest in sterilization technology"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-gray-800">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-[24px] overflow-hidden shadow-2xl">
            <Image src={images["about"].src} alt="Modern Dental Clinic" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section bgColor="surface">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Meet Your Care Team</h2>
          <p className="text-lg text-gray-600">Highly trained professionals dedicated to your well-being.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group h-full">
              <div className="relative h-[500px] w-full perspective-1000 mb-6">
                {/* Flip Card Inner */}
                <div className="relative w-full h-full text-center transition-transform duration-700 transform-style-3xl group-hover:rotate-y-180">
                  
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-card overflow-hidden">
                    <div className="relative h-[350px]">
                      <Image src={member.image.src} alt={member.name} fill className="object-cover" sizes="33vw" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-serif font-bold text-primary">{member.name}</h3>
                      <p className="text-accent font-bold uppercase text-xs tracking-widest mt-2">{member.role}</p>
                      <p className="text-gray-500 mt-4 text-sm italic">Hover to view bio</p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden bg-primary text-white rotate-y-180 rounded-xl shadow-xl p-8 flex flex-col justify-center items-start text-left">
                    <h3 className="text-2xl font-serif font-bold mb-1">{member.name}</h3>
                    <p className="text-teal-300 text-sm font-bold uppercase tracking-widest mb-6">{member.role}</p>
                    <p className="text-gray-200 leading-relaxed mb-8">{member.bio}</p>
                    
                    <div className="flex gap-4">
                      <a href={member.socials.linkedin} aria-label="LinkedIn" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href={member.socials.twitter} aria-label="Twitter" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                        <Twitter size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="gradient-mint">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Join the Bright Smile Family</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you need a simple checkup or a complete smile transformation, our doors are open.
          </p>
          <Link href="/#contact">
            <Button size="lg">Book Your Visit</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import Image from "next/image";
import { images } from "@/config/images";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Dr. Sarah Bennett",
    role: "Lead Dentist, DDS",
    bio: "Over 15 years of experience specializing in cosmetic restoration and implantology.",
    img: "team-1",
  },
  {
    name: "Dr. Michael Ross",
    role: "Orthodontist",
    bio: "Expert in Invisalign and clear braces for adults and teens.",
    img: "about",
  },
  {
    name: "Emily Chen",
    role: "Hygienist",
    bio: "Passionate about preventative care and patient education.",
    img: "hero-alt",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <SectionHeading 
          title="Meet Your Care Team" 
          subtitle="Dedicated professionals committed to your comfort and health."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group text-center">
              <div className="relative mx-auto w-64 h-64 mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  src={images[member.img as keyof typeof images].src}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
              <p className="text-text-main text-sm leading-relaxed px-4">{member.bio}</p>
              
              <div className="flex justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <a href="#" className="text-muted hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
                 <a href="#" className="text-muted hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
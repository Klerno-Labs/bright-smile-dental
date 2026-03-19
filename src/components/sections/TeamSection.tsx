"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "lucide-react";
import { images } from "@/config/images";

const team = [
  {
    name: "Dr. Elena Vance",
    title: "Lead Dentist, DDS",
    bio: "Dr. Vance has over 15 years of experience transforming smiles with a focus on minimally invasive cosmetic techniques.",
    image: "team-1"
  },
  {
    name: "Dr. Marcus Thorne",
    title: "Orthodontist",
    bio: "Specializing in clear aligners and modern orthodontics, Dr. Thorne helps patients achieve perfect alignment comfortably.",
    image: "about" 
  },
   {
    name: "Sarah Jenkins",
    title: "Lead Hygienist",
    bio: "Sarah is known for her gentle touch and patient education, ensuring every visit leaves you smiling.",
    image: "gallery-3"
  }
];

export function TeamSection() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionHeading 
          title="Meet Our Experts" 
          subtitle="The Team"
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div className="group">
              <div className="relative h-[350px] mb-6 rounded-t-[2rem] overflow-hidden bg-white shadow-sm">
                <img
                  src={images[member.image as keyof typeof images].src}
                  alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A53]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                   <Link className="text-white font-bold flex items-center gap-2">View Full Bio</Link>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#0E3A53]">{member.name}</h3>
                <p className="text-[#4CA1A3] font-medium mb-2">{member.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import React from "react";
import Image from "next/image";
import { images } from "@/config/images";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Dr. Sarah Bennett",
    role: "Cosmetic Specialist",
    bio: "Dr. Bennett has over 15 years of experience transforming smiles. She specializes in minimally invasive aesthetic dentistry.",
    credentials: "DDS, Harvard Medical School",
    image: "team-1",
  },
  {
    name: "Dr. Michael Ross",
    role: "Implantologist",
    bio: "Expert in restorative procedures, Dr. Ross uses the latest 3D imaging technology for precise implant placement.",
    credentials: "DMD, UT Health Science Center",
    // Using a different image for variety if needed, or reusing team-1 with color filter in css if strictly one image allowed. 
    // Reusing team-1 but conceptually different.
    image: "team-1", 
  },
  {
    name: "Dr. Emily Chen",
    role: "Orthodontist",
    bio: "Passionate about creating beautiful, functional smiles for patients of all ages using Invisalign and braces.",
    credentials: "DDS, Specialty in Orthodontics",
    image: "team-1",
  },
];

export function TeamGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-medical font-accent font-bold tracking-widest uppercase text-sm">
            Meet The Team
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mt-4">
            Expert Care You Can Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <Image
                  src={images[member.image as keyof typeof images].src}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 gap-4">
                   <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-medical hover:text-white transition-colors" aria-label={`LinkedIn ${member.name}`}>
                     <Linkedin className="w-5 h-5" />
                   </a>
                   <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-medical hover:text-white transition-colors" aria-label={`Email ${member.name}`}>
                     <Mail className="w-5 h-5" />
                   </a>
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary">
                {member.name}
              </h3>
              <p className="text-medical font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {member.credentials}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
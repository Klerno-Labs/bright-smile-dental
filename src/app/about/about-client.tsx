"use client";

import Image from "next/image";
import { Contact } from "@/components/sections/contact";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { Linkedin, Instagram, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team of world-class dentists at Bright Smile Dental in Houston.",
};

const team = [
  {
    name: "Dr. Elena Bright",
    role: "Founder & Lead Dentist",
    bio: "With over 15 years of experience, Dr. Bright specializes in cosmetic reconstruction and implantology. She believes in the power of a confident smile.",
    credentials: "DDS, University of Texas",
    img: "about"
  },
  {
    name: "Dr. Michael Chen",
    role: "Orthodontist",
    bio: "Dr. Chen is an Invisalign Diamond Provider dedicated to creating perfect smiles for patients of all ages using the latest 3D imaging technology.",
    credentials: "DMD, Harvard School of Dental Medicine",
    img: "hero-alt"
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Pediatric Specialist",
    bio: "Specializing in making dental visits fun and fear-free for children. Dr. Johnson creates a foundation of lifelong oral health for our youngest patients.",
    credentials: "DDS, Pediatric Residency at Baylor",
    img: "gallery-2"
  }
];

export function AboutContent() {
  return (
    <>
      {/* Internal Hero */}
      <section className="pt-32 pb-20 bg-surface-alt border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Experience You Can Trust</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Bright Smile Dental, we combine artistry with medical science to provide dental care that exceeds expectations. Our team is not just skilled technicians; we are compassionate caregivers dedicated to your well-being.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div whileHover={{ y: -5 }} className="p-6">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Education</h3>
              <p className="text-gray-600">Our team attends annual conferences to stay at the forefront of dental technology.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="p-6">
              <div className="w-16 h-16 bg-medical/10 rounded-full flex items-center justify-center mx-auto mb-6 text-medical">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Patient-First Philosophy</h3>
              <p className="text-gray-600">We listen to your concerns and tailor treatment plans to your specific needs and budget.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Highest Safety Standards</h3>
              <p className="text-gray-600">We exceed CDC guidelines for sterilization and infection control to keep you safe.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">Meet Our Specialists</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={images[member.img as keyof typeof images].src}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-medical font-semibold text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{member.credentials}</span>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                      <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
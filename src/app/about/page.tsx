"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { Calendar, Award, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

const team = [
  {
    name: "Dr. Sarah Bennett",
    role: "Lead Dentist, DDS",
    bio: "Dr. Bennett has over 15 years of experience in cosmetic dentistry and is a member of the American Academy of Cosmetic Dentistry.",
    img: images["team-1"],
  },
  {
    name: "Dr. James Miller",
    role: "Orthodontist, DMD",
    bio: "Specializing in clear aligners and modern orthodontics, Dr. Miller creates beautiful, straight smiles for patients of all ages.",
    img: images["gallery-1"], // Using gallery placeholder
  },
  {
    name: "Dr. Emily Chen",
    role: "Periodontist",
    bio: "An expert in gum health and implant surgery, Dr. Chen ensures the foundation of your smile is as healthy as it is beautiful.",
    img: images["gallery-2"], // Using gallery placeholder
  },
];

const stats = [
  { icon: <Users className="w-6 h-6" />, label: "Happy Patients", value: "5,000+" },
  { icon: <Award className="w-6 h-6" />, label: "Years Experience", value: "20+" },
  { icon: <Calendar className="w-6 h-6" />, label: "Procedures Done", value: "15,000+" },
];

export default function AboutPage() {
  return (
    <>
      {/* Internal Hero */}
      <section className="relative pt-32 pb-20 bg-[#F8F9FA]">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
             <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0F3460] mb-6">
               Experience You Can Trust
             </h1>
             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
               At Bright Smile Dental, we aren't just fixing teeth; we're changing lives. Founded in 2005, our practice has grown from a small family clinic to Houston's premier destination for advanced dental care.
             </p>
             <div className="flex flex-wrap gap-8 mb-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#008080]">
                    <div className="bg-[#008080]/10 p-3 rounded-full">{stat.icon}</div>
                    <div>
                      <p className="font-bold text-2xl text-[#0F3460]">{stat.value}</p>
                      <p className="text-xs uppercase tracking-wide font-semibold text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
             </div>
             <Button size="lg">Meet Our Doctors</Button>
          </div>
          <div className="relative h-[500px] rounded-[24px] overflow-hidden shadow-xl">
            <img src={images["about"].src} alt={images["about"].alt} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-section-gap bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#0F3460] mb-4">Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Led by board-certified specialists, our team combines years of clinical excellence with a warm, welcoming approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative h-[450px] perspective-1000 cursor-pointer"
                onMouseEnter={() => document.getElementById(`flip-${index}`)?.classList.add("rotate-y-180")}
                onMouseLeave={() => document.getElementById(`flip-${index}`)?.classList.remove("rotate-y-180")}
              >
                <div
                  id={`flip-${index}`}
                  className="relative w-full h-full transition-transform duration-700 transform-style-3xl shadow-card rounded-2xl"
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden bg-white rounded-2xl overflow-hidden">
                    <div className="h-[300px] overflow-hidden">
                       <img src={member.img.src} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-heading text-2xl font-bold text-[#0F3460]">{member.name}</h3>
                      <p className="text-[#008080] font-semibold text-sm uppercase tracking-wide">{member.role}</p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#0F3460] text-white p-8 rounded-2xl flex flex-col justify-center items-start">
                    <h3 className="font-heading text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-[#008080] text-sm font-semibold mb-6">{member.role}</p>
                    <p className="text-gray-300 leading-relaxed mb-8">{member.bio}</p>
                    <Button size="sm" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-[#0F3460]">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
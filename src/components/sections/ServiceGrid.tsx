"use client";

import React from "react";
import Link from "next/link";
import { images } from "@/config/images";
import { ArrowUpRight, Sparkles, Heart, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and professional whitening for a confident look.",
    icon: Sparkles,
    image: "service-1",
    price: "Consultation from $150",
    link: "/services#cosmetic"
  },
  {
    title: "Implants & Restoration",
    description: "Permanent solutions for missing teeth using state-of-the-art implant technology.",
    icon: ShieldCheck,
    image: "service-2",
    price: "Financing Available",
    link: "/services#restorative"
  },
  {
    title: "General Family Care",
    description: "Comprehensive checkups, cleanings, and preventative care for the whole family.",
    icon: Heart,
    image: "service-3",
    price: "Most Insurance Accepted",
    link: "/services#general"
  },
];

export function ServiceGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-medical font-accent font-bold tracking-widest uppercase text-sm">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mt-4">
            Comprehensive Dental Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={images[service.image as keyof typeof images].src}
                  alt={images[service.image as keyof typeof images].alt} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                  <service.icon className="w-6 h-6 text-medical" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-medical transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-sm font-semibold text-accent">
                    {service.price}
                  </span>
                  <Link 
                    href={service.link}
                    className="flex items-center text-primary font-bold hover:text-medical transition-colors"
                  >
                    Learn More <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
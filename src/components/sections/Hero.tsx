"use client";

import React from "react";
import Link from "next/link";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical/10 text-medical text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-medical"></span>
                </span>
                Accepting New Patients
              </span>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-primary leading-tight">
                Crafting World-Class <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical to-accent">
                  Smiles Daily
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mt-6">
                Experience premium dental care in a calm, modern environment. From routine checkups to complete smile makeovers, we treat you like family.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/services#book">
                  Book Appointment <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Meet Our Doctors</Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                    >
                       {/* Placeholder avatars using initials/colors logic if no images, but using simple colors here */}
                       <div className={`w-full h-full flex items-center justify-center text-xs font-bold text-white ${i % 2 === 0 ? 'bg-primary' : 'bg-medical'}`}>
                         P{i}
                       </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-accent mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 style={{ width: "100%", height: "100%", objectFit: "cover" }}-current" />
                    ))}
                    <span className="text-gray-900 font-bold ml-2">4.9/5</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Over 2,000+ Happy Patients in Houston
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={images["hero"].src}
                alt={images["hero"].alt}
                width={images["hero"].width}
                height={images["hero"].height}
                className="object-cover w-full h-[500px] lg:h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Emergency? We can help.</p>
                    <p className="font-bold text-primary">{siteConfig.contact.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Blob */}
            <div className="absolute inset-0 bg-medical/20 rounded-3xl blur-3xl -z-10 transform translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
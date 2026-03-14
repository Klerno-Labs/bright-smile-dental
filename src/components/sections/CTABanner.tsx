import React from "react";
import Image from "next/image";
import { images } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

interface CTABannerProps {
  variant?: "appointment" | "meet-team";
}

export function CTABanner({ variant = "appointment" }: CTABannerProps) {
  const isAppointment = variant === "appointment";

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={images["cta"].src}
          alt={images["cta"].alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          {isAppointment
            ? "Ready to Transform Your Smile?"
            : "Join Our Family of Patients"}
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          {isAppointment
            ? "Book your consultation today and take the first step towards the smile you&apos;ve always wanted."
            : "Experience the difference of compassionate, expert dental care. New patients are always welcome."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-red-600 text-white border-0">
            {isAppointment ? "Book Appointment" : "Call Us Now"} <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          {!isAppointment && (
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
               View Services
            </Button>
          )}
        </div>
        <p className="mt-8 text-sm text-gray-300">
          Or call us directly at{" "}
          <a href={`tel:${siteConfig.contact.phone}`} className="font-bold text-white hover:underline">
            {siteConfig.contact.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
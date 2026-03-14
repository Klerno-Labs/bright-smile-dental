"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { images } from "@/config/images";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function HeroHome() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background pt-20 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Content Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Accepting New Patients</span>
          </motion.div>

          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-primary leading-[1.1]">
            Life-changing confidence starts with your smile.
          </h1>

          <p className="text-lg text-text-main max-w-lg leading-relaxed">
            Experience modern dentistry in a calming environment. We combine advanced technology with a gentle touch to create the smile you've always wanted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="group">
              Book Consultation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary" size="lg">
              Virtual Tour
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-muted">
            <div className="flex -space-x-2">
               {/* Avatar placeholders */}
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <Image src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Patient" width={32} height={32} />
                 </div>
               ))}
            </div>
            <div>
              <div className="flex text-accent mb-1">★★★★★</div>
              <span className="text-primary">4.9/5 from 500+ reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Content Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[600px] hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-[40px] rotate-3 scale-95" />
          <div className="relative h-full w-full rounded-[32px] overflow-hidden shadow-2xl">
             <BeforeAfterSlider 
               beforeSrc={images["gallery-2"].src}
               afterSrc={images["hero"].src}
             />
             
             {/* Floating Glass Card */}
             <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-sm font-semibold text-primary">Emergency?</span>
                   <span className="text-sm text-secondary">Available Today</span>
                </div>
                <p className="text-xs text-text-main mb-4">Same-day appointments available for pain relief.</p>
                <Link href="/contact" className="block w-full text-center py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                   Book Emergency Slot
                </Link>
             </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-primary" />
      </motion.div>
    </section>
  );
}
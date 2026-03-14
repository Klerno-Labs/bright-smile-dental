"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/config/images";

export function HeroHome() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0F2F2] text-[#0E3A53] text-sm font-semibold">
            <Star className="h-4 w-4 text-[#D4AF37] style={{ width: "100%", height: "100%", objectFit: "cover" }}-[#D4AF37]" />
            <span>Top Rated Dental Practice in Houston</span>
          </div>
          
          <h1 className="font-manrope font-bold text-[#0E3A53] leading-[1.1] text-5xl md:text-6xl lg:text-7xl">
            Life-changing confidence starts with a smile.
          </h1>
          
          <p className="text-lg text-[#4B5563] leading-relaxed max-w-xl">
            Experience gentle, modern dentistry designed for your comfort. From routine checkups to complete smile makeovers, we treat you like family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="secondary" size="lg">
              Virtual Tour
            </Button>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-2">Trusted by patients for exceptional care</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-[#D4AF37] style={{ width: "100%", height: "100%", objectFit: "cover" }}-[#D4AF37]" />
              ))}
              <span className="ml-2 font-semibold text-[#0E3A53]">4.9/5</span>
              <span className="text-gray-400">(250+ Reviews)</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[85vh]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0E3A53]/20 to-transparent rounded-[2rem] translate-x-4 translate-y-4" />
          <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src={images["hero"].src}
              alt={images["hero"].alt} style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="object-cover"
            />
          </div>
          
          {/* Floating Glass Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-10 -left-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-white/50"
          >
            <div className="flex items-center gap-3 mb-3">
               <div className="h-10 w-10 rounded-full bg-[#4CA1A3] flex items-center justify-center text-white">
                 <Star className="h-5 w-5 style={{ width: "100%", height: "100%", objectFit: "cover" }}-white" />
               </div>
               <div>
                 <p className="font-bold text-[#0E3A53]">New Patient Special</p>
                 <p className="text-xs text-gray-500">Limited time offer</p>
               </div>
            </div>
            <p className="text-sm text-gray-600 font-medium">Get a comprehensive exam & X-rays for just <span className="text-[#4CA1A3]">$49</span></p>
          </motion.div>
        </motion.div>

      </Container>
    </section>
  );
}
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0FDFA] -z-10 skew-x-12 transform origin-top" />
      
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-[#008080]/10 text-[#008080] px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008080] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008080]"></span>
            </span>
            Accepting New Patients
          </div>
          
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-[#0F3460] leading-tight">
            Crafting World-Class Smiles in Houston
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Experience premium dental care where art meets science. From cosmetic makeovers to family checkups, we treat every patient like family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="group">
              Book Consultation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm">
              Virtual Tour
            </Button>
          </div>

          <div className="pt-6 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#008080]" />
              <span>Insurance Accepted</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span>5.0 Google Rating</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative lg:h-[600px] h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0F3460]/20 to-[#008080]/20 rounded-[40px] rotate-3" />
          <img
            src={images["hero"].src}
            alt={images["hero"].alt}
            width={images["hero"].width}
            height={images["hero"].height}
            className="relative w-full h-full object-cover rounded-[32px] shadow-2xl"
            priority
          />
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-[#008080]/10 rounded-full flex items-center justify-center text-[#008080]">
                 <CheckCircle className="w-6 h-6" />
               </div>
               <div>
                 <p className="font-bold text-[#0F3460]">Emergency Care</p>
                 <p className="text-xs text-gray-500">Same-day appointments available</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { images } from "@/config/images";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 bg-gradient-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-medical/10 text-medical px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-medical"></span>
              </span>
              <span>Now Accepting New Patients</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary">
              Crafting World-Class <br />
              <span className="text-medical">Smiles</span> in Houston
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Experience the perfect blend of advanced clinical expertise and spa-like comfort. We don't just fix teeth; we transform lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#virtual-tour">Virtual Tour</a>
              </Button>
            </div>

            <div className="pt-4 flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-medical mr-2" />
                <span>Top Rated</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-medical mr-2" />
                <span>Insurance Friendly</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-medical/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl">
              <Image
                src={images["hero"].src}
                alt={images["hero"].alt}
                width={images["hero"].width}
                height={images["hero"].height}
                priority
                className="object-cover h-[500px] lg:h-[650px] w-full transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Card Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 transform translate-y-4 hover:translate-y-0 transition-transform">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-medical/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary">4.9/5 Rating</p>
                    <p className="text-sm text-gray-600">Based on 500+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
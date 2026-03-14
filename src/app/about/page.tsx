import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/forms/ContactForm";
import { CTABanner } from "@/components/sections/CTABanner";
import { siteConfig } from "@/config/site";
import { CheckCircle2, Award, Users, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Bright Smile Dental's history, our team of expert dentists, and our commitment to patient care in Houston.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            Experience You Can Trust
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on the principles of compassion, integrity, and clinical excellence, we have been serving the Houston community for over a decade.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Philosophy</h2>
                <p className="text-gray-600 leading-relaxed">
                  At Bright Smile Dental, we believe that a visit to the dentist should be a positive, stress-free experience. We combine state-of-the-art technology with a warm, spa-like atmosphere to ensure your comfort.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-medical/10 rounded-lg flex items-center justify-center text-medical shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Patient First</h3>
                    <p className="text-sm text-gray-500 mt-1">Your comfort is our priority.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-medical/10 rounded-lg flex items-center justify-center text-medical shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Expert Care</h3>
                    <p className="text-sm text-gray-500 mt-1">Board certified specialists.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-medical/10 rounded-lg flex items-center justify-center text-medical shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Community</h3>
                    <p className="text-sm text-gray-500 mt-1">Locally owned and operated.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-medical/10 rounded-lg flex items-center justify-center text-medical shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Guarantee</h3>
                    <p className="text-sm text-gray-500 mt-1">We stand by our work.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
               <h3 className="text-2xl font-heading font-bold mb-6">Why Choose Us?</h3>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-6 h-6 text-medical shrink-0" />
                   <span>Advanced technology including 3D imaging and laser dentistry.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-6 h-6 text-medical shrink-0" />
                   <span>Transparent pricing with no hidden fees.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-6 h-6 text-medical shrink-0" />
                   <span>Convenient appointment times, including evenings and Saturdays.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-6 h-6 text-medical shrink-0" />
                   <span>Multilingual staff to serve our diverse community.</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner variant="meet-team" />
    </>
  );
}
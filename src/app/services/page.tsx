import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { CTA } from "@/components/CTA";
import { motion } from "framer-motion";
import { ChevronRight, Activity, Smile, Shield, UserCheck, Clock, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive dental services including cosmetic, general, and emergency dentistry in Houston, TX.",
};

const services = {
  general: [
    { title: "Comprehensive Exams", desc: "Detailed checkups including digital X-rays and oral cancer screenings.", price: "From $150" },
    { title: "Professional Cleaning", desc: "Remove plaque and tartar build-up to prevent gum disease.", price: "From $120" },
    { title: "Fillings & Restorations", desc: "Tooth-colored composite style={{ width: "100%", height: "100%", objectFit: "cover" }}ings that blend seamlessly with your natural teeth.", price: "From $150" },
    { title: "Pediatric Dentistry", desc: "Gentle care designed specifically for children and teens.", price: "From $100" },
  ],
  cosmetic: [
    { title: "Teeth Whitening", desc: "Professional laser whitening for results up to 8 shades lighter.", price: "From $299" },
    { title: "Porcelain Veneers", desc: "Custom-made shells to cover imperfections and create a perfect smile.", price: "From $900/tooth" },
    { title: "Bonding", desc: "Repair chips or cracks using a tooth-colored resin material.", price: "From $200" },
    { title: "Smile Makeover", desc: "A comprehensive plan combining multiple cosmetic procedures.", price: "Custom Quote" },
  ],
  emergency: [
    { title: "Tooth Extractions", desc: "Safe removal of damaged or impacted teeth.", price: "From $200" },
    { title: "Root Canals", desc: "Save your natural tooth and relieve pain quickly.", price: "From $600" },
    { title: "Broken Tooth Repair", desc: "Immediate fixes for chipped, cracked, or broken teeth.", price: "From $150" },
    { title: "Emergency Exam", desc: "Priority assessment for severe pain or trauma.", price: "$75" },
  ],
  ortho: [
    { title: "Clear Aligners", desc: "Straighten teeth discreetly with clear plastic trays.", price: "From $3,500" },
    { title: "Traditional Braces", desc: "Effective metal braces for complex alignment issues.", price: "From $4,000" },
    { title: "Retainers", desc: "Maintain your smile post-treatment with custom retainers.", price: "From $150" },
  ]
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-textMain mb-6">Our Dental Services</h1>
          <p className="text-xl text-textBody max-w-2xl mx-auto">
            Advanced treatments tailored to your unique smile. We combine comfort with clinical excellence.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 h-auto p-1 bg-gray-100">
              <TabsTrigger value="general" className="py-3 data-[state=active]:bg-white shadow-sm">General</TabsTrigger>
              <TabsTrigger value="cosmetic" className="py-3 data-[state=active]:bg-white shadow-sm">Cosmetic</TabsTrigger>
              <TabsTrigger value="emergency" className="py-3 data-[state=active]:bg-white shadow-sm">Emergency</TabsTrigger>
              <TabsTrigger value="ortho" className="py-3 data-[state=active]:bg-white shadow-sm">Orthodontics</TabsTrigger>
            </TabsList>

            {Object.entries(services).map(([key, items]) => (
              <TabsContent key={key} value={key} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {items.map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col sm:flex-row gap-6 p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white"
                    >
                      <div className="w-12 h-12 bg-primaryLight rounded-lg flex-shrink-0 flex items-center justify-center text-primary">
                        <Activity size={24} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-textMain">{service.title}</h3>
                          <span className="text-sm font-bold bg-secondary/10 text-secondary px-2 py-1 rounded">{service.price}</span>
                        </div>
                        <p className="text-textBody mb-4">{service.desc}</p>
                        <Link href="/contact" className="text-primary font-semibold hover:underline inline-flex items-center text-sm">
                          Book this <ChevronRight size={14} className="ml-1" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-bgBody">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
               <img
                src={images["gallery-1"]}
                alt="Advanced Technology"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-textMain mb-6">State-of-the-Art Technology</h2>
              <p className="text-lg text-textBody mb-8">
                We invest in the latest dental technology to ensure your treatments are faster, more comfortable, and more precise.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Zap, text: "Digital X-Rays (90% less radiation)" },
                  { icon: Smile, text: "3D Intraoral Scanners (No more goopy impressions)" },
                  { icon: Clock, text: "Single-Visit CEREC Crowns" },
                  { icon: Shield, text: "Laser Cavity Detection" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <item.icon className="text-primary" size={20} />
                    <span className="font-medium text-textBody">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
import { Metadata } from "next";
import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ContactForm";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { PainMap } from "@/components/PainMap";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Home",
  description: "Premium family and cosmetic dentistry in Houston, TX.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative pt-10 lg:pt-0 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6 tracking-wide">
              HOUSTON'S PREMIER DENTAL CARE
            </span>
            <h1 className="font-heading text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-[1.1] mb-6">
              Life-changing <br/> <span className="text-secondary">confidence.</span>
            </h1>
            <p className="text-lg text-textMain mb-8 max-w-lg leading-relaxed">
              Experience a new standard of dentistry where your comfort comes first. From routine checkups to complete smile makeovers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg">Book Consultation</Button>
              <Button variant="secondary" size="lg" className="h-14 px-8 text-lg">Virtual Tour</Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" width={40} height={40} />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-accent mb-1">
                  <Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" />
                </div>
                <p className="text-xs font-medium text-textMain">4.9/5 from 2,000+ reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <BeforeAfterSlider />
            
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-[-50px] lg:w-[300px] bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hidden lg:block border border-white/50">
              <div className="flex items-center gap-2 text-primary mb-2">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                <span className="font-bold text-sm">Accepting New Patients</span>
              </div>
              <p className="text-sm text-gray-600">Same-day emergencies available for existing patients.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">Accepted Insurance Providers</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            {["Delta", "Aetna", "Cigna", "MetLife", "Humana"].map((item) => (
              <span key={item} className="text-xl font-heading font-bold text-gray-500">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Map Section */}
      <section className="py-24 bg-[#F0F9FA] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Not sure what you need?</h2>
            <p className="text-textMain">Interact with our pain map to identify your concern and find the right treatment path instantly.</p>
          </div>
          <PainMap />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Expertise</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2">Comprehensive Care</h2>
            </div>
            <a href="/services" className="hidden md:inline-flex items-center text-primary font-bold hover:text-secondary transition-colors">
              View all services <span className="ml-2">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cosmetic Dentistry", desc: "Veneers, bonding, and whitening for the perfect smile.", img: "service-2" },
              { title: "General Dentistry", desc: "Cleanings, exams, and style={{ width: "100%", height: "100%", objectFit: "cover" }}ings for the whole family.", img: "service-1" },
              { title: "Restorative Care", desc: "Implants and crowns using the latest 3D technology.", img: "service-3" }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={images[service.img as ImageSlot].src} 
                    alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-textMain mb-6 leading-relaxed">{service.desc}</p>
                  <a href="/services" className="inline-flex items-center font-bold text-secondary group-hover:translate-x-1 transition-transform">
                    Learn more
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-16">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Maria L.", text: "I've never felt so comfortable at a dentist. The team explained everything and my new smile is incredible!" },
              { name: "James T.", text: "Dr. Bennett's attention to detail is unmatched. The painless root canal was a miracle." },
              { name: "Sarah J.", text: "Modern, clean, and friendly. They actually respect your time here. Highly recommended for families." }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex text-accent mb-4">
                  <Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" />
                </div>
                <p className="font-serif text-xl text-gray-600 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt={review.name} width={40} height={40} />
                  </div>
                  <span className="font-bold text-primary">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">Ready to smile?</h2>
              <p className="text-gray-300 mb-8 text-lg">Book your consultation today and take the first step towards optimal oral health.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                    <svg className="w-6 h-6" style={{ width: "100%", height: "100%", objectFit: "cover" }}="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Call Us</h4>
                    <p className="text-gray-400">(713) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                    <svg className="w-6 h-6" style={{ width: "100%", height: "100%", objectFit: "cover" }}="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Visit Us</h4>
                    <p className="text-gray-400">4521 Westheimer Rd, Suite 200<br/>Houston, TX 77027</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-white p-12 lg:p-16">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
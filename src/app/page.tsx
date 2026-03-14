import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/CTA";
import { SymptomChecker } from "@/components/SymptomChecker";
import { ContactForm } from "@/components/ContactForm";
import { images } from "@/config/images";
import { Star, Shield, Clock, Users, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "Experience modern dentistry with a gentle touch at Bright Smile Dental. Comprehensive cosmetic, family, and emergency dental services in Houston, TX.",
};

// Reveal Animation Component
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const services = [
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with professional whitening, veneers, and bonding for a confident look.",
      icon: "✨",
    },
    {
      title: "General Dentistry",
      description: "Comprehensive exams, cleanings, and fillings using the latest technology for optimal health.",
      icon: "🦷",
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with clear aligners or traditional braces tailored to your lifestyle.",
      icon: "😁",
    },
  ];

  const testimonials = [
    {
      name: "Maria L.",
      role: "Patient",
      quote: "I&apos;ve always been afraid of the dentist, but the team at Bright Smile changed that. They were so gentle and explained everything!",
      rating: 5,
    },
    {
      name: "James T.",
      role: "Patient",
      quote: "The cosmetic work Dr. Bennett did on my veneers is incredible. I haven't stopped smiling since I left the office.",
      rating: 5,
    },
    {
      name: "Emily R.",
      role: "Patient",
      quote: "Emergency tooth pain at 9 PM? They fit me in first thing the next morning. True professionals.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-7 text-center lg:text-left z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-6"
              >
                Accepting New Patients
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-textMain tracking-tight mb-6 leading-tight"
              >
                Modern Dentistry <br className="hidden lg:block" />
                <span className="text-primary">With a Gentle Touch.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-textBody mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Experience world-class dental care in the heart of Houston. We use advanced technology to ensure your visit is comfortable, efficient, and stress-free.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button asChild size="lg" className="h-14 px-8 text-base">
                  <Link href="/contact">Book Appointment</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-base">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-textMuted"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-success" />
                  <span>Insurance Accepted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-success" />
                  <span>5-Star Rated</span>
                </div>
              </motion.div>
            </div>

            {/* Image */}
            <Reveal delay={0.2} className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={images["hero"].src}
                  alt={images["hero"].alt}
                  width={images["hero"].width}
                  height={images["hero"].height}
                  priority
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Decorative Blob behind */}
                <div className="absolute -z-10 -top-10 -right-10 w-full h-full bg-primaryLight/50 rounded-full blur-3xl opacity-70" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-bgBody">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
                Comprehensive Care for Your Whole Family
              </h2>
              <p className="text-lg text-textBody">
                From preventative checkups to complete smile makeovers, we offer a full range of dental services under one roof.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="w-16 h-16 bg-primaryLight rounded-full flex items-center justify-center text-3xl mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-textMain mb-3">{service.title}</h3>
                  <p className="text-textBody mb-6 flex-grow">{service.description}</p>
                  <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:underline">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Symptom Checker */}
      <SymptomChecker />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
                Why Houston Chooses Bright Smile
              </h2>
              <p className="text-lg text-textBody">
                We combine cutting-edge technology with a warm, welcoming environment to provide an experience unlike any other dentist office.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Safety First", desc: "We exceed all CDC and OSHA sterilization guidelines." },
              { icon: Clock, title: "Punctual Care", desc: "We respect your time. Minimal wait times guaranteed." },
              { icon: Users, title: "Expert Team", desc: "Board-certified specialists with years of experience." },
              { icon: Star, title: "Top Rated", desc: "Over 500 5-star reviews from happy patients." },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-textMain mb-2">{item.title}</h3>
                  <p className="text-sm text-textBody">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-bgBody relative overflow-hidden">
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
                Loved by Our Community
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex text-primary mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className="mr-1" />
                    ))}
                  </div>
                  <p className="text-textBody mb-6 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-textMain">{t.name}</p>
                    <p className="text-xs text-textMuted uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Contact Form Teaser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="lg:py-8">
              <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-6">
                Ready to Schedule Your Visit?
              </h2>
              <p className="text-lg text-textBody mb-8">
                Fill out the form to request an appointment. Our team will contact you shortly to confirm your preferred time.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primaryLight rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-textMain">Call Us</h4>
                    <p className="text-textBody">(713) 555-0198</p>
                    <p className="text-sm text-textMuted">Available Mon-Sat</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primaryLight rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-textMain">Visit Us</h4>
                    <p className="text-textBody">4521 Westheimer Rd, Suite 200</p>
                    <p className="text-textBody">Houston, TX 77027</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
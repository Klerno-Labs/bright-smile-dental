import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ArrowRight, Calendar, Shield, Clock } from "lucide-react";
import { images } from "@/config/images";
import SymptomChecker from "@/components/sections/SymptomChecker";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 tracking-wide uppercase">
              Houston's Top Rated Dentist
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-neutral-text-main leading-tight mb-6">
              Modern Dentistry <br />
              <span className="text-primary">With a Gentle Touch.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-text-body mb-8 max-w-lg leading-relaxed">
              We combine advanced technology with a comforting environment to give you the smile you deserve. Anxiety-free visits guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-blue hover:-translate-y-1">
                Book Appointment
              </Link>
              <Link href="/services" className="inline-flex justify-center items-center px-8 py-4 bg-white text-primary border border-primary font-bold rounded-lg hover:bg-primary-light transition-all">
                View Services
              </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                 {[1,2,3].map((i) => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                     {i === 1 ? 'JD' : i === 2 ? 'AL' : 'MK'}
                   </div>
                 ))}
              </div>
              <p>Trusted by 2,000+ Happy Patients in Houston</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] transform rotate-3 translate-x-4 translate-y-4" />
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image 
                src={images.hero.src}
                alt={images.hero.alt}
                width={images.hero.width}
                height={images.hero.height}
                priority
                className="object-cover h-full w-full hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex text-yellow-400">
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                  </div>
                  <span className="font-bold text-sm text-gray-900">5.0 Rating</span>
                </div>
                <p className="text-xs text-gray-600">"Best dental experience I've ever had. Painless and professional!"</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 font-medium uppercase tracking-wider text-sm">
            <span>Insurance Accepted:</span>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <span>Aetna</span>
              <span>Cigna</span>
              <span>Delta Dental</span>
              <span>Humana</span>
              <span>UnitedHealth</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-text-main mb-4">
              Why Houston Chooses Bright Smile
            </h2>
            <p className="text-neutral-text-body text-lg">
              We don't just fix teeth; we build relationships based on trust, transparency, and exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield size={32} />, title: "Safety First", desc: "Strict sterilization protocols exceeding CDC standards for your peace of mind." },
              { icon: <Clock size={32} />, title: "Punctual Care", desc: "We respect your time. Minimal waiting times and efficient appointments." },
              { icon: <Calendar size={32} />, title: "Flexible Scheduling", desc: "Early morning, evening, and weekend slots available for busy families." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-text-main mb-3">{feature.title}</h3>
                <p className="text-neutral-text-body leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptom Checker */}
      <SymptomChecker />

      {/* Services Overview */}
      <section className="py-section bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-text-main mb-2">Our Expertise</h2>
              <p className="text-neutral-text-body">Comprehensive care under one roof.</p>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "General Dentistry", desc: "Routine cleanings, fillings, and comprehensive exams to keep your oral health on track.", img: "service-general" },
              { title: "Cosmetic Enhancements", desc: "Teeth whitening, veneers, and bonding to give you the confidence to smile bright.", img: "service-cosmetic" },
              { title: "Orthodontics", desc: "Clear aligners and modern braces for children and adults seeking perfect alignment.", img: "service-ortho" },
            ].map((service, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-4 relative aspect-[4/3]">
                  <Image 
                    src={images[service.img as keyof typeof images].src}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-xl font-bold text-neutral-text-main mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-neutral-text-body text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link href="/services" className="inline-flex items-center gap-2 text-primary font-bold">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* New Patient Promo */}
      <section id="new-patient" className="py-section bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-accent text-white text-xs font-bold mb-4 uppercase tracking-wider">
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            New Patient Special
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-8 font-light">
            Get a comprehensive exam, professional cleaning, and digital X-rays for just <span className="font-bold text-white">$99</span>.
          </p>
          <Link 
            href="/contact?offer=newpatient" 
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-xl"
          >
            Claim Offer <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-text-main mb-12 text-center">
            What Our Patients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria L.", role: "Patient for 2 years", text: "I used to be terrified of the dentist, but Dr. Bennett changed that. The sedation options made my root canal completely painless." },
              { name: "James T.", role: "Cosmetic Patient", text: "The veneers gave me a Hollywood smile. The team really listened to what I wanted and the results exceeded my expectations." },
              { name: "Sarah J.", role: "Mom of 3", text: "Bringing three kids to the dentist is usually a nightmare, but here they actually look forward to it. The staff is so patient and fun." },
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl relative">
                <div className="flex text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                </div>
                <p className="text-neutral-text-body mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-neutral-text-main">{review.name}</p>
                  <p className="text-xs text-neutral-text-muted uppercase">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
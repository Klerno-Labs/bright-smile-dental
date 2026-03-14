import { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Zap } from "lucide-react";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team at Bright Smile Dental and learn about our patient-first philosophy.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src={images["about"].src} alt="Clinic Interior" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">About Bright Smile</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">Where advanced technology meets compassionate care.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8">Our Philosophy</h2>
            <p className="text-lg text-textMain leading-relaxed mb-8">
              Founded in 1990, Bright Smile Dental was built on a simple premise: treat every patient like family. 
              We understand that visiting the dentist can be stressful, which is why we&apos;ve cultivated an environment 
              of serenity, transparency, and trust.
            </p>
            <blockquote className="font-serif text-2xl text-accent italic border-l-4 border-accent pl-6 text-left">
              "We don&apos;t just fix teeth; we restore confidence. Your smile is your signature, and we are here to help you sign it with pride."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: <Zap className="w-10 h-10 text-secondary" />, title: "Advanced Tech", desc: "3D imaging and laser dentistry for precision and comfort." },
              { icon: <Award className="w-10 h-10 text-secondary" />, title: "Award Winning", desc: "Recognized as Houston&apos;s top dental practice 5 years running." },
              { icon: <Users className="w-10 h-10 text-secondary" />, title: "Expert Team", desc: "Specialists in every field of dentistry under one roof." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-textMain">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">Leadership</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">Meet Dr. James Sterling</h2>
              <p className="text-textMain text-lg mb-6 leading-relaxed">
                With over 25 years of experience, Dr. Sterling has dedicated his career to mastering the art of cosmetic reconstruction and restorative dentistry. He graduated magna cum laude from the University of Texas Health Science Center.
              </p>
              <p className="text-textMain mb-6">
                When he&apos;s not in the clinic, Dr. Sterling volunteers for local health initiatives and enjoys spending time with his two golden retrievers.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary">25+</span>
                  <span className="text-sm text-gray-500">Years Exp.</span>
                </div>
                <div className="w-px bg-gray-300 h-12"></div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary">5k+</span>
                  <span className="text-sm text-gray-500">Smiles</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/10 rounded-[40px] -z-10"></div>
                <div className="rounded-[32px] overflow-hidden shadow-xl aspect-[4/5] relative">
                   <Image src={images["founder"].src} alt="Dr. James Sterling" fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
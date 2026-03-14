import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Zap, Users, Award } from "lucide-react";
import { images } from "@/config/images";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src={images["about-hero"].src}
            alt="Office Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl font-light text-blue-100">
            To provide the highest quality dental care with integrity, compassion, and a gentle touch, empowering our community to smile with confidence.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-primary font-bold uppercase tracking-wider mb-2 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-text-main mb-6">
                More Than Just a Dental Office
              </h2>
              <p className="text-neutral-text-body mb-4 leading-relaxed">
                Founded in 2010, Bright Smile Dental started with a simple idea: going to the dentist shouldn't be scary. Dr. Sarah Bennett assembled a team of specialists who share a passion for patient comfort above all else.
              </p>
              <p className="text-neutral-text-body mb-6 leading-relaxed">
                Over the last decade, we've grown from a small practice to a state-of-the-art facility serving thousands of families across Houston. Despite our growth, our core values remain the same: treat every patient like family.
              </p>
              <Link href="/contact" className="text-primary font-bold hover:underline flex items-center gap-1">
                Meet the team in person <span>→</span>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image 
                  src={images["about-team"].src}
                  alt="Team Meeting"
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart size={28} className="text-primary" />, title: "Compassionate Care", desc: "We listen to your fears and tailor treatment to your comfort level." },
              { icon: <Zap size={28} className="text-secondary" />, title: "Modern Tech", desc: "Digital X-rays, 3D scanning, and laser dentistry for precision." },
              { icon: <Users size={28} className="text-accent" />, title: "Community Focus", desc: "We participate in local health drives and school programs." },
              { icon: <Award size={28} className="text-purple-500" />, title: "Expertise", desc: "Our doctors are board certified with 15+ years of experience." },
            ].map((val, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="font-bold text-neutral-text-main mb-2">{val.title}</h3>
                <p className="text-sm text-neutral-text-body">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-text-main mb-4">Meet Our Doctors</h2>
            <p className="text-neutral-text-body">Dedicated professionals who love what they do.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Bennett", title: "Founder & Lead Dentist", img: "team-1", fun: "Loves hiking the Colorado trails on weekends." },
              { name: "Dr. Michael Chen", title: "Orthodontist", img: "team-2", fun: "Plays the cello in the Houston Symphony." },
              { name: "Dr. Emily Rodriguez", title: "Pediatric Specialist", img: "team-3", fun: "Bakes the best cinnamon rolls in Texas." },
            ].map((doc, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <Image 
                    src={images[doc.img as keyof typeof images].src}
                    alt={doc.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-white text-center">
                    <p className="font-serif italic text-lg">"{doc.fun}"</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-text-main">{doc.name}</h3>
                <p className="text-primary font-medium">{doc.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
import { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/site";
import { CTA } from "@/components/CTA";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the history, mission, and expert team at Bright Smile Dental in Houston, TX.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 py-24 md:py-32 text-center">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1920&h=1080&fit=crop"
            alt="Office Background" style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Story
          </h1>
          <p className="text-xl text-gray-200">
            Creating healthy smiles for the Houston community since 2005.
          </p>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-textMain mb-6">
                More Than Just a Dentist Office
              </h2>
              <p className="text-lg text-textBody mb-6 leading-relaxed">
                Bright Smile Dental was founded with a simple mission: to make high-quality dental care accessible and anxiety-free for everyone in Houston. We believe that a visit to the dentist should be a positive experience, not something to dread.
              </p>
              <p className="text-lg text-textBody mb-8 leading-relaxed">
                Over the years, we have grown from a small practice to a state-of-the-art facility, but our core values remain the same. We treat every patient like family, taking the time to listen to your concerns and explain your treatment options clearly.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-4xl font-bold text-primary mb-1">18+</h3>
                  <p className="text-textBody font-medium">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-primary mb-1">15k+</h3>
                  <p className="text-textBody font-medium">Happy Patients</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={images["about"]}
                alt="Our Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-bgBody">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-textBody">
              The principles that guide every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "Honest diagnoses and fair pricing." },
              { title: "Compassion", desc: "Empathy in every interaction." },
              { title: "Excellence", desc: "Commitment to the highest standards." },
              { title: "Innovation", desc: "Adopting the latest technology." },
            ].map((val, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary font-bold text-xl">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-textMain mb-2">{val.title}</h3>
                <p className="text-sm text-textBody">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
              Meet Your Doctors
            </h2>
            <p className="text-lg text-textBody">
              Expert care from the best professionals in the field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Doctor 1 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={images["team-1"]}
                alt="Dr. Sarah Bennett"
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-sm mb-2">
                  Dr. Bennett loves hiking and photography in her free time.
                </p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">LinkedIn</a>
                </div>
              </div>
              <div className="p-4 bg-white border-x border-b border-gray-100 rounded-b-xl">
                <h3 className="text-lg font-bold text-textMain">Dr. Sarah Bennett</h3>
                <p className="text-sm text-primary font-medium">Cosmetic Specialist</p>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={images["founder"]}
                alt="Dr. James O'Connor"
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-sm mb-2">
                  Founder Dr. O&apos;Connor is a lifelong fan of the Houston Astros.
                </p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">LinkedIn</a>
                </div>
              </div>
              <div className="p-4 bg-white border-x border-b border-gray-100 rounded-b-xl">
                <h3 className="text-lg font-bold text-textMain">Dr. James O&apos;Connor</h3>
                <p className="text-sm text-primary font-medium">General Dentistry</p>
              </div>
            </div>

            {/* Doctor 3 */}
             <div className="group relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=800&fit=crop"
                alt="Dr. Emily Chen"
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-sm mb-2">
                  Dr. Chen is an avid baker known for her sourdough bread.
                </p>
                 <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">LinkedIn</a>
                </div>
              </div>
              <div className="p-4 bg-white border-x border-b border-gray-100 rounded-b-xl">
                <h3 className="text-lg font-bold text-textMain">Dr. Emily Chen</h3>
                <p className="text-sm text-primary font-medium">Orthodontics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-bgBody">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-textMain mb-8">Our Office</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={images[`gallery-${item}` as keyof typeof images].src}
                  alt={`Office view ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
             <Button asChild variant="secondary">
               <Link href="/services">Take a Virtual Tour</Link>
             </Button>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
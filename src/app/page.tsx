import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, Play } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/contact-form";
import { images } from "@/config/images";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full border border-teal-100">
                <span className="flex h-2 w-2 rounded-full bg-teal-600 animate-pulse"></span>
                <span className="text-sm font-semibold text-teal-700 tracking-wide uppercase">Accepting New Patients</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-primary leading-tight">
                Crafting World-Class Smiles in Houston
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Experience dental care that blends clinical excellence with spa-like comfort. From routine cleanings to complete smile makeovers, we put your health first.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/#contact">
                  <Button size="lg">Book Consultation</Button>
                </Link>
                <Link href="/services" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                  Explore Treatments
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Trusted by major insurance providers</p>
                <div className="flex flex-wrap gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                   {["Delta Dental", "Aetna", "Cigna", "MetLife", "Humana"].map((item) => (
                    <span key={item} className="font-bold text-gray-400 text-lg">{item}</span>
                   ))}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4]">
                <Image
                  src={images.hero.src}
                  alt={images.hero.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 p-3 rounded-full text-teal-700">
                      <Star className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">4.9/5 Rating</p>
                      <p className="text-sm text-gray-600">Based on 500+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -z-10 bottom-10 -left-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <Section bgColor="surface">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Comprehensive Dental Care</h2>
          <p className="text-lg text-gray-600">We utilize the latest technology to provide precise, painless treatments for the whole family.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Cosmetic Dentistry", desc: "Veneers, bonding, and complete smile transformations using premium materials.", img: images["service-1"] },
            { title: "Restorative Care", desc: "Implants, crowns, and bridges that look and feel exactly like natural teeth.", img: images["service-2"] },
            { title: "Preventive Care", desc: "Digital X-rays and cleanings designed to catch issues before they start.", img: images["service-3"] },
          ].map((service, idx) => (
            <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.img.src}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-accent font-bold hover:text-primary transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Before / After Interactive Section (Concept) */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[24px] overflow-hidden shadow-xl aspect-square group cursor-pointer">
            <Image
              src={images["gallery-1"].src}
              alt="Smile transformation result"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-8 h-8 text-accent fill-accent" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-primary">
              Patient Success Stories
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Real Results, Real Confidence</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe in transparency. Our gallery showcases actual patients treated right here in Houston. See how modern cosmetic dentistry can change not just your smile, but your life.
            </p>
            <ul className="space-y-4 mb-8">
              {["Digital smile preview before treatment", "Minimally invasive techniques", "Long-lasting, natural materials"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle className="text-teal-600 w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/services">
              <Button variant="outline" size="lg">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bgColor="mint-gradient">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">What Our Patients Say</h2>
          <p className="text-lg text-gray-600">Don't just take our word for it. Hear from our community.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Maria L.", text: "I haven't smiled in photos for years. Dr. Jenkins changed that in two visits. The veneers look so natural!", role: "Cosmetic Patient" },
            { name: "James T.", text: "I used to be terrified of the dentist. The team here made me feel so comfortable. No pain, just kindness.", role: "General Care" },
            { name: "Sarah B.", text: "The emergency care was phenomenal. They fit me in same-day when I broke a tooth. Lifesavers.", role: "Emergency Patient" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-card relative">
              <div className="absolute -top-4 left-8 text-6xl text-teal-100 font-serif">"</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-6 relative z-10 italic">"{item.text}"</p>
              <div>
                <p className="font-bold text-primary font-serif">{item.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact / CTA Section */}
      <Section id="contact" bgColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule your consultation today. We offer flexible financing and accept most major insurance plans.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-lg text-teal-700 shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">New Patient Special</h4>
                  <p className="text-gray-600">Comprehensive exam, cleaning, and X-rays for $149.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-lg text-teal-700 shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Same-Day Emergencies</h4>
                  <p className="text-gray-600">We reserve time daily for urgent dental needs.</p>
                </div>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-gray-100">
              <p className="font-bold text-primary mb-2">Contact Us Directly</p>
              <p className="text-2xl font-serif font-bold text-gray-900 mb-1">(713) 555-0123</p>
              <p className="text-gray-600">4521 Westheimer Rd, Suite 200, Houston, TX 77027</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Request Appointment</h3>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
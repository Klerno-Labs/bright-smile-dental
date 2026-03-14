import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Phone, Calendar, Shield, Clock } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { PainMap } from "@/components/pain-map";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Home",
  description: "Premium family and cosmetic dentistry in Houston, TX. Experience life-changing confidence with our patient-first approach.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[90vh] pt-20 flex items-center bg-[#F9FAFB]">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E0F2F2] text-[#0E3A53] text-sm font-semibold tracking-wide uppercase">
              Houston&apos;s Top Rated Dentist
            </span>
            <h1 className="font-heading font-bold text-[clamp(2.5rem,5vw,4.5rem)] text-[#0E3A53] leading-[1.1]">
              Life-changing confidence <br />
              <span className="text-[#4CA1A3]">starts with a smile.</span>
            </h1>
            <p className="text-lg text-[#4B5563] max-w-lg leading-relaxed">
              Experience modern dentistry designed for your comfort. From routine cleanings to complete smile makeovers, we treat you like family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/#contact">Book Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-6 text-sm font-medium text-[#0E3A53]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#4CA1A3]" />
                <span>Accepting New Patients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 style={{ width: "100%", height: "100%", objectFit: "cover" }}-[#D4AF37] text-[#D4AF37]" />
                <span>5.0 Rated on Google</span>
              </div>
            </div>
          </div>

          {/* Media / Before-After */}
          <div className="relative h-[60vh] lg:h-[90vh] w-full rounded-l-[24px] overflow-hidden shadow-2xl">
            <BeforeAfterSlider />
            
            {/* Floating Card (Desktop) */}
            <div className="hidden md:block absolute bottom-10 left-[-40px] bg-white/95 backdrop-blur p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#E0F2F2] flex items-center justify-center text-[#4CA1A3]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563] uppercase font-bold tracking-wider">Emergency?</p>
                  <p className="font-heading font-bold text-[#0E3A53]">(713) 555-0123</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Same-day appointments available for pain relief.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-gray-100 py-8">
        <div className="max-w-[1240px] mx-auto px-6">
          <p className="text-center text-sm text-gray-500 font-medium mb-6 tracking-widest uppercase">Proudly working with major insurance providers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Placeholder Logo Text - In prod, use SVG logos */}
            {["Delta Dental", "Aetna", "Cigna", "MetLife", "Humana"].map((name) => (
              <span key={name} className="font-heading font-bold text-xl text-gray-400">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Map Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0E3A53] mb-4">Not sure what you need?</h2>
            <p className="text-[#4B5563] text-lg">
              Tap on the area where you are experiencing discomfort to see our recommended treatments.
            </p>
          </div>
          <PainMap />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0E3A53] mb-4">Comprehensive Dental Care</h2>
              <p className="text-[#4B5563] text-lg">
                We utilize the latest technology to provide accurate diagnoses and effective treatments in a relaxing environment.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/services">View All Services <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cosmetic Dentistry",
                desc: "Transform your smile with veneers, bonding, and professional whitening.",
                img: "service-1",
                link: "cosmetic"
              },
              {
                title: "Restorative Care",
                desc: "High-quality crowns, bridges, and implants to restore function and beauty.",
                img: "service-2",
                link: "restorative"
              },
              {
                title: "Preventative Care",
                desc: "Regular check-ups, cleanings, and sealants to keep your teeth healthy.",
                img: "service-3",
                link: "preventative"
              }
            ].map((service, i) => (
              <div key={i} className="group bg-[#F9FAFB] rounded-[24px] overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={images[service.img as keyof typeof images].src}
                    alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A53]/60 to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-bold text-2xl text-[#0E3A53] mb-3 group-hover:text-[#4CA1A3] transition-colors">{service.title}</h3>
                  <p className="text-[#4B5563] mb-6 leading-relaxed">{service.desc}</p>
                  <div className="flex items-center text-[#4CA1A3] font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0E3A53] text-white relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 opacity-10">
          <img src={images["testimonial-bg"].src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} className="object-cover grayscale" />
        </div>
        
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-serif italic text-xl">What Our Patients Say</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2">Rated 5 Stars in Houston</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Maria L.", service: "Veneers", text: "I was so self-conscious about my smile for years. Dr. Bennett changed my life in just two visits. The staff made me feel so comfortable!" },
              { name: "James T.", service: "Implants", text: "I thought getting an implant would be painful, but it was surprisingly easy. The technology they use is incredible." },
              { name: "Sarah M.", service: "Cleaning", text: "Best dental experience I&apos;ve ever had. The office is beautiful, the views are calming, and the cleaning was gentle." }
            ].map((review, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 style={{ width: "100%", height: "100%", objectFit: "cover" }}-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="font-serif text-lg leading-relaxed mb-6 text-gray-200">&quot;{review.text}&quot;</p>
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-sm text-[#4CA1A3]">{review.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0E3A53] mb-6">Ready to smile?</h2>
            <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
              Schedule your appointment today. New patients receive a comprehensive exam and digital x-rays for just $99.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E0F2F2] flex items-center justify-center text-[#4CA1A3] shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0E3A53]">Flexible Scheduling</h4>
                  <p className="text-[#4B5563]">Early morning and evening slots available.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E0F2F2] flex items-center justify-center text-[#4CA1A3] shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0E3A53]">Insurance Friendly</h4>
                  <p className="text-[#4B5563]">We handle the paperwork so you don&apos;t have to.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E0F2F2] flex items-center justify-center text-[#4CA1A3] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0E3A53]">No Wait Time</h4>
                  <p className="text-[#4B5563]">We respect your time. Appointments run on schedule.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactForm() {
  return (
    <form action="/api/contact" method="POST" className="bg-[#F9FAFB] p-8 md:p-10 rounded-[24px] shadow-card border border-gray-100">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-[#0E3A53]">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4CA1A3] focus:ring-2 focus:ring-[#4CA1A3]/20 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-[#0E3A53]">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              required 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4CA1A3] focus:ring-2 focus:ring-[#4CA1A3]/20 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-[#0E3A53]">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4CA1A3] focus:ring-2 focus:ring-[#4CA1A3]/20 outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-[#0E3A53]">Interested Service</label>
          <select id="service" name="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4CA1A3] focus:ring-2 focus:ring-[#4CA1A3]/20 outline-none transition-all bg-white">
            <option value="">Select a service...</option>
            <option value="checkup">New Patient Exam</option>
            <option value="cleaning">Hygiene Cleaning</option>
            <option value="cosmetic">Cosmetic Consult</option>
            <option value="emergency">Emergency/Pain</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-[#0E3A53]">Message (Optional)</label>
          <textarea 
            id="message" 
            name="message"
            rows={3} 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4CA1A3] focus:ring-2 focus:ring-[#4CA1A3]/20 outline-none transition-all placeholder:text-gray-400 resize-none"
          />
        </div>

        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <button 
          type="submit" 
          className="w-full bg-[#4CA1A3] text-white font-bold py-4 rounded-xl hover:bg-[#3E8A8C] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Request Appointment
        </button>
        <p className="text-xs text-center text-gray-500">
          By submitting, you agree to our privacy policy. We&apos;ll contact you within 24 hours.
        </p>
      </div>
    </form>
  );
}
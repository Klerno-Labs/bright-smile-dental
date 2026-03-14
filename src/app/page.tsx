import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { SymptomChecker } from "@/components/SymptomChecker";
import { ContactForm } from "@/components/ContactForm";
import { images } from "@/config/images";
import { Star, MapPin, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Bright Smile Dental | Modern Dentistry in Houston, TX",
  description:
    "Experience modern dentistry with a gentle touch at Bright Smile Dental. We offer cosmetic, general, and emergency dental services in Houston, TX.",
  openGraph: {
    title: "Bright Smile Dental | Modern Dentistry in Houston, TX",
    description:
      "Experience modern dentistry with a gentle touch. Book your appointment today.",
    images: [images["hero"].src],
  },
  metadataBase: new URL("https://brightsmile.com"),
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Bright Smile Dental",
  image: images["hero"].src,
  "@id": "",
  url: "https://brightsmile.com",
  telephone: "+17135550199",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4521 Westheimer Rd, Suite 200",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77027",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.7373,
    longitude: -95.4616,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-sm font-semibold tracking-wide uppercase">
                Accepting New Patients
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Modern Dentistry with a{" "}
                <span className="text-primary">Gentle Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                We combine advanced technology with compassionate care to ensure
                your visit is comfortable, stress-free, and effective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 border border-gray-200 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-all"
                >
                  View Services
                </Link>
              </div>
              
              <div className="flex items-center gap-6 pt-4 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Insurance Accepted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] w-full animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-teal-50 rounded-3xl transform rotate-2 scale-95" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={images["hero"].src}
                  alt={images["hero"].alt}
                  priority={true}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Trusted By Families In Houston
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logo placeholders using text for now, ideally SVGs */}
            <span className="text-xl font-bold text-gray-800">Delta Dental</span>
            <span className="text-xl font-bold text-gray-800">Aetna</span>
            <span className="text-xl font-bold text-gray-800">Cigna</span>
            <span className="text-xl font-bold text-gray-800">Humana</span>
            <span className="text-xl font-bold text-gray-800">MetLife</span>
          </div>
        </div>
      </section>

      {/* Symptom Checker */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use our interactive symptom checker to identify your concern and
              find the right treatment.
            </p>
          </div>
          <SymptomChecker />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From preventative care to cosmetic enhancements, we handle all your
              dental needs under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Cosmetic Dentistry"
              description="Transform your smile with teeth whitening, veneers, and bonding designed to look natural and beautiful."
              imageKey="service-1"
              linkHref="/services#cosmetic"
            />
            <ServiceCard
              title="General & Family"
              description="Routine cleanings, exams, and fillings for the whole family. We focus on prevention and long-term health."
              imageKey="service-2"
              linkHref="/services#general"
            />
            <ServiceCard
              title="Emergency Care"
              description="Tooth pain or a dental emergency? We offer same-day appointments to get you out of pain fast."
              imageKey="service-3"
              linkHref="/services#emergency"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Patients Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Convenient Location</h3>
              <p className="text-gray-600">
                Located in the heart of Houston with easy parking and flexible
                scheduling hours.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">We Respect Your Time</h3>
              <p className="text-gray-600">
                We strive to run on schedule so you can get back to your day
                without waiting around.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe & Sterile</h3>
              <p className="text-gray-600">
                We exceed CDC guidelines for sterilization to ensure your safety
                is never compromised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & CTA Split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Testimonials */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What Our Patients Say
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-xl border border-gray-100">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    &quot;I have never felt so comfortable at a dentist before. The
                    team explained everything clearly and my cleaning was painless.
                    Highly recommended!&quot;
                  </p>
                  <p className="font-bold text-gray-900">Maria L.</p>
                  <p className="text-sm text-gray-500">Patient since 2021</p>
                </div>

                <div className="p-6 bg-slate-50 rounded-xl border border-gray-100">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    &quot;They handled my chipped tooth emergency perfectly. I was in
                    agony, and they fit me in immediately. Dr. Smith is a miracle
                    worker.&quot;
                  </p>
                  <p className="font-bold text-gray-900">James T.</p>
                  <p className="text-sm text-gray-500">New Patient</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl mb-6">
                <h3 className="text-2xl font-bold mb-2">Ready to Smile?</h3>
                <p className="text-gray-300 mb-6">
                  Book your appointment online or give us a call.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
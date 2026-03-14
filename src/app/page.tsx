import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Star, Calendar, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { ContactForm } from '@/components/ContactForm';
import { images } from '@/config/images';

export default function Home() {
  return (
    <>
      {/* JSON-LD for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Bright Smile Dental",
            "image": "https://brightsmiledental.com/hero.jpg",
            "@id": "https://brightsmiledental.com",
            "url": "https://brightsmiledental.com",
            "telephone": "+17135550198",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4521 Westheimer Rd, Suite 200",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77027",
              "addressCountry": "US"
            },
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "14:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/brightsmiledental",
              "https://www.instagram.com/brightsmiledental"
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center pt-20 bg-background relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
              <Shield className="w-4 h-4" />
              Accepting New Patients in Houston
            </div>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-primary leading-[1.1]">
              Life-changing confidence <br />
              <span className="text-secondary">starts with a smile.</span>
            </h1>
            <p className="text-lg text-text-main max-w-xl leading-relaxed">
              Modern dentistry without the anxiety. Experience our spa-like environment, cutting-edge technology, and a team that treats you like family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                Book Consultation
              </Button>
              <Button variant="outline" size="lg">
                Virtual Tour
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <Image src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Patient" width={40} height={40} />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center text-accent mb-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm font-medium text-primary">Rated 4.9/5 by 500+ patients</p>
              </div>
            </div>
          </div>

          {/* Right Content (Before/After) */}
          <div className="relative h-[600px] w-full animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
            <BeforeAfterSlider />
            
            {/* Floating Card */}
            <div className="absolute bottom-10 left-0 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-modal max-w-xs hidden md:block animate-in zoom-in duration-700 delay-500">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-primary">Emergency?</p>
                  <p className="text-sm text-text-muted">Same-day appointments available</p>
                </div>
              </div>
              <a href="tel:+17135550198" className="text-sm font-semibold text-secondary hover:underline">
                Call (713) 555-0198 &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <p className="text-center text-sm text-text-muted font-medium mb-6 uppercase tracking-widest">Trusted Partners & Insurance</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {['Delta Dental', 'Aetna', 'Cigna', 'MetLife', 'Humana'].map((brand) => (
              <span key={brand} className="text-xl font-heading font-bold text-gray-600">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Map / Services Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Where does it hurt?</h2>
            <p className="text-lg text-text-main">Click on an area below to learn how we can help you get back to feeling 100%.</p>
          </div>

          {/* Interactive Pain Map Placeholder */}
          <div className="relative bg-white rounded-3xl p-8 md:p-16 shadow-card max-w-4xl mx-auto border border-gray-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 relative aspect-[4/3] w-full max-w-md">
              <Image 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800" 
                alt="Dental Consultation" 
                fill 
                className="object-cover rounded-2xl"
              />
              {/* Simulated Hotspots */}
              <button className="absolute top-1/3 left-1/2 w-8 h-8 bg-secondary rounded-full border-4 border-white shadow-lg animate-pulse hover:scale-110 transition-transform" aria-label="Check tooth pain"></button>
              <button className="absolute top-1/2 left-1/3 w-8 h-8 bg-secondary rounded-full border-4 border-white shadow-lg animate-pulse hover:scale-110 transition-transform delay-100" aria-label="Check gum pain"></button>
            </div>
            
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-heading font-bold text-primary">Don't ignore the signals</h3>
              <ul className="space-y-4">
                {['Persistent tooth sensitivity', 'Bleeding or swollen gums', 'Jaw pain or clicking', 'Discolored teeth'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-text-main">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <Button className="w-full md:w-auto">View All Treatments</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Comprehensive Care</h2>
              <p className="text-lg text-text-main max-w-2xl">From routine cleanings to complex restorations, we handle it all under one roof.</p>
            </div>
            <Link href="/services" className="hidden md:flex items-center text-secondary font-semibold hover:gap-2 transition-all gap-1">
              See all services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cosmetic Dentistry",
                desc: "Teeth whitening, veneers, and smile makeovers designed to boost your confidence.",
                img: images['service-2'],
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Restorative Care",
                desc: "High-quality fillings, crowns, and bridges that look and feel like natural teeth.",
                img: images['service-1'],
                color: "bg-green-50 text-green-600"
              },
              {
                title: "Dental Implants",
                desc: "Permanent solutions for missing teeth using the latest 3D imaging technology.",
                img: images['service-3'],
                color: "bg-purple-50 text-purple-600"
              }
            ].map((service, i) => (
              <div key={i} className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer">
                <div className={`w-14 h-14 rounded-full ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-text-main mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex items-center text-secondary font-semibold">
                  Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src={images['testimonial-bg']} alt="" fill className="object-cover" />
        </div>
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-16">What Our Patients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Maria L.", role: "Cosmetic Patient", text: "I haven't smiled in photos for years. Dr. Bennett changed that in two visits. The veneers look so natural!" },
              { name: "James T.", role: "Implant Patient", text: "The implant process was much easier than I expected. The team explained everything and made me feel comfortable." },
              { name: "Sarah K.", role: "Hygiene Patient", text: "Best cleaning I've ever had. The office feels like a spa, not a dentist. Highly recommend!" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-card relative">
                <div className="text-accent text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
                <div className="flex text-accent mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-text-main italic mb-6 relative z-10">"{review.text}"</p>
                <div>
                  <p className="font-bold text-primary">{review.name}</p>
                  <p className="text-sm text-text-muted">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full z-0"></div>
              <Image 
                src={images['team-1']} 
                alt="Dr. Sarah Bennett" 
                width={600} 
                height={700} 
                className="relative z-10 rounded-2xl shadow-hover"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl z-20 shadow-md">
                <p className="font-serif text-accent italic">"Dentistry is about people, not just teeth."</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Meet Dr. Sarah Bennett</h2>
              <p className="text-lg text-text-main">
                With over 15 years of experience in cosmetic and restorative dentistry, Dr. Bennett has helped thousands of Houston residents reclaim their smiles. She graduated magna cum laude from UT Health San Antonio and continually pursues advanced education in laser dentistry and implantology.
              </p>
              <ul className="space-y-3 text-text-main">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5" />
                  Member, American Academy of Cosmetic Dentistry
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5" />
                  Houston Top Dentist 2023
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5" />
                  Specializing in Anxiety-Free Dentistry
                </li>
              </ul>
              <Link href="/about">
                <Button variant="outline">Read Full Bio</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-24 bg-primary relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <h2 className="text-3xl md:text-5xl font-heading font-bold">Ready to transform your smile?</h2>
              <p className="text-lg text-gray-300">
                Schedule your consultation today. We offer flexible financing options and work with most major insurance providers to make your care affordable.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-secondary">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Call Us Today</p>
                    <a href="tel:+17135550198" className="text-xl font-serif text-secondary">(713) 555-0198</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-secondary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Visit Our Office</p>
                    <p className="text-gray-300">4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
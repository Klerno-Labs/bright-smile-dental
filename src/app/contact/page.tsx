import ContactForm from "@/components/sections/ContactForm";
import { MapPin, Phone, Clock, AlertTriangle } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Split Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to schedule your visit? Have questions about insurance or treatments? We're here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <MapPin className="text-secondary" />
                <div>
                  <p className="font-bold">Visit Us</p>
                  <p className="text-sm text-blue-100">4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Phone className="text-secondary" />
                <div>
                  <p className="font-bold">Call Us</p>
                  <a href="tel:+17135550199" className="text-xl font-bold hover:text-secondary transition-colors">(713) 555-0199</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Clock className="text-secondary" />
                <div>
                  <p className="font-bold">Hours</p>
                  <p className="text-sm text-blue-100">Mon-Fri: 8am-6pm | Sat: 9am-2pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-auto grayscale hover:grayscale-0 transition-all duration-500">
            {/* Embedded Map placeholder using iframe for Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.435698576892!2d-95.4635!3d29.7379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ0JzE2LjQiTiA5NcKwMjcnNDguNiJX!5e0!3m2!1sen!2sus!4v1633000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              title="Map Location"
            />
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-section bg-neutral-bg -mt-10 relative z-10 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-neutral-text-main mb-4 flex items-center gap-2">
                <AlertTriangle className="text-accent" size={20} /> Dental Emergency?
              </h3>
              <p className="text-sm text-neutral-text-body mb-4">
                If you are in severe pain or have broken a tooth, please call our emergency line directly.
              </p>
              <a href="tel:+17135550199" className="block text-center w-full py-3 bg-accent text-white font-bold rounded-lg hover:bg-red-600 transition-colors">
                Call Emergency Line
              </a>
            </div>

            <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
              <h3 className="font-bold text-primary mb-2">Virtual Consultation</h3>
              <p className="text-sm text-neutral-text-body mb-4">
                Not ready to come in? Send us photos of your smile for a preliminary assessment.
              </p>
              <button className="text-primary text-sm font-bold underline">Start Virtual Consult</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
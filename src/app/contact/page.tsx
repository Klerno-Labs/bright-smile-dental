import { HeroInternal } from "@/components/sections/HeroInternal";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Metadata } from "next";
import siteConfig from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Bright Smile Dental. Book your appointment today.",
};

export default function ContactPage() {
  return (
    <>
      <HeroInternal 
        title="Contact Us" 
        subtitle="We are here to help. Reach out to schedule an appointment or ask a question."
        imageKey="gallery-1"
      />

      <section className="py-24 bg-surface">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Location</h3>
                    <p className="text-text-main">
                      1234 Medical Parkway, Suite 100<br />
                      Austin, TX 78701
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Phone</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-text-main hover:text-secondary transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-text-main hover:text-secondary transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Hours</h3>
                    <p className="text-text-main text-sm leading-relaxed">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-muted font-medium">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.1!2d-97.7!3d30.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDEyJzAwLjAiTiA5N8KwNDInMDAuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                 </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <ContactForm submitText="Send Message" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
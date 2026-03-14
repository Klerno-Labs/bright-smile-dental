import { HeroInternal } from "@/components/sections/HeroInternal";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Bright Smile Dental. Schedule your appointment or ask us a question.",
};

export default function ContactPage() {
  return (
    <>
      <HeroInternal 
        title="Contact Us" 
        subtitle="We are here to help you smile"
        imageKey="gallery-1" 
      />

      <section className="py-24 bg-gray-50" id="new-patients">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#0E3A53] mb-8">Visit Our Clinic</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#E0F2F2] flex items-center justify-center text-[#4CA1A3] shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0E3A53] mb-1">Address</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                      {siteConfig.contact.address}<br />
                      {siteConfig.contact.city}, {siteConfig.contact.state} {siteConfig.contact.zip}
                    </p>
                    <a 
                      href={siteConfig.contact.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#4CA1A3] text-sm font-semibold hover:underline mt-1 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#E0F2F2] flex items-center justify-center text-[#4CA1A3] shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0E3A53] mb-1">Phone</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-[#4B5563] text-lg font-semibold hover:text-[#4CA1A3]">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#E0F2F2] flex items-center justify-center text-[#4CA1A3] shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0E3A53] mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-[#4B5563] hover:text-[#4CA1A3]">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#E0F2F2] flex items-center justify-center text-[#4CA1A3] shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0E3A53] mb-1">Hours</h3>
                    <ul className="text-[#4B5563] space-y-1">
                      <li>{siteConfig.hours.weekdays}</li>
                      <li>{siteConfig.hours.saturday}</li>
                      <li>{siteConfig.hours.sunday}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative">
                 <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?q=4521%20Westheimer%20Rd%2C%20Suite%20200%2C%20Houston%2C%20TX%2077027&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  title="Google Map"
                 ></iframe>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg h-fit">
              <h3 className="text-2xl font-bold text-[#0E3A53] mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
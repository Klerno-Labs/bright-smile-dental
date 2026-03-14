import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Bright Smile Dental. Book an appointment, find our location in Houston, or call for emergency care.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bgBody">
      {/* Hero Map Split */}
      <section className="grid lg:grid-cols-12">
        <div className="lg:col-span-7 h-[400px] lg:h-[600px] relative bg-gray-200">
          {/* Placeholder Map Implementation using Image for Static Export */}
          {/* In a real app with API keys, use Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.6674955899685!2d-95.4369764!3d29.7499068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c36671947b3b%3A0x6a6e8d233a285d42!2s4521%20Westheimer%20Rd%2C%20Houston%2C%20TX%2077027!5e0!3m2!1sen!2sus!4v1698445987123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bright Smile Dental Location Map"
          ></iframe>
        </div>
        
        <div className="lg:col-span-5 bg-white p-8 lg:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-textMain mb-4">Get in Touch</h1>
            <p className="text-textBody text-lg">We can't wait to see your smile.</p>
          </div>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primaryLight rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-textMain">Address</h3>
                <p className="text-textBody">{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primaryLight rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-textMain">Phone</h3>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:underline font-semibold">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primaryLight rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-textMain">Email</h3>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

             <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-textMain">Hours</h3>
                <p className="text-textBody text-sm">
                  Mon-Fri: 8am-6pm<br />
                  Sat: 9am-2pm<br />
                  Sun: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="font-bold text-accent text-sm uppercase">Dental Emergency?</h4>
              <p className="text-sm text-textBody mt-1">
                We reserve time daily for emergency patients. Call us immediately at <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-accent hover:underline">{siteConfig.contact.phone}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-bgBody">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-textMain mb-4">Request an Appointment</h2>
            <p className="text-textBody">
              Fill out the form below and our scheduling coordinator will contact you to confirm your appointment time.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
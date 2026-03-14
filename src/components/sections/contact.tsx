"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Calendar, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Start Your Journey</h2>
              <p className="text-gray-600 text-lg">Ready to transform your smile? Book your appointment today. New patients are always welcome.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-surface-alt rounded-xl flex items-center justify-center text-medical shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Visit Us</h4>
                  <p className="text-gray-600">4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-surface-alt rounded-xl flex items-center justify-center text-medical shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Hours</h4>
                  <p className="text-gray-600">Mon-Fri: 8am-6pm<br />Sat: 9am-2pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-medical focus:ring-2 focus:ring-medical/20 outline-none transition-all bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-medical focus:ring-2 focus:ring-medical/20 outline-none transition-all bg-white"
                    placeholder="(713) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-medical focus:ring-2 focus:ring-medical/20 outline-none transition-all bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-primary mb-2">Interested Service</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-medical focus:ring-2 focus:ring-medical/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="checkup">New Patient Checkup</option>
                  <option value="cosmetic">Cosmetic Consultation</option>
                  <option value="implants">Dental Implants</option>
                  <option value="ortho">Invisalign/Braces</option>
                  <option value="emergency">Emergency Visit</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Message (Optional)</label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-medical focus:ring-2 focus:ring-medical/20 outline-none transition-all bg-white"
                  placeholder="Tell us about your dental goals..."
                />
              </div>

              <Button 
                size="lg" 
                className="w-full" 
                type="submit" 
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending Request..." : "Request Appointment"}
              </Button>

              {status === "success" && (
                <div className="flex items-center text-green-600 bg-green-50 p-4 rounded-lg animate-fade-up">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  <span className="font-medium">Request sent! We'll contact you shortly to confirm.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
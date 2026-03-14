"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import { useState } from "react";
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  _gotcha: string; // Honeypot
}

interface ContactFormProps {
  context?: string;
}

export function ContactForm({ context }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "General Inquiry",
    message: "",
    _gotcha: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (e.g., (555) 123-4567)";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData._gotcha) return; // Silent rejection for bots

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, context }),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", service: "General Inquiry", message: "", _gotcha: "" });
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setSubmitError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-green-50 rounded-xl text-center border border-green-100 animate-fade-up">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-600">Thank you for contacting Bright Smile Dental. We will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          label="Email Address"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Phone Number"
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />
        <div className="w-full">
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base ring-offset-white focus-visible:outline-none focus-visible:border-medical focus-visible:ring-2 focus-visible:ring-medical/20 transition-colors"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
            <option value="Implants">Implants</option>
            <option value="Orthodontics">Orthodontics</option>
            <option value="Emergency">Emergency Care</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          How can we help you?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={cn(
            "flex w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base ring-offset-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:border-medical focus-visible:ring-2 focus-visible:ring-medical/20 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            errors.message && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
          )}
          required
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Honeypot for spam bots */}
      <input
        type="text"
        name="_gotcha"
        value={formData._gotcha}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {submitError && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md">
          <AlertCircle className="w-5 h-5" />
          <span className="text-sm">{submitError}</span>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  _gotcha: string; // Honeypot
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "general",
    message: "",
    _gotcha: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in all required fields.");
      return;
    }

    // Honeypot check
    if (formData._gotcha) {
      setStatus("success"); // Fake success for bots
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "general", message: "", _gotcha: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center animate-fade-up">
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-teal-600" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-teal-800 mb-2">Request Received!</h3>
        <p className="text-teal-700">Thank you for reaching out. Our team will contact you within 24 hours to confirm your appointment.</p>
        <Button 
          variant="outline" 
          className="mt-6 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow"
            placeholder="Dr. John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow"
            placeholder="(713) 555-0123"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow"
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Interested Service</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow bg-white"
        >
          <option value="general">General Checkup</option>
          <option value="cosmetic">Cosmetic Dentistry</option>
          <option value="whitening">Teeth Whitening</option>
          <option value="implants">Dental Implants</option>
          <option value="ortho">Orthodontics</option>
          <option value="emergency">Emergency Care</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow resize-none"
          placeholder="How can we help you smile?"
        />
      </div>

      {/* Honeypot for bots */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" onChange={handleChange} value={formData._gotcha} />

      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md flex items-center gap-2 text-sm">
          <AlertCircle size={16} /> {error}
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={status === "loading"}>
        {status === "loading" ? "Sending..." : "Book Appointment"}
      </Button>
      
      <p className="text-xs text-center text-gray-500 mt-4">
        By submitting this form you agree to our Terms & Privacy Policy.
      </p>
    </form>
  );
}
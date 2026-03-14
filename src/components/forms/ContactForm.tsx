"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  _gotcha: string; // Honeypot
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "general",
    message: "",
    _gotcha: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData._gotcha) return;

    setStatus("loading");
    setErrorMsg("");

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
        const data = await res.json();
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error: any) {
      setStatus("error");
      setErrorMsg(error.message || "Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-[#0E3A53]">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4CA1A3] focus:ring-2 focus:ring-[#4CA1A3]/20 outline-none transition-all bg-white"
            placeholder="Dr. John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-[#0E3A53]">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4CA1A3] focus:ring-2 focus:ring-[#4CA1A3]/20 outline-none transition-all bg-white"
            placeholder="(713) 555-0198"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-[#0E3A53]">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4CA1A3] focus:ring-2 focus:ring-[#4CA1A3]/20 outline-none transition-all bg-white"
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="block text-sm font-medium text-[#0E3A53]">
          Interested Service
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4CA1A3] focus:ring-2 focus:ring-[#4CA1A3]/20 outline-none transition-all bg-white"
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
        <label htmlFor="message" className="block text-sm font-medium text-[#0E3A53]">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4CA1A3] focus:ring-2 focus:ring-[#4CA1A3]/20 outline-none transition-all bg-white resize-none"
          placeholder="Tell us about your dental concerns or desired appointment time..."
        />
      </div>

      {/* Honeypot for bots */}
      <input
        type="text"
        name="_gotcha"
        value={formData._gotcha}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
        {status === "success" && <CheckCircle2 className="mr-2 h-5 w-5" />}
        {status === "success" ? "Message Sent!" : status === "loading" ? "Sending..." : "Send Message"}
      </Button>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMsg}
        </div>
      )}
    </form>
  );
}
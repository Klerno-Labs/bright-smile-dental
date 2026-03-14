"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2, AlertCircle } from "lucide-react";

// Schema
const formSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more").max(500),
  _gotcha: z.string().optional(), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSuccess(false);
    setServerError(null);

    // Honeypot check
    if (data._gotcha) {
      console.log("Bot detected via honeypot");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        reset();
      } else {
        setServerError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setServerError("Network error. Please check your connection.");
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <Check size={32} />
        </div>
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
          Request Received!
        </h3>
        <p className="text-gray-600">
          Thank you for reaching out. Our team will contact you within 24 hours to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
          <input
            id="name"
            {...register("name")}
            className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.name ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-primary"}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
          <input
            id="phone"
            {...register("phone")}
            className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.phone ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-primary"}`}
            placeholder="(713) 555-0199"
          />
          {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.email ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-primary"}`}
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-semibold text-gray-700">Service Interested In (Optional)</label>
        <select
          id="service"
          {...register("service")}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-white"
        >
          <option value="">Select a service...</option>
          <option value="checkup">General Checkup</option>
          <option value="cosmetic">Cosmetic / Whitening</option>
          <option value="ortho">Orthodontics</option>
          <option value="emergency">Emergency Care</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-gray-700">How can we help?</label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.message ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-primary"}`}
          placeholder="Briefly describe your needs or preferred appointment time..."
        />
        {errors.message && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.message.message}</p>}
      </div>

      {serverError && (
        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-1 shadow-blue"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" /> Sending...
          </>
        ) : (
          "Request Appointment"
        )}
      </button>

      {/* Honeypot for bots */}
      <input type="text" {...register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
}
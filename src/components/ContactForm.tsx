"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _gotcha: z.string().optional(), // Honeypot field
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    
    // Honeypot check
    if (data._gotcha) {
      return; // Silently reject bots
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitSuccess(true);
        reset();
      } else {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Something went wrong");
      }
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Network error. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-green-50 rounded-xl border border-green-100 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600 mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600">
          Thank you for contacting us. We&apos;ll be in touch within 24 hours.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-6 text-primary font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-700 block"
          >
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={cn(
              "w-full h-14 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all",
              errors.name && "border-red-500 focus:ring-red-500"
            )}
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-gray-700 block"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={cn(
              "w-full h-14 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all",
              errors.phone && "border-red-500 focus:ring-red-500"
            )}
            placeholder="(713) 555-0199"
            aria-invalid={!!errors.phone}
            aria-describedby="phone-error"
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 block"
        >
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={cn(
            "w-full h-14 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all",
            errors.email && "border-red-500 focus:ring-red-500"
          )}
          placeholder="jane@example.com"
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.email.message}
          </p>
        )}
      </div>

      {/* Service Dropdown */}
      <div className="space-y-2">
        <label
          htmlFor="service"
          className="text-sm font-medium text-gray-700 block"
        >
          Service Interest
        </label>
        <select
          id="service"
          {...register("service")}
          className="w-full h-14 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
        >
          <option value="">Select a service...</option>
          <option value="general">General Checkup</option>
          <option value="cosmetic">Cosmetic Dentistry</option>
          <option value="ortho">Orthodontics</option>
          <option value="emergency">Emergency Care</option>
        </select>
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-gray-700 block"
        >
          How can we help? *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={cn(
            "w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all",
            errors.message && "border-red-500 focus:ring-red-500"
          )}
          placeholder="Tell us about your dental needs..."
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot Field */}
      <input
        type="text"
        {...register("_gotcha")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* General Error Message */}
      {submitError && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md text-sm flex items-start gap-2">
          <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className={cn(
          "w-full h-14 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-2",
          (!isValid || isSubmitting) && "opacity-50 cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Request Appointment"
        )}
      </button>
      
      <p className="text-xs text-center text-gray-500 mt-4">
        By submitting this form, you agree to our Privacy Policy.
      </p>
    </form>
  );
}
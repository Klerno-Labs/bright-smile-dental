"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _gotcha: z.string(), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _gotcha: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data._gotcha) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-card p-8 md:p-10">
      {submitStatus === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
          <h3 className="text-2xl font-bold text-textMain mb-2">Message Sent!</h3>
          <p className="text-textBody">
            Thank you for contacting Bright Smile Dental. We&apos;ll be in touch within 24 hours to confirm your appointment.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot Field */}
          <input type="text" {...register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-textMain block mb-1">
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("name")}
                className={cn(
                  "w-full h-12 px-4 rounded-lg border bg-white transition-all outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                  errors.name ? "border-accent" : "border-gray-200"
                )}
              />
              {errors.name && (
                <p className="text-xs text-accent flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-textMain block mb-1">
                Phone Number <span className="text-accent">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(713) 555-0198"
                {...register("phone")}
                className={cn(
                  "w-full h-12 px-4 rounded-lg border bg-white transition-all outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                  errors.phone ? "border-accent" : "border-gray-200"
                )}
              />
              {errors.phone && (
                <p className="text-xs text-accent flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-textMain block mb-1">
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className={cn(
                "w-full h-12 px-4 rounded-lg border bg-white transition-all outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                errors.email ? "border-accent" : "border-gray-200"
              )}
            />
            {errors.email && (
              <p className="text-xs text-accent flex items-center gap-1">
                <AlertCircle size={12} /> {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-semibold text-textMain block mb-1">
              Service Interest
            </label>
            <select
              id="service"
              {...register("service")}
              className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer"
            >
              <option value="">Select a service (optional)</option>
              <option value="General Checkup">General Checkup</option>
              <option value="Cosmetic Whitening">Cosmetic Whitening</option>
              <option value="Orthodontics">Orthodontics</option>
              <option value="Emergency">Emergency Care</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-textMain block mb-1">
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="How can we help you today?"
              {...register("message")}
              className={cn(
                "w-full px-4 py-3 rounded-lg border bg-white transition-all outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none",
                errors.message ? "border-accent" : "border-gray-200"
              )}
            ></textarea>
            {errors.message && (
              <p className="text-xs text-accent flex items-center gap-1">
                <AlertCircle size={12} /> {errors.message.message}
              </p>
            )}
          </div>

          {submitStatus === "error" && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm flex items-center gap-2">
              <AlertCircle size={16} />
              Something went wrong. Please try again.
            </div>
          )}

          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full h-14 text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Request Appointment"
            )}
          </Button>
          
          <p className="text-xs text-center text-textMuted mt-4">
            By submitting this form, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      )}
    </div>
  );
}
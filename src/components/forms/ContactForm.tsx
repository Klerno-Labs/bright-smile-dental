"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _gotcha: z.string(), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  className?: string;
  submitText?: string;
}

export function ContactForm({ className, submitText = "Send Message" }: ContactFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _gotcha: "", // Initialize honeypot as empty
    },
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data._gotcha) {
      return; // Silent fail for bots
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-green-50 rounded-xl text-center">
        <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">Thank you for reaching out. We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-6", className)}>
      <div className="hidden">
        <input type="text" {...register("_gotcha")} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-primary">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={cn(
              "w-full px-4 py-3 bg-white border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all",
              errors.name && "border-red-500 ring-1 ring-red-500"
            )}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-primary">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={cn(
              "w-full px-4 py-3 bg-white border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all",
              errors.phone && "border-red-500 ring-1 ring-red-500"
            )}
            placeholder="(512) 555-0198"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-primary">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={cn(
            "w-full px-4 py-3 bg-white border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all",
            errors.email && "border-red-500 ring-1 ring-red-500"
          )}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-primary">
          Service Interest (Optional)
        </label>
        <select
          id="service"
          {...register("service")}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
        >
          <option value="">Select a service...</option>
          <option value="general">General Checkup</option>
          <option value="cosmetic">Cosmetic Dentistry</option>
          <option value="implants">Dental Implants</option>
          <option value="orthodontics">Orthodontics</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={cn(
            "w-full px-4 py-3 bg-white border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none",
            errors.message && "border-red-500 ring-1 ring-red-500"
          )}
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message.message}
          </p>
        )}
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" /> {error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
          </>
        ) : (
          submitText
        )}
      </Button>
    </form>
  );
}
'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().optional(),
  message: z.string().min(10, "Please tell us more about your needs"),
  _gotcha: z.string().optional(), // Honeypot
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Honeypot check
    if (data._gotcha) {
      console.log("Bot detected");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl shadow-card p-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-primary mb-2">Message Sent!</h3>
        <p className="text-text-main">Thank you for reaching out. Our team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-card space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label="Phone Number"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
        />
      </div>
      
      <Input
        label="Email Address"
        type="email"
        {...register('email')}
        error={errors.email?.message}
      />

      <div className="relative">
        <label htmlFor="service" className="block text-sm font-medium text-text-heading mb-1.5">
          Service of Interest
        </label>
        <select
          id="service"
          {...register('service')}
          className="flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-transparent"
        >
          <option value="">Select a service...</option>
          <option value="general">General Checkup</option>
          <option value="cosmetic">Cosmetic Dentistry</option>
          <option value="implants">Dental Implants</option>
          <option value="ortho">Orthodontics</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-heading mb-1.5">
          How can we help?
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-transparent"
          placeholder="Briefly describe your needs..."
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <input 
        type="text" 
        {...register('_gotcha')} 
        className="hidden" 
        tabIndex={-1} 
        autoComplete="off" 
      />

      {error && (
        <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm">
          {error}
        </div>
      )}

      <Button type="submit" isLoading={isSubmitting} className="w-full">
        Request Appointment
      </Button>
    </form>
  );
}
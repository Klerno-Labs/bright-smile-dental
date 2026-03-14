"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Clock, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { FinanceCalculator } from "./FinanceCalculator";

const categories = [
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    services: [
      {
        title: "Teeth Whitening",
        price: "From $299",
        time: "60 mins",
        desc: "Professional-grade whitening that provides immediate results, safe for enamel and long-lasting.",
      },
      {
        title: "Porcelain Veneers",
        price: "From $1,200/tooth",
        time: "2 visits",
        desc: "Thin shells of custom-made porcelain designed to cover the front surface of teeth for a perfect smile.",
      },
    ]
  },
  {
    id: "restorative",
    title: "Restorative Care",
    services: [
      {
        title: "Dental Implants",
        price: "From $3,000",
        time: "3-6 months",
        desc: "Permanent solution for missing teeth that looks, feels, and functions like natural teeth.",
      },
      {
        title: "Root Canal Therapy",
        price: "From $800",
        time: "1-2 visits",
        desc: "Pain-relieving treatment to save a natural tooth from extraction caused by deep decay.",
      },
    ]
  },
  {
    id: "general",
    title: "General & Preventative",
    services: [
      {
        title: "Comprehensive Exam",
        price: "$150 (new patient)",
        time: "45 mins",
        desc: "Full digital X-rays, oral cancer screening, and periodontal assessment.",
      },
      {
        title: "Composite Fillings",
        price: "From $200",
        time: "30 mins",
        desc: "Tooth-colored fillings that bond directly to the tooth structure for a natural look.",
      },
    ]
  },
];

export function ServicesList() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
             <h2 className="font-heading text-3xl font-bold text-primary mb-8">Our Services</h2>
             <Accordion type="single" collapsible className="w-full">
               {categories.map((cat) => (
                 <Accordion.Item key={cat.id} value={cat.id} className="border-b border-gray-100">
                   <AccordionTrigger className="text-left py-6 text-xl font-bold text-primary hover:text-secondary flex items-center justify-between group">
                     {cat.title}
                     <ChevronDown className="w-5 h-5 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180" />
                   </AccordionTrigger>
                   <AccordionContent className="pb-6 pt-2">
                     <div className="space-y-6">
                       {cat.services.map((service, idx) => (
                         <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                           <div className="flex-1">
                             <div className="flex items-center gap-3 mb-2">
                               <h4 className="font-semibold text-primary text-lg">{service.title}</h4>
                               <span className="bg-secondary/10 text-secondary text-xs font-bold px-2 py-1 rounded">{service.price}</span>
                             </div>
                             <p className="text-text-main text-sm leading-relaxed">{service.desc}</p>
                           </div>
                           <div className="flex items-center gap-2 text-xs text-muted font-medium bg-gray-50 px-3 py-1.5 rounded-full whitespace-nowrap sm:self-center">
                             <Clock className="w-3 h-3" /> {service.time}
                           </div>
                         </div>
                       ))}
                     </div>
                   </AccordionContent>
                 </Accordion.Item>
               ))}
             </Accordion>
          </div>

          <div className="lg:col-span-1">
             <div className="sticky top-24">
                <FinanceCalculator />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Accordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ className, children, ...props }, ref) => (
  <Accordion.Header>
    <Accordion.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between font-medium transition-all hover:underline focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = Accordion.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Accordion.Content>,
  React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ className, children, ...props }, ref) => (
  <Accordion.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = Accordion.Content.displayName;
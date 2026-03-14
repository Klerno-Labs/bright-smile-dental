"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { images } from "@/config/images";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  imageKey: keyof typeof images;
  linkHref: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  imageKey,
  linkHref,
  className,
}: ServiceCardProps) {
  // Use bracket notation to access hyphenated keys
  const imageData = images[imageKey];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full",
        className
      )}
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={imageData.src}
          alt={imageData.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>
        <Link
          href={linkHref}
          className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors mt-auto"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-between items-center mb-8">
          <span className="text-2xl font-heading font-bold text-primary">
            Bright Smile
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-full hover:bg-surface-alt transition-colors"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col space-y-6 items-center justify-center">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-3xl font-heading font-medium text-gray-900 hover:text-medical transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            {siteConfig.contact.phone}
          </Button>
          <p className="text-center text-sm text-gray-500">
            {siteConfig.contact.hours}
          </p>
        </div>
      </div>
    </div>
  );
}